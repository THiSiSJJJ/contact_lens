const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const dataDir = path.join(__dirname, "data");
const dbPath = path.join(dataDir, "store.sqlite");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new sqlite3.Database(dbPath);

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function onRun(error) {
      if (error) {
        reject(error);
        return;
      }
      resolve(this);
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (error, row) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(row);
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (error, rows) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(rows);
    });
  });
}

function nowPlusDays(days) {
  const value = new Date();
  value.setDate(value.getDate() + days);
  return value.toISOString();
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const derivedKey = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${derivedKey}`;
}

async function tableExists(tableName) {
  const row = await get(
    "SELECT name FROM sqlite_master WHERE type = 'table' AND name = ?",
    [tableName],
  );
  return Boolean(row);
}

async function tableColumns(tableName) {
  if (!(await tableExists(tableName))) {
    return [];
  }
  return all(`PRAGMA table_info(${tableName})`);
}

async function ensureColumn(tableName, columnName, definition) {
  const columns = await tableColumns(tableName);
  if (!columns.some((column) => column.name === columnName)) {
    await run(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${definition}`);
  }
}

async function rebuildLegacySchemaIfNeeded() {
  const userColumns = await tableColumns("users");
  const productColumns = await tableColumns("products");
  const needsRebuild =
    (userColumns.length && !userColumns.some((column) => column.name === "role")) ||
    (productColumns.length && !productColumns.some((column) => column.name === "category_id"));

  if (!needsRebuild) {
    return;
  }

  const tables = [
    "order_items",
    "orders",
    "addresses",
    "favorites",
    "cart_items",
    "product_images",
    "products",
    "categories",
    "password_reset_tokens",
    "sessions",
    "users",
  ];

  for (const table of tables) {
    await run(`DROP TABLE IF EXISTS ${table}`);
  }
}

const categorySeeds = [
  { slug: "daily",        name: "Daily Lenses",     name_mn: "Өдрийн линз",        sort_order: 1 },
  { slug: "monthly",      name: "Monthly Lenses",   name_mn: "Сарын линз",          sort_order: 2 },
  { slug: "colored",      name: "Colored Lenses",   name_mn: "Өнгөт линз",          sort_order: 3 },
  { slug: "toric",        name: "Toric Lenses",     name_mn: "Торик линз",          sort_order: 4 },
  { slug: "solutions",    name: "Solutions & Care", name_mn: "Уусмал & Арчилгаа",  sort_order: 5 },
  { slug: "accessories",  name: "Accessories",      name_mn: "Дагалдах хэрэгсэл",  sort_order: 6 },
  { slug: "limited",      name: "Limited Edition",  name_mn: "Хязгаарлагдмал",     sort_order: 7 },
  { slug: "feature-edit", name: "Featured Picks",   name_mn: "Онцлох бараа",       sort_order: 8 },
];

