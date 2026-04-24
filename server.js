const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const multer = require("multer");
const passport = require("passport");
const Stripe = require("stripe");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { all, get, hashPassword, initializeDatabase, nowPlusDays, run } = require("./db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "public");
const uploadsDir = path.join(publicDir, "uploads");
const FRONTEND_BASE_URL = process.env.FRONTEND_BASE_URL || `http://localhost:${PORT}`;
const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

const PAYMENT_METHOD_CONFIG = {
  bank_transfer: { label: "Bank Transfer", provider: "stripe", type: "async" },
  card: { label: "Credit / Debit Card", provider: "stripe", type: "immediate" },
  cash_on_delivery: { label: "Cash on Delivery", provider: "manual", type: "offline" },
  convenience_store: { label: "Convenience Store Payment", provider: "stripe", type: "async" },
};

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const upload = multer({
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_request, file, callback) => {
    if (file.mimetype.startsWith("image/")) {
      callback(null, true);
    } else {
      callback(new Error("Only image files are allowed."));
    }
  },
  storage: multer.diskStorage({
    destination: (_request, _file, callback) => callback(null, uploadsDir),
    filename: (_request, file, callback) => {
      const extension = path.extname(file.originalname || ".jpg") || ".jpg";
      callback(null, `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${extension}`);
    },
  }),
});

const uploadVideo = multer({
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (_request, file, callback) => {
    if (file.mimetype.startsWith("video/")) {
      callback(null, true);
    } else {
      callback(new Error("Only video files are allowed."));
    }
  },
  storage: multer.diskStorage({
    destination: (_request, _file, callback) => callback(null, uploadsDir),
    filename: (_request, file, callback) => {
      const extension = path.extname(file.originalname || ".mp4") || ".mp4";
      callback(null, `hero-${Date.now()}${extension}`);
    },
  }),
});

passport.use(
  "sessionless",
  new passport.Strategy(function authenticate(_request) {
    this.fail();
  }),
);

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        callbackURL: process.env.GOOGLE_CALLBACK_URL || `${FRONTEND_BASE_URL}/auth/google/callback`,
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
      async (_accessToken, _refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value?.toLowerCase();
          if (!email) {
            done(new Error("Google account did not provide an email."));
            return;
          }

          let user = await get("SELECT * FROM users WHERE email = ?", [email]);
          if (!user) {
            const created = await run(
              `
                INSERT INTO users (name, email, role, provider, provider_user_id, avatar_url)
                VALUES (?, ?, 'customer', 'google', ?, ?)
              `,
              [profile.displayName || "Google User", email, profile.id, profile.photos?.[0]?.value || null],
            );
            user = await get("SELECT * FROM users WHERE id = ?", [created.lastID]);
          }

          done(null, user);
        } catch (error) {
          done(error);
        }
      },
    ),
  );
}

if (process.env.FACEBOOK_APP_ID && process.env.FACEBOOK_APP_SECRET) {
  passport.use(
    new FacebookStrategy(
      {
        appID: process.env.FACEBOOK_APP_ID,
        appSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL || `${FRONTEND_BASE_URL}/auth/facebook/callback`,
        profileFields: ["id", "displayName", "emails"],
      },
      async (_accessToken, _refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value?.toLowerCase() || `${profile.id}@facebook.local`;
          let user = await get("SELECT * FROM users WHERE email = ?", [email]);
          if (!user) {
            const created = await run(
              `
                INSERT INTO users (name, email, role, provider, provider_user_id)
                VALUES (?, ?, 'customer', 'facebook', ?)
              `,
              [profile.displayName || "Facebook User", email, profile.id],
            );
            user = await get("SELECT * FROM users WHERE id = ?", [created.lastID]);
          }

          done(null, user);
        } catch (error) {
          done(error);
        }
      },
    ),
  );
}

app.post("/api/payments/stripe/webhook", express.raw({ type: "application/json" }), async (request, response) => {
  if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET) {
    response.status(503).send("Stripe webhook is not configured.");
    return;
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      request.body,
      request.headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    response.status(400).send(`Webhook Error: ${error.message}`);
    return;
  }

  try {
    await handleStripeWebhookEvent(event);
    response.json({ received: true });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Webhook handling failed." });
  }
});

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(
  express.static(publicDir, {
    etag: false,
    lastModified: false,
    maxAge: 0,
    setHeaders(response) {
      response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
      response.setHeader("Pragma", "no-cache");
      response.setHeader("Expires", "0");
    },
  }),
);

function createToken() {
  return crypto.randomBytes(32).toString("hex");
}

function verifyPassword(password, storedHash) {
  if (!storedHash || !storedHash.includes(":")) {
    return false;
  }
  const [salt, digest] = storedHash.split(":");
  const compareDigest = crypto.scryptSync(password, salt, 64).toString("hex");
  return crypto.timingSafeEqual(Buffer.from(compareDigest, "hex"), Buffer.from(digest, "hex"));
}

function sanitizeUser(user) {
  return {
    avatarUrl: user.avatar_url,
    createdAt: user.created_at,
    email: user.email,
    id: user.id,
    name: user.name,
    provider: user.provider,
    role: user.role,
  };
}

function formatCurrencyValue(value) {
  return Number(value || 0);
}

async function createSession(userId) {
  const token = createToken();
  const expiresAt = nowPlusDays(30);
  await run("INSERT INTO sessions (user_id, token, expires_at) VALUES (?, ?, ?)", [
    userId,
    token,
    expiresAt,
  ]);
  return token;
}

async function authContext(request, _response, next) {
  try {
    const header = request.headers.authorization || "";
    if (!header.startsWith("Bearer ")) {
      request.auth = null;
      next();
      return;
    }

    const token = header.slice("Bearer ".length).trim();
    const session = await get(
      `
        SELECT sessions.token, sessions.expires_at, users.*
        FROM sessions
        JOIN users ON users.id = sessions.user_id
        WHERE sessions.token = ?
      `,
      [token],
    );

    if (!session || new Date(session.expires_at).getTime() < Date.now()) {
      request.auth = null;
      next();
      return;
    }

    request.auth = {
      token,
      user: sanitizeUser(session),
    };
    next();
  } catch (error) {
    next(error);
  }
}

function requireAuth(request, response, next) {
  if (!request.auth) {
    response.status(401).json({ error: "Please log in first." });
    return;
  }
  next();
}

function requireAdmin(request, response, next) {
  if (!request.auth || request.auth.user.role !== "admin") {
    response.status(403).json({ error: "Admin access required." });
    return;
  }
  next();
}

function parseJsonArray(value) {
  try {
    return JSON.parse(value || "[]");
  } catch {
    return [];
  }
}

function normalizeProduct(row) {
  return {
    brand: row.brand,
    category: row.category_name,
    categoryId: row.category_id,
    categorySlug: row.category_slug,
    colors: parseJsonArray(row.colors_json),
    createdAt: row.created_at,
    description: row.description,
    discountPrice: row.discount_price,
    featured: Boolean(row.featured),
    id: row.id,
    isPublished: Boolean(row.is_published),
    name: row.name,
    nameMn: row.name_mn || "",
    price: row.price,
    sizes: parseJsonArray(row.sizes_json),
    slug: row.slug,
    stockQuantity: row.stock_quantity,
    updatedAt: row.updated_at,
  };
}

async function attachImages(products) {
  if (!products.length) {
    return products.map((product) => ({ ...product, images: [] }));
  }

  const placeholders = products.map(() => "?").join(", ");
  const ids = products.map((product) => product.id);
  const rows = await all(
    `
      SELECT product_id, image_url, alt_text, sort_order
      FROM product_images
      WHERE product_id IN (${placeholders})
      ORDER BY sort_order ASC, id ASC
    `,
    ids,
  );

  const grouped = new Map();
  for (const row of rows) {
    if (!grouped.has(row.product_id)) {
      grouped.set(row.product_id, []);
    }
    grouped.get(row.product_id).push({
      altText: row.alt_text,
      imageUrl: row.image_url,
      sortOrder: row.sort_order,
    });
  }

  return products.map((product) => ({
    ...product,
    images: grouped.get(product.id) || [],
  }));
}

async function fetchProducts({
  admin = false,
  category,
  featured,
  limit,
  published,
  search,
  sort = "latest",
} = {}) {
  const conditions = [];
  const params = [];

  if (category) {
    conditions.push("categories.slug = ?");
    params.push(category);
  }
  if (!admin && published !== false) {
    conditions.push("products.is_published = 1");
  }
  if (typeof featured === "boolean") {
    conditions.push("products.featured = ?");
    params.push(featured ? 1 : 0);
  }
  if (search) {
    conditions.push("(LOWER(products.name) LIKE ? OR LOWER(products.brand) LIKE ? OR LOWER(products.description) LIKE ?)");
    const value = `%${search.toLowerCase()}%`;
    params.push(value, value, value);
  }

  const sortSql =
    sort === "price-asc"
      ? "products.price ASC"
      : sort === "price-desc"
        ? "products.price DESC"
        : sort === "name"
          ? "products.name ASC"
          : "products.created_at DESC";

  const limitSql = Number.isFinite(Number(limit)) && Number(limit) > 0 ? ` LIMIT ${Number(limit)}` : "";

  const rows = await all(
    `
      SELECT
        products.*,
        categories.name AS category_name,
        categories.slug AS category_slug
      FROM products
      JOIN categories ON categories.id = products.category_id
      ${conditions.length ? `WHERE ${conditions.join(" AND ")}` : ""}
      ORDER BY ${sortSql}
      ${limitSql}
    `,
    params,
  );

  return attachImages(rows.map(normalizeProduct));
}

async function fetchProductByIdOrSlug(identifier, admin = false) {
  const isNumeric = /^\d+$/.test(String(identifier));
  const row = await get(
    `
      SELECT
        products.*,
        categories.name AS category_name,
        categories.slug AS category_slug
      FROM products
      JOIN categories ON categories.id = products.category_id
      WHERE ${isNumeric ? "products.id = ?" : "products.slug = ?"}
      ${admin ? "" : "AND products.is_published = 1"}
    `,
    [identifier],
  );

  if (!row) {
    return null;
  }

  const [product] = await attachImages([normalizeProduct(row)]);
  return product;
}

async function getCart(userId) {
  const items = await all(
    `
      SELECT cart_items.id, cart_items.quantity, products.id AS product_id
      FROM cart_items
      JOIN products ON products.id = cart_items.product_id
      WHERE cart_items.user_id = ?
      ORDER BY cart_items.id DESC
    `,
    [userId],
  );

  const products = [];
  for (const item of items) {
    const product = await fetchProductByIdOrSlug(item.product_id, true);
    if (product && product.isPublished) {
      products.push({
        id: item.id,
        product,
        quantity: item.quantity,
      });
    }
  }

  return products;
}

function stripeEnabled() {
  return Boolean(stripe && process.env.STRIPE_SECRET_KEY);
}

function calculateCartTotals(cartItems) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountTotal = cartItems.reduce((sum, item) => {
    const effective = item.discount_price || item.price;
    return sum + Math.max(item.price - effective, 0) * item.quantity;
  }, 0);
  const shippingTotal = subtotal > 10000 ? 0 : 550;
  const grandTotal = subtotal - discountTotal + shippingTotal;
  return { discountTotal, grandTotal, shippingTotal, subtotal };
}

async function getCheckoutCartItems(userId) {
  return all(
    `
      SELECT cart_items.id AS cart_item_id, cart_items.quantity, products.*
      FROM cart_items
      JOIN products ON products.id = cart_items.product_id
      WHERE cart_items.user_id = ?
    `,
    [userId],
  );
}

async function validateCheckoutCart(cartItems) {
  if (!cartItems.length) {
    throw new Error("Your cart is empty.");
  }

  for (const item of cartItems) {
    if (!item.is_published) {
      throw new Error(`${item.name} is not available for purchase.`);
    }
    if (item.quantity > item.stock_quantity) {
      throw new Error(`${item.name} is out of stock or insufficient.`);
    }
  }
}

async function resolveAddressIdForOrder(userId, addressId, shippingAddress) {
  let resolvedAddressId = addressId || null;

  if (resolvedAddressId) {
    const address = await get("SELECT id FROM addresses WHERE id = ? AND user_id = ?", [resolvedAddressId, userId]);
    if (!address) {
      throw new Error("Selected shipping address was not found.");
    }
  }

  if (!resolvedAddressId && shippingAddress) {
    const insertedAddress = await run(
      `
        INSERT INTO addresses (
          user_id, full_name, postal_code, prefecture, city, address_line1,
          address_line2, phone, is_default
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0)
      `,
      [
        userId,
        shippingAddress.fullName,
        shippingAddress.postalCode,
        shippingAddress.prefecture,
        shippingAddress.city,
        shippingAddress.addressLine1,
        shippingAddress.addressLine2 || "",
        shippingAddress.phone,
      ],
    );
    resolvedAddressId = insertedAddress.lastID;
  }

  if (!resolvedAddressId) {
    throw new Error("Shipping address is required.");
  }

  return resolvedAddressId;
}

function stripePaymentMethodTypes(paymentMethod) {
  if (paymentMethod === "convenience_store") {
    return ["konbini"];
  }
  if (paymentMethod === "bank_transfer") {
    return ["customer_balance"];
  }
  return ["card"];
}

function mapStripePaymentStatus(session) {
  if (session.payment_status === "paid") {
    return "paid";
  }
  if (session.status === "expired") {
    return "failed";
  }
  return "pending";
}