const productSeeds = [
  {
    brand: "Johnson & Johnson",
    category_slug: "daily",
    colors: ["clear"],
    description: "Daily disposable lenses with HydraLuxe Technology for all-day moisture and comfort. UV-blocking protection included. Box of 30.",
    discount_price: null,
    featured: 1,
    images: [
      { alt_text: "Acuvue Oasys 1-Day box front", image_url: "/uploads/seed-lens-daily-1.svg", sort_order: 1 },
      { alt_text: "Acuvue Oasys 1-Day lens detail", image_url: "/uploads/seed-lens-daily-2.svg", sort_order: 2 },
    ],
    is_published: 1,
    name: "Acuvue Oasys 1-Day",
    price: 2980,
    sizes: ["-1.00", "-1.50", "-2.00", "-2.50", "-3.00", "-3.50", "-4.00", "-4.50", "-5.00", "-5.50", "-6.00"],
    slug: "acuvue-oasys-1-day-30",
    stock_quantity: 50,
  },
  {
    brand: "Alcon",
    category_slug: "daily",
    colors: ["clear"],
    description: "Water gradient daily lenses with approximately 80% water content at the surface for exceptional breathability and comfort. Box of 30.",
    discount_price: null,
    featured: 0,
    images: [
      { alt_text: "Dailies Total1 box", image_url: "/uploads/seed-lens-daily-1.svg", sort_order: 1 },
    ],
    is_published: 1,
    name: "Dailies Total1",
    price: 3480,
    sizes: ["-0.50", "-1.00", "-1.50", "-2.00", "-2.50", "-3.00", "-4.00", "-5.00", "-6.00"],
    slug: "dailies-total1-30",
    stock_quantity: 35,
  },
  {
    brand: "CooperVision",
    category_slug: "monthly",
    colors: ["clear"],
    description: "Monthly silicone hydrogel lenses with Aquaform Technology for exceptional oxygen transmission and natural wettability throughout the month. Box of 6.",
    discount_price: null,
    featured: 1,
    images: [
      { alt_text: "Biofinity box", image_url: "/uploads/seed-lens-monthly-1.svg", sort_order: 1 },
    ],
    is_published: 1,
    name: "Biofinity",
    price: 3280,
    sizes: ["-1.00", "-2.00", "-3.00", "-4.00", "-5.00", "-6.00", "-8.00"],
    slug: "biofinity-6pack",
    stock_quantity: 40,
  },
  {
    brand: "Alcon",
    category_slug: "monthly",
    colors: ["clear"],
    description: "Extended wear monthly lenses with SMARTSHIELD Technology for lasting moisture and deposit resistance over 30 days. Box of 6.",
    discount_price: null,
    featured: 0,
    images: [
      { alt_text: "Air Optix Plus HydraGlyde box", image_url: "/uploads/seed-lens-monthly-1.svg", sort_order: 1 },
    ],
    is_published: 1,
    name: "Air Optix Plus HydraGlyde",
    price: 2980,
    sizes: ["-0.50", "-1.00", "-2.00", "-3.00", "-4.00", "-5.00", "-6.00"],
    slug: "air-optix-plus-hydraglyde-6pack",
    stock_quantity: 45,
  },
  {
    brand: "Alcon",
    category_slug: "colored",
    colors: ["gray", "green", "blue", "brown", "amethyst", "honey", "turquoise"],
    description: "Three-in-one color technology naturally blends with your eye color for a vibrant, realistic look. 1-month wear. Pack of 2.",
    discount_price: 1980,
    featured: 1,
    images: [
      { alt_text: "FreshLook Colorblends pack", image_url: "/uploads/seed-lens-colored-1.svg", sort_order: 1 },
    ],
    is_published: 1,
    name: "FreshLook Colorblends",
    price: 2480,
    sizes: ["Plano", "-1.00", "-2.00", "-3.00", "-4.00", "-5.00", "-6.00"],
    slug: "freshlook-colorblends-2pack",
    stock_quantity: 60,
  },
  {
    brand: "Johnson & Johnson",
    category_slug: "colored",
    colors: ["natural shine", "vivid style", "fresh look"],
    description: "Daily disposable color-enhancing lenses featuring a limbal ring design that defines and accentuates your natural eye color. Box of 30.",
    discount_price: null,
    featured: 0,
    images: [
      { alt_text: "Acuvue Define Natural Shine box", image_url: "/uploads/seed-lens-colored-1.svg", sort_order: 1 },
    ],
    is_published: 1,
    name: "Acuvue Define Natural Shine",
    price: 3980,
    sizes: ["Plano", "-1.00", "-2.00", "-3.00", "-4.00", "-5.00", "-6.00"],
    slug: "acuvue-define-natural-shine-30",
    stock_quantity: 25,
  },
  {
    brand: "Johnson & Johnson",
    category_slug: "toric",
    colors: ["clear"],
    description: "Bi-weekly toric lenses for astigmatism with HYDRACLEAR Plus technology. Blink-activated stabilization keeps lenses in the correct position for consistent, clear vision. Box of 6.",
    discount_price: null,
    featured: 1,
    images: [
      { alt_text: "Acuvue Oasys for Astigmatism box", image_url: "/uploads/seed-lens-toric-1.svg", sort_order: 1 },
    ],
    is_published: 1,
    name: "Acuvue Oasys for Astigmatism",
    price: 4280,
    sizes: ["-0.75 cyl", "-1.25 cyl", "-1.75 cyl", "-2.25 cyl"],
    slug: "acuvue-oasys-astigmatism-6pack",
    stock_quantity: 30,
  },
  {
    brand: "Alcon",
    category_slug: "solutions",
    colors: [],
    description: "Multi-purpose disinfecting solution that cleans, conditions, removes protein, and stores all types of soft contact lenses. 300ml.",
    discount_price: null,
    featured: 0,
    images: [
      { alt_text: "Opti-Free Puremoist bottle", image_url: "/uploads/seed-solution-1.svg", sort_order: 1 },
    ],
    is_published: 1,
    name: "Opti-Free Puremoist",
    price: 1480,
    sizes: ["300ml"],
    slug: "opti-free-puremoist-300ml",
    stock_quantity: 80,
  },
  {
    brand: "Bausch + Lomb",
    category_slug: "solutions",
    colors: [],
    description: "No-rub multipurpose solution that effectively cleans, disinfects, and conditions soft contact lenses for comfortable all-day wear. 360ml.",
    discount_price: null,
    featured: 0,
    images: [
      { alt_text: "ReNu Advanced Formula bottle", image_url: "/uploads/seed-solution-2.svg", sort_order: 1 },
    ],
    is_published: 1,
    name: "ReNu Advanced Formula",
    price: 1280,
    sizes: ["360ml"],
    slug: "renu-advanced-formula-360ml",
    stock_quantity: 70,
  },
  {
    brand: "Rohto",
    category_slug: "accessories",
    colors: [],
    description: "Preservative-free eye drops formulated for contact lens wearers. Relieves dryness and refreshes eyes throughout the day. 13ml.",
    discount_price: null,
    featured: 0,
    images: [
      { alt_text: "Rohto C3 Eye Drops bottle", image_url: "/uploads/seed-drops-1.svg", sort_order: 1 },
    ],
    is_published: 1,
    name: "Rohto C3 Eye Drops",
    price: 880,
    sizes: ["13ml"],
    slug: "rohto-c3-eye-drops-13ml",
    stock_quantity: 100,
  },
  {
    brand: "Generic",
    category_slug: "accessories",
    colors: ["white", "blue", "pink"],
    description: "Durable lens storage cases with flat-cap sealing to prevent leaks. Compatible with all standard contact lens types. Pack of 2.",
    discount_price: null,
    featured: 0,
    images: [
      { alt_text: "Lens case twin pack", image_url: "/uploads/seed-case-1.svg", sort_order: 1 },
    ],
    is_published: 1,
    name: "Lens Case Twin Pack",
    price: 480,
    sizes: ["Standard"],
    slug: "lens-case-twin-pack",
    stock_quantity: 200,
  },
  {
    brand: "CooperVision",
    category_slug: "feature-edit",
    colors: ["clear"],
    description: "Premium monthly multifocal lenses for presbyopia. Balanced Progressive Technology delivers clear vision at near, intermediate, and far distances. Box of 6.",
    discount_price: null,
    featured: 1,
    images: [
      { alt_text: "Biofinity Multifocal box", image_url: "/uploads/seed-multifocal-1.svg", sort_order: 1 },
    ],
    is_published: 1,
    name: "Biofinity Multifocal",
    price: 5480,
    sizes: ["+1.00", "+2.00", "+3.00", "-1.00", "-2.00", "-3.00"],
    slug: "biofinity-multifocal-6pack",
    stock_quantity: 20,
  },
];