async function createPendingOrder({
  addressId,
  cartItems,
  paymentMethod,
  paymentProvider,
  paymentStatus,
  status,
  stripeCheckoutSessionId = null,
  userId,
}) {
  const totals = calculateCartTotals(cartItems);
  const orderNumber = `CAN-${Date.now().toString().slice(-8)}${Math.floor(Math.random() * 90 + 10)}`;
  const inserted = await run(
    `
      INSERT INTO orders (
        user_id, address_id, order_number, subtotal, discount_total, shipping_total, grand_total,
        status, payment_status, payment_method, payment_provider, stripe_checkout_session_id, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `,
    [
      userId,
      addressId,
      orderNumber,
      totals.subtotal,
      totals.discountTotal,
      totals.shippingTotal,
      totals.grandTotal,
      status,
      paymentStatus,
      paymentMethod,
      paymentProvider,
      stripeCheckoutSessionId,
    ],
  );

  for (const item of cartItems) {
    await run(
      `
        INSERT INTO order_items (order_id, product_id, product_name, brand, unit_price, quantity)
        VALUES (?, ?, ?, ?, ?, ?)
      `,
      [inserted.lastID, item.id, item.name, item.brand, item.discount_price || item.price, item.quantity],
    );
  }

  return get("SELECT * FROM orders WHERE id = ?", [inserted.lastID]);
}

async function markOrderFailed(orderId, paymentStatus = "failed", status = "payment_failed") {
  await run(
    `
      UPDATE orders
      SET payment_status = ?, status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `,
    [paymentStatus, status, orderId],
  );
}

async function fulfillOrder(orderId, updates = {}) {
  const order = await get("SELECT * FROM orders WHERE id = ?", [orderId]);
  if (!order) {
    throw new Error("Order not found.");
  }

  if (!order.stock_reduced_at) {
    const items = await all("SELECT product_id, quantity FROM order_items WHERE order_id = ?", [orderId]);
    for (const item of items) {
      const product = await get("SELECT id, name, stock_quantity FROM products WHERE id = ?", [item.product_id]);
      if (!product || product.stock_quantity < item.quantity) {
        throw new Error(`Unable to fulfill order ${order.order_number}: insufficient stock.`);
      }
    }

    for (const item of items) {
      await run(
        "UPDATE products SET stock_quantity = stock_quantity - ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
        [item.quantity, item.product_id],
      );
    }

    await run("UPDATE orders SET stock_reduced_at = CURRENT_TIMESTAMP WHERE id = ?", [orderId]);
  }

  await run(
    `
      UPDATE orders
      SET payment_status = ?, status = ?, payment_intent_id = COALESCE(?, payment_intent_id),
          stripe_checkout_session_id = COALESCE(?, stripe_checkout_session_id),
          payment_provider = COALESCE(?, payment_provider),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `,
    [
      updates.paymentStatus || "paid",
      updates.status || "confirmed",
      updates.paymentIntentId || null,
      updates.stripeCheckoutSessionId || null,
      updates.paymentProvider || null,
      orderId,
    ],
  );

  await run("DELETE FROM cart_items WHERE user_id = ?", [order.user_id]);
  return get("SELECT * FROM orders WHERE id = ?", [orderId]);
}

async function createStripeCheckoutSession({ order, user, cartItems }) {
  const paymentMethod = order.payment_method;
  const sessionConfig = {
    cancel_url: `${FRONTEND_BASE_URL}/#/checkout?payment=cancelled`,
    customer_email: user.email,
    line_items: cartItems.map((item) => ({
      price_data: {
        currency: "jpy",
        product_data: {
          name: item.name,
          metadata: {
            brand: item.brand,
            productId: String(item.id),
          },
        },
        unit_amount: item.discount_price || item.price,
      },
      quantity: item.quantity,
    })),
    metadata: {
      orderId: String(order.id),
      paymentMethod,
      userId: String(user.id),
    },
    mode: "payment",
    payment_method_types: stripePaymentMethodTypes(paymentMethod),
    success_url: `${FRONTEND_BASE_URL}/#/order-confirmation?orderNumber=${encodeURIComponent(order.order_number)}&session_id={CHECKOUT_SESSION_ID}`,
  };

  if (order.shipping_total > 0) {
    sessionConfig.line_items.push({
      price_data: {
        currency: "jpy",
        product_data: { name: "Shipping" },
        unit_amount: order.shipping_total,
      },
      quantity: 1,
    });
  }

  if (paymentMethod === "bank_transfer") {
    sessionConfig.customer_creation = "always";
    sessionConfig.payment_method_options = {
      customer_balance: {
        bank_transfer: { type: "jp_bank_transfer" },
        funding_type: "bank_transfer",
      },
    };
  }

  return stripe.checkout.sessions.create(sessionConfig);
}

async function syncStripeSessionToOrder(session, explicitOrderId = null) {
  const orderId = explicitOrderId || Number(session.metadata?.orderId || 0);
  if (!orderId) {
    return null;
  }

  const order = await get("SELECT * FROM orders WHERE id = ?", [orderId]);
  if (!order) {
    return null;
  }

  await run(
    `
      UPDATE orders
      SET stripe_checkout_session_id = COALESCE(?, stripe_checkout_session_id),
          payment_intent_id = COALESCE(?, payment_intent_id),
          payment_provider = 'stripe',
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `,
    [session.id, session.payment_intent || null, orderId],
  );

  const normalizedPaymentStatus = mapStripePaymentStatus(session);
  if (normalizedPaymentStatus === "paid") {
    return fulfillOrder(orderId, {
      paymentIntentId: session.payment_intent || null,
      paymentProvider: "stripe",
      paymentStatus: "paid",
      status: "confirmed",
      stripeCheckoutSessionId: session.id,
    });
  }

  if (normalizedPaymentStatus === "failed") {
    await markOrderFailed(orderId, "failed", "payment_failed");
    return get("SELECT * FROM orders WHERE id = ?", [orderId]);
  }

  await run(
    `
      UPDATE orders
      SET payment_status = 'pending', status = 'awaiting_payment', updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `,
    [orderId],
  );
  return get("SELECT * FROM orders WHERE id = ?", [orderId]);
}

async function handleStripeWebhookEvent(event) {
  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded" ||
    event.type === "checkout.session.async_payment_failed" ||
    event.type === "checkout.session.expired"
  ) {
    const session = event.data.object;
    if (event.type === "checkout.session.async_payment_failed" || event.type === "checkout.session.expired") {
      const orderId = Number(session.metadata?.orderId || 0);
      if (orderId) {
        await markOrderFailed(orderId, "failed", event.type === "checkout.session.expired" ? "payment_expired" : "payment_failed");
      }
      return;
    }
    await syncStripeSessionToOrder(session);
  }
}

app.use(authContext);

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.get("/api/config/oauth", (_request, response) => {
  response.json({
    facebookAuthUrl: "/auth/facebook",
    facebookEnabled: Boolean(process.env.FACEBOOK_APP_ID && process.env.FACEBOOK_APP_SECRET),
    googleAuthUrl: "/auth/google",
    googleEnabled: Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET),
  });
});

app.get("/api/config/payments", (_request, response) => {
  response.json({
    methods: {
      bank_transfer: { ...PAYMENT_METHOD_CONFIG.bank_transfer, enabled: stripeEnabled() },
      card: { ...PAYMENT_METHOD_CONFIG.card, enabled: stripeEnabled() },
      cash_on_delivery: { ...PAYMENT_METHOD_CONFIG.cash_on_delivery, enabled: true },
      convenience_store: { ...PAYMENT_METHOD_CONFIG.convenience_store, enabled: stripeEnabled() },
    },
    stripeEnabled: stripeEnabled(),
  });
});

app.get("/api/settings", async (_request, response, next) => {
  try {
    const rows = await all("SELECT key, value FROM settings ORDER BY key ASC");
    response.json(
      rows.reduce((accumulator, row) => {
        accumulator[row.key] = row.value;
        return accumulator;
      }, {}),
    );
  } catch (error) {
    next(error);
  }
});

app.post("/api/auth/signup", async (request, response, next) => {
  const { email, name, password } = request.body || {};
  if (!email || !name || !password || password.length < 8) {
    response.status(400).json({ error: "Name, email, and an 8+ character password are required." });
    return;
  }

  try {
    const existing = await get("SELECT id FROM users WHERE email = ?", [email.toLowerCase()]);
    if (existing) {
      response.status(409).json({ error: "That email is already in use." });
      return;
    }

    const inserted = await run(
      `
        INSERT INTO users (name, email, password_hash, role, provider)
        VALUES (?, ?, ?, 'customer', 'local')
      `,
      [name.trim(), email.toLowerCase(), hashPassword(password)],
    );

    const user = await get("SELECT * FROM users WHERE id = ?", [inserted.lastID]);
    const token = await createSession(user.id);
    response.status(201).json({ token, user: sanitizeUser(user) });
  } catch (error) {
    next(error);
  }
});

app.post("/api/auth/login", async (request, response, next) => {
  const { email, password } = request.body || {};
  if (!email || !password) {
    response.status(400).json({ error: "Email and password are required." });
    return;
  }

  try {
    const user = await get("SELECT * FROM users WHERE email = ?", [email.toLowerCase()]);
    if (!user || !verifyPassword(password, user.password_hash)) {
      response.status(401).json({ error: "Invalid email or password." });
      return;
    }

    const token = await createSession(user.id);
    response.json({ token, user: sanitizeUser(user) });
  } catch (error) {
    next(error);
  }
});

app.post("/api/auth/logout", requireAuth, async (request, response, next) => {
  try {
    await run("DELETE FROM sessions WHERE token = ?", [request.auth.token]);
    response.json({ message: "Logged out successfully." });
  } catch (error) {
    next(error);
  }
});

app.post("/api/auth/forgot-password", async (request, response, next) => {
  const { email } = request.body || {};
  if (!email) {
    response.status(400).json({ error: "Email is required." });
    return;
  }

  try {
    const user = await get("SELECT id FROM users WHERE email = ?", [email.toLowerCase()]);
    if (!user) {
      response.json({ message: "If that account exists, a reset link has been prepared." });
      return;
    }

    const token = createToken();
    const expiresAt = nowPlusDays(1);
    await run(
      "INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES (?, ?, ?)",
      [user.id, token, expiresAt],
    );

    response.json({
      message: "Password reset token created.",
      resetToken: token,
      resetUrl: `${FRONTEND_BASE_URL}/#/reset-password?token=${token}`,
    });
  } catch (error) {
    next(error);
  }
});

app.post("/api/auth/reset-password", async (request, response, next) => {
  const { password, token } = request.body || {};
  if (!token || !password || password.length < 8) {
    response.status(400).json({ error: "Reset token and an 8+ character password are required." });
    return;
  }

  try {
    const row = await get(
      `
        SELECT * FROM password_reset_tokens
        WHERE token = ? AND used_at IS NULL AND expires_at >= CURRENT_TIMESTAMP
      `,
      [token],
    );

    if (!row) {
      response.status(400).json({ error: "Reset token is invalid or expired." });
      return;
    }

    await run("UPDATE users SET password_hash = ? WHERE id = ?", [hashPassword(password), row.user_id]);
    await run("UPDATE password_reset_tokens SET used_at = CURRENT_TIMESTAMP WHERE id = ?", [row.id]);
    response.json({ message: "Password updated successfully." });
  } catch (error) {
    next(error);
  }
});

app.get("/api/me", requireAuth, async (request, response) => {
  response.json({ user: request.auth.user });
});

app.get("/auth/google", (request, response, next) => {
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    response.status(503).send("Google OAuth is not configured.");
    return;
  }

  passport.authenticate("google", {
    scope: ["email", "profile"],
    session: false,
    state: request.query.returnTo || "/profile",
  })(request, response, next);
});

app.get("/auth/google/callback", (request, response, next) => {
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    response.redirect("/#/login?oauth=google-unavailable");
    return;
  }

  passport.authenticate("google", { session: false }, async (error, user) => {
    if (error || !user) {
      response.redirect("/#/login?oauth=google-failed");
      return;
    }

    const token = await createSession(user.id);
    const returnTo = encodeURIComponent(String(request.query.state || "/profile"));
    response.redirect(`/#/oauth-complete?token=${token}&returnTo=${returnTo}`);
  })(request, response, next);
});

app.get("/auth/facebook", (request, response, next) => {
  if (!process.env.FACEBOOK_APP_ID || !process.env.FACEBOOK_APP_SECRET) {
    response.status(503).send("Facebook OAuth is not configured.");
    return;
  }

  passport.authenticate("facebook", {
    scope: ["email"],
    session: false,
    state: request.query.returnTo || "/profile",
  })(request, response, next);
});

app.get("/auth/facebook/callback", (request, response, next) => {
  if (!process.env.FACEBOOK_APP_ID || !process.env.FACEBOOK_APP_SECRET) {
    response.redirect("/#/login?oauth=facebook-unavailable");
    return;
  }

  passport.authenticate("facebook", { session: false }, async (error, user) => {
    if (error || !user) {
      response.redirect("/#/login?oauth=facebook-failed");
      return;
    }

    const token = await createSession(user.id);
    const returnTo = encodeURIComponent(String(request.query.state || "/profile"));
    response.redirect(`/#/oauth-complete?token=${token}&returnTo=${returnTo}`);
  })(request, response, next);
});