const legacyProductFixes = [];

async function ensureDirectories() {
  const uploadsDir = path.join(__dirname, "public", "uploads");
  if (!fs.existsSync(path.join(__dirname, "public"))) {
    fs.mkdirSync(path.join(__dirname, "public"), { recursive: true });
  }
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
}

async function seedPlaceholderImages() {
  const uploadsDir = path.join(__dirname, "public", "uploads");
  const placeholders = {
    "seed-lens-daily-1.svg": "#d4e9f7",
    "seed-lens-daily-2.svg": "#c8dff0",
    "seed-lens-monthly-1.svg": "#c5e1db",
    "seed-lens-colored-1.svg": "#f5d9c0",
    "seed-lens-toric-1.svg": "#ddd4f0",
    "seed-solution-1.svg": "#e2e8ed",
    "seed-solution-2.svg": "#d8e4eb",
    "seed-drops-1.svg": "#d4eeda",
    "seed-case-1.svg": "#e8ddd0",
    "seed-multifocal-1.svg": "#b8d8d8",
  };

  for (const [filename, fill] of Object.entries(placeholders)) {
    const filePath = path.join(uploadsDir, filename);
    if (fs.existsSync(filePath)) {
      continue;
    }

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1080" viewBox="0 0 900 1080">
        <rect width="900" height="1080" fill="#f7f5f1"/>
        <rect x="180" y="120" rx="36" ry="36" width="540" height="760" fill="${fill}"/>
        <rect x="300" y="80" rx="24" ry="24" width="300" height="28" fill="#cfc6bc"/>
      </svg>
    `.trim();

    fs.writeFileSync(filePath, svg, "utf8");
  }
}

async function upsertSeedCategory(category) {
  await run(
    `
      INSERT INTO categories (name, name_mn, slug, sort_order)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(slug) DO UPDATE SET
        name = excluded.name,
        name_mn = excluded.name_mn,
        sort_order = excluded.sort_order
    `,
    [category.name, category.name_mn || "", category.slug, category.sort_order],
  );
}

async function upsertSeedProduct(product) {
  const category = await get("SELECT id FROM categories WHERE slug = ?", [product.category_slug]);
  if (!category) {
    return;
  }

  await run(
    `
      INSERT INTO products (
        category_id, brand, name, slug, description, price, discount_price,
        colors_json, sizes_json, stock_quantity, featured, is_published
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(slug) DO UPDATE SET
        category_id = excluded.category_id,
        brand = excluded.brand,
        name = excluded.name,
        description = excluded.description,
        price = excluded.price,
        discount_price = excluded.discount_price,
        colors_json = excluded.colors_json,
        sizes_json = excluded.sizes_json,
        stock_quantity = excluded.stock_quantity,
        featured = excluded.featured,
        is_published = excluded.is_published,
        updated_at = CURRENT_TIMESTAMP
    `,
    [
      category.id,
      product.brand,
      product.name,
      product.slug,
      product.description,
      product.price,
      product.discount_price,
      JSON.stringify(product.colors),
      JSON.stringify(product.sizes),
      product.stock_quantity,
      product.featured,
      product.is_published,
    ],
  );

  const storedProduct = await get("SELECT id FROM products WHERE slug = ?", [product.slug]);
  await run("DELETE FROM product_images WHERE product_id = ?", [storedProduct.id]);
  for (const image of product.images) {
    await run(
      "INSERT INTO product_images (product_id, image_url, alt_text, sort_order) VALUES (?, ?, ?, ?)",
      [storedProduct.id, image.image_url, image.alt_text, image.sort_order],
    );
  }
}

async function normalizeSeedContent() {
  const slugMigrations = [
    { from: "dresses", to: "daily" },
    { from: "blouses", to: "monthly" },
    { from: "sandals", to: "colored" },
    { from: "hats", to: "toric" },
    { from: "jackets", to: "solutions" },
    { from: "lifestyle", to: "accessories" },
  ];
  for (const { from, to } of slugMigrations) {
    const oldCat = await get("SELECT id FROM categories WHERE slug = ?", [from]);
    if (oldCat) {
      const newCat = await get("SELECT id FROM categories WHERE slug = ?", [to]);
      if (newCat) {
        await run("UPDATE products SET category_id = ? WHERE category_id = ?", [newCat.id, oldCat.id]);
        await run("DELETE FROM categories WHERE id = ?", [oldCat.id]);
      } else {
        await run("UPDATE categories SET slug = ? WHERE id = ?", [to, oldCat.id]);
      }
    }
  }

  for (const category of categorySeeds) {
    await upsertSeedCategory(category);
  }

  // Remove old clothing placeholder products that are no longer part of the seed
  const legacyClothingSlugs = [
    "shirring-floral-onepiece",
    "flower-embroidered-blouse",
    "sport-sandal-sneaker",
    "braid-hat",
    "double-button-half-sleeve-jacket",
    "aroma-diffuser",
    "linen-tiered-onepiece",
    "cotton-gather-blouse",
  ];
  for (const slug of legacyClothingSlugs) {
    const product = await get("SELECT id FROM products WHERE slug = ?", [slug]);
    if (product) {
      const inOrders = await get("SELECT id FROM order_items WHERE product_id = ? LIMIT 1", [product.id]);
      if (!inOrders) {
        await run("DELETE FROM product_images WHERE product_id = ?", [product.id]);
        await run("DELETE FROM products WHERE id = ?", [product.id]);
      } else {
        await run("UPDATE products SET is_published = 0, updated_at = CURRENT_TIMESTAMP WHERE id = ?", [product.id]);
      }
    }
  }

  for (const product of productSeeds) {
    await upsertSeedProduct(product);
  }

  const sampleCustomer = await get("SELECT id FROM users WHERE email = ?", ["customer@can-shop.local"]);
  if (sampleCustomer) {
    await run(
      `
        UPDATE addresses
        SET full_name = ?,
            prefecture = ?,
            city = ?,
            address_line1 = ?,
            address_line2 = ?
        WHERE user_id = ? AND is_default = 1
      `,
      [
        "Sample Customer",
        "Tokyo",
        "Shibuya",
        "1-2-3 Jingumae",
        "CAN Mansion 301",
        sampleCustomer.id,
      ],
    );
  }
}

async function initializeDatabase() {
  await ensureDirectories();
  await seedPlaceholderImages();

  await run("PRAGMA foreign_keys = ON");
  await rebuildLegacySchemaIfNeeded();

  await run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT,
      role TEXT NOT NULL DEFAULT 'customer',
      provider TEXT NOT NULL DEFAULT 'local',
      provider_user_id TEXT,
      avatar_url TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      token TEXT NOT NULL UNIQUE,
      expires_at TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS password_reset_tokens (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      token TEXT NOT NULL UNIQUE,
      expires_at TEXT NOT NULL,
      used_at TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      sort_order INTEGER NOT NULL DEFAULT 0,
      description TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
  await ensureColumn("categories", "description", "TEXT NOT NULL DEFAULT ''");

  await run(`
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_id INTEGER NOT NULL,
      brand TEXT NOT NULL,
      name TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      description TEXT NOT NULL,
      price INTEGER NOT NULL,
      discount_price INTEGER,
      colors_json TEXT NOT NULL DEFAULT '[]',
      sizes_json TEXT NOT NULL DEFAULT '[]',
      stock_quantity INTEGER NOT NULL DEFAULT 0,
      featured INTEGER NOT NULL DEFAULT 0,
      is_published INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(category_id) REFERENCES categories(id) ON DELETE RESTRICT
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS product_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      image_url TEXT NOT NULL,
      alt_text TEXT,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS cart_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      product_id INTEGER NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, product_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      product_id INTEGER NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, product_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS addresses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      full_name TEXT NOT NULL,
      postal_code TEXT NOT NULL,
      prefecture TEXT NOT NULL,
      city TEXT NOT NULL,
      address_line1 TEXT NOT NULL,
      address_line2 TEXT,
      phone TEXT NOT NULL,
      is_default INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      address_id INTEGER,
      order_number TEXT NOT NULL UNIQUE,
      subtotal INTEGER NOT NULL,
      discount_total INTEGER NOT NULL DEFAULT 0,
      shipping_total INTEGER NOT NULL DEFAULT 0,
      grand_total INTEGER NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      payment_status TEXT NOT NULL DEFAULT 'paid',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY(address_id) REFERENCES addresses(id) ON DELETE SET NULL
    )
  `);

  await ensureColumn("products", "name_mn", "TEXT NOT NULL DEFAULT ''");
  await ensureColumn("categories", "name_mn", "TEXT NOT NULL DEFAULT ''");
  await ensureColumn("orders", "payment_method", "TEXT NOT NULL DEFAULT 'card'");
  await ensureColumn("orders", "payment_provider", "TEXT");
  await ensureColumn("orders", "payment_intent_id", "TEXT");
  await ensureColumn("orders", "stripe_checkout_session_id", "TEXT");
  await ensureColumn("orders", "stock_reduced_at", "TEXT");
  await ensureColumn("orders", "tracking_number", "TEXT");
  await ensureColumn("orders", "updated_at", "TEXT");
  await run("UPDATE orders SET updated_at = COALESCE(updated_at, created_at, CURRENT_TIMESTAMP)");
  await run(
    "CREATE UNIQUE INDEX IF NOT EXISTS idx_orders_stripe_checkout_session_id ON orders(stripe_checkout_session_id)",
  );

  await run(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL DEFAULT '',
      message TEXT NOT NULL,
      read_at TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
  await ensureColumn("contact_messages", "user_id", "INTEGER REFERENCES users(id) ON DELETE SET NULL");

  await run(`
    CREATE TABLE IF NOT EXISTS message_replies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      message_id INTEGER NOT NULL,
      sender TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(message_id) REFERENCES contact_messages(id) ON DELETE CASCADE
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL,
      product_id INTEGER NOT NULL,
      product_name TEXT NOT NULL,
      brand TEXT NOT NULL,
      unit_price INTEGER NOT NULL,
      quantity INTEGER NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(order_id) REFERENCES orders(id) ON DELETE CASCADE,
      FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE RESTRICT
    )
  `);

  const defaultSettings = {
    currency: "JPY",
    shopName: "Contact_Lens",
    supportEmail: "support@can-shop.local",
    heroBadge: "contact lens store",
    heroTitle: "Clear vision, every day — daily, monthly, colored, and toric lenses.",
    heroText: "Discover daily disposables, monthly lenses, colored lenses, toric lenses, and lens care solutions.",
    heroPrimaryBtn: "Browse lenses",
    heroSecondaryBtn: "Contact us",
    heroLeftLabel: "New arrival",
    heroLeftTitle: "DAILY FRESH",
    heroRightLabel: "Seasonal pick",
    heroRightTitle: "soft daily wear",
    featuredTitle: "Featured Lenses",
    featuredSubtitle: "Handpicked for you",
    newestTitle: "New In",
    newestSubtitle: "Fresh arrivals",
    heroVideoUrl: "",
  };

  for (const [key, value] of Object.entries(defaultSettings)) {
    await run("INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)", [key, value]);
  }

  const adminUser = await get("SELECT id FROM users WHERE email = ?", ["admin@can-shop.local"]);
  if (!adminUser) {
    await run(
      `
        INSERT INTO users (name, email, password_hash, role, provider)
        VALUES (?, ?, ?, 'admin', 'local')
      `,
      ["Admin", "admin@can-shop.local", hashPassword("Admin1234!")],
    );
  } else {
    await run("UPDATE users SET name = ? WHERE email = ? AND name = ?", ["Admin", "admin@can-shop.local", "CAN Admin"]);
  }

  const sampleCustomer = await get("SELECT id FROM users WHERE email = ?", ["customer@can-shop.local"]);
  if (!sampleCustomer) {
    const insertedCustomer = await run(
      `
        INSERT INTO users (name, email, password_hash, role, provider)
        VALUES (?, ?, ?, 'customer', 'local')
      `,
      ["Sample Customer", "customer@can-shop.local", hashPassword("Customer1234!")],
    );

    await run(
      `
        INSERT INTO addresses (
          user_id, full_name, postal_code, prefecture, city, address_line1,
          address_line2, phone, is_default
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
      `,
      [
        insertedCustomer.lastID,
        "Sample Customer",
        "150-0001",
        "Tokyo",
        "Shibuya",
        "1-2-3 Jingumae",
        "CAN Mansion 301",
        "03-1234-5678",
      ],
    );
  }

  await normalizeSeedContent();
  await run("DELETE FROM password_reset_tokens WHERE expires_at < CURRENT_TIMESTAMP OR used_at IS NOT NULL");
  await run("DELETE FROM sessions WHERE expires_at < CURRENT_TIMESTAMP");
}

module.exports = {
  all,
  db,
  get,
  hashPassword,
  initializeDatabase,
  nowPlusDays,
  run,
};