app.get("/api/categories", async (_request, response, next) => {
  try {
    const rows = await all(
      `
        SELECT categories.*, COUNT(products.id) AS product_count
        FROM categories
        LEFT JOIN products ON products.category_id = categories.id AND products.is_published = 1
        GROUP BY categories.id
        ORDER BY categories.sort_order ASC, categories.name ASC
      `,
    );
    response.json(rows);
  } catch (error) {
    next(error);
  }
});

app.get("/api/home", async (_request, response, next) => {
  try {
    const [featured, newest, categories] = await Promise.all([
      fetchProducts({ featured: true, limit: 10 }),
      fetchProducts({ limit: 10 }),
      all("SELECT * FROM categories ORDER BY sort_order ASC, name ASC"),
    ]);

    response.json({ categories, featured, newest });
  } catch (error) {
    next(error);
  }
});

app.get("/api/products", async (request, response, next) => {
  try {
    const products = await fetchProducts({
      category: request.query.category,
      limit: request.query.limit,
      search: request.query.search,
      sort: request.query.sort,
    });
    response.json(products);
  } catch (error) {
    next(error);
  }
});

app.get("/api/products/:identifier", async (request, response, next) => {
  try {
    const product = await fetchProductByIdOrSlug(request.params.identifier);
    if (!product) {
      response.status(404).json({ error: "Product not found." });
      return;
    }
    response.json(product);
  } catch (error) {
    next(error);
  }
});

app.get("/api/favorites", requireAuth, async (request, response, next) => {
  try {
    const rows = await all("SELECT product_id FROM favorites WHERE user_id = ?", [request.auth.user.id]);
    const favorites = [];
    for (const row of rows) {
      const product = await fetchProductByIdOrSlug(row.product_id);
      if (product) {
        favorites.push(product);
      }
    }
    response.json(favorites);
  } catch (error) {
    next(error);
  }
});

app.post("/api/favorites", requireAuth, async (request, response, next) => {
  const { productId } = request.body || {};
  if (!productId) {
    response.status(400).json({ error: "Product ID is required." });
    return;
  }

  try {
    await run("INSERT OR IGNORE INTO favorites (user_id, product_id) VALUES (?, ?)", [
      request.auth.user.id,
      productId,
    ]);
    response.status(201).json({ message: "Added to favorites." });
  } catch (error) {
    next(error);
  }
});

app.delete("/api/favorites/:productId", requireAuth, async (request, response, next) => {
  try {
    await run("DELETE FROM favorites WHERE user_id = ? AND product_id = ?", [
      request.auth.user.id,
      request.params.productId,
    ]);
    response.json({ message: "Removed from favorites." });
  } catch (error) {
    next(error);
  }
});

app.get("/api/cart", requireAuth, async (request, response, next) => {
  try {
    response.json(await getCart(request.auth.user.id));
  } catch (error) {
    next(error);
  }
});

app.post("/api/cart/items", requireAuth, async (request, response, next) => {
  const { productId, quantity = 1 } = request.body || {};
  if (!productId || !Number.isInteger(quantity) || quantity <= 0) {
    response.status(400).json({ error: "Product ID and positive quantity are required." });
    return;
  }

  try {
    const product = await fetchProductByIdOrSlug(productId, true);
    if (!product || !product.isPublished) {
      response.status(404).json({ error: "Product not found." });
      return;
    }

    const existing = await get(
      "SELECT id, quantity FROM cart_items WHERE user_id = ? AND product_id = ?",
      [request.auth.user.id, productId],
    );

    if (existing) {
      await run("UPDATE cart_items SET quantity = ? WHERE id = ?", [existing.quantity + quantity, existing.id]);
    } else {
      await run("INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)", [
        request.auth.user.id,
        productId,
        quantity,
      ]);
    }

    response.status(201).json(await getCart(request.auth.user.id));
  } catch (error) {
    next(error);
  }
});

app.patch("/api/cart/items/:itemId", requireAuth, async (request, response, next) => {
  const { quantity } = request.body || {};
  if (!Number.isInteger(quantity) || quantity < 0) {
    response.status(400).json({ error: "Quantity must be 0 or greater." });
    return;
  }

  try {
    if (quantity === 0) {
      await run("DELETE FROM cart_items WHERE id = ? AND user_id = ?", [request.params.itemId, request.auth.user.id]);
    } else {
      await run("UPDATE cart_items SET quantity = ? WHERE id = ? AND user_id = ?", [
        quantity,
        request.params.itemId,
        request.auth.user.id,
      ]);
    }
    response.json(await getCart(request.auth.user.id));
  } catch (error) {
    next(error);
  }
});

app.delete("/api/cart/items/:itemId", requireAuth, async (request, response, next) => {
  try {
    await run("DELETE FROM cart_items WHERE id = ? AND user_id = ?", [request.params.itemId, request.auth.user.id]);
    response.json(await getCart(request.auth.user.id));
  } catch (error) {
    next(error);
  }
});

app.get("/api/addresses", requireAuth, async (request, response, next) => {
  try {
    const rows = await all("SELECT * FROM addresses WHERE user_id = ? ORDER BY is_default DESC, id DESC", [
      request.auth.user.id,
    ]);
    response.json(rows);
  } catch (error) {
    next(error);
  }
});

app.post("/api/addresses", requireAuth, async (request, response, next) => {
  const { addressLine1, addressLine2 = "", city, fullName, isDefault = false, phone, postalCode, prefecture } =
    request.body || {};

  if (!fullName || !postalCode || !prefecture || !city || !addressLine1 || !phone) {
    response.status(400).json({ error: "All required address fields must be completed." });
    return;
  }

  try {
    if (isDefault) {
      await run("UPDATE addresses SET is_default = 0 WHERE user_id = ?", [request.auth.user.id]);
    }
    const inserted = await run(
      `
        INSERT INTO addresses (
          user_id, full_name, postal_code, prefecture, city, address_line1,
          address_line2, phone, is_default
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        request.auth.user.id,
        fullName,
        postalCode,
        prefecture,
        city,
        addressLine1,
        addressLine2,
        phone,
        isDefault ? 1 : 0,
      ],
    );
    const address = await get("SELECT * FROM addresses WHERE id = ?", [inserted.lastID]);
    response.status(201).json(address);
  } catch (error) {
    next(error);
  }
});

app.post("/api/checkout", requireAuth, async (request, response, next) => {
  const { addressId, paymentMethod = "card", shippingAddress } = request.body || {};
  const paymentConfig = PAYMENT_METHOD_CONFIG[paymentMethod];

  if (!paymentConfig) {
    response.status(400).json({ error: "Unsupported payment method." });
    return;
  }

  if (paymentConfig.provider === "stripe" && !stripeEnabled()) {
    response.status(503).json({ error: "Stripe is not configured yet." });
    return;
  }

  try {
    const cartItems = await getCheckoutCartItems(request.auth.user.id);
    await validateCheckoutCart(cartItems);
    const resolvedAddressId = await resolveAddressIdForOrder(request.auth.user.id, addressId, shippingAddress);

    if (paymentMethod === "cash_on_delivery") {
      const order = await createPendingOrder({
        addressId: resolvedAddressId,
        cartItems,
        paymentMethod,
        paymentProvider: "manual",
        paymentStatus: "pending",
        status: "confirmed",
        userId: request.auth.user.id,
      });
      const fulfilled = await fulfillOrder(order.id, {
        paymentProvider: "manual",
        paymentStatus: "pending",
        status: "confirmed",
      });
      response.status(201).json({
        orderId: fulfilled.id,
        orderNumber: fulfilled.order_number,
        orderStatus: fulfilled.status,
        paymentStatus: fulfilled.payment_status,
        total: fulfilled.grand_total,
      });
      return;
    }

    const order = await createPendingOrder({
      addressId: resolvedAddressId,
      cartItems,
      paymentMethod,
      paymentProvider: "stripe",
      paymentStatus: "pending",
      status: "awaiting_payment",
      userId: request.auth.user.id,
    });
    const session = await createStripeCheckoutSession({
      cartItems,
      order,
      user: request.auth.user,
    });

    await run(
      `
        UPDATE orders
        SET stripe_checkout_session_id = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `,
      [session.id, order.id],
    );

    response.status(201).json({
      checkoutUrl: session.url,
      orderId: order.id,
      orderNumber: order.order_number,
      paymentMethod,
      paymentStatus: "pending",
    });
  } catch (error) {
    if (error.message) {
      response.status(400).json({ error: error.message });
      return;
    }
    next(error);
  }
});

app.post("/api/checkout/confirm-session", requireAuth, async (request, response, next) => {
  const { sessionId } = request.body || {};
  if (!sessionId) {
    response.status(400).json({ error: "Stripe session ID is required." });
    return;
  }

  if (!stripeEnabled()) {
    response.status(503).json({ error: "Stripe is not configured yet." });
    return;
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const order = await get(
      "SELECT * FROM orders WHERE stripe_checkout_session_id = ? AND user_id = ?",
      [sessionId, request.auth.user.id],
    );
    if (!order) {
      response.status(404).json({ error: "Order for this checkout session was not found." });
      return;
    }

    const syncedOrder = await syncStripeSessionToOrder(session, order.id);
    response.json({
      order: syncedOrder,
      paymentStatus: syncedOrder.payment_status,
      status: syncedOrder.status,
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/orders/my", requireAuth, async (request, response, next) => {
  try {
    const rows = await all(
      `
        SELECT *
        FROM orders
        WHERE user_id = ?
        ORDER BY created_at DESC, id DESC
      `,
      [request.auth.user.id],
    );
    response.json(rows);
  } catch (error) {
    next(error);
  }
});

app.get("/api/profile", requireAuth, async (request, response, next) => {
  try {
    const addresses = await all("SELECT * FROM addresses WHERE user_id = ? ORDER BY is_default DESC, id DESC", [
      request.auth.user.id,
    ]);
    const favorites = await all("SELECT COUNT(*) AS count FROM favorites WHERE user_id = ?", [request.auth.user.id]);
    response.json({
      addresses,
      favoritesCount: favorites[0]?.count || 0,
      user: request.auth.user,
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/admin/dashboard", requireAdmin, async (_request, response, next) => {
  try {
    const [products, orders, customers, categories, paidRevenue, pendingPayments, lowStock, recentOrders] = await Promise.all([
      get("SELECT COUNT(*) AS count FROM products"),
      get("SELECT COUNT(*) AS count FROM orders"),
      get("SELECT COUNT(*) AS count FROM users WHERE role = 'customer'"),
      get("SELECT COUNT(*) AS count FROM categories"),
      get("SELECT COALESCE(SUM(grand_total), 0) AS total FROM orders WHERE payment_status = 'paid'"),
      get("SELECT COUNT(*) AS count FROM orders WHERE payment_status IN ('pending', 'unpaid')"),
      all(
        `
          SELECT id, name, stock_quantity, slug
          FROM products
          WHERE stock_quantity <= 5
          ORDER BY stock_quantity ASC, updated_at DESC
          LIMIT 6
        `,
      ),
      all(
        `
          SELECT orders.order_number, orders.status, orders.payment_status, orders.grand_total, orders.created_at,
                 users.name AS customer_name
          FROM orders
          JOIN users ON users.id = orders.user_id
          ORDER BY orders.created_at DESC, orders.id DESC
          LIMIT 5
        `,
      ),
    ]);
    response.json({
      categories: categories.count,
      customers: customers.count,
      lowStock,
      orders: orders.count,
      paidRevenue: paidRevenue.total,
      pendingPayments: pendingPayments.count,
      products: products.count,
      recentOrders,
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/admin/products", requireAdmin, async (_request, response, next) => {
  try {
    response.json(await fetchProducts({ admin: true }));
  } catch (error) {
    next(error);
  }
});

app.post("/api/admin/uploads", requireAdmin, upload.single("image"), async (request, response, next) => {
  try {
    if (!request.file) {
      response.status(400).json({ error: "Image file is required." });
      return;
    }
    response.status(201).json({ imageUrl: `/uploads/${request.file.filename}` });
  } catch (error) {
    next(error);
  }
});

app.post("/api/admin/hero-video", requireAdmin, uploadVideo.single("video"), async (request, response, next) => {
  try {
    if (!request.file) {
      response.status(400).json({ error: "Video file is required." });
      return;
    }
    const videoUrl = `/uploads/${request.file.filename}`;
    await run(
      `INSERT INTO settings (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)
       ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP`,
      ["heroVideoUrl", videoUrl],
    );
    response.status(201).json({ videoUrl });
  } catch (error) {
    next(error);
  }
});

app.delete("/api/admin/hero-video", requireAdmin, async (_request, response, next) => {
  try {
    await run("DELETE FROM settings WHERE key = ?", ["heroVideoUrl"]);
    response.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.post("/api/admin/products", requireAdmin, async (request, response, next) => {
  const {
    brand,
    categoryId,
    colors = [],
    description,
    discountPrice = null,
    featured = false,
    images = [],
    isPublished = true,
    name,
    nameMn = "",
    price,
    sizes = [],
    slug,
    stockQuantity = 0,
  } = request.body || {};

  if (!brand || !categoryId || !description || !name || !price || !slug) {
    response.status(400).json({ error: "Brand, category, name, slug, description, and price are required." });
    return;
  }

  try {
    const inserted = await run(
      `
        INSERT INTO products (
          category_id, brand, name, name_mn, slug, description, price, discount_price,
          colors_json, sizes_json, stock_quantity, featured, is_published
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        categoryId,
        brand,
        name,
        nameMn,
        slug,
        description,
        price,
        discountPrice,
        JSON.stringify(colors),
        JSON.stringify(sizes),
        stockQuantity,
        featured ? 1 : 0,
        isPublished ? 1 : 0,
      ],
    );

    for (const [index, image] of images.entries()) {
      await run(
        `
          INSERT INTO product_images (product_id, image_url, alt_text, sort_order)
          VALUES (?, ?, ?, ?)
        `,
        [inserted.lastID, image.imageUrl, image.altText || name, index],
      );
    }

    response.status(201).json(await fetchProductByIdOrSlug(inserted.lastID, true));
  } catch (error) {
    next(error);
  }
});

app.put("/api/admin/products/:id", requireAdmin, async (request, response, next) => {
  const {
    brand,
    categoryId,
    colors = [],
    description,
    discountPrice = null,
    featured = false,
    images = [],
    isPublished = true,
    name,
    nameMn = "",
    price,
    sizes = [],
    slug,
    stockQuantity = 0,
  } = request.body || {};

  try {
    await run(
      `
        UPDATE products
        SET category_id = ?, brand = ?, name = ?, name_mn = ?, slug = ?, description = ?, price = ?, discount_price = ?,
            colors_json = ?, sizes_json = ?, stock_quantity = ?, featured = ?, is_published = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `,
      [
        categoryId,
        brand,
        name,
        nameMn,
        slug,
        description,
        price,
        discountPrice,
        JSON.stringify(colors),
        JSON.stringify(sizes),
        stockQuantity,
        featured ? 1 : 0,
        isPublished ? 1 : 0,
        request.params.id,
      ],
    );

    await run("DELETE FROM product_images WHERE product_id = ?", [request.params.id]);
    for (const [index, image] of images.entries()) {
      await run(
        `
          INSERT INTO product_images (product_id, image_url, alt_text, sort_order)
          VALUES (?, ?, ?, ?)
        `,
        [request.params.id, image.imageUrl, image.altText || name, index],
      );
    }

    response.json(await fetchProductByIdOrSlug(request.params.id, true));
  } catch (error) {
    next(error);
  }
});

app.delete("/api/admin/products/:id", requireAdmin, async (request, response, next) => {
  try {
    await run("DELETE FROM products WHERE id = ?", [request.params.id]);
    response.json({ message: "Product deleted." });
  } catch (error) {
    next(error);
  }
});

app.post("/api/admin/products/:id/duplicate", requireAdmin, async (request, response, next) => {
  try {
    const product = await fetchProductByIdOrSlug(request.params.id, true);
    if (!product) {
      response.status(404).json({ error: "Product not found." });
      return;
    }

    const duplicatedSlug = `${product.slug}-copy-${Date.now()}`;
    const inserted = await run(
      `
        INSERT INTO products (
          category_id, brand, name, slug, description, price, discount_price,
          colors_json, sizes_json, stock_quantity, featured, is_published
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        product.categoryId,
        product.brand,
        `${product.name} Copy`,
        duplicatedSlug,
        product.description,
        product.price,
        product.discountPrice,
        JSON.stringify(product.colors || []),
        JSON.stringify(product.sizes || []),
        product.stockQuantity,
        product.featured ? 1 : 0,
        0,
      ],
    );

    for (const [index, image] of (product.images || []).entries()) {
      await run(
        `
          INSERT INTO product_images (product_id, image_url, alt_text, sort_order)
          VALUES (?, ?, ?, ?)
        `,
        [inserted.lastID, image.imageUrl, image.altText || product.name, index],
      );
    }

    response.status(201).json(await fetchProductByIdOrSlug(inserted.lastID, true));
  } catch (error) {
    next(error);
  }
});

app.patch("/api/admin/products/bulk", requireAdmin, async (request, response, next) => {
  const { action, ids = [], categoryId, price, discountPrice } = request.body || {};
  const numericIds = Array.isArray(ids)
    ? ids.map((value) => Number(value)).filter((value) => Number.isInteger(value) && value > 0)
    : [];

  if (!numericIds.length) {
    response.status(400).json({ error: "At least one product must be selected." });
    return;
  }

  if (!["publish", "unpublish", "feature", "unfeature", "delete", "move-category", "set-price"].includes(action)) {
    response.status(400).json({ error: "Unsupported bulk action." });
    return;
  }

  try {
    const placeholders = numericIds.map(() => "?").join(", ");

    if (action === "delete") {
      await run(`DELETE FROM products WHERE id IN (${placeholders})`, numericIds);
      response.json({ message: `Deleted ${numericIds.length} products.` });
      return;
    }

    if (action === "publish" || action === "unpublish") {
      const isPublished = action === "publish" ? 1 : 0;
      await run(
        `
          UPDATE products
          SET is_published = ?, updated_at = CURRENT_TIMESTAMP
          WHERE id IN (${placeholders})
        `,
        [isPublished, ...numericIds],
      );
      response.json({ message: `${action === "publish" ? "Published" : "Unpublished"} ${numericIds.length} products.` });
      return;
    }

    if (action === "move-category") {
      const numericCategoryId = Number(categoryId);
      if (!Number.isInteger(numericCategoryId) || numericCategoryId <= 0) {
        response.status(400).json({ error: "Choose a valid category." });
        return;
      }

      const category = await get("SELECT id, name FROM categories WHERE id = ?", [numericCategoryId]);
      if (!category) {
        response.status(404).json({ error: "Category not found." });
        return;
      }

      await run(
        `
          UPDATE products
          SET category_id = ?, updated_at = CURRENT_TIMESTAMP
          WHERE id IN (${placeholders})
        `,
        [numericCategoryId, ...numericIds],
      );
      response.json({ message: `Moved ${numericIds.length} products to ${category.name}.` });
      return;
    }

    if (action === "set-price") {
      const numericPrice = Number(price);
      const normalizedDiscountPrice =
        discountPrice === null || discountPrice === undefined || discountPrice === ""
          ? null
          : Number(discountPrice);

      if (!Number.isFinite(numericPrice) || numericPrice < 0) {
        response.status(400).json({ error: "Enter a valid regular price." });
        return;
      }

      if (normalizedDiscountPrice !== null && (!Number.isFinite(normalizedDiscountPrice) || normalizedDiscountPrice < 0)) {
        response.status(400).json({ error: "Enter a valid discount price." });
        return;
      }

      await run(
        `
          UPDATE products
          SET price = ?, discount_price = ?, updated_at = CURRENT_TIMESTAMP
          WHERE id IN (${placeholders})
        `,
        [numericPrice, normalizedDiscountPrice, ...numericIds],
      );
      response.json({ message: `Updated pricing for ${numericIds.length} products.` });
      return;
    }

    const isFeatured = action === "feature" ? 1 : 0;
    await run(
      `
        UPDATE products
        SET featured = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id IN (${placeholders})
      `,
      [isFeatured, ...numericIds],
    );
    response.json({ message: `${action === "feature" ? "Featured" : "Unfeatured"} ${numericIds.length} products.` });
  } catch (error) {
    next(error);
  }
});

app.get("/api/admin/categories", requireAdmin, async (_request, response, next) => {
  try {
    response.json(await all("SELECT * FROM categories ORDER BY sort_order ASC, name ASC"));
  } catch (error) {
    next(error);
  }
});

app.post("/api/admin/categories", requireAdmin, async (request, response, next) => {
  const { name, nameMn = "", slug, sortOrder = 0, description = "" } = request.body || {};
  if (!name || !slug) {
    response.status(400).json({ error: "Category name and slug are required." });
    return;
  }
  try {
    const inserted = await run(
      "INSERT INTO categories (name, name_mn, slug, sort_order, description) VALUES (?, ?, ?, ?, ?)",
      [name, nameMn, slug, sortOrder, description],
    );
    response.status(201).json(await get("SELECT * FROM categories WHERE id = ?", [inserted.lastID]));
  } catch (error) {
    next(error);
  }
});

app.put("/api/admin/categories/:id", requireAdmin, async (request, response, next) => {
  const { name, nameMn = "", slug, sortOrder = 0, description = "" } = request.body || {};
  try {
    await run(
      "UPDATE categories SET name = ?, name_mn = ?, slug = ?, sort_order = ?, description = ? WHERE id = ?",
      [name, nameMn, slug, sortOrder, description, request.params.id],
    );
    response.json(await get("SELECT * FROM categories WHERE id = ?", [request.params.id]));
  } catch (error) {
    next(error);
  }
});

app.delete("/api/admin/categories/:id", requireAdmin, async (request, response, next) => {
  try {
    await run("DELETE FROM categories WHERE id = ?", [request.params.id]);
    response.json({ message: "Category deleted." });
  } catch (error) {
    next(error);
  }
});

app.get("/api/admin/orders", requireAdmin, async (_request, response, next) => {
  try {
    const rows = await all(
      `
        SELECT orders.*, users.name AS customer_name, users.email AS customer_email
        FROM orders
        JOIN users ON users.id = orders.user_id
        ORDER BY orders.created_at DESC, orders.id DESC
      `,
    );
    response.json(rows);
  } catch (error) {
    next(error);
  }
});

app.patch("/api/admin/orders/:id", requireAdmin, async (request, response, next) => {
  const payload = request.body || {};
  try {
    const current = await get("SELECT * FROM orders WHERE id = ?", [request.params.id]);
    if (!current) {
      response.status(404).json({ error: "Order not found." });
      return;
    }

    const nextStatus = payload.status ?? current.status;
    const nextPaymentStatus =
      payload.paymentStatus ?? payload.payment_status ?? payload.paymentstatus ?? current.payment_status;

    await run(
      `
        UPDATE orders
        SET status = ?, payment_status = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `,
      [nextStatus, nextPaymentStatus, request.params.id],
    );
    response.json(await get("SELECT * FROM orders WHERE id = ?", [request.params.id]));
  } catch (error) {
    next(error);
  }
});

app.get("/api/admin/customers", requireAdmin, async (_request, response, next) => {
  try {
    const rows = await all(
      `
        SELECT
          users.id,
          users.name,
          users.email,
          users.role,
          users.provider,
          users.created_at,
          COUNT(orders.id) AS order_count,
          COALESCE(SUM(CASE WHEN orders.payment_status = 'paid' THEN orders.grand_total ELSE 0 END), 0) AS total_spent
        FROM users
        LEFT JOIN orders ON orders.user_id = users.id
        GROUP BY users.id
        ORDER BY users.created_at DESC, users.id DESC
      `,
    );
    response.json(rows);
  } catch (error) {
    next(error);
  }
});

app.patch("/api/admin/customers/:id", requireAdmin, async (request, response, next) => {
  const { role } = request.body || {};
  if (!["admin", "customer"].includes(role)) {
    response.status(400).json({ error: "Valid role is required." });
    return;
  }

  try {
    if (Number(request.params.id) === request.auth.user.id && role !== "admin") {
      response.status(400).json({ error: "You cannot remove your own admin role." });
      return;
    }

    await run("UPDATE users SET role = ? WHERE id = ?", [role, request.params.id]);
    response.json(
      await get("SELECT id, name, email, role, provider, created_at FROM users WHERE id = ?", [request.params.id]),
    );
  } catch (error) {
    next(error);
  }
});

app.get("/api/admin/settings", requireAdmin, async (_request, response, next) => {
  try {
    const rows = await all("SELECT key, value FROM settings ORDER BY key ASC");
    response.json(
      rows.reduce((accumulator, row) => {
        accumulator[row.key] = row.value;
        return accumulator;
      }, {}),
    );
  } catch (error) {
    next(error);
  }
});

app.put("/api/admin/settings", requireAdmin, async (request, response, next) => {
  const { currency, shopName, supportEmail } = request.body || {};
  if (!currency || !shopName || !supportEmail) {
    response.status(400).json({ error: "Currency, shop name, and support email are required." });
    return;
  }

  try {
    const updates = { currency, shopName, supportEmail };
    for (const [key, value] of Object.entries(updates)) {
      await run(
        `
          INSERT INTO settings (key, value, updated_at)
          VALUES (?, ?, CURRENT_TIMESTAMP)
          ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP
        `,
        [key, value],
      );
    }

    const rows = await all("SELECT key, value FROM settings ORDER BY key ASC");
    response.json(
      rows.reduce((accumulator, row) => {
        accumulator[row.key] = row.value;
        return accumulator;
      }, {}),
    );
  } catch (error) {
    next(error);
  }
});

const HOME_SETTING_KEYS = [
  "heroBadge", "heroTitle", "heroText", "heroPrimaryBtn", "heroSecondaryBtn",
  "heroLeftLabel", "heroLeftTitle", "heroRightLabel", "heroRightTitle",
  "featuredTitle", "featuredSubtitle", "newestTitle", "newestSubtitle",
];

app.put("/api/admin/home-settings", requireAdmin, async (request, response, next) => {
  const body = request.body || {};
  try {
    for (const key of HOME_SETTING_KEYS) {
      if (body[key] !== undefined) {
        await run(
          `INSERT INTO settings (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)
           ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP`,
          [key, String(body[key])],
        );
      }
    }
    const rows = await all("SELECT key, value FROM settings ORDER BY key ASC");
    response.json(rows.reduce((acc, row) => { acc[row.key] = row.value; return acc; }, {}));
  } catch (error) {
    next(error);
  }
});

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({
    error: "Something went wrong on the server.",
    ...(process.env.NODE_ENV === "production" ? {} : { details: error.message }),
  });
});

app.get(/.*/, (_request, response) => {
  response.sendFile(path.join(publicDir, "index.html"));
});

async function start() {
  await initializeDatabase();
  app.listen(PORT, () => {
    console.log(`Contact_Lens listening on http://localhost:${PORT}`);
  });
}

start().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
