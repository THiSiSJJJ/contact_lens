/* ── i18n ───────────────────────────────────────────────── */
const LANGS = {
  en: {
    /* nav */
    "nav.allProducts": "All Products", "nav.newArrivals": "New Arrivals", "nav.brands": "Brands",
    "nav.daily": "Daily Lenses", "nav.colored": "Colored Lenses",
    "nav.contact": "Contact", "nav.admin": "Admin",
    /* header */
    "header.search": "What are you looking for?", "header.signUp": "Sign Up", "header.login": "Login",
    /* product card */
    "product.addToCart": "Add to Cart", "product.taxIncluded": "Tax included",
    "product.soldOut": "Sold Out", "product.sale": "SALE",
    /* shop page */
    "shop.title": "Shop", "shop.found": (n) => `${n} product${n !== 1 ? "s" : ""} found`,
    "shop.allCategories": "All categories", "shop.searchPlaceholder": "Search by product or brand",
    "shop.newestFirst": "Newest first", "shop.priceAsc": "Price: low to high",
    "shop.priceDesc": "Price: high to low", "shop.nameAZ": "Name A–Z",
    "shop.applyFilters": "Apply filters",
    /* cart page */
    "cart.title": "Shopping Cart", "cart.items": (n) => `${n} item${n !== 1 ? "s" : ""}`,
    "cart.subtotal": (n) => `Subtotal (${n} item${n !== 1 ? "s" : ""})`,
    "cart.shipping": "Shipping", "cart.total": "Total", "cart.orderSummary": "Order Summary",
    "cart.checkout": "Continue to Checkout →", "cart.continueShopping": "← Continue Shopping",
    "cart.empty": "Your cart is empty", "cart.emptyDesc": "Add some pieces from the shop to get started.",
    "cart.browse": "Browse products", "cart.guestNotice": "log in",
    /* checkout */
    "checkout.title": "Checkout", "checkout.shipping": "Shipping Address",
    "checkout.payment": "Payment Method", "checkout.place": "Place Order",
    "checkout.processing": "Processing…", "checkout.newAddress": "Use a different address",
    "checkout.stepCart": "Cart", "checkout.stepPayment": "Payment", "checkout.stepDone": "Done",
    "checkout.subtotal": "Subtotal", "checkout.orderSummary": "Order Summary",
    "checkout.postalCode": "Postal code", "checkout.prefecture": "Prefecture / State",
    "checkout.city": "City", "checkout.streetAddress": "Street address",
    "checkout.addressLine2": "Building, apartment (optional)", "checkout.phone": "Phone number",
    "checkout.fillRequired": "Please fill in your full name, street address, and city.",
    "checkout.orderFailed": "Unable to place the order.",
    "checkout.paymentCancelled": "Your payment was not completed. Please review the payment method and try again.",
    "checkout.stripeNote": "Card, convenience store, and bank transfer payments are handled on secure Stripe-hosted screens. Raw card details are never stored in this app.",
    "checkout.stripeHosted": "Stripe Hosted Checkout", "checkout.payAfter": "Pay after placing the order",
    /* contact */
    "contact.title": "Get in Touch", "contact.send": "Send a Message",
    "contact.email": "Email", "contact.location": "Location", "contact.hours": "Store Hours",
    "contact.online": "Online Support", "contact.note": "We typically respond within 1–2 business days.",
    "contact.namePlaceholder": "Full name", "contact.emailPlaceholder": "Email address",
    "contact.subjectPlaceholder": "Select a subject…", "contact.messagePlaceholder": "Your message…",
    "contact.submitBtn": "Send Message", "contact.sending": "Sending…",
    "contact.successMsg": "Your message has been received. We will get back to you within 1–2 business days.",
    "contact.subjectOrder": "Order inquiry", "contact.subjectReturn": "Return or exchange",
    "contact.subjectProduct": "Product question", "contact.subjectShipping": "Shipping & delivery",
    "contact.subjectOther": "Other",
    /* home */
    "home.featured": "New Arrivals", "home.newest": "Latest Pieces",
    "home.viewAll": "View all →", "home.addToCart": "Add to cart",
    /* footer */
    "footer.tagline": "Your trusted contact lens store — daily, monthly, colored, and toric lenses with fast delivery.",
    "footer.customer": "Customer", "footer.myAccount": "My Account",
    "footer.orderHistory": "Order History", "footer.favorites": "Favorites",
    "footer.support": "Support", "footer.contactUs": "Contact Us",
    "footer.shippingAddress": "Shipping Address",
    /* auth */
    "auth.createAccount": "Create account", "auth.joinFree": "— it's free",
    "auth.welcomeBack": "Welcome back", "auth.signIn": "Sign in",
    "auth.fullName": "Full name", "auth.email": "Email address",
    "auth.password": "Password", "auth.confirmPassword": "Confirm password",
    "auth.forgotPassword": "Forgot password?", "auth.backToSignIn": "Back to sign in",
    "auth.sendReset": "Send reset link", "auth.or": "or continue with email",
    "auth.orSignUp": "or sign up with email",
    "auth.alreadyHaveAccount": "Already have an account?",
    "auth.signInArrow": "Sign in →",
    "auth.brandTagline": "Soft silhouettes, natural textures, and everyday Japanese style.",
    "auth.noAccount": "Don't have an account?",
    "auth.createOneFree": "Create one free →",
    "auth.signInTo": (brand) => `Sign in to your ${brand} account`,
    "auth.joinBrand": (brand) => `Join ${brand} — it's free`,
    "auth.continueGoogle": "Continue with Google",
    "auth.googleNotConfigured": "Google (not configured)",
    "auth.continueFacebook": "Continue with Facebook",
    "auth.facebookNotConfigured": "Facebook (not configured)",
    "auth.namePlaceholder": "Your name",
    "auth.passwordPlaceholder": "8 characters minimum",
    "auth.repeatPassword": "Repeat password",
    "auth.creatingAccount": "Creating account…",
    "auth.passwordMismatch": "Passwords do not match.",
    "auth.signupFailed": "Could not create the account.",
    "auth.signingIn": "Signing in…",
    "auth.loginFailed": "Login failed. Check your email and password.",
    "auth.loginForCheckout": "Log in to continue to checkout.",
    "auth.resetDesc": "Enter your email and we'll send a reset link.",
    "auth.passwordCurrentPlaceholder": "Your password",
    /* misc */
    "misc.remove": "Remove", "misc.each": "each", "misc.free": "Free",
    "misc.loading": "Loading…", "misc.error": "Something went wrong.",
    "misc.networkError": "Could not connect. Please try again.",
  },
  mn: {
    /* nav */
    "nav.allProducts": "Бүх бараа", "nav.newArrivals": "Шинэ ирэлт", "nav.brands": "Брэнд",
    "nav.daily": "Өдрийн линз", "nav.colored": "Өнгөт линз",
    "nav.contact": "Холбоо барих", "nav.admin": "Админ",
    /* header */
    "header.search": "Юу хайж байна вэ?", "header.signUp": "Бүртгүүлэх", "header.login": "Нэвтрэх",
    /* product card */
    "product.addToCart": "Сагсанд нэмэх", "product.taxIncluded": "Татвар орсон",
    "product.soldOut": "Дуусгавар", "product.sale": "ХЯМДРАЛ",
    /* shop page */
    "shop.title": "Дэлгүүр", "shop.found": (n) => `${n} бараа олдсон`,
    "shop.allCategories": "Бүх ангилал", "shop.searchPlaceholder": "Бараа эсвэл брэнд хайх",
    "shop.newestFirst": "Шинэ эхлэж", "shop.priceAsc": "Үнэ: бага → их",
    "shop.priceDesc": "Үнэ: их → бага", "shop.nameAZ": "Нэр А–Я",
    "shop.applyFilters": "Шүүлтүүр хэрэглэх",
    /* cart page */
    "cart.title": "Дэлгүүрийн сагс", "cart.items": (n) => `${n} бараа`,
    "cart.subtotal": (n) => `Дүн (${n} бараа)`,
    "cart.shipping": "Хүргэлт", "cart.total": "Нийт дүн", "cart.orderSummary": "Захиалгын дүн",
    "cart.checkout": "Захиалга үргэлжлүүлэх →", "cart.continueShopping": "← Дэлгүүрлэлт үргэлжлүүлэх",
    "cart.empty": "Таны сагс хоосон байна", "cart.emptyDesc": "Дэлгүүрээс бараа нэмнэ үү.",
    "cart.browse": "Бараа харах", "cart.guestNotice": "нэвтрэх",
    /* checkout */
    "checkout.title": "Захиалга", "checkout.shipping": "Хүргэлтийн хаяг",
    "checkout.payment": "Төлбөрийн арга", "checkout.place": "Захиалга өгөх",
    "checkout.processing": "Боловсруулж байна…", "checkout.newAddress": "Өөр хаяг ашиглах",
    "checkout.stepCart": "Сагс", "checkout.stepPayment": "Төлбөр", "checkout.stepDone": "Дууссан",
    "checkout.subtotal": "Дүн", "checkout.orderSummary": "Захиалгын дүн",
    "checkout.postalCode": "Шуудангийн дугаар", "checkout.prefecture": "Аймаг / Муж",
    "checkout.city": "Хот", "checkout.streetAddress": "Гудамжны хаяг",
    "checkout.addressLine2": "Байр, орон сууц (заавал биш)", "checkout.phone": "Утасны дугаар",
    "checkout.fillRequired": "Бүтэн нэр, гудамжны хаяг, хотоо бөглөнө үү.",
    "checkout.orderFailed": "Захиалга өгөх боломжгүй.",
    "checkout.paymentCancelled": "Таны төлбөр дуусгагдаагүй. Төлбөрийн аргаа шалгаад дахин оролдоно уу.",
    "checkout.stripeNote": "Карт болон банкны шилжүүлгийн төлбөрийг Stripe-ийн аюулгүй дэлгэц дээр хийдэг. Картын мэдээлэл манай системд хадгалагддаггүй.",
    "checkout.stripeHosted": "Stripe Hosted Checkout", "checkout.payAfter": "Захиалгын дараа төлнө",
    /* contact */
    "contact.title": "Бидэнтэй холбогдох", "contact.send": "Мессеж илгээх",
    "contact.email": "Имэйл", "contact.location": "Байршил", "contact.hours": "Дэлгүүрийн цаг",
    "contact.online": "Онлайн дэмжлэг", "contact.note": "Бид ихэвчлэн 1–2 ажлын өдрийн дотор хариу илгээдэг.",
    "contact.namePlaceholder": "Бүтэн нэр", "contact.emailPlaceholder": "Имэйл хаяг",
    "contact.subjectPlaceholder": "Сэдэв сонгоно уу…", "contact.messagePlaceholder": "Таны мессеж…",
    "contact.submitBtn": "Мессеж илгээх", "contact.sending": "Илгээж байна…",
    "contact.successMsg": "Таны мессежийг хүлээн авлаа. Бид 1–2 ажлын өдрийн дотор хариу илгээнэ.",
    "contact.subjectOrder": "Захиалгын асуулт", "contact.subjectReturn": "Буцаах эсвэл солих",
    "contact.subjectProduct": "Бараaны асуулт", "contact.subjectShipping": "Хүргэлт ба хүргэлт",
    "contact.subjectOther": "Бусад",
    /* home */
    "home.featured": "Шинэ ирэлт", "home.newest": "Сүүлийн бараанууд",
    "home.viewAll": "Бүгдийг харах →", "home.addToCart": "Сагсанд нэмэх",
    /* footer */
    "footer.tagline": "Таны найдвартай контакт линзний дэлгүүр — өдрийн, сарын, өнгөт, торик линз хурдан хүргэлттэй.",
    "footer.customer": "Хэрэглэгч", "footer.myAccount": "Миний данс",
    "footer.orderHistory": "Захиалгын түүх", "footer.favorites": "Дуртай",
    "footer.support": "Дэмжлэг", "footer.contactUs": "Холбоо барих",
    "footer.shippingAddress": "Хүргэлтийн хаяг",
    /* auth */
    "auth.createAccount": "Данс үүсгэх", "auth.joinFree": "— үнэгүй",
    "auth.welcomeBack": "Тавтай морил", "auth.signIn": "Нэвтрэх",
    "auth.fullName": "Бүтэн нэр", "auth.email": "Имэйл хаяг",
    "auth.password": "Нууц үг", "auth.confirmPassword": "Нууц үгийг баталгаажуулах",
    "auth.forgotPassword": "Нууц үгээ мартсан уу?", "auth.backToSignIn": "Нэвтрэхрүү буцах",
    "auth.sendReset": "Сэргээх холбоос илгээх", "auth.or": "эсвэл имэйлээр нэвтрэх",
    "auth.orSignUp": "эсвэл имэйлээр бүртгүүлэх",
    "auth.alreadyHaveAccount": "Данс байна уу?",
    "auth.signInArrow": "Нэвтрэх →",
    "auth.brandTagline": "Зөөлөн силуэт, байгалийн материал, өдөр тутмын Японы хэв маяг.",
    "auth.noAccount": "Данс байхгүй юу?",
    "auth.createOneFree": "Үнэгүй бүртгүүлэх →",
    "auth.signInTo": (brand) => `${brand} дансанд нэвтрэх`,
    "auth.joinBrand": (brand) => `${brand}-д нэгдэх — үнэгүй`,
    "auth.continueGoogle": "Google-ээр үргэлжлүүлэх",
    "auth.googleNotConfigured": "Google (тохируулаагүй)",
    "auth.continueFacebook": "Facebook-ээр үргэлжлүүлэх",
    "auth.facebookNotConfigured": "Facebook (тохируулаагүй)",
    "auth.namePlaceholder": "Таны нэр",
    "auth.passwordPlaceholder": "Хамгийн багадаа 8 тэмдэгт",
    "auth.repeatPassword": "Нууц үгийг давтана уу",
    "auth.creatingAccount": "Данс үүсгэж байна…",
    "auth.passwordMismatch": "Нууц үг таарахгүй байна.",
    "auth.signupFailed": "Данс үүсгэж чадсангүй.",
    "auth.signingIn": "Нэвтэрч байна…",
    "auth.loginFailed": "Нэвтрэх амжилтгүй. Имэйл болон нууц үгийг шалгана уу.",
    "auth.loginForCheckout": "Захиалгыг үргэлжлүүлэхийн тулд нэвтэрнэ үү.",
    "auth.resetDesc": "Имэйлээ оруулна уу, сэргээх холбоос илгээнэ.",
    "auth.passwordCurrentPlaceholder": "Таны нууц үг",
    /* misc */
    "misc.remove": "Устгах", "misc.each": "нэгж", "misc.free": "Үнэгүй",
    "misc.loading": "Ачаалж байна…", "misc.error": "Алдаа гарлаа.",
    "misc.networkError": "Холбогдох боломжгүй. Дахин оролдоно уу.",
  },
};

let currentLang = localStorage.getItem("cl-lang") || "en";
document.documentElement.lang = currentLang;

function t(key, arg) {
  const val = (LANGS[currentLang] || LANGS.en)[key] ?? LANGS.en[key] ?? key;
  return typeof val === "function" ? val(arg) : val;
}

function productName(p) {
  return currentLang === "mn" && p.nameMn ? p.nameMn : p.name;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("cl-lang", lang);
  document.documentElement.lang = lang;
  applyLang();
  route();
}

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.textContent = currentLang === "en" ? "MN" : "EN";
  if (state.categories.length) populateNavCategories();
}
/* ── end i18n ───────────────────────────────────────────── */

const state = {
  authToken: localStorage.getItem("can-shop-auth-token") || "",
  cart: [],
  categories: [],
  favorites: [],
  guestCartSynced: false,
  home: null,
  me: null,
  oauthConfig: null,
  paymentConfig: null,
  settings: null,
};

const GUEST_CART_KEY = "can-shop-guest-cart";
const app = document.querySelector("#app");
const accountLink = document.querySelector("#account-link");
const adminNavLink = document.querySelector("#admin-nav-link");
const favoriteLink = document.querySelector("#favorite-link");
const favoriteCount = document.querySelector("#favorite-count");
const cartCount = document.querySelector("#cart-count");
const searchForm = document.querySelector("#global-search-form");
const searchInput = document.querySelector("#global-search-input");
const brandLogo = document.querySelector(".brand-logo");
const signupLink = document.querySelector("#signup-link");
const headerLogoutBtn = document.querySelector("#header-logout-btn");

function setMetaTag(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content || "");
}

function updatePageMeta({ title, description, image } = {}) {
  const brand = currentBrandName();
  const fullTitle = title ? `${title} — ${brand}` : brand;
  const desc = (description || "Your trusted contact lens store — daily, monthly, colored, and toric lenses with fast delivery.").slice(0, 160);
  document.title = fullTitle;
  setMetaTag("name", "description", desc);
  setMetaTag("property", "og:title", fullTitle);
  setMetaTag("property", "og:description", desc);
  setMetaTag("property", "og:url", window.location.href);
  setMetaTag("name", "twitter:title", fullTitle);
  setMetaTag("name", "twitter:description", desc);
  if (image) {
    setMetaTag("property", "og:image", image);
    setMetaTag("name", "twitter:image", image);
  }
}

headerLogoutBtn?.addEventListener("click", async () => {
  await api("/api/auth/logout", { method: "POST" });
  setToken("");
  state.me = null;
  await bootstrapAuthState();
  location.hash = "#/";
});

document.getElementById("lang-toggle")?.addEventListener("click", () => {
  setLang(currentLang === "en" ? "mn" : "en");
});

function formatJPY(value) {
  return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(value);
}

function api(path, options = {}) {
  const headers = { ...(options.headers || {}) };
  if (state.authToken) {
    headers.Authorization = `Bearer ${state.authToken}`;
  }
  return fetch(path, { ...options, headers });
}

function setToken(token) {
  state.authToken = token || "";
  state.guestCartSynced = false;
  if (token) {
    localStorage.setItem("can-shop-auth-token", token);
  } else {
    localStorage.removeItem("can-shop-auth-token");
  }
}

function currentBrandName() {
  return state.settings?.shopName || "Contact_Lens";
}

function supportEmail() {
  return state.settings?.supportEmail || "support@can-shop.local";
}

function oauthFeedbackLabel(code) {
  const messages = {
    "facebook-failed": "Facebook login failed. Please try again in a moment.",
    "facebook-unavailable": "Facebook login is not configured yet. Add the app credentials to `.env` to enable it.",
    "google-failed": "Google login failed. Please try again in a moment.",
    "google-unavailable": "Google login is not configured yet. Add the client credentials to `.env` to enable it.",
  };
  return messages[code] || code;
}

function paymentMethodLabel(value) {
  const labels = {
    bank_transfer: "Bank Transfer",
    card: "Credit / Debit Card",
    cash_on_delivery: "Cash on Delivery",
    convenience_store: "Convenience Store Payment",
  };
  return labels[value] || value || "-";
}

function paymentStatusLabel(value) {
  const labels = {
    failed: "Failed",
    paid: "Paid",
    pending: "Pending",
    refunded: "Refunded",
    unpaid: "Unpaid",
  };
  return labels[value] || value || "-";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function readGuestCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(GUEST_CART_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeGuestCart(items) {
  localStorage.setItem(GUEST_CART_KEY, JSON.stringify(items));
}

function ensureToastHost() {
  let host = document.querySelector("#toast-host");
  if (!host) {
    host = document.createElement("div");
    host.id = "toast-host";
    host.className = "toast-host";
    document.body.appendChild(host);
  }
  return host;
}

function showToast(message, type = "info") {
  const host = ensureToastHost();
  const toast = document.createElement("div");
  const icons = { success: "✓", error: "✕", info: "ℹ" };
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.info}</span><span class="toast-msg">${escapeHtml(String(message))}</span>`;
  host.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("visible"));
  window.setTimeout(() => {
    toast.classList.remove("visible");
    window.setTimeout(() => toast.remove(), 220);
  }, 2200);
}

function finishPageLoad() {
  const progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    progressBar.style.width = "100%";
    setTimeout(() => { progressBar.style.opacity = "0"; progressBar.style.width = "0%"; }, 300);
  }
  app.classList.remove("page-ready");
  void app.offsetWidth; /* force reflow so animation re-triggers */
  app.classList.add("page-ready");
}

function skeletonGrid(count = 8) {
  return `<section class="product-grid">${Array.from({ length: count }, () => `
    <div class="product-card skeleton-card">
      <div class="skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton-line skeleton-line-sm"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line skeleton-line-md"></div>
        <div class="skeleton-btn"></div>
      </div>
    </div>`).join("")}</section>`;
}

async function fetchProductForCart(productId) {
  const cached = [
    ...(state.home?.featured || []),
    ...(state.home?.newest || []),
    ...(Array.isArray(state.favorites) ? state.favorites : []),
  ].find((product) => product.id === productId);

  if (cached) {
    return cached;
  }

  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) {
    throw new Error("Failed to load product information.");
  }
  return response.json();
}

async function syncGuestCartToServer() {
  if (!state.me || state.guestCartSynced) {
    return;
  }

  const guestItems = readGuestCart();
  if (!guestItems.length) {
    state.guestCartSynced = true;
    return;
  }

  for (const item of guestItems) {
    await api("/api/cart/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: item.product.id, quantity: item.quantity }),
    });
  }

  localStorage.removeItem(GUEST_CART_KEY);
  state.guestCartSynced = true;
}

async function addProductToCart(productId, quantity = 1) {
  if (state.me) {
    const response = await api("/api/cart/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity }),
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || "Failed to add the item to cart.");
    }
    state.cart = await response.json();
    return;
  }

  const product = await fetchProductForCart(productId);
  const items = readGuestCart();
  const existing = items.find((item) => item.product.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    items.unshift({ id: product.id, product, quantity });
  }
  writeGuestCart(items);
  state.cart = items;
}

async function updateCartItemQuantity(itemId, quantity) {
  if (state.me) {
    await api(`/api/cart/items/${itemId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity }),
    });
    await loadCart();
    return;
  }

  const items = readGuestCart()
    .map((item) => (String(item.id) === String(itemId) ? { ...item, quantity } : item))
    .filter((item) => item.quantity > 0);
  writeGuestCart(items);
  state.cart = items;
}

async function removeCartItem(itemId) {
  if (state.me) {
    await api(`/api/cart/items/${itemId}`, { method: "DELETE" });
    await loadCart();
    return;
  }

  const items = readGuestCart().filter((item) => String(item.id) !== String(itemId));
  writeGuestCart(items);
  state.cart = items;
}

function isNewProduct(product) {
  if (!product.createdAt) return false;
  return (Date.now() - new Date(product.createdAt).getTime()) < 30 * 24 * 60 * 60 * 1000;
}

function cardMarkup(product) {
  const primaryImage = product.images?.[0]?.imageUrl || "";
  const hasSale = product.discountPrice && product.discountPrice < product.price;
  const outOfStock = product.stockQuantity <= 0;
  const isFavorited = state.favorites.some((fav) => fav.id === product.id);
  const isNew = isNewProduct(product);

  return `
    <article class="product-card">
      <div class="product-card-image">
        <a href="#/product/${product.slug}" class="product-card-image-link">
          ${primaryImage
            ? `<img src="${primaryImage}" alt="${escapeHtml(product.name)}" loading="lazy" />`
            : `<span class="product-card-placeholder"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="72" height="72"><circle cx="48" cy="48" r="40" fill="none" stroke="rgba(15,170,181,0.22)" stroke-width="5"/><circle cx="48" cy="48" r="25" fill="none" stroke="rgba(15,170,181,0.32)" stroke-width="3"/><circle cx="48" cy="48" r="10" fill="rgba(15,170,181,0.18)"/><ellipse cx="36" cy="33" rx="8" ry="5" fill="rgba(255,255,255,0.55)" transform="rotate(-35 36 33)"/></svg></span>`}

        </a>
        ${hasSale ? `<span class="product-badge sale-badge">${t("product.sale")}</span>` : ""}
        ${!hasSale && isNew ? `<span class="product-badge new-badge">NEW</span>` : ""}
        ${outOfStock ? `<span class="product-badge sold-out-badge">${t("product.soldOut")}</span>` : ""}
        <button class="product-fav-btn${isFavorited ? " favorited" : ""}" data-action="favorite" data-product-id="${product.id}" title="${isFavorited ? "Remove from favorites" : "Add to favorites"}">
          ${isFavorited ? "♥" : "♡"}
        </button>
      </div>
      <div class="product-card-copy">
        <p class="product-card-brand">${escapeHtml(product.brand)}</p>
        <a href="#/product/${product.slug}" class="product-card-name">${escapeHtml(productName(product))}</a>
        <p class="product-card-price${hasSale ? " sale" : ""}">
          <strong>${formatJPY(hasSale ? product.discountPrice : product.price)}</strong>
          ${hasSale ? `<span class="price-strike">${formatJPY(product.price)}</span>` : ""}
          <span class="small-label">${t("product.taxIncluded")}</span>
        </p>
      </div>
      <div class="product-card-actions">
        <button class="card-atc-btn" data-action="cart" data-product-id="${product.id}" ${outOfStock ? "disabled" : ""}>${outOfStock ? t("product.soldOut") : t("product.addToCart")}</button>
      </div>
    </article>
  `;
}

function bindCardActions(root = document) {
  root.querySelectorAll("[data-action='favorite']").forEach((button) => {
    button.addEventListener("click", async () => {
      if (!state.me) {
        location.hash = "#/login";
        return;
      }
      const productId = Number(button.dataset.productId);
      const wasFavorited = state.favorites.some((item) => item.id === productId);
      /* optimistic update */
      button.classList.toggle("favorited", !wasFavorited);
      button.textContent = wasFavorited ? "♡" : "♥";
      button.disabled = true;
      try {
        if (wasFavorited) {
          await api(`/api/favorites/${productId}`, { method: "DELETE" });
        } else {
          await api("/api/favorites", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId }),
          });
        }
        await loadFavorites();
        updateHeader();
      } catch {
        /* revert on error */
        button.classList.toggle("favorited", wasFavorited);
        button.textContent = wasFavorited ? "♥" : "♡";
        showToast("Could not update favorites.", "error");
      } finally {
        button.disabled = false;
      }
    });
  });

  root.querySelectorAll("[data-action='cart']").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        button.disabled = true;
        const qty = Number(button.dataset.qty || 1);
        await addProductToCart(Number(button.dataset.productId), qty);
        updateHeader();
        showToast("Added to cart", "success");
        const badge = document.getElementById("cart-count");
        badge?.classList.add("cart-count-bump");
        setTimeout(() => badge?.classList.remove("cart-count-bump"), 400);
      } catch (error) {
        console.error(error);
        showToast(error.message || "Could not add the item to cart.", "error");
      } finally {
        button.disabled = false;
      }
    });
  });
}

async function loadOAuthConfig() {
  const response = await fetch("/api/config/oauth");
  state.oauthConfig = await response.json();
}

async function loadPaymentConfig() {
  const response = await fetch("/api/config/payments");
  state.paymentConfig = await response.json();
}

async function loadMe() {
  if (!state.authToken) {
    state.me = null;
    state.guestCartSynced = false;
    return;
  }
  const response = await api("/api/me");
  if (!response.ok) {
    setToken("");
    state.me = null;
    return;
  }
  const data = await response.json();
  state.me = data.user;
}

async function loadCategories() {
  const response = await fetch("/api/categories");
  state.categories = await response.json();
  populateNavCategories();
}

function populateNavCategories() {
  const cats = state.categories;
  function makeLinks() {
    return cats.map((cat) => {
      const a = document.createElement("a");
      a.href = `#/shop?category=${cat.slug}`;
      a.className = "nav-cat-link";
      a.textContent = currentLang === "mn" && cat.name_mn ? cat.name_mn : cat.name;
      return a;
    });
  }
  const desktopSlot = document.getElementById("nav-cats");
  if (desktopSlot) {
    desktopSlot.innerHTML = "";
    makeLinks().forEach((a) => desktopSlot.appendChild(a));
  }
  const mobileSlot = document.getElementById("mobile-nav-cats");
  if (mobileSlot) {
    mobileSlot.innerHTML = "";
    makeLinks().forEach((a) => mobileSlot.appendChild(a));
  }
}

async function loadHome() {
  const response = await fetch("/api/home");
  state.home = await response.json();
}

async function loadPublicSettings() {
  try {
    const response = await fetch("/api/settings");
    if (response.ok) {
      state.settings = await response.json();
    }
  } catch {
    state.settings = null;
  }
}

async function loadCart() {
  if (!state.me) {
    state.cart = readGuestCart();
    return;
  }
  await syncGuestCartToServer();
  const response = await api("/api/cart");
  state.cart = response.ok ? await response.json() : [];
}

async function loadFavorites() {
  if (!state.me) {
    state.favorites = [];
    return;
  }
  const response = await api("/api/favorites");
  state.favorites = response.ok ? await response.json() : [];
}

function updateHeader() {
  brandLogo.textContent = currentBrandName();
  adminNavLink.classList.toggle("hidden", !(state.me && state.me.role === "admin"));
  const loggedIn = Boolean(state.me);
  if (signupLink) signupLink.classList.toggle("hidden", loggedIn);
  if (headerLogoutBtn) headerLogoutBtn.classList.toggle("hidden", !loggedIn);
  applyLang();
  // Set auth-dependent text AFTER applyLang so i18n doesn't overwrite the username
  accountLink.textContent = state.me ? state.me.name : t("header.login");
  accountLink.href = state.me ? "#/profile" : "#/login";
  favoriteLink.href = state.me ? "#/favorites" : loginHash("/favorites");
  favoriteCount.textContent = state.favorites.length;
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  updateMobileMenu();
  updateBottomNav();
}

function getHashRoute() {
  const hash = location.hash || "#/";
  const [path, queryString] = hash.slice(1).split("?");
  return {
    path: path || "/",
    params: new URLSearchParams(queryString || ""),
  };
}

function normalizeReturnTo(value) {
  if (!value) {
    return "/profile";
  }
  const normalized = String(value).startsWith("/") ? String(value) : `/${String(value).replace(/^#?\/?/, "")}`;
  return normalized.startsWith("//") ? "/profile" : normalized;
}

function loginHash(returnTo = "/profile") {
  return `#/login?returnTo=${encodeURIComponent(normalizeReturnTo(returnTo))}`;
}

function renderHome() {
  updatePageMeta({});
  const featuredCards = (state.home?.featured || []).slice(0, 5).map(cardMarkup).join("");
  const newestCards = (state.home?.newest || []).slice(0, 10).map(cardMarkup).join("");
  const s = state.settings || {};
  const isAdmin = state.me?.role === "admin";

  const sortedCats = [...state.categories].sort((a, b) => {
    const la = (currentLang === "mn" && a.name_mn ? a.name_mn : a.name).toLowerCase();
    const lb = (currentLang === "mn" && b.name_mn ? b.name_mn : b.name).toLowerCase();
    return la.localeCompare(lb);
  });
  const catTiles = sortedCats.map((cat) => {
    const label = currentLang === "mn" && cat.name_mn ? cat.name_mn : cat.name;
    return `<a href="#/shop?category=${cat.slug}" class="home-cat-tile">${escapeHtml(label)}</a>`;
  }).join("");

  app.innerHTML = `
    ${isAdmin ? `<div class="home-admin-bar"><span>Admin view</span><a href="#/admin?tab=home" class="home-admin-edit-btn">✏ Edit Home Page</a></div>` : ""}

    <section class="hero-new">
      ${s.heroVideoUrl ? `
        <video class="hero-video-bg" autoplay muted loop playsinline>
          <source src="${escapeHtml(s.heroVideoUrl)}" type="video/mp4">
        </video>
        <div class="hero-video-overlay"></div>
      ` : `
        <div class="hero-anim-bg">
          <div class="hero-ring hr-1"></div>
          <div class="hero-ring hr-2"></div>
          <div class="hero-ring hr-3"></div>
          <div class="hero-blob hb-1"></div>
          <div class="hero-blob hb-2"></div>
        </div>
      `}

      <div class="hero-new-content">
        <span class="hero-badge hero-badge-anim">${escapeHtml(s.heroBadge || "contact lens store")}</span>
        <h1 class="hero-title hero-title-anim">${escapeHtml(s.heroTitle || "Clear vision, every day.")}</h1>
        <p class="hero-text hero-text-anim">${escapeHtml(s.heroText || "")}</p>
        <div class="hero-actions hero-actions-anim">
          <a class="hero-btn-primary" href="#/shop">${escapeHtml(s.heroPrimaryBtn || "Browse lenses")}</a>
          <a class="hero-btn-secondary" href="#/contact">${escapeHtml(s.heroSecondaryBtn || "Contact us")}</a>
        </div>
      </div>

      ${!s.heroVideoUrl ? `
        <div class="hero-lens-wrap">
          <div class="hero-lens-ring hl-outer"></div>
          <div class="hero-lens-ring hl-mid"></div>
          <div class="hero-lens-core"></div>
          <div class="hero-lens-shine"></div>
        </div>
      ` : ""}
    </section>

    ${catTiles.length ? `<section class="home-cats">${catTiles}</section>` : ""}

    <section class="section-head">
      <div>
        <h2>${escapeHtml(s.featuredTitle || "Featured Lenses")}</h2>
        <p>${escapeHtml(s.featuredSubtitle || "Handpicked for you")}</p>
      </div>
      <a href="#/shop" class="header-link">View all products</a>
    </section>
    <section class="product-grid">${featuredCards}</section>

    <section class="section-head" style="margin-top:48px;">
      <div>
        <h2>${escapeHtml(s.newestTitle || "New In")}</h2>
        <p>${escapeHtml(s.newestSubtitle || "Fresh arrivals")}</p>
      </div>
      <a href="#/shop?sort=latest" class="header-link">See new arrivals</a>
    </section>
    <section class="product-grid">${newestCards}</section>
  `;

  bindCardActions(app);
  finishPageLoad();
}

async function renderShop(params) {
  const search = params.get("search") || "";
  const category = params.get("category") || "";
  const sort = params.get("sort") || "latest";
  updatePageMeta({ title: category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Lenses` : "Shop" });

  app.innerHTML = skeletonGrid(8);

  const query = new URLSearchParams();
  if (search) query.set("search", search);
  if (category) query.set("category", category);
  if (sort) query.set("sort", sort);

  let products;
  try {
    const response = await fetch(`/api/products?${query.toString()}`);
    products = await response.json();
    if (!Array.isArray(products)) throw new Error("bad response");
  } catch {
    app.innerHTML = `<div class="not-found-page">
      <div class="not-found-lens" style="font-size:3rem;opacity:0.2;">◉</div>
      <h2 class="not-found-title">Could not load products</h2>
      <p class="not-found-sub">Check your connection and try again.</p>
      <div class="not-found-links"><a href="#/shop" class="button btn-primary">Retry</a></div>
    </div>`;
    finishPageLoad();
    return;
  }

  app.innerHTML = `
    <div class="shop-page-head">
      <div>
        <h1 class="shop-title">${t("shop.title")}</h1>
        <p class="shop-count">${t("shop.found", products.length)}</p>
      </div>
    </div>
    <form id="shop-filter-form" class="shop-filters">
      <input type="search" name="search" class="shop-search" placeholder="${t("shop.searchPlaceholder")}" value="${escapeHtml(search)}" />
      <select name="category" class="shop-select">
        <option value="">${t("shop.allCategories")}</option>
        ${state.categories.map((item) => `<option value="${item.slug}" ${item.slug === category ? "selected" : ""}>${escapeHtml(currentLang === "mn" && item.name_mn ? item.name_mn : item.name)}</option>`).join("")}
      </select>
      <select name="sort" class="shop-select">
        <option value="latest" ${sort === "latest" ? "selected" : ""}>${t("shop.newestFirst")}</option>
        <option value="price-asc" ${sort === "price-asc" ? "selected" : ""}>${t("shop.priceAsc")}</option>
        <option value="price-desc" ${sort === "price-desc" ? "selected" : ""}>${t("shop.priceDesc")}</option>
        <option value="name" ${sort === "name" ? "selected" : ""}>${t("shop.nameAZ")}</option>
      </select>
      <button class="button shop-filter-btn" type="submit">${t("shop.applyFilters")}</button>
    </form>
    ${products.length
      ? `<section class="product-grid">${products.map(cardMarkup).join("")}</section>`
      : `<div class="shop-empty-state">
           <div class="shop-empty-icon">◉</div>
           <h3>No products found</h3>
           <p class="muted">Try a different search term or category.</p>
           <a href="#/shop" class="button">Clear filters</a>
         </div>`}
  `;

  function applyShopFilters() {
    const form = new FormData(document.querySelector("#shop-filter-form"));
    const nextParams = new URLSearchParams();
    for (const [key, value] of form.entries()) {
      if (value) nextParams.set(key, value.toString());
    }
    const next = `#/shop?${nextParams.toString()}`;
    if (location.hash !== next) {
      location.hash = next;
    } else {
      renderShop(nextParams).catch(() => {});
    }
  }

  document.querySelector("#shop-filter-form").addEventListener("submit", (event) => {
    event.preventDefault();
    applyShopFilters();
  });

  document.querySelector("[name='sort']")?.addEventListener("change", applyShopFilters);
  document.querySelector("[name='category']")?.addEventListener("change", applyShopFilters);

  let searchDebounceTimer;
  document.querySelector("[name='search']")?.addEventListener("input", () => {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(applyShopFilters, 350);
  });

  bindCardActions(app);
  finishPageLoad();
}

async function renderProduct(path) {
  const slug = path.split("/")[2];
  let response;
  try {
    response = await fetch(`/api/products/${slug}`);
  } catch {
    app.innerHTML = `<div class="not-found-page">
      <div class="not-found-lens" style="font-size:3rem;opacity:0.2;">◉</div>
      <h2 class="not-found-title">Connection error</h2>
      <p class="not-found-sub">Could not load the product. Check your connection and try again.</p>
      <div class="not-found-links"><a href="#/shop" class="button btn-primary">Back to shop</a></div>
    </div>`;
    finishPageLoad();
    return;
  }
  if (!response.ok) {
    app.innerHTML = `
      <div class="not-found-page">
        <div class="not-found-lens">
          <svg viewBox="0 0 120 120" width="96" height="96" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(15,170,181,0.18)" stroke-width="6"/>
            <circle cx="60" cy="60" r="34" fill="none" stroke="rgba(15,170,181,0.28)" stroke-width="4"/>
            <circle cx="60" cy="60" r="14" fill="rgba(15,170,181,0.12)"/>
          </svg>
        </div>
        <h2 class="not-found-title">Product not found</h2>
        <p class="not-found-sub">This product may have been removed or the link is incorrect.</p>
        <div class="not-found-links">
          <a href="#/shop" class="button">Browse shop</a>
        </div>
      </div>`;
    return;
  }
  const product = await response.json();
  updatePageMeta({ title: productName(product), description: product.description, image: product.images?.[0]?.imageUrl });
  const hasSale = product.discountPrice && product.discountPrice < product.price;

  const stockLabel = product.stockQuantity > 10
    ? `<span class="stock-badge stock-ok">In stock</span>`
    : product.stockQuantity > 0
    ? `<span class="stock-badge stock-low">Only ${product.stockQuantity} left</span>`
    : `<span class="stock-badge stock-out">Out of stock</span>`;

  const outOfStock = product.stockQuantity <= 0;
  const isFavorited = state.favorites.some((fav) => fav.id === product.id);
  const displayPrice = formatJPY(hasSale ? product.discountPrice : product.price);

  const breadcrumb = `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="#/">Home</a>
      <span>›</span>
      <a href="#/shop">Shop</a>
      ${product.category ? `<span>›</span><a href="#/shop?category=${encodeURIComponent(product.categorySlug || product.category)}">${escapeHtml(product.category)}</a>` : ""}
      <span>›</span>
      <span aria-current="page">${escapeHtml(productName(product))}</span>
    </nav>`;

  const galleryHtml = product.images.length
    ? `<div class="detail-main-img-wrap" id="detail-main-wrap">
         <img id="detail-main-img" class="detail-main-img" src="${product.images[0].imageUrl}" alt="${escapeHtml(product.images[0].altText || product.name)}" loading="eager" onerror="this.style.opacity='0.15';this.src=''" />
         ${product.images.length > 1 ? `<button class="lightbox-trigger" id="lightbox-trigger" aria-label="Zoom image">⤢</button>` : ""}
       </div>
       ${product.images.length > 1 ? `
       <div class="detail-thumbs" id="detail-thumbs">
         ${product.images.map((img, i) => `
           <button class="detail-thumb${i === 0 ? " active" : ""}" data-thumb-src="${escapeHtml(img.imageUrl)}" data-thumb-alt="${escapeHtml(img.altText || product.name)}" data-thumb-i="${i}" type="button">
             <img src="${img.imageUrl}" alt="${escapeHtml(img.altText || product.name)}" loading="lazy" />
           </button>`).join("")}
       </div>` : ""}`
    : `<div class="detail-fig-empty">No image</div>`;

  app.innerHTML = `
    ${breadcrumb}
    <section class="detail-layout">
      <div class="detail-gallery-new">${galleryHtml}</div>

      <div class="detail-copy">
        <div class="detail-brand-row">
          <span class="detail-brand">${escapeHtml(product.brand)}</span>
          ${hasSale ? `<span class="detail-sale-tag">SALE</span>` : ""}
          ${isNewProduct(product) ? `<span class="detail-sale-tag" style="background:var(--teal)">NEW</span>` : ""}
        </div>
        <h1 class="detail-title">${escapeHtml(productName(product))}</h1>

        <div class="detail-price-row">
          <span class="detail-price">${displayPrice}</span>
          ${hasSale ? `<span class="detail-price-orig">${formatJPY(product.price)}</span>` : ""}
          <span class="detail-tax">Tax incl.</span>
        </div>

        ${stockLabel}

        <p class="detail-desc">${escapeHtml(product.description)}</p>

        <dl class="detail-meta">
          <div class="detail-meta-row"><dt>Category</dt><dd><a href="#/shop?category=${encodeURIComponent(product.categorySlug || product.category)}" class="detail-cat-link">${escapeHtml(product.category)}</a></dd></div>
          ${product.colors.length ? `<div class="detail-meta-row"><dt>Colors</dt><dd class="detail-chips">${product.colors.map(c=>`<span class="detail-chip">${escapeHtml(c)}</span>`).join("")}</dd></div>` : ""}
          ${product.sizes.length  ? `<div class="detail-meta-row"><dt>Sizes</dt><dd class="detail-chips">${product.sizes.map(s=>`<span class="detail-chip">${escapeHtml(s)}</span>`).join("")}</dd></div>` : ""}
        </dl>

        <div class="detail-actions" id="detail-actions-anchor">
          ${!outOfStock ? `
          <div class="detail-qty-row">
            <button class="detail-qty-btn" id="detail-qty-dec" type="button">−</button>
            <span class="detail-qty-val" id="detail-qty">1</span>
            <button class="detail-qty-btn" id="detail-qty-inc" type="button">+</button>
          </div>` : ""}
          <button class="detail-add-btn button" data-action="cart" data-product-id="${product.id}" data-qty="1" ${outOfStock ? "disabled" : ""}>
            ${outOfStock ? "Out of Stock" : "Add to Cart"}
          </button>
          <button class="detail-fav-btn${isFavorited ? " favorited" : ""}" data-action="favorite" data-product-id="${product.id}" title="${isFavorited ? "Remove from favorites" : "Add to favorites"}">
            ${isFavorited ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </section>

    <div class="sticky-atc" id="sticky-atc" aria-hidden="true">
      <span class="sticky-atc-name">${escapeHtml(productName(product))}</span>
      <span class="sticky-atc-price">${displayPrice}</span>
      <button class="sticky-atc-btn button" data-action="cart" data-product-id="${product.id}" ${outOfStock ? "disabled" : ""}>
        ${outOfStock ? "Out of Stock" : "Add to Cart"}
      </button>
      <button class="sticky-atc-fav detail-fav-btn${isFavorited ? " favorited" : ""}" data-action="favorite" data-product-id="${product.id}" title="${isFavorited ? "Remove from favorites" : "Add to favorites"}">
        ${isFavorited ? "♥" : "♡"}
      </button>
    </div>
  `;
  bindCardActions(app);

  /* thumbnail strip */
  const mainImg = document.getElementById("detail-main-img");
  document.querySelectorAll(".detail-thumb").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".detail-thumb").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (mainImg) {
        mainImg.src = btn.dataset.thumbSrc;
        mainImg.alt = btn.dataset.thumbAlt;
      }
    });
  });

  /* lightbox */
  const lightboxTrigger = document.getElementById("lightbox-trigger");
  if (lightboxTrigger && mainImg) {
    lightboxTrigger.addEventListener("click", () => {
      const lb = document.createElement("div");
      lb.className = "lightbox";
      lb.innerHTML = `<div class="lightbox-backdrop"></div><div class="lightbox-inner"><img src="${mainImg.src}" alt="${escapeHtml(mainImg.alt)}" /><button class="lightbox-close" aria-label="Close">✕</button></div>`;
      document.body.appendChild(lb);
      requestAnimationFrame(() => lb.classList.add("open"));
      const close = () => { lb.classList.remove("open"); setTimeout(() => lb.remove(), 250); };
      lb.querySelector(".lightbox-close").addEventListener("click", close);
      lb.querySelector(".lightbox-backdrop").addEventListener("click", close);
      document.addEventListener("keydown", function esc(e) { if (e.key === "Escape") { close(); document.removeEventListener("keydown", esc); } });
    });
  }

  const qtyEl = document.getElementById("detail-qty");
  const addBtn = app.querySelector(".detail-add-btn");
  if (qtyEl && addBtn) {
    document.getElementById("detail-qty-dec")?.addEventListener("click", () => {
      const cur = Number(qtyEl.textContent);
      if (cur > 1) { qtyEl.textContent = cur - 1; addBtn.dataset.qty = cur - 1; }
    });
    document.getElementById("detail-qty-inc")?.addEventListener("click", () => {
      const cur = Number(qtyEl.textContent);
      const max = product.stockQuantity || 99;
      if (cur < max) { qtyEl.textContent = cur + 1; addBtn.dataset.qty = cur + 1; }
    });
  }

  const anchor = document.getElementById("detail-actions-anchor");
  const stickyBar = document.getElementById("sticky-atc");
  if (anchor && stickyBar && window.IntersectionObserver) {
    new IntersectionObserver(
      ([entry]) => {
        const show = !entry.isIntersecting;
        stickyBar.classList.toggle("visible", show);
        stickyBar.setAttribute("aria-hidden", String(!show));
      },
      { threshold: 0 },
    ).observe(anchor);
  }

  finishPageLoad();

  fetch(`/api/products/${product.slug}/related`)
    .then((r) => r.json())
    .then((related) => {
      if (!related.length) return;
      const section = document.createElement("section");
      section.className = "related-section";
      section.innerHTML = `
        <div class="section-head" style="margin-top:48px;">
          <div><h2>You might also like</h2><p>More from ${escapeHtml(product.category || "this category")}</p></div>
        </div>
        <div class="product-grid related-grid">${related.map(cardMarkup).join("")}</div>
      `;
      app.appendChild(section);
      bindCardActions(section);
    })
    .catch(() => {});
}

function cartSummary(items) {
  const subtotal = items.reduce((sum, item) => {
    const unitPrice = item.product.discountPrice || item.product.price;
    return sum + unitPrice * item.quantity;
  }, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const shipping = subtotal > 10000 ? 0 : 550;
  return { subtotal, shipping, total: subtotal + shipping, totalItems };
}

function renderCart() {
  updatePageMeta({ title: "Shopping Cart" });
  const summary = cartSummary(state.cart);
  const stepBar = `
    <div class="checkout-step-bar">
      <span class="checkout-step-item active">Cart</span>
      <span class="checkout-step-arrow">›</span>
      <span class="checkout-step-item">Checkout</span>
      <span class="checkout-step-arrow">›</span>
      <span class="checkout-step-item">Payment</span>
      <span class="checkout-step-arrow">›</span>
      <span class="checkout-step-item">Done</span>
    </div>`;

  if (!state.cart.length) {
    app.innerHTML = `
      <div class="cart-page">
        ${stepBar}
        <div class="cart-empty-state">
          <div class="cart-empty-icon">◉</div>
          <h2>${t("cart.empty")}</h2>
          <p class="muted">${t("cart.emptyDesc")}</p>
          <a href="#/shop" class="button">${t("cart.browse")}</a>
        </div>
      </div>`;
    return;
  }

  app.innerHTML = `
    <div class="cart-page">
      ${stepBar}
      ${!state.me ? `<div class="notice">Shopping as guest — <a href="${loginHash("/cart")}" style="color:var(--teal);font-weight:600;">${t("header.login")}</a> to save your cart and order history across sessions.</div>` : ""}
      <div class="cart-layout">
        <div class="cart-items-col">
          <div class="section-head">
            <div>
              <h2>${t("cart.title")}</h2>
              <p>${t("cart.items", summary.totalItems)}</p>
            </div>
          </div>
          <div class="cart-table">
            ${state.cart.map((item) => {
              const thumb = item.product.images?.[0]?.imageUrl || "";
              const unitPrice = item.product.discountPrice || item.product.price;
              return `
                <article class="cart-item${thumb ? " cart-item-with-image" : ""}">
                  ${thumb ? `<img class="cart-item-thumb" src="${escapeHtml(thumb)}" alt="${escapeHtml(item.product.name)}" />` : ""}
                  <div class="cart-item-head">
                    <div>
                      <strong>${escapeHtml(productName(item.product))}</strong>
                      <div class="line-item-sub">${escapeHtml(item.product.brand)}</div>
                    </div>
                    <strong>${formatJPY(unitPrice * item.quantity)}</strong>
                  </div>
                  <div class="cart-item-foot">
                    <div class="quantity-controls">
                      <button data-cart-dec="${item.id}">−</button>
                      <span>${item.quantity}</span>
                      <button data-cart-inc="${item.id}">+</button>
                    </div>
                    <span class="cart-unit-price muted">${formatJPY(unitPrice)} ${t("misc.each")}</span>
                    <button class="chip chip-danger" data-cart-remove="${item.id}">${t("misc.remove")}</button>
                  </div>
                </article>`;
            }).join("")}
          </div>
        </div>
        <aside class="cart-summary-col">
          <div class="cart-summary-card">
            <h3>Order Summary</h3>
            <div class="summary-line">
              <span>${t("cart.subtotal", summary.totalItems)}</span>
              <strong>${formatJPY(summary.subtotal)}</strong>
            </div>
            <div class="summary-line">
              <span>${t("cart.shipping")}</span>
              <strong>${summary.shipping === 0 ? "Free" : formatJPY(summary.shipping)}</strong>
            </div>
            <div class="summary-line summary-total">
              <span>${t("cart.total")}</span>
              <strong>${formatJPY(summary.total)}</strong>
            </div>
            <a href="${state.me ? "#/checkout" : loginHash("/checkout")}" class="button cart-checkout-btn">
              ${state.me ? t("cart.checkout") : t("header.login") + " to Checkout"}
            </a>
            <a href="#/shop" class="cart-continue-btn">${t("cart.continueShopping")}</a>
          </div>
        </aside>
      </div>
    </div>`;

  function lockCartButtons() {
    app.querySelectorAll("[data-cart-dec],[data-cart-inc],[data-cart-remove]").forEach((b) => { b.disabled = true; });
  }
  function unlockCartButtons() {
    app.querySelectorAll("[data-cart-dec],[data-cart-inc],[data-cart-remove]").forEach((b) => { b.disabled = false; });
  }

  app.querySelectorAll("[data-cart-dec]").forEach((button) => {
    button.addEventListener("click", async () => {
      lockCartButtons();
      const id = Number(button.dataset.cartDec);
      const item = state.cart.find((entry) => entry.id === id);
      await updateCartItemQuantity(id, Math.max(item.quantity - 1, 0));
      updateHeader();
      renderCart();
    });
  });

  app.querySelectorAll("[data-cart-inc]").forEach((button) => {
    button.addEventListener("click", async () => {
      lockCartButtons();
      const id = Number(button.dataset.cartInc);
      const item = state.cart.find((entry) => entry.id === id);
      await updateCartItemQuantity(id, item.quantity + 1);
      updateHeader();
      renderCart();
    });
  });

  app.querySelectorAll("[data-cart-remove]").forEach((button) => {
    button.addEventListener("click", async () => {
      lockCartButtons();
      await removeCartItem(button.dataset.cartRemove);
      updateHeader();
      renderCart();
    });
  });
  finishPageLoad();
}

async function renderCheckout(params = new URLSearchParams()) {
  updatePageMeta({ title: "Checkout" });
  if (!state.me) {
    location.hash = loginHash("/checkout");
    return;
  }

  if (!state.cart.length) {
    location.hash = "#/cart";
    return;
  }

  const addressesResponse = await api("/api/addresses");
  const addresses = await addressesResponse.json();
  const summary = cartSummary(state.cart);
  const paymentMethods = state.paymentConfig?.methods || {};
  const defaultMethod = Object.entries(paymentMethods).find(([, config]) => config.enabled)?.[0] || "cash_on_delivery";
  const cancelled = params.get("payment") === "cancelled";
  const hasSaved = addresses.length > 0;

  const paymentFieldset = `
    <fieldset class="payment-methods">
      <legend>${t("checkout.payment")}</legend>
      ${Object.entries(paymentMethods).map(([method, config]) => `
        <label class="payment-option ${config.enabled ? "" : "disabled"}">
          <input type="radio" name="paymentMethod" value="${method}"
            ${method === defaultMethod && config.enabled ? "checked" : ""}
            ${config.enabled ? "" : "disabled"} />
          <span>${escapeHtml(config.label)}</span>
          <small>${config.provider === "stripe" ? t("checkout.stripeHosted") : t("checkout.payAfter")}</small>
        </label>`).join("")}
    </fieldset>`;

  const addressFields = `
    <div class="new-address-fields">
      <input id="na-fullName" placeholder="${t("auth.fullName")}" />
      <input id="na-postalCode" placeholder="${t("checkout.postalCode")}" />
      <div class="form-row-two">
        <input id="na-prefecture" placeholder="${t("checkout.prefecture")}" />
        <input id="na-city" placeholder="${t("checkout.city")}" />
      </div>
      <input id="na-addressLine1" placeholder="${t("checkout.streetAddress")}" />
      <input id="na-addressLine2" placeholder="${t("checkout.addressLine2")}" />
      <input id="na-phone" placeholder="${t("checkout.phone")}" />
    </div>`;

  app.innerHTML = `
    <div class="checkout-layout">
      <div class="checkout-main">
        <div class="checkout-step-bar">
          <span class="checkout-step-item">${t("checkout.stepCart")}</span>
          <span class="checkout-step-arrow">›</span>
          <span class="checkout-step-item active">${t("checkout.title")}</span>
          <span class="checkout-step-arrow">›</span>
          <span class="checkout-step-item">${t("checkout.stepPayment")}</span>
          <span class="checkout-step-arrow">›</span>
          <span class="checkout-step-item">${t("checkout.stepDone")}</span>
        </div>
        ${cancelled ? `<div class="notice error">${t("checkout.paymentCancelled")}</div>` : ""}

        <div class="panel checkout-section">
          <h3>${t("checkout.shipping")}</h3>
          ${hasSaved ? `
            <div class="address-cards">
              ${addresses.map((addr, i) => `
                <label class="address-card">
                  <input type="radio" name="savedAddressId" value="${addr.id}"
                    ${addr.is_default || i === 0 ? "checked" : ""} />
                  <div class="address-card-body">
                    <strong>${escapeHtml(addr.full_name || "")}</strong>
                    <span>${escapeHtml(addr.prefecture)} ${escapeHtml(addr.city)}</span>
                    <span>${escapeHtml(addr.address_line1)}${addr.address_line2 ? ", " + escapeHtml(addr.address_line2) : ""}</span>
                    ${addr.phone ? `<span class="muted">${escapeHtml(addr.phone)}</span>` : ""}
                  </div>
                </label>`).join("")}
            </div>
            <details class="new-address-details" id="new-address-details">
              <summary>${t("checkout.newAddress")}</summary>
              ${addressFields}
            </details>` : addressFields}
        </div>

        <div class="panel checkout-section">
          <h3>${t("checkout.payment")}</h3>
          ${paymentFieldset}
          <div class="notice">${t("checkout.stripeNote")}</div>
        </div>

        <div id="checkout-result" class="muted" style="min-height:20px;"></div>
        <button class="button checkout-submit-btn" id="checkout-submit-btn">${t("checkout.place")}</button>
      </div>

      <aside class="checkout-sidebar">
        <div class="cart-summary-card">
          <h3>${t("checkout.orderSummary")}</h3>
          <div class="summary-line"><span>${t("checkout.subtotal")}</span><strong>${formatJPY(summary.subtotal)}</strong></div>
          <div class="summary-line"><span>${t("cart.shipping")}</span><strong>${summary.shipping === 0 ? t("misc.free") : formatJPY(summary.shipping)}</strong></div>
          <div class="summary-line summary-total"><span>${t("cart.total")}</span><strong>${formatJPY(summary.total)}</strong></div>
          <div style="display:grid;gap:6px;margin-top:4px;">
            ${state.cart.map((item) => `
              <div class="summary-item">
                <span>${escapeHtml(productName(item.product))} ×${item.quantity}</span>
                <strong>${formatJPY((item.product.discountPrice || item.product.price) * item.quantity)}</strong>
              </div>`).join("")}
          </div>
        </div>
      </aside>
    </div>`;

  const submitBtn = document.querySelector("#checkout-submit-btn");
  const resultEl = document.querySelector("#checkout-result");
  const newAddressDetails = document.querySelector("#new-address-details");

  function fieldVal(id) {
    return document.querySelector(`#${id}`)?.value?.trim() || "";
  }

  submitBtn.addEventListener("click", async () => {
    submitBtn.disabled = true;
    submitBtn.textContent = t("checkout.processing");
    resultEl.textContent = "";
    resultEl.className = "muted";

    try {
      const paymentMethod = document.querySelector('[name="paymentMethod"]:checked')?.value || defaultMethod;
      const useNew = !hasSaved || newAddressDetails?.open;

      let payload;
      if (useNew) {
        const fullName = fieldVal("na-fullName");
        const addressLine1 = fieldVal("na-addressLine1");
        const city = fieldVal("na-city");
        if (!fullName || !addressLine1 || !city) {
          resultEl.textContent = t("checkout.fillRequired");
          resultEl.className = "error";
          return;
        }
        payload = {
          paymentMethod,
          shippingAddress: {
            fullName,
            postalCode: fieldVal("na-postalCode"),
            prefecture: fieldVal("na-prefecture"),
            city,
            addressLine1,
            addressLine2: fieldVal("na-addressLine2"),
            phone: fieldVal("na-phone"),
          },
        };
      } else {
        const savedId = document.querySelector('[name="savedAddressId"]:checked')?.value;
        payload = { addressId: Number(savedId), paymentMethod };
      }

      const response = await api("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        resultEl.textContent = data.error || t("checkout.orderFailed");
        resultEl.className = "error";
        return;
      }
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }
      await loadCart();
      updateHeader();
      location.hash = `#/order-confirmation?orderNumber=${encodeURIComponent(data.orderNumber)}&payment_status=${encodeURIComponent(data.paymentStatus || "pending")}`;
    } catch (err) {
      resultEl.textContent = err.message || t("misc.error");
      resultEl.className = "error";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t("checkout.place");
    }
  });
  finishPageLoad();
}

async function renderOrderConfirmation(params) {
  const orderNumber = params.get("orderNumber") || "-";
  const sessionId = params.get("session_id");
  let paymentStatus = params.get("payment_status") || "pending";
  let orderStatusMessage = "You can review this order anytime from your account order history.";

  if (sessionId && state.me) {
    try {
      const response = await api("/api/checkout/confirm-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });
      const data = await response.json();
      if (response.ok) {
        paymentStatus = data.paymentStatus || paymentStatus;
        await loadCart();
        updateHeader();
      } else {
        orderStatusMessage = data.error || orderStatusMessage;
      }
    } catch {
      orderStatusMessage = "Payment confirmation is taking a little longer than usual. Please check your order history shortly.";
    }
  }

  const paymentLabel =
    paymentStatus === "paid"
      ? "Your payment was completed successfully."
      : paymentStatus === "pending"
        ? "Your payment is pending. Please follow the Stripe or email instructions to complete it."
        : "Your payment failed or expired. Please try again.";

  app.innerHTML = `
    <section class="panel">
      <h2>Thank you for your order</h2>
      <p>Order number: <strong>${escapeHtml(orderNumber)}</strong></p>
      <p class="muted">${escapeHtml(paymentLabel)}</p>
      <p class="muted">${escapeHtml(orderStatusMessage)}</p>
      <div class="hero-actions">
        <a class="button" href="#/orders">View order history</a>
        <a class="button-secondary" href="#/shop">Continue shopping</a>
      </div>
    </section>
  `;
  finishPageLoad();
}

async function renderRegister(params) {
  updatePageMeta({ title: "Create Account" });
  const returnTo = normalizeReturnTo(params.get("returnTo") || "/profile");
  if (state.me) { location.hash = `#${returnTo}`; return; }

  const loginHref = `#/login?returnTo=${encodeURIComponent(returnTo)}`;
  const googleEnabled = state.oauthConfig?.googleEnabled;
  const facebookEnabled = state.oauthConfig?.facebookEnabled;
  const googleUrl = googleEnabled ? `${state.oauthConfig.googleAuthUrl}?returnTo=${encodeURIComponent(returnTo)}` : null;
  const facebookUrl = facebookEnabled ? `${state.oauthConfig.facebookAuthUrl}?returnTo=${encodeURIComponent(returnTo)}` : null;

  app.innerHTML = `
    <div class="auth-page">
      <div class="auth-brand-panel">
        <div class="auth-brand-top">
          <div class="auth-brand-name">${escapeHtml(currentBrandName())}</div>
          <p class="auth-brand-tagline">${t("auth.brandTagline")}</p>
        </div>
        <div class="auth-brand-circles">
          <div class="auth-circle auth-circle-lg"></div>
          <div class="auth-circle auth-circle-sm"></div>
        </div>
        <div class="auth-brand-bottom">
          <p>${t("auth.alreadyHaveAccount")}</p>
          <a href="${loginHref}" class="auth-switch-btn">${t("auth.signInArrow")}</a>
        </div>
      </div>

      <div class="auth-form-panel">
        <h1 class="auth-form-title">${t("auth.createAccount")}</h1>
        <p class="auth-form-sub muted">${t("auth.joinBrand", escapeHtml(currentBrandName()))}</p>

        <div class="auth-oauth-stack">
          <a href="${googleUrl || "#"}" class="oauth-btn oauth-btn-google${googleEnabled ? "" : " oauth-btn-disabled"}">
            <span class="oauth-icon oauth-icon-google">G</span>
            <span>${googleEnabled ? t("auth.continueGoogle") : t("auth.googleNotConfigured")}</span>
          </a>
          <a href="${facebookUrl || "#"}" class="oauth-btn oauth-btn-facebook${facebookEnabled ? "" : " oauth-btn-disabled"}">
            <span class="oauth-icon oauth-icon-facebook">f</span>
            <span>${facebookEnabled ? t("auth.continueFacebook") : t("auth.facebookNotConfigured")}</span>
          </a>
        </div>

        <div class="auth-or-divider"><span>${t("auth.orSignUp")}</span></div>

        <form id="register-form" class="auth-form">
          <div class="auth-field">
            <label for="reg-name">${t("auth.fullName")}</label>
            <input id="reg-name" name="name" type="text" placeholder="${t("auth.namePlaceholder")}" required autocomplete="name" />
          </div>
          <div class="auth-field">
            <label for="reg-email">${t("auth.email")}</label>
            <input id="reg-email" name="email" type="email" placeholder="you@example.com" required autocomplete="email" />
          </div>
          <div class="auth-field">
            <label for="reg-password">${t("auth.password")}</label>
            <input id="reg-password" name="password" type="password" placeholder="${t("auth.passwordPlaceholder")}" required autocomplete="new-password" />
          </div>
          <div class="auth-field">
            <label for="reg-confirm">${t("auth.confirmPassword")}</label>
            <input id="reg-confirm" name="confirmPassword" type="password" placeholder="${t("auth.repeatPassword")}" required autocomplete="new-password" />
          </div>
          <div id="register-result" class="error" style="min-height:18px;font-size:0.9rem;"></div>
          <button class="button auth-submit-btn" type="submit" id="register-submit-btn">${t("auth.createAccount")}</button>
        </form>
      </div>
    </div>`;

  const form = document.querySelector("#register-form");
  const result = document.querySelector("#register-result");
  const submitBtn = document.querySelector("#register-submit-btn");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    result.textContent = "";
    submitBtn.disabled = true;
    submitBtn.textContent = t("auth.creatingAccount");
    const fd = new FormData(form);
    if ((fd.get("password") || "").length < 8) {
      result.textContent = "Password must be at least 8 characters.";
      submitBtn.disabled = false;
      submitBtn.textContent = t("auth.createAccount");
      return;
    }
    if (fd.get("password") !== fd.get("confirmPassword")) {
      result.textContent = t("auth.passwordMismatch");
      submitBtn.disabled = false;
      submitBtn.textContent = t("auth.createAccount");
      return;
    }
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fd.get("name"), email: fd.get("email"), password: fd.get("password") }),
      });
      const data = await response.json();
      if (!response.ok) { result.textContent = data.error || t("auth.signupFailed"); return; }
      setToken(data.token);
      await bootstrapAuthState();
      location.hash = `#${returnTo}`;
    } catch {
      result.textContent = t("misc.networkError");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t("auth.createAccount");
    }
  });
  finishPageLoad();
}

async function renderLogin(params) {
  updatePageMeta({ title: "Sign In" });
  const returnTo = normalizeReturnTo(params.get("returnTo"));
  const oauthMessage = params.get("oauth");
  if (state.me) { location.hash = `#${returnTo}`; return; }

  const registerHref = `#/register?returnTo=${encodeURIComponent(returnTo)}`;
  const googleEnabled = state.oauthConfig?.googleEnabled;
  const facebookEnabled = state.oauthConfig?.facebookEnabled;
  const googleUrl = googleEnabled ? `${state.oauthConfig.googleAuthUrl}?returnTo=${encodeURIComponent(returnTo)}` : null;
  const facebookUrl = facebookEnabled ? `${state.oauthConfig.facebookAuthUrl}?returnTo=${encodeURIComponent(returnTo)}` : null;

  app.innerHTML = `
    <div class="auth-page">
      <div class="auth-brand-panel">
        <div class="auth-brand-top">
          <div class="auth-brand-name">${escapeHtml(currentBrandName())}</div>
          <p class="auth-brand-tagline">${t("auth.brandTagline")}</p>
        </div>
        <div class="auth-brand-circles">
          <div class="auth-circle auth-circle-lg"></div>
          <div class="auth-circle auth-circle-sm"></div>
        </div>
        <div class="auth-brand-bottom">
          <p>${t("auth.noAccount")}</p>
          <a href="${registerHref}" class="auth-switch-btn">${t("auth.createOneFree")}</a>
        </div>
      </div>

      <div class="auth-form-panel">
        <h1 class="auth-form-title">${t("auth.welcomeBack")}</h1>
        <p class="auth-form-sub muted">${t("auth.signInTo", escapeHtml(currentBrandName()))}</p>

        ${returnTo === "/checkout" ? `<div class="notice" style="margin-bottom:14px;">${t("auth.loginForCheckout")}</div>` : ""}
        ${oauthMessage ? `<div class="notice error" style="margin-bottom:14px;">${escapeHtml(oauthFeedbackLabel(oauthMessage))}</div>` : ""}

        <div class="auth-oauth-stack">
          <a href="${googleUrl || "#"}" class="oauth-btn oauth-btn-google${googleEnabled ? "" : " oauth-btn-disabled"}">
            <span class="oauth-icon oauth-icon-google">G</span>
            <span>${googleEnabled ? t("auth.continueGoogle") : t("auth.googleNotConfigured")}</span>
          </a>
          <a href="${facebookUrl || "#"}" class="oauth-btn oauth-btn-facebook${facebookEnabled ? "" : " oauth-btn-disabled"}">
            <span class="oauth-icon oauth-icon-facebook">f</span>
            <span>${facebookEnabled ? t("auth.continueFacebook") : t("auth.facebookNotConfigured")}</span>
          </a>
        </div>

        <div class="auth-or-divider"><span>${t("auth.or")}</span></div>

        <form id="login-form" class="auth-form">
          <div class="auth-field">
            <label for="login-email">${t("auth.email")}</label>
            <input id="login-email" name="email" type="email" placeholder="you@example.com" required autocomplete="email" />
          </div>
          <div class="auth-field">
            <label for="login-password">
              ${t("auth.password")}
              <button type="button" id="forgot-toggle" class="auth-forgot-link">${t("auth.forgotPassword")}</button>
            </label>
            <input id="login-password" name="password" type="password" placeholder="${t("auth.passwordCurrentPlaceholder")}" required autocomplete="current-password" />
          </div>
          <div id="login-result" class="error" style="min-height:18px;font-size:0.9rem;"></div>
          <button class="button auth-submit-btn" type="submit" id="login-submit-btn">${t("auth.signIn")}</button>
        </form>

        <div id="forgot-section" class="auth-forgot-section hidden">
          <p class="muted" style="margin:0 0 10px;font-size:0.9rem;">${t("auth.resetDesc")}</p>
          <form id="forgot-form" class="auth-form">
            <div class="auth-field">
              <label for="forgot-email">${t("auth.email")}</label>
              <input id="forgot-email" name="email" type="email" placeholder="you@example.com" required autocomplete="email" />
            </div>
            <button class="button auth-submit-btn" type="submit">${t("auth.sendReset")}</button>
            <div id="forgot-result" class="muted" style="font-size:0.9rem;"></div>
          </form>
        </div>
      </div>
    </div>`;

  const loginResult = document.querySelector("#login-result");
  const loginSubmitBtn = document.querySelector("#login-submit-btn");
  const forgotSection = document.querySelector("#forgot-section");
  const forgotToggle = document.querySelector("#forgot-toggle");

  forgotToggle.addEventListener("click", () => {
    forgotSection.classList.toggle("hidden");
    document.querySelector("#login-form").classList.toggle("hidden");
    forgotToggle.textContent = forgotSection.classList.contains("hidden") ? t("auth.forgotPassword") : t("auth.backToSignIn");
  });

  document.querySelector("#login-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    loginResult.textContent = "";
    loginSubmitBtn.disabled = true;
    loginSubmitBtn.textContent = t("auth.signingIn");
    try {
      const form = new FormData(event.currentTarget);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      const data = await response.json();
      if (!response.ok) { loginResult.textContent = data.error || t("auth.loginFailed"); return; }
      setToken(data.token);
      await bootstrapAuthState();
      location.hash = `#${returnTo}`;
    } catch {
      loginResult.textContent = t("misc.networkError");
    } finally {
      loginSubmitBtn.disabled = false;
      loginSubmitBtn.textContent = t("auth.signIn");
    }
  });

  document.querySelector("#forgot-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.get("email") }),
    });
    const data = await response.json();
    const result = document.querySelector("#forgot-result");
    if (data.resetUrl) {
      const hash = data.resetUrl.replace(/^[^#]+/, "");
      result.innerHTML = `Check your email — or <a href="${escapeHtml(hash)}" style="color:var(--teal);">click here to reset now</a> (dev mode).`;
    } else {
      result.textContent = data.message || "Reset link sent if that address is registered.";
    }
  });
  finishPageLoad();
}

async function renderResetPassword(params) {
  const token = params.get("token") || "";
  app.innerHTML = `
    <section class="panel auth-reset">
      <div class="section-head">
        <div>
          <h2>Reset Password</h2>
          <p>Choose a new password for your account.</p>
        </div>
      </div>
      <form id="reset-password-form" class="panel">
        ${token ? `<input name="token" type="hidden" value="${escapeHtml(token)}" />` : `<input name="token" placeholder="Reset token" required />`}
        <input name="password" type="password" placeholder="New password (8 characters minimum)" required />
        <input name="confirmPassword" type="password" placeholder="Confirm new password" required />
        <button class="button" type="submit">Update Password</button>
        <div id="reset-password-result" class="muted"></div>
      </form>
    </section>
  `;

  document.querySelector("#reset-password-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = document.querySelector("#reset-password-result");
    if (form.get("password") !== form.get("confirmPassword")) {
      result.textContent = "Passwords do not match.";
      return;
    }
    const response = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: form.get("token"),
        password: form.get("password"),
      }),
    });
    const data = await response.json();
    result.textContent = data.message || data.error || "";
    if (response.ok) {
      setTimeout(() => {
        location.hash = "#/login";
      }, 800);
    }
  });
  finishPageLoad();
}

async function renderProfile() {
  updatePageMeta({ title: "My Account" });
  if (!state.me) {
    location.hash = "#/login";
    return;
  }
  const response = await api("/api/profile");
  const profile = await response.json();
  const initial = profile.user.name.charAt(0).toUpperCase();
  const isAdmin = profile.user.role === "admin";

  app.innerHTML = `
    <div class="profile-page">

      <div class="profile-hero">
        <div class="profile-avatar-wrap">
          <div class="profile-avatar">${initial}</div>
        </div>
        <div class="profile-hero-info">
          <h1 class="profile-name">${escapeHtml(profile.user.name)}</h1>
          <p class="profile-email">${escapeHtml(profile.user.email)}</p>
          <div class="profile-badges">
            <span class="profile-role-badge${isAdmin ? " profile-role-admin" : ""}">${isAdmin ? "Admin" : "Customer"}</span>
            <span class="profile-provider-badge">via ${escapeHtml(profile.user.provider || "email")}</span>
          </div>
        </div>
        <button id="logout-button" class="profile-logout-btn">Sign out</button>
      </div>

      <div class="profile-stats-row">
        <div class="profile-stat">
          <span class="profile-stat-val">${profile.orderCount ?? 0}</span>
          <span class="profile-stat-label">Orders</span>
        </div>
        <div class="profile-stat">
          <span class="profile-stat-val">${profile.favoritesCount ?? 0}</span>
          <span class="profile-stat-label">Favorites</span>
        </div>
        <div class="profile-stat">
          <span class="profile-stat-val">${profile.addresses.length}</span>
          <span class="profile-stat-label">Addresses</span>
        </div>
      </div>

      <div class="profile-quick-links">
        <a href="#/orders" class="profile-quick-link">
          <span class="pql-icon">📦</span>
          <span class="pql-label">Order History</span>
          <span class="pql-arrow">→</span>
        </a>
        <a href="#/favorites" class="profile-quick-link">
          <span class="pql-icon">♥</span>
          <span class="pql-label">My Favorites</span>
          <span class="pql-arrow">→</span>
        </a>
        <a href="#/shop" class="profile-quick-link">
          <span class="pql-icon">🛍</span>
          <span class="pql-label">Browse Shop</span>
          <span class="pql-arrow">→</span>
        </a>
        <a href="#/contact" class="profile-quick-link">
          <span class="pql-icon">✉</span>
          <span class="pql-label">Contact Support</span>
          <span class="pql-arrow">→</span>
        </a>
        ${isAdmin ? `<a href="#/admin" class="profile-quick-link profile-quick-link-admin">
          <span class="pql-icon">⚙</span>
          <span class="pql-label">Admin Panel</span>
          <span class="pql-arrow">→</span>
        </a>` : ""}
      </div>

      <div class="profile-section">
        <div class="profile-section-head">
          <h2>Shipping Addresses</h2>
          <span class="profile-section-sub">Used at checkout</span>
        </div>
        <div class="profile-addresses">
          ${profile.addresses.length
            ? profile.addresses.map((a) => `
                <div class="address-card" data-address-id="${a.id}">
                  <div class="address-card-icon">📍</div>
                  <div class="address-card-body">
                    <strong>${escapeHtml(a.full_name)}</strong>
                    <span>${escapeHtml(a.postal_code)} ${escapeHtml(a.prefecture)}, ${escapeHtml(a.city)}</span>
                    <span>${escapeHtml(a.address_line1)}${a.address_line2 ? ", " + escapeHtml(a.address_line2) : ""}</span>
                    <span class="address-phone">📞 ${escapeHtml(a.phone)}</span>
                  </div>
                  <button class="address-delete-btn" data-delete-address="${a.id}" title="Remove address">✕</button>
                </div>`).join("")
            : `<div class="profile-empty">No saved addresses yet. They're saved automatically at checkout.</div>`}
        </div>
      </div>

      <div class="profile-section">
        <div class="profile-section-head">
          <h2>Account Settings</h2>
          <span class="profile-section-sub">Update your name or password</span>
        </div>
        <form id="account-settings-form" class="profile-settings-form">
          <div class="profile-settings-field">
            <label for="settings-name">Display name</label>
            <input id="settings-name" name="name" type="text" value="${escapeHtml(profile.user.name)}" placeholder="Your name" />
          </div>
          ${profile.user.provider === "local" ? `
          <div class="profile-settings-field">
            <label for="settings-current-pw">Current password</label>
            <input id="settings-current-pw" name="currentPassword" type="password" placeholder="Required to change password" autocomplete="current-password" />
          </div>
          <div class="profile-settings-field">
            <label for="settings-new-pw">New password</label>
            <input id="settings-new-pw" name="newPassword" type="password" placeholder="Leave blank to keep current" autocomplete="new-password" />
          </div>` : ""}
          <div id="settings-result" style="min-height:18px;font-size:0.9rem;"></div>
          <button class="button" type="submit" id="settings-submit-btn">Save changes</button>
        </form>
      </div>

      <div id="profile-messages-section"></div>

    </div>
  `;

  document.querySelector("#logout-button").addEventListener("click", async () => {
    await api("/api/auth/logout", { method: "POST" });
    setToken("");
    await bootstrapAuthState();
    location.hash = "#/";
  });

  document.querySelectorAll("[data-delete-address]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      const res = await api(`/api/addresses/${btn.dataset.deleteAddress}`, { method: "DELETE" });
      if (res.ok) {
        btn.closest(".address-card").remove();
      } else {
        const d = await res.json().catch(() => ({}));
        showToast(d.error || "Could not remove address.");
        btn.disabled = false;
      }
    });
  });

  const settingsForm = document.querySelector("#account-settings-form");
  const settingsResult = document.querySelector("#settings-result");
  const settingsBtn = document.querySelector("#settings-submit-btn");
  if (settingsForm) {
    settingsForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      settingsBtn.disabled = true;
      settingsBtn.textContent = "Saving…";
      settingsResult.textContent = "";
      const fd = new FormData(settingsForm);
      const payload = {};
      const newName = fd.get("name")?.trim();
      const currentPassword = fd.get("currentPassword")?.trim();
      const newPassword = fd.get("newPassword")?.trim();
      if (newName && newName !== profile.user.name) payload.name = newName;
      if (newPassword) { payload.currentPassword = currentPassword; payload.newPassword = newPassword; }
      if (!Object.keys(payload).length) {
        settingsResult.textContent = "No changes to save.";
        settingsBtn.disabled = false;
        settingsBtn.textContent = "Save changes";
        return;
      }
      try {
        const res = await api("/api/me", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) {
          settingsResult.className = "error";
          settingsResult.textContent = data.error || "Could not save changes.";
          return;
        }
        state.me = data.user;
        updateHeader();
        settingsResult.className = "success";
        settingsResult.textContent = "Changes saved.";
        settingsForm.querySelector("[name='currentPassword']")?.replaceWith((() => { const i = document.createElement("input"); i.id = "settings-current-pw"; i.name = "currentPassword"; i.type = "password"; i.placeholder = "Required to change password"; i.autocomplete = "current-password"; return i; })());
        settingsForm.querySelector("[name='newPassword']")?.replaceWith((() => { const i = document.createElement("input"); i.id = "settings-new-pw"; i.name = "newPassword"; i.type = "password"; i.placeholder = "Leave blank to keep current"; i.autocomplete = "new-password"; return i; })());
      } catch (err) {
        settingsResult.className = "error";
        settingsResult.textContent = err.message || "Something went wrong.";
      } finally {
        settingsBtn.disabled = false;
        settingsBtn.textContent = "Save changes";
      }
    });
  }

  const messagesSection = document.querySelector("#profile-messages-section");
  const msgsRes = await api("/api/messages/my");
  const myMessages = await msgsRes.json();

  const subjectLabels = { order: "Order inquiry", return: "Return or exchange", product: "Product question", shipping: "Shipping & delivery", other: "Other" };

  messagesSection.innerHTML = `
    <div class="profile-section">
      <div class="profile-section-head">
        <h2>Support Messages</h2>
        <span class="profile-section-sub"><a href="#/contact" style="color:var(--teal)">New message →</a></span>
      </div>
      ${myMessages.length ? myMessages.map((msg) => `
        <div class="message-row" style="margin-bottom:16px;" data-profile-msg="${msg.id}">
          <div class="message-row-meta">
            ${msg.subject ? `<span class="message-subject-badge">${escapeHtml(subjectLabels[msg.subject] || msg.subject)}</span>` : ""}
            <span class="atab-meta">${new Date(msg.created_at).toLocaleDateString()}</span>
          </div>
          <div class="message-thread">
            <div class="thread-bubble thread-bubble-customer">
              <div class="thread-bubble-header">
                <span class="thread-sender">You</span>
                <span class="thread-time">${new Date(msg.created_at).toLocaleString()}</span>
              </div>
              <p>${escapeHtml(msg.message)}</p>
            </div>
            ${(msg.replies || []).map((r) => `
              <div class="thread-bubble ${r.sender === "admin" ? "thread-bubble-admin" : "thread-bubble-customer"}">
                <div class="thread-bubble-header">
                  <span class="thread-sender">${r.sender === "admin" ? "Support" : "You"}</span>
                  <span class="thread-time">${new Date(r.created_at).toLocaleString()}</span>
                </div>
                <p>${escapeHtml(r.content)}</p>
              </div>`).join("")}
          </div>
          <div class="message-reply-form">
            <textarea class="reply-textarea" placeholder="Reply to support…" rows="2" data-profile-reply-for="${msg.id}"></textarea>
            <div class="message-reply-actions">
              <button class="button button-sm profile-send-reply" data-msg-id="${msg.id}">Send</button>
            </div>
          </div>
        </div>`).join("")
      : `<div class="profile-empty">No messages yet. <a href="#/contact" style="color:var(--teal)">Contact support</a> if you need help.</div>`}
    </div>
  `;

  messagesSection.querySelectorAll(".profile-send-reply").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const textarea = messagesSection.querySelector(`textarea[data-profile-reply-for="${btn.dataset.msgId}"]`);
      const content = textarea.value.trim();
      if (!content) return;
      btn.disabled = true;
      btn.textContent = "Sending…";
      const res = await api(`/api/messages/${btn.dataset.msgId}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      if (res.ok) {
        await renderProfile();
      } else {
        const data = await res.json();
        showToast(data.error || "Could not send reply.");
        btn.disabled = false;
        btn.textContent = "Send";
      }
    });
  });
  finishPageLoad();
}

async function renderOrders() {
  updatePageMeta({ title: "Order History" });
  if (!state.me) {
    location.hash = "#/login";
    return;
  }
  app.innerHTML = `<div class="orders-page"><div class="orders-page-head"><div><h1>Order History</h1><p class="muted">Loading…</p></div></div>
    <div class="orders-list-new">${Array.from({length:3},()=>`<div class="skeleton-card" style="height:100px;border-radius:12px;"></div>`).join("")}</div></div>`;

  let orders;
  try {
    const response = await api("/api/orders/my");
    orders = await response.json();
    if (!Array.isArray(orders)) throw new Error("bad response");
  } catch {
    app.innerHTML = `<div class="not-found-page">
      <div class="not-found-lens" style="font-size:3rem;opacity:0.2;">📦</div>
      <h2 class="not-found-title">Could not load orders</h2>
      <p class="not-found-sub">Check your connection and try again.</p>
      <div class="not-found-links"><a href="#/orders" class="button btn-primary">Retry</a></div>
    </div>`;
    finishPageLoad();
    return;
  }
  const orderStatusColor = { pending:"ostatus-amber", processing:"ostatus-blue", shipped:"ostatus-purple", completed:"ostatus-green", cancelled:"ostatus-red" };
  const paymentColor = { paid:"ostatus-green", unpaid:"ostatus-red", pending:"ostatus-amber", failed:"ostatus-red", refunded:"ostatus-gray" };

  app.innerHTML = `
    <div class="orders-page">
      <div class="orders-page-head">
        <div>
          <h1>Order History</h1>
          <p class="muted">${orders.length} order${orders.length !== 1 ? "s" : ""} placed</p>
        </div>
        <a href="#/shop" class="button-secondary" style="min-height:40px;padding:0 16px;display:inline-flex;align-items:center;">Continue Shopping</a>
      </div>
      <div class="orders-list-new">
        ${orders.length
          ? orders.map((order) => `
              <article class="order-card-new">
                <div class="ocn-left">
                  <div class="ocn-number">${escapeHtml(order.order_number)}</div>
                  <div class="ocn-date muted">${new Date(order.created_at).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}</div>
                </div>
                <div class="ocn-mid">
                  <span class="ostatus ${orderStatusColor[order.status] || ""}">${escapeHtml(order.status)}</span>
                  <span class="ostatus ${paymentColor[order.payment_status] || ""}">${escapeHtml(paymentStatusLabel(order.payment_status))}</span>
                </div>
                <div class="ocn-method muted">${escapeHtml(paymentMethodLabel(order.payment_method))}</div>
                <div class="ocn-total-row">
                  <span class="ocn-total">${formatJPY(order.grand_total)}</span>
                  <a href="/api/orders/${order.id}/receipt?token=${encodeURIComponent(state.authToken)}" target="_blank" rel="noopener" class="ocn-receipt-btn">Receipt ↗</a>
                </div>
                ${order.tracking_number ? `<div class="ocn-tracking">📦 Tracking: <strong>${escapeHtml(order.tracking_number)}</strong></div>` : ""}
                ${(order.items || []).length ? `
                  <div class="ocn-items">
                    ${order.items.map((item) => `
                      <div class="ocn-item">
                        <span class="ocn-item-name">${escapeHtml(item.product_name || item.name || "Product")}</span>
                        <span class="ocn-item-qty muted">×${item.quantity}</span>
                        <span class="ocn-item-price">${formatJPY(item.unit_price * item.quantity)}</span>
                      </div>`).join("")}
                  </div>` : ""}
              </article>`).join("")
          : `<div class="profile-empty" style="text-align:center;padding:60px 20px;">
               <div style="font-size:2.5rem;margin-bottom:12px;">📦</div>
               <h3 style="margin:0 0 8px;">No orders yet</h3>
               <p class="muted">When you place an order it'll show up here.</p>
               <a href="#/shop" class="button" style="margin-top:16px;display:inline-block;">Browse the shop</a>
             </div>`}
      </div>
    </div>
  `;
  finishPageLoad();
}

function renderFavorites() {
  if (!state.me) {
    location.hash = loginHash("/favorites");
    return;
  }
  app.innerHTML = `
    <section class="section-head">
      <div>
        <h2>Favorites</h2>
        <p>${state.favorites.length} saved item${state.favorites.length !== 1 ? "s" : ""}</p>
      </div>
    </section>
    <section class="product-grid">
      ${state.favorites.length ? state.favorites.map(cardMarkup).join("") : `<div class="empty-state">You do not have any favorites yet.</div>`}
    </section>
  `;
  bindCardActions(app);
  finishPageLoad();
}

function renderContact() {
  updatePageMeta({ title: "Contact" });
  app.innerHTML = `
    <div class="contact-layout">
      <div class="contact-info panel">
        <h2>${t("contact.title")}</h2>
        <p class="muted">${t("contact.note")}</p>
        <div class="contact-details">
          <div class="contact-detail-row">
            <span class="contact-detail-icon">✉</span>
            <div class="contact-detail-content">
              <strong>${t("contact.email")}</strong>
              <span>${escapeHtml(supportEmail())}</span>
            </div>
          </div>
          <div class="contact-detail-row">
            <span class="contact-detail-icon">◎</span>
            <div class="contact-detail-content">
              <strong>${t("contact.location")}</strong>
              <span>Shibuya-ku, Tokyo, Japan</span>
            </div>
          </div>
          <div class="contact-detail-row">
            <span class="contact-detail-icon">◷</span>
            <div class="contact-detail-content">
              <strong>${t("contact.hours")}</strong>
              <span>Mon – Sat, 11:00 – 20:00 JST</span>
            </div>
          </div>
          <div class="contact-detail-row">
            <span class="contact-detail-icon">◉</span>
            <div class="contact-detail-content">
              <strong>${t("contact.online")}</strong>
              <span>7 days a week, replies within 24 h</span>
            </div>
          </div>
        </div>
        <div class="contact-response-note">
          <p>${t("contact.note")}</p>
        </div>
      </div>

      <div class="contact-form-panel panel">
        <h2>${t("contact.send")}</h2>
        <form id="contact-form">
          <div class="form-row-two">
            <input name="name" placeholder="${t("contact.namePlaceholder")}" required value="${state.me ? escapeHtml(state.me.name) : ""}" ${state.me ? 'readonly style="background:var(--surface-soft);cursor:default;"' : ""} />
            <input name="email" type="email" placeholder="${t("contact.emailPlaceholder")}" required value="${state.me ? escapeHtml(state.me.email) : ""}" ${state.me ? 'readonly style="background:var(--surface-soft);cursor:default;"' : ""} />
          </div>
          <select name="subject">
            <option value="">${t("contact.subjectPlaceholder")}</option>
            <option value="order">${t("contact.subjectOrder")}</option>
            <option value="return">${t("contact.subjectReturn")}</option>
            <option value="product">${t("contact.subjectProduct")}</option>
            <option value="shipping">${t("contact.subjectShipping")}</option>
            <option value="other">${t("contact.subjectOther")}</option>
          </select>
          <textarea name="message" placeholder="${t("contact.messagePlaceholder")}" required rows="6"></textarea>
          <button class="button" type="submit" id="contact-submit-btn">${t("contact.submitBtn")}</button>
          <div id="contact-result" style="min-height:20px;"></div>
        </form>
      </div>
    </div>`;

  const form = document.querySelector("#contact-form");
  const submitBtn = document.querySelector("#contact-submit-btn");
  const result = document.querySelector("#contact-result");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = t("contact.sending");
    const data = new FormData(form);
    try {
      const response = await api("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject") || "",
          message: data.get("message"),
        }),
      });
      const json = await response.json();
      if (response.ok) {
        result.className = "success";
        result.textContent = json.message;
        form.reset();
      } else {
        result.className = "error";
        result.textContent = json.error || "Something went wrong. Please try again.";
      }
    } catch {
      result.className = "error";
      result.textContent = "Could not send message. Please try again.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t("contact.submitBtn");
    }
  });
  finishPageLoad();
}

async function uploadFiles(files, onProgress) {
  const urls = [];
  for (let i = 0; i < files.length; i++) {
    if (onProgress) onProgress(i + 1, files.length);
    const form = new FormData();
    form.append("image", files[i]);
    const response = await api("/api/admin/uploads", { method: "POST", body: form });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Image upload failed.");
    }
    urls.push(data.imageUrl);
  }
  return urls;
}

function enableDragDrop(dropzone, onFiles) {
  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("drag-over");
  });
  ["dragleave", "dragend"].forEach((evt) => {
    dropzone.addEventListener(evt, () => dropzone.classList.remove("drag-over"));
  });
  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("drag-over");
    const files = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith("image/"));
    if (!files.length) {
      showToast("Only image files can be dropped here.");
      return;
    }
    onFiles(files);
  });
}

function renderDashboardTab(adminContent, dashboard) {
  adminContent.innerHTML = `
    <div class="admin-grid admin-grid-wide">
      <article class="admin-card admin-stat-card">
        <span class="admin-stat-label">Products</span>
        <span class="admin-stat-value">${dashboard.products}</span>
      </article>
      <article class="admin-card admin-stat-card">
        <span class="admin-stat-label">Orders</span>
        <span class="admin-stat-value">${dashboard.orders}</span>
      </article>
      <article class="admin-card admin-stat-card">
        <span class="admin-stat-label">Customers</span>
        <span class="admin-stat-value">${dashboard.customers}</span>
      </article>
      <article class="admin-card admin-stat-card">
        <span class="admin-stat-label">Categories</span>
        <span class="admin-stat-value">${dashboard.categories}</span>
      </article>
      <article class="admin-card admin-stat-card admin-stat-revenue">
        <span class="admin-stat-label">Paid Revenue</span>
        <span class="admin-stat-value">${formatJPY(dashboard.paidRevenue || 0)}</span>
      </article>
      <article class="admin-card admin-stat-card${(dashboard.pendingPayments || 0) > 0 ? " admin-stat-warn" : ""}">
        <span class="admin-stat-label">Pending Payments</span>
        <span class="admin-stat-value">${dashboard.pendingPayments || 0}</span>
      </article>
    </div>
    <div class="admin-grid">
      <section class="admin-card">
        <strong>Low Stock</strong>
        <div class="admin-list">
          ${
            dashboard.lowStock?.length
              ? dashboard.lowStock
                  .map(
                    (product) => `
                      <article class="admin-row">
                        <span>${escapeHtml(product.name)}</span>
                        <span class="muted">Stock ${product.stock_quantity}</span>
                      </article>
                    `,
                  )
                  .join("")
              : `<div class="muted">No low-stock products right now.</div>`
          }
        </div>
      </section>
      <section class="admin-card">
        <strong>Recent Orders</strong>
        <div class="admin-list">
          ${
            dashboard.recentOrders?.length
              ? dashboard.recentOrders
                  .map(
                    (order) => `
                      <article class="admin-row">
                        <span>${escapeHtml(order.order_number)} / ${escapeHtml(order.customer_name)}</span>
                        <span class="muted">${formatJPY(order.grand_total)} / ${escapeHtml(paymentStatusLabel(order.payment_status))}</span>
                      </article>
                    `,
                  )
                  .join("")
              : `<div class="muted">No recent orders yet.</div>`
          }
        </div>
      </section>
    </div>
  `;
}

function renderProductsTab(adminContent, products, categories, reload) {
  const categoryOptions = categories
    .map((category) => `<option value="${category.id}">${escapeHtml(category.name)}</option>`)
    .join("");

  adminContent.innerHTML = `
    <div class="prod-toolbar">
      <div class="prod-filter-row">
        <input id="product-search-input" placeholder="🔍 Search products…" class="prod-search-input" />
        <select id="product-filter-category" class="prod-filter-select">
          <option value="">All categories</option>
          ${categories.map((category) => `<option value="${category.id}">${escapeHtml(category.name)}</option>`).join("")}
        </select>
        <select id="product-filter-status" class="prod-filter-select">
          <option value="">All statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="low-stock">Low stock</option>
        </select>
      </div>
      <div class="prod-add-row">
        <button class="button" id="open-quick-add-button" type="button">Quick Add</button>
        <button class="button" id="open-add-product-button" type="button">+ Add Product</button>
      </div>
    </div>

    <div class="prod-bulk-bar" id="bulk-bar">
      <label class="prod-bulk-check">
        <input id="select-all-products" type="checkbox" />
        <span>Select all</span>
      </label>
      <button class="prod-bulk-btn" id="select-none-products" type="button">None</button>
      <span class="prod-bulk-sep"></span>
      <button class="prod-bulk-btn" id="bulk-publish-button" type="button">Publish</button>
      <button class="prod-bulk-btn" id="bulk-unpublish-button" type="button">Unpublish</button>
      <button class="prod-bulk-btn" id="bulk-feature-button" type="button">Feature</button>
      <button class="prod-bulk-btn" id="bulk-unfeature-button" type="button">Unfeature</button>
      <button class="prod-bulk-btn" id="bulk-move-category-button" type="button">Move Category</button>
      <button class="prod-bulk-btn" id="bulk-price-edit-button" type="button">Edit Price</button>
      <button class="prod-bulk-btn prod-bulk-btn-danger" id="bulk-delete-button" type="button">Delete</button>
    </div>

    <div class="prod-list" id="product-admin-list"></div>

    <dialog id="add-product-dialog" class="edit-product-dialog">
      <form id="product-form" class="admin-card quick-add-card" method="dialog">
        <div class="section-head">
          <div>
            <h2>Add Product</h2>
            <p id="product-form-title" class="muted">New listing</p>
          </div>
        </div>
        <input name="productId" type="hidden" />
        <div class="admin-grid">
          <input name="brand" placeholder="Brand" value="Contact_Lens" required />
          <input name="name" placeholder="Product name (English)" required />
        </div>
        <input name="nameMn" placeholder="Бараaны нэр (Монгол) — Mongolian name (optional)" />
        <div class="quick-helper">Slug is auto-generated from the name — edit it if needed.</div>
        <input name="slug" placeholder="slug" required />
        <select name="categoryId" required>
          ${categoryOptions}
        </select>
        <div class="admin-grid">
          <input name="price" type="number" min="0" placeholder="Regular price (JPY)" required />
          <input name="discountPrice" type="number" min="0" placeholder="Discount price (optional)" />
        </div>
        <div class="admin-grid">
          <input name="stockQuantity" type="number" min="0" placeholder="Stock quantity" required />
          <input name="colors" placeholder="Colors (comma separated)" />
        </div>
        <input name="sizes" placeholder="Sizes (comma separated)" />
        <textarea name="description" placeholder="Product description" required></textarea>
        <label class="upload-dropzone" for="product-images-input">
          <span class="upload-title">Drop product images here</span>
          <span class="muted">or click to choose files</span>
          <input id="product-images-input" name="images" type="file" accept="image/*" multiple />
        </label>
        <div id="product-image-preview" class="image-preview-grid"></div>
        <div class="quick-helper">Set a cover image, reorder, or remove images before saving.</div>
        <div class="admin-grid" style="margin-top:4px;">
          <label style="display:flex;gap:8px;align-items:center;"><input type="checkbox" name="featured" /> Featured</label>
          <label style="display:flex;gap:8px;align-items:center;"><input type="checkbox" name="isPublished" checked /> Published</label>
        </div>
        <div class="admin-actions">
          <button class="button" id="product-submit-button" type="submit">Add Product</button>
          <button class="button-secondary" id="product-cancel-button" type="button">Cancel</button>
        </div>
        <div id="product-form-result" class="muted"></div>
      </form>
    </dialog>

    <dialog id="quick-add-dialog" class="quick-add-dialog">
      <form id="quick-add-form" class="admin-card quick-add-card" method="dialog">
        <div class="section-head">
          <div>
            <h2>Quick Add Product</h2>
            <p>Fastest way to publish something new</p>
          </div>
        </div>
        <input name="brand" placeholder="Brand" value="Contact_Lens" required />
        <input name="name" placeholder="Product name (English)" required />
        <input name="nameMn" placeholder="Бараaны нэр (Монгол) — optional" />
        <select name="categoryId" required>
          ${categoryOptions}
        </select>
        <input name="price" type="number" min="0" placeholder="Regular price" required />
        <input name="stockQuantity" type="number" min="0" placeholder="Stock quantity" value="1" required />
        <textarea name="description" placeholder="Short product description" required></textarea>
        <label class="upload-dropzone" for="quick-add-images-input">
          <span class="upload-title">Choose product images</span>
          <span class="muted">You can add one or more files</span>
          <input id="quick-add-images-input" name="images" type="file" accept="image/*" multiple />
        </label>
        <div id="quick-add-image-preview" class="image-preview-grid"></div>
        <div class="admin-actions">
          <button class="button" type="submit">Create Product</button>
          <button class="button-secondary" id="close-quick-add-button" type="button">Close</button>
        </div>
        <div id="quick-add-result" class="muted"></div>
      </form>
    </dialog>

    <dialog id="bulk-delete-dialog" class="quick-add-dialog">
      <div class="admin-card quick-add-card">
        <div class="section-head">
          <div>
            <h2>Confirm Bulk Delete</h2>
            <p>This action cannot be undone</p>
          </div>
        </div>
        <p id="bulk-delete-message" class="muted"></p>
        <div class="admin-actions">
          <button class="button-secondary" id="cancel-bulk-delete-button" type="button">Cancel</button>
          <button class="button" id="confirm-bulk-delete-button" type="button">Delete Selected Products</button>
        </div>
      </div>
    </dialog>

    <dialog id="bulk-category-dialog" class="quick-add-dialog">
      <form id="bulk-category-form" class="admin-card quick-add-card" method="dialog">
        <div class="section-head">
          <div>
            <h2>Move Selected Products</h2>
            <p>Change the category for all selected products</p>
          </div>
        </div>
        <select name="categoryId" required>
          <option value="">Choose a category</option>
          ${categoryOptions}
        </select>
        <div class="admin-actions">
          <button class="button" type="submit">Move Products</button>
          <button class="button-secondary" id="cancel-bulk-category-button" type="button">Cancel</button>
        </div>
      </form>
    </dialog>

    <dialog id="bulk-price-dialog" class="quick-add-dialog">
      <form id="bulk-price-form" class="admin-card quick-add-card" method="dialog">
        <div class="section-head">
          <div>
            <h2>Edit Selected Prices</h2>
            <p>Set one regular price and optional discount price for every selected product</p>
          </div>
        </div>
        <input name="price" type="number" min="0" step="0.01" placeholder="Regular price" required />
        <input name="discountPrice" type="number" min="0" step="0.01" placeholder="Discount price (optional)" />
        <div class="admin-actions">
          <button class="button" type="submit">Update Prices</button>
          <button class="button-secondary" id="cancel-bulk-price-button" type="button">Cancel</button>
        </div>
      </form>
    </dialog>

    <dialog id="single-delete-dialog" class="quick-add-dialog">
      <div class="admin-card quick-add-card">
        <div class="section-head">
          <div>
            <h2>Delete Product</h2>
            <p>This action cannot be undone</p>
          </div>
        </div>
        <p id="single-delete-message" class="muted"></p>
        <div class="admin-actions">
          <button class="button-secondary" id="cancel-single-delete-button" type="button">Cancel</button>
          <button class="button" id="confirm-single-delete-button" type="button">Delete Product</button>
        </div>
      </div>
    </dialog>

    <dialog id="edit-product-dialog" class="edit-product-dialog">
      <form id="edit-product-form" class="admin-card quick-add-card" method="dialog">
        <div class="section-head">
          <div>
            <h2>Edit Product</h2>
            <p id="edit-product-subtitle" class="muted"></p>
          </div>
        </div>
        <input name="productId" type="hidden" />
        <div class="admin-grid">
          <input name="brand" placeholder="Brand" required />
          <input name="name" placeholder="Product name (English)" required />
        </div>
        <input name="nameMn" placeholder="Бараaны нэр (Монгол) — Mongolian name (optional)" />
        <input name="slug" placeholder="URL slug (changing may break existing links)" required />
        <select name="categoryId" required>
          ${categoryOptions}
        </select>
        <div class="admin-grid">
          <input name="price" type="number" min="0" placeholder="Regular price (JPY)" required />
          <input name="discountPrice" type="number" min="0" placeholder="Discount price (optional)" />
        </div>
        <div class="admin-grid">
          <input name="stockQuantity" type="number" min="0" placeholder="Stock quantity" required />
          <input name="colors" placeholder="Colors (comma separated)" />
        </div>
        <input name="sizes" placeholder="Sizes (comma separated)" />
        <textarea name="description" placeholder="Product description" required></textarea>
        <label class="upload-dropzone" for="edit-images-input">
          <span class="upload-title">Add or replace images</span>
          <span class="muted">Drag and drop, or click to choose files</span>
          <input id="edit-images-input" name="images" type="file" accept="image/*" multiple />
        </label>
        <div id="edit-image-preview" class="image-preview-grid"></div>
        <div class="admin-grid" style="margin-top:4px;">
          <label style="display:flex;gap:8px;align-items:center;"><input type="checkbox" name="featured" /> Featured</label>
          <label style="display:flex;gap:8px;align-items:center;"><input type="checkbox" name="isPublished" /> Published</label>
        </div>
        <div class="admin-actions">
          <button class="button" type="submit">Save Changes</button>
          <button class="button-secondary" id="close-edit-product-button" type="button">Cancel</button>
        </div>
        <div id="edit-product-result" class="muted"></div>
      </form>
    </dialog>
  `;

  const addProductDialog = document.querySelector("#add-product-dialog");
  const openAddProductButton = document.querySelector("#open-add-product-button");
  const form = document.querySelector("#product-form");
  const title = document.querySelector("#product-form-title");
  const submitButton = document.querySelector("#product-submit-button");
  const cancelButton = document.querySelector("#product-cancel-button");
  const result = document.querySelector("#product-form-result");
  const nameInput = form.elements.name;
  const slugInput = form.elements.slug;
  const imageInput = form.elements.images;
  const preview = document.querySelector("#product-image-preview");
  const searchInput = document.querySelector("#product-search-input");
  const categoryFilter = document.querySelector("#product-filter-category");
  const statusFilter = document.querySelector("#product-filter-status");
  const productList = document.querySelector("#product-admin-list");
  const quickAddDialog = document.querySelector("#quick-add-dialog");
  const openQuickAddButton = document.querySelector("#open-quick-add-button");
  const selectAllInput = document.querySelector("#select-all-products");
  const selectNoneButton = document.querySelector("#select-none-products");
  const bulkPublishButton = document.querySelector("#bulk-publish-button");
  const bulkUnpublishButton = document.querySelector("#bulk-unpublish-button");
  const bulkFeatureButton = document.querySelector("#bulk-feature-button");
  const bulkUnfeatureButton = document.querySelector("#bulk-unfeature-button");
  const bulkMoveCategoryButton = document.querySelector("#bulk-move-category-button");
  const bulkPriceEditButton = document.querySelector("#bulk-price-edit-button");
  const bulkDeleteButton = document.querySelector("#bulk-delete-button");
  const quickAddForm = document.querySelector("#quick-add-form");
  const quickAddImageInput = quickAddForm.elements.images;
  const quickAddPreview = document.querySelector("#quick-add-image-preview");
  const quickAddResult = document.querySelector("#quick-add-result");
  const closeQuickAddButton = document.querySelector("#close-quick-add-button");
  const bulkDeleteDialog = document.querySelector("#bulk-delete-dialog");
  const bulkDeleteMessage = document.querySelector("#bulk-delete-message");
  const cancelBulkDeleteButton = document.querySelector("#cancel-bulk-delete-button");
  const confirmBulkDeleteButton = document.querySelector("#confirm-bulk-delete-button");
  const bulkCategoryDialog = document.querySelector("#bulk-category-dialog");
  const bulkCategoryForm = document.querySelector("#bulk-category-form");
  const cancelBulkCategoryButton = document.querySelector("#cancel-bulk-category-button");
  const bulkPriceDialog = document.querySelector("#bulk-price-dialog");
  const bulkPriceForm = document.querySelector("#bulk-price-form");
  const cancelBulkPriceButton = document.querySelector("#cancel-bulk-price-button");
  const singleDeleteDialog = document.querySelector("#single-delete-dialog");
  const singleDeleteMessage = document.querySelector("#single-delete-message");
  const cancelSingleDeleteButton = document.querySelector("#cancel-single-delete-button");
  const confirmSingleDeleteButton = document.querySelector("#confirm-single-delete-button");
  let slugTouched = false;
  let workingImages = [];
  const selectedProductIds = new Set();
  let pendingDeleteProductId = null;
  let editWorkingImages = [];
  const editProductDialog = document.querySelector("#edit-product-dialog");
  const editProductForm = document.querySelector("#edit-product-form");
  const editProductSubtitle = document.querySelector("#edit-product-subtitle");
  const editImageInput = document.querySelector("#edit-images-input");
  const editImagePreview = document.querySelector("#edit-image-preview");
  const editProductResult = document.querySelector("#edit-product-result");
  const closeEditProductButton = document.querySelector("#close-edit-product-button");

  function toImagePreviewCard(image, index, options = {}) {
    const source = image.objectUrl || image.imageUrl;
    return `
      <figure class="img-card ${image.cover ? "img-card--cover" : ""}">
        <div class="img-card-thumb">
          <img src="${source}" alt="${escapeHtml(image.altText || image.name || "Product image")}" />
          ${image.cover ? `<span class="img-card-badge">Cover</span>` : ""}
        </div>
        <div class="img-card-actions">
          <button class="img-act-btn" type="button" data-image-left="${index}" ${index === 0 ? "disabled" : ""} title="Move left">&#8592;</button>
          <button class="img-act-btn img-act-cover ${image.cover ? "active" : ""}" type="button" data-image-cover="${index}" title="${image.cover ? "Cover image" : "Set as cover"}">&#9733;</button>
          <button class="img-act-btn" type="button" data-image-right="${index}" ${index === options.lastIndex ? "disabled" : ""} title="Move right">&#8594;</button>
          <button class="img-act-btn img-act-remove" type="button" data-image-remove="${index}" title="Remove">&#10005;</button>
        </div>
      </figure>
    `;
  }

  function normalizeWorkingImages(files = []) {
    return files.map((file, index) => ({
      kind: "file",
      file,
      name: file.name,
      altText: file.name,
      objectUrl: URL.createObjectURL(file),
      cover: index === 0,
      label: file.name,
    }));
  }

  function renderSelectedImagePreview() {
    if (!workingImages.length) {
      preview.innerHTML = `<div class="quick-helper">No new images selected yet.</div>`;
      return;
    }

    preview.innerHTML = workingImages
      .map((image, index) => toImagePreviewCard(image, index, { lastIndex: workingImages.length - 1 }))
      .join("");

    preview.querySelectorAll("[data-image-remove]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.imageRemove);
        workingImages.splice(index, 1);
        if (workingImages.length) {
          workingImages.forEach((image, position) => {
            image.cover = position === 0 ? image.cover || !workingImages.some((entry) => entry.cover && entry !== image) : image.cover;
          });
          if (!workingImages.some((image) => image.cover)) {
            workingImages[0].cover = true;
          }
        }
        renderSelectedImagePreview();
      });
    });

    preview.querySelectorAll("[data-image-cover]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.imageCover);
        workingImages = workingImages.map((image, position) => ({ ...image, cover: position === index }));
        renderSelectedImagePreview();
      });
    });

    preview.querySelectorAll("[data-image-left]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.imageLeft);
        if (index <= 0) return;
        [workingImages[index - 1], workingImages[index]] = [workingImages[index], workingImages[index - 1]];
        renderSelectedImagePreview();
      });
    });

    preview.querySelectorAll("[data-image-right]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.imageRight);
        if (index >= workingImages.length - 1) return;
        [workingImages[index], workingImages[index + 1]] = [workingImages[index + 1], workingImages[index]];
        renderSelectedImagePreview();
      });
    });
  }

  function renderEditImagePreview() {
    if (!editWorkingImages.length) {
      editImagePreview.innerHTML = `<div class="quick-helper">No images yet.</div>`;
      return;
    }
    editImagePreview.innerHTML = editWorkingImages
      .map((image, index) => toImagePreviewCard(image, index, { lastIndex: editWorkingImages.length - 1 }))
      .join("");

    editImagePreview.querySelectorAll("[data-image-remove]").forEach((btn) => {
      btn.addEventListener("click", () => {
        editWorkingImages.splice(Number(btn.dataset.imageRemove), 1);
        if (editWorkingImages.length && !editWorkingImages.some((img) => img.cover)) {
          editWorkingImages[0].cover = true;
        }
        renderEditImagePreview();
      });
    });
    editImagePreview.querySelectorAll("[data-image-cover]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.imageCover);
        editWorkingImages = editWorkingImages.map((img, pos) => ({ ...img, cover: pos === idx }));
        renderEditImagePreview();
      });
    });
    editImagePreview.querySelectorAll("[data-image-left]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.imageLeft);
        if (idx <= 0) return;
        [editWorkingImages[idx - 1], editWorkingImages[idx]] = [editWorkingImages[idx], editWorkingImages[idx - 1]];
        renderEditImagePreview();
      });
    });
    editImagePreview.querySelectorAll("[data-image-right]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.imageRight);
        if (idx >= editWorkingImages.length - 1) return;
        [editWorkingImages[idx], editWorkingImages[idx + 1]] = [editWorkingImages[idx + 1], editWorkingImages[idx]];
        renderEditImagePreview();
      });
    });
  }

  function productCardMarkup(product) {
    const isLowStock = product.stockQuantity <= 3;
    const cover = product.images?.[0]?.imageUrl
      ? `<img class="prod-row-thumb" src="${product.images[0].imageUrl}" alt="${escapeHtml(product.name)}" />`
      : `<div class="prod-row-thumb prod-row-thumb-empty">—</div>`;

    const statusChips = [
      product.isPublished
        ? `<span class="prod-chip prod-chip-green">Published</span>`
        : `<span class="prod-chip prod-chip-gray">Draft</span>`,
      product.featured ? `<span class="prod-chip prod-chip-teal">Featured</span>` : "",
      isLowStock ? `<span class="prod-chip prod-chip-warn">Low stock</span>` : "",
    ].join("");

    return `
      <article class="prod-row${selectedProductIds.has(product.id) ? " prod-row-selected" : ""}">
        <label class="prod-row-check">
          <input type="checkbox" data-select-product="${product.id}" ${selectedProductIds.has(product.id) ? "checked" : ""} />
        </label>
        ${cover}
        <div class="prod-row-info">
          <strong class="prod-row-name">${escapeHtml(product.name)}</strong>
          ${product.nameMn ? `<span class="prod-row-mn">${escapeHtml(product.nameMn)}</span>` : ""}
          <span class="prod-row-meta">${escapeHtml(product.brand)} · ${escapeHtml(product.category)}</span>
        </div>
        <div class="prod-row-price">
          <strong>${formatJPY(product.price)}</strong>
          ${product.discountPrice ? `<span class="prod-chip prod-chip-warn">Sale: ${formatJPY(product.discountPrice)}</span>` : ""}
        </div>
        <div class="prod-row-stock${isLowStock ? " prod-row-stock-low" : ""}">
          Stock&nbsp;<strong>${product.stockQuantity}</strong>
        </div>
        <div class="prod-row-chips">${statusChips}</div>
        <div class="prod-row-actions">
          <button class="prod-btn" data-edit-product="${product.id}">Edit</button>
          <button class="prod-btn prod-btn-ghost" data-duplicate-product="${product.id}">Duplicate</button>
          <button class="prod-btn prod-btn-danger" data-delete-product="${product.id}">Delete</button>
        </div>
      </article>
    `;
  }

  function filteredProducts() {
    const query = searchInput.value.trim().toLowerCase();
    const categoryId = categoryFilter.value;
    const status = statusFilter.value;

    return products.filter((product) => {
      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.slug.toLowerCase().includes(query);
      const matchesCategory = !categoryId || String(product.categoryId) === String(categoryId);
      const matchesStatus =
        !status ||
        (status === "published" && product.isPublished) ||
        (status === "draft" && !product.isPublished) ||
        (status === "low-stock" && product.stockQuantity <= 3);

      return matchesQuery && matchesCategory && matchesStatus;
    });
  }

  function bindProductListActions() {
    productList.querySelectorAll("[data-select-product]").forEach((input) => {
      input.addEventListener("change", () => {
        const id = Number(input.dataset.selectProduct);
        if (input.checked) {
          selectedProductIds.add(id);
        } else {
          selectedProductIds.delete(id);
        }
        syncBulkButtons();
      });
    });

    productList.querySelectorAll("[data-edit-product]").forEach((button) => {
      button.addEventListener("click", () => {
        const product = products.find((item) => item.id === Number(button.dataset.editProduct));
        if (!product) return;
        editProductForm.elements.productId.value = product.id;
        editProductForm.elements.brand.value = product.brand;
        editProductForm.elements.name.value = product.name;
        editProductForm.elements.nameMn.value = product.nameMn || "";
        editProductForm.elements.slug.value = product.slug;
        editProductForm.elements.categoryId.value = product.categoryId;
        editProductForm.elements.price.value = product.price;
        editProductForm.elements.discountPrice.value = product.discountPrice || "";
        editProductForm.elements.stockQuantity.value = product.stockQuantity;
        editProductForm.elements.colors.value = product.colors.join(", ");
        editProductForm.elements.sizes.value = product.sizes.join(", ");
        editProductForm.elements.description.value = product.description;
        editProductForm.elements.featured.checked = Boolean(product.featured);
        editProductForm.elements.isPublished.checked = Boolean(product.isPublished);
        editProductSubtitle.textContent = product.name;
        editProductResult.textContent = "";
        editWorkingImages = (product.images || []).map((image, index) => ({
          kind: "existing",
          imageUrl: image.imageUrl,
          altText: image.altText || product.name,
          label: index === 0 ? "Cover image" : "Image",
          cover: index === 0,
        }));
        renderEditImagePreview();
        editProductDialog.showModal();
      });
    });

    productList.querySelectorAll("[data-duplicate-product]").forEach((button) => {
      button.addEventListener("click", async () => {
        const response = await api(`/api/admin/products/${button.dataset.duplicateProduct}/duplicate`, {
          method: "POST",
        });
        const data = await response.json();
        result.textContent = response.ok ? `Duplicated: ${data.name}` : data.error || "Product could not be duplicated.";
        if (response.ok) {
          await reload();
        }
      });
    });

    productList.querySelectorAll("[data-delete-product]").forEach((button) => {
      button.addEventListener("click", () => {
        const product = products.find((item) => item.id === Number(button.dataset.deleteProduct));
        if (!product) return;
        pendingDeleteProductId = product.id;
        singleDeleteMessage.textContent = `You are about to permanently delete "${product.name}".`;
        singleDeleteDialog.showModal();
      });
    });
  }

  function renderProductList() {
    const list = filteredProducts();
    productList.innerHTML = list.length
      ? list.map(productCardMarkup).join("")
      : `<div class="empty-state">No products match your filters.</div>`;
    bindProductListActions();
    syncBulkButtons();
  }

  function syncBulkButtons() {
    const disabled = selectedProductIds.size === 0;
    bulkPublishButton.disabled = disabled;
    bulkUnpublishButton.disabled = disabled;
    bulkFeatureButton.disabled = disabled;
    bulkUnfeatureButton.disabled = disabled;
    bulkMoveCategoryButton.disabled = disabled;
    bulkPriceEditButton.disabled = disabled;
    bulkDeleteButton.disabled = disabled;
    const visibleIds = filteredProducts().map((product) => product.id);
    selectAllInput.checked = Boolean(visibleIds.length) && visibleIds.every((id) => selectedProductIds.has(id));
  }

  async function runBulkAction(action, extra = {}) {
    if (!selectedProductIds.size) {
      result.textContent = "Select at least one product first.";
      return;
    }

    const response = await api("/api/admin/products/bulk", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action,
        ids: [...selectedProductIds],
        ...extra,
      }),
    });
    const data = await response.json();
    result.textContent = response.ok ? data.message : data.error || "Bulk action failed.";
    if (response.ok) {
      selectedProductIds.clear();
      await reload();
    }
  }

  async function uploadWorkingImages(onProgress) {
    const coverFirst = [...workingImages].sort((left, right) => Number(right.cover) - Number(left.cover));
    const fileImages = coverFirst.filter((img) => img.kind === "file");
    const images = [];
    let uploaded = 0;

    for (const image of coverFirst) {
      if (image.kind === "file") {
        uploaded++;
        if (onProgress) onProgress(uploaded, fileImages.length);
        const [imageUrl] = await uploadFiles([image.file]);
        images.push({ imageUrl, altText: image.altText || image.name });
      } else {
        images.push({ imageUrl: image.imageUrl, altText: image.altText });
      }
    }

    return images;
  }

  function renderQuickAddPreview(files = []) {
    if (!files.length) {
      quickAddPreview.innerHTML = `<div class="quick-helper">No images selected yet.</div>`;
      return;
    }

    quickAddPreview.innerHTML = files
      .map(
        (file) => `
          <figure class="image-preview-card">
            <img src="${URL.createObjectURL(file)}" alt="${escapeHtml(file.name)}" />
            <figcaption>${escapeHtml(file.name)}</figcaption>
          </figure>
        `,
      )
      .join("");
  }

  function resetForm() {
    form.reset();
    form.elements.productId.value = "";
    form.elements.brand.value = "Contact_Lens";
    title.textContent = "New listing";
    submitButton.disabled = false;
    submitButton.textContent = "Add Product";
    result.textContent = "";
    slugTouched = false;
    workingImages = [];
    preview.innerHTML = `<div class="quick-helper">No images selected yet.</div>`;
  }

  preview.innerHTML = `<div class="quick-helper">No images selected yet.</div>`;
  quickAddPreview.innerHTML = `<div class="quick-helper">No images selected yet.</div>`;
  editImagePreview.innerHTML = `<div class="quick-helper">No images yet.</div>`;

  nameInput.addEventListener("input", () => {
    if (!slugTouched) {
      slugInput.value = slugify(nameInput.value);
    }
  });

  slugInput.addEventListener("input", () => {
    slugTouched = Boolean(slugInput.value.trim());
  });

  function addToWorkingImages(files) {
    const newImages = normalizeWorkingImages(files);
    workingImages = [...workingImages, ...newImages];
    if (!workingImages.some((img) => img.cover) && workingImages.length) {
      workingImages[0].cover = true;
    }
    renderSelectedImagePreview();
  }

  imageInput.addEventListener("change", () => {
    addToWorkingImages(Array.from(imageInput.files || []));
  });

  enableDragDrop(document.querySelector("label[for='product-images-input']"), addToWorkingImages);

  [searchInput, categoryFilter, statusFilter].forEach((element) => {
    element.addEventListener("input", renderProductList);
    element.addEventListener("change", renderProductList);
  });

  openAddProductButton.addEventListener("click", () => {
    resetForm();
    addProductDialog.showModal();
  });

  openQuickAddButton.addEventListener("click", () => {
    quickAddResult.textContent = "";
    quickAddForm.reset();
    renderQuickAddPreview([]);
    quickAddDialog.showModal();
  });

  selectAllInput.addEventListener("change", () => {
    const visibleIds = filteredProducts().map((product) => product.id);
    if (selectAllInput.checked) {
      visibleIds.forEach((id) => selectedProductIds.add(id));
    } else {
      visibleIds.forEach((id) => selectedProductIds.delete(id));
    }
    renderProductList();
  });

  selectNoneButton.addEventListener("click", () => {
    selectedProductIds.clear();
    renderProductList();
  });

  closeQuickAddButton.addEventListener("click", () => {
    quickAddDialog.close();
  });

  cancelBulkDeleteButton.addEventListener("click", () => {
    bulkDeleteDialog.close();
  });

  cancelBulkCategoryButton.addEventListener("click", () => {
    bulkCategoryDialog.close();
  });

  cancelBulkPriceButton.addEventListener("click", () => {
    bulkPriceDialog.close();
  });

  cancelSingleDeleteButton.addEventListener("click", () => {
    pendingDeleteProductId = null;
    singleDeleteDialog.close();
  });

  closeEditProductButton.addEventListener("click", () => {
    editProductDialog.close();
  });

  function addToEditWorkingImages(files) {
    const newImages = normalizeWorkingImages(files);
    editWorkingImages = [...editWorkingImages, ...newImages];
    if (!editWorkingImages.some((img) => img.cover) && editWorkingImages.length) {
      editWorkingImages[0].cover = true;
    }
    renderEditImagePreview();
  }

  editImageInput.addEventListener("change", () => {
    addToEditWorkingImages(Array.from(editImageInput.files || []));
  });

  enableDragDrop(document.querySelector("label[for='edit-images-input']"), addToEditWorkingImages);

  editProductForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(editProductForm);
    const productId = formData.get("productId");
    const coverFirst = [...editWorkingImages].sort((a, b) => Number(b.cover) - Number(a.cover));
    const images = [];
    for (const image of coverFirst) {
      if (image.kind === "file") {
        const [imageUrl] = await uploadFiles([image.file]);
        images.push({ imageUrl, altText: image.altText || image.name });
      } else {
        images.push({ imageUrl: image.imageUrl, altText: image.altText });
      }
    }
    const payload = {
      brand: formData.get("brand"),
      name: formData.get("name"),
      nameMn: formData.get("nameMn") || "",
      slug: formData.get("slug"),
      categoryId: Number(formData.get("categoryId")),
      price: Number(formData.get("price")),
      discountPrice: formData.get("discountPrice") ? Number(formData.get("discountPrice")) : null,
      stockQuantity: Number(formData.get("stockQuantity")),
      colors: String(formData.get("colors") || "").split(",").map((v) => v.trim()).filter(Boolean),
      sizes: String(formData.get("sizes") || "").split(",").map((v) => v.trim()).filter(Boolean),
      description: formData.get("description"),
      featured: formData.get("featured") === "on",
      isPublished: formData.get("isPublished") === "on",
      images,
    };
    const response = await api(`/api/admin/products/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    editProductResult.textContent = response.ok
      ? `Saved: ${data.name}`
      : data.error || "Could not save the product.";
    if (response.ok) {
      editProductDialog.close();
      await reload();
    }
  });

  confirmBulkDeleteButton.addEventListener("click", async () => {
    bulkDeleteDialog.close();
    await runBulkAction("delete");
  });

  confirmSingleDeleteButton.addEventListener("click", async () => {
    if (!pendingDeleteProductId) {
      singleDeleteDialog.close();
      return;
    }
    const deleteId = pendingDeleteProductId;
    pendingDeleteProductId = null;
    singleDeleteDialog.close();
    const response = await api(`/api/admin/products/${deleteId}`, { method: "DELETE" });
    const data = await response.json().catch(() => ({}));
    result.textContent = response.ok ? "Product deleted." : data.error || "Product could not be deleted.";
    if (response.ok) {
      selectedProductIds.delete(deleteId);
      await reload();
    }
  });

  bulkPublishButton.addEventListener("click", async () => {
    await runBulkAction("publish");
  });

  bulkUnpublishButton.addEventListener("click", async () => {
    await runBulkAction("unpublish");
  });

  bulkFeatureButton.addEventListener("click", async () => {
    await runBulkAction("feature");
  });

  bulkUnfeatureButton.addEventListener("click", async () => {
    await runBulkAction("unfeature");
  });

  bulkMoveCategoryButton.addEventListener("click", () => {
    if (!selectedProductIds.size) {
      result.textContent = "Select at least one product first.";
      return;
    }
    bulkCategoryForm.reset();
    bulkCategoryDialog.showModal();
  });

  bulkPriceEditButton.addEventListener("click", () => {
    if (!selectedProductIds.size) {
      result.textContent = "Select at least one product first.";
      return;
    }
    bulkPriceForm.reset();
    bulkPriceDialog.showModal();
  });

  bulkDeleteButton.addEventListener("click", async () => {
    if (!selectedProductIds.size) {
      result.textContent = "Select at least one product first.";
      return;
    }
    bulkDeleteMessage.textContent = `You are about to permanently delete ${selectedProductIds.size} selected product${selectedProductIds.size === 1 ? "" : "s"}.`;
    bulkDeleteDialog.showModal();
  });

  bulkCategoryForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const categoryId = Number(bulkCategoryForm.elements.categoryId.value);
    bulkCategoryDialog.close();
    await runBulkAction("move-category", { categoryId });
  });

  bulkPriceForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const price = bulkPriceForm.elements.price.value;
    const discountPrice = bulkPriceForm.elements.discountPrice.value;
    bulkPriceDialog.close();
    await runBulkAction("set-price", {
      price: Number(price),
      discountPrice: discountPrice ? Number(discountPrice) : null,
    });
  });

  let quickAddFiles = [];

  function setQuickAddFiles(files) {
    quickAddFiles = files;
    renderQuickAddPreview(files);
  }

  quickAddImageInput.addEventListener("change", () => {
    setQuickAddFiles([...quickAddFiles, ...Array.from(quickAddImageInput.files || [])]);
  });

  enableDragDrop(document.querySelector("label[for='quick-add-images-input']"), (files) => {
    setQuickAddFiles([...quickAddFiles, ...files]);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = "Saving…";
    result.textContent = "";
    try {
      const formData = new FormData(form);
      const payload = {
        brand: formData.get("brand"),
        name: formData.get("name"),
        nameMn: formData.get("nameMn") || "",
        slug: formData.get("slug"),
        categoryId: Number(formData.get("categoryId")),
        price: Number(formData.get("price")),
        discountPrice: formData.get("discountPrice") ? Number(formData.get("discountPrice")) : null,
        stockQuantity: Number(formData.get("stockQuantity")),
        colors: String(formData.get("colors") || "").split(",").map((v) => v.trim()).filter(Boolean),
        sizes: String(formData.get("sizes") || "").split(",").map((v) => v.trim()).filter(Boolean),
        description: formData.get("description"),
        featured: formData.get("featured") === "on",
        isPublished: formData.get("isPublished") === "on",
        images: await uploadWorkingImages((i, total) => {
          submitButton.textContent = total > 1 ? `Uploading ${i}/${total}…` : "Uploading…";
        }),
      };
      const response = await api("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        result.textContent = data.error || "Product could not be saved.";
        return;
      }
      addProductDialog.close();
      showToast(`Product added: ${data.name}`);
      await reload();
    } catch (err) {
      result.textContent = err.message || "Something went wrong.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Add Product";
    }
  });

  cancelButton.addEventListener("click", () => {
    addProductDialog.close();
    resetForm();
  });

  quickAddForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const qaSubmit = quickAddForm.querySelector("[type=submit]");
    qaSubmit.disabled = true;
    qaSubmit.textContent = "Adding…";
    try {
      const formData = new FormData(quickAddForm);
      const qaProductName = String(formData.get("name") || "");
      const files = quickAddFiles.length ? quickAddFiles : formData.getAll("images").filter((file) => file && file.size);
      const uploadedUrls = await uploadFiles(files);
      const payload = {
        brand: formData.get("brand"),
        name: qaProductName,
        nameMn: formData.get("nameMn") || "",
        slug: slugify(qaProductName),
        categoryId: Number(formData.get("categoryId")),
        price: Number(formData.get("price")),
        discountPrice: null,
        stockQuantity: Number(formData.get("stockQuantity")),
        colors: [],
        sizes: [],
        description: formData.get("description"),
        featured: false,
        isPublished: true,
        images: uploadedUrls.map((imageUrl) => ({ imageUrl, altText: qaProductName })),
      };
      const response = await api("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        quickAddResult.textContent = data.error || "Quick add failed.";
        return;
      }
      quickAddFiles = [];
      quickAddDialog.close();
      showToast(`Product added: ${data.name}`);
      await reload();
    } catch (err) {
      quickAddResult.textContent = err.message || "Something went wrong.";
    } finally {
      qaSubmit.disabled = false;
      qaSubmit.textContent = "Create Product";
    }
  });

  renderProductList();
  syncBulkButtons();
}

function renderCategoriesTab(adminContent, categories, reload) {
  adminContent.innerHTML = `
    <div class="cat-layout">
      <form id="category-form" class="settings-card">
        <div class="settings-section-head">
          <h3 id="category-form-title">Add Category</h3>
        </div>
        <input name="categoryId" type="hidden" />
        <div class="settings-field">
          <label>Name (English)</label>
          <input name="name" placeholder="e.g. Dresses" required />
        </div>
        <div class="settings-field">
          <label>Нэр (Монгол)</label>
          <input name="nameMn" placeholder="e.g. Даашинз — optional" />
        </div>
        <div class="settings-field">
          <label>Slug</label>
          <input name="slug" placeholder="daily" required />
          <span class="settings-hint">Auto-generated from name — edit if needed.</span>
        </div>
        <div class="settings-field">
          <label>Description <span class="settings-optional">(optional)</span></label>
          <textarea name="description" placeholder="Short description shown to shoppers" style="min-height:68px;resize:vertical;"></textarea>
        </div>
        <div class="settings-field">
          <label>Sort order <span class="settings-optional">(optional)</span></label>
          <input name="sortOrder" type="number" min="0" placeholder="0" style="max-width:100px;" />
        </div>
        <div class="settings-foot">
          <button class="button" id="category-submit-button" type="submit">Add Category</button>
          <button class="prod-btn prod-btn-ghost hidden" id="category-cancel-button" type="button">Cancel</button>
          <div id="category-form-result" class="settings-result-msg"></div>
        </div>
      </form>

      <div class="cat-list">
        ${categories.length ? categories.map((cat) => `
          <article class="cat-row">
            <div class="cat-row-names">
              <strong>${escapeHtml(cat.name)}</strong>
              ${cat.name_mn ? `<span class="bilingual-mn">${escapeHtml(cat.name_mn)}</span>` : ""}
            </div>
            <div class="cat-row-meta">
              <code class="cat-slug">${escapeHtml(cat.slug)}</code>
              <span class="atab-meta">${cat.product_count || 0} product${cat.product_count !== 1 ? "s" : ""}</span>
            </div>
            ${cat.description ? `<p class="cat-desc">${escapeHtml(cat.description)}</p>` : "<span></span>"}
            <div class="cat-row-actions">
              <button class="prod-btn" data-edit-category="${cat.id}">Edit</button>
              <button class="prod-btn prod-btn-danger" data-delete-category="${cat.id}" data-category-name="${escapeHtml(cat.name)}">Delete</button>
            </div>
          </article>`).join("")
        : `<div class="atab-empty">No categories yet.</div>`}
      </div>
    </div>
  `;

  const form = document.querySelector("#category-form");
  const title = document.querySelector("#category-form-title");
  const submitButton = document.querySelector("#category-submit-button");
  const cancelButton = document.querySelector("#category-cancel-button");
  const formResult = document.querySelector("#category-form-result");
  const nameInput = form.elements.name;
  const slugInput = form.elements.slug;
  let slugTouched = false;

  function resetForm() {
    form.reset();
    form.elements.categoryId.value = "";
    title.textContent = "Add Category";
    submitButton.textContent = "Add Category";
    submitButton.disabled = false;
    cancelButton.classList.add("hidden");
    formResult.textContent = "";
    slugTouched = false;
  }

  nameInput.addEventListener("input", () => {
    if (!slugTouched) slugInput.value = slugify(nameInput.value);
  });
  slugInput.addEventListener("input", () => {
    slugTouched = Boolean(slugInput.value.trim());
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = "Saving…";
    formResult.textContent = "";
    const formData = new FormData(form);
    const categoryId = formData.get("categoryId");
    try {
      const response = await api(categoryId ? `/api/admin/categories/${categoryId}` : "/api/admin/categories", {
        method: categoryId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          nameMn: formData.get("nameMn") || "",
          slug: formData.get("slug"),
          description: formData.get("description") || "",
          sortOrder: Number(formData.get("sortOrder") || 0),
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        formResult.textContent = data.error || "Could not save category.";
        return;
      }
      showToast(categoryId ? "Category updated." : `Category "${data.name}" added.`);
      await reload();
    } catch (err) {
      formResult.textContent = err.message || "Something went wrong.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = categoryId ? "Update Category" : "Add Category";
    }
  });

  cancelButton.addEventListener("click", resetForm);

  adminContent.querySelectorAll("[data-edit-category]").forEach((button) => {
    button.addEventListener("click", () => {
      const cat = categories.find((item) => item.id === Number(button.dataset.editCategory));
      if (!cat) return;
      form.elements.categoryId.value = cat.id;
      form.elements.name.value = cat.name;
      form.elements.nameMn.value = cat.name_mn || "";
      form.elements.slug.value = cat.slug;
      form.elements.description.value = cat.description || "";
      form.elements.sortOrder.value = cat.sort_order || 0;
      title.textContent = `Editing: ${cat.name}`;
      submitButton.textContent = "Update Category";
      cancelButton.classList.remove("hidden");
      slugTouched = true;
      nameInput.focus();
    });
  });

  adminContent.querySelectorAll("[data-delete-category]").forEach((button) => {
    button.addEventListener("click", async () => {
      const name = button.dataset.categoryName;
      if (!confirm(`Delete "${name}"?\n\nProducts in this category will be moved to another category automatically.`)) return;
      button.disabled = true;
      const response = await api(`/api/admin/categories/${button.dataset.deleteCategory}`, { method: "DELETE" });
      if (response.ok) {
        showToast(`Category "${name}" deleted.`, "success");
        await loadCategories();
        await reload();
      } else {
        const data = await response.json().catch(() => ({}));
        showToast(data.error || "Could not delete category.", "error");
        button.disabled = false;
      }
    });
  });
}

function renderOrdersTab(adminContent, orders, reload) {
  const ORDER_STATUSES = ["pending","processing","shipped","completed","cancelled"];
  const PAYMENT_STATUSES = ["unpaid","pending","paid","failed","refunded"];

  const orderStatusColor = { pending:"badge-amber", processing:"badge-blue", shipped:"badge-purple", completed:"badge-green", cancelled:"badge-red" };
  const paymentStatusColor = { unpaid:"badge-red", pending:"badge-amber", paid:"badge-green", failed:"badge-darkred", refunded:"badge-gray" };

  adminContent.innerHTML = `
    <div class="atab-list">
      ${orders.length ? orders.map((order) => `
        <article class="order-row">
          <div class="order-row-id">
            <strong class="order-number">${escapeHtml(order.order_number)}</strong>
            <span class="atab-meta">${new Date(order.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}</span>
          </div>
          <div class="order-row-customer">
            <div class="atab-avatar">${escapeHtml(order.customer_name.charAt(0).toUpperCase())}</div>
            <div>
              <div class="atab-name">${escapeHtml(order.customer_name)}</div>
              <div class="atab-meta">${escapeHtml(order.customer_email)}</div>
            </div>
          </div>
          <div class="order-row-amount">
            <strong>${formatJPY(order.grand_total)}</strong>
            <span class="atab-meta">${escapeHtml(paymentMethodLabel(order.payment_method))}</span>
          </div>
          <div class="order-row-controls">
            <div class="atab-label">Order status</div>
            <div class="status-chips">
              ${ORDER_STATUSES.map(s => `<button class="status-chip-btn${order.status===s?" active "+orderStatusColor[s]:""}" data-status-order="${order.id}" data-status="${s}">${s}</button>`).join("")}
            </div>
          </div>
          <div class="order-row-controls">
            <div class="atab-label">Tracking number</div>
            <div class="tracking-input-row">
              <input class="tracking-input" type="text" placeholder="e.g. JPN123456789" value="${escapeHtml(order.tracking_number || "")}" data-tracking-order="${order.id}" />
              <button class="btn-save-tracking" data-save-tracking="${order.id}">Save</button>
            </div>
          </div>
          <div class="order-row-controls">
            <div class="atab-label">Payment</div>
            <div class="status-chips">
              ${PAYMENT_STATUSES.map(s => `<button class="status-chip-btn${order.payment_status===s?" active "+paymentStatusColor[s]:""}" data-payment-order="${order.id}" data-current-status="${escapeHtml(order.status)}" data-payment-status="${s}">${s}</button>`).join("")}
            </div>
          </div>
        </article>`).join("")
      : `<div class="atab-empty">No orders yet.</div>`}
    </div>
  `;

  adminContent.querySelectorAll("[data-status-order]").forEach((button) => {
    button.addEventListener("click", async () => {
      button.disabled = true;
      const trackingInput = adminContent.querySelector(`[data-tracking-order="${button.dataset.statusOrder}"]`);
      const response = await api(`/api/admin/orders/${button.dataset.statusOrder}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: button.dataset.status, tracking_number: trackingInput?.value.trim() || null }),
      });
      if (response.ok) {
        showToast(`Order status → ${button.dataset.status}`);
        await reload();
      } else {
        button.disabled = false;
        showToast("Could not update order status.");
      }
    });
  });

  adminContent.querySelectorAll("[data-save-tracking]").forEach((button) => {
    button.addEventListener("click", async () => {
      button.disabled = true;
      const orderId = button.dataset.saveTracking;
      const trackingInput = adminContent.querySelector(`[data-tracking-order="${orderId}"]`);
      const currentStatusChip = adminContent.querySelector(`[data-status-order="${orderId}"].active`);
      const response = await api(`/api/admin/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tracking_number: trackingInput?.value.trim() || null,
          status: currentStatusChip?.dataset.status,
        }),
      });
      button.disabled = false;
      if (response.ok) {
        showToast("Tracking number saved.");
      } else {
        showToast("Could not save tracking number.");
      }
    });
  });

  adminContent.querySelectorAll("[data-payment-order]").forEach((button) => {
    button.addEventListener("click", async () => {
      button.disabled = true;
      const response = await api(`/api/admin/orders/${button.dataset.paymentOrder}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payment_status: button.dataset.paymentStatus,
          status: button.dataset.currentStatus,
        }),
      });
      if (response.ok) {
        showToast(`Payment → ${button.dataset.paymentStatus}`);
        await reload();
      } else {
        button.disabled = false;
        showToast("Could not update payment status.");
      }
    });
  });
}

function renderMessagesTab(adminContent, messages, reload) {
  const subjectLabels = { order: "Order inquiry", return: "Return or exchange", product: "Product question", shipping: "Shipping & delivery", other: "Other" };

  adminContent.innerHTML = `
    <div class="atab-list">
      ${messages.length ? messages.map((msg) => `
        <article class="message-row${msg.read_at ? "" : " message-unread"}" data-message-id="${msg.id}">
          <div class="message-row-meta">
            <strong class="atab-name">${escapeHtml(msg.name)}</strong>
            <span class="atab-meta">${escapeHtml(msg.email)}</span>
            ${msg.subject ? `<span class="message-subject-badge">${escapeHtml(subjectLabels[msg.subject] || msg.subject)}</span>` : ""}
            ${!msg.read_at ? `<span class="message-subject-badge" style="background:var(--teal);color:#fff;border-color:var(--teal);">New</span>` : ""}
          </div>

          <div class="message-thread">
            <div class="thread-bubble thread-bubble-customer">
              <div class="thread-bubble-header">
                <span class="thread-sender">${escapeHtml(msg.name)}</span>
                <span class="thread-time">${new Date(msg.created_at).toLocaleString()}</span>
              </div>
              <p>${escapeHtml(msg.message)}</p>
            </div>
            ${(msg.replies || []).map((r) => `
              <div class="thread-bubble ${r.sender === "admin" ? "thread-bubble-admin" : "thread-bubble-customer"}">
                <div class="thread-bubble-header">
                  <span class="thread-sender">${r.sender === "admin" ? "Support" : escapeHtml(msg.name)}</span>
                  <span class="thread-time">${new Date(r.created_at).toLocaleString()}</span>
                </div>
                <p>${escapeHtml(r.content)}</p>
              </div>`).join("")}
          </div>

          <div class="message-reply-form">
            <textarea class="reply-textarea" placeholder="Write a reply to ${escapeHtml(msg.name)}…" rows="3" data-reply-for="${msg.id}"></textarea>
            <div class="message-reply-actions">
              <button class="button button-sm send-reply-btn" data-msg-id="${msg.id}">Send reply</button>
            </div>
          </div>
        </article>`).join("")
      : `<div class="atab-empty">No messages yet.</div>`}
    </div>
  `;

  adminContent.querySelectorAll(".send-reply-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const textarea = adminContent.querySelector(`textarea[data-reply-for="${btn.dataset.msgId}"]`);
      const content = textarea.value.trim();
      if (!content) return;
      btn.disabled = true;
      btn.textContent = "Sending…";
      const res = await api(`/api/admin/messages/${btn.dataset.msgId}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      if (res.ok) {
        await reload();
      } else {
        const data = await res.json();
        showToast(data.error || "Could not send reply.");
        btn.disabled = false;
        btn.textContent = "Send reply";
      }
    });
  });
}

function renderCustomersTab(adminContent, customers, reload) {
  adminContent.innerHTML = `
    <div class="atab-list">
      ${customers.length ? customers.map((customer) => `
        <article class="customer-row" data-cid="${customer.id}">
          <div class="atab-avatar atab-avatar-lg">
            ${customer.avatar_url
              ? `<img src="${escapeHtml(customer.avatar_url)}" alt="" class="customer-avatar-img" />`
              : escapeHtml(customer.name.charAt(0).toUpperCase())}
          </div>
          <div class="customer-row-info">
            <strong class="atab-name">${escapeHtml(customer.name)}</strong>
            <span class="atab-meta">${escapeHtml(customer.email)}</span>
            <span class="atab-meta">
              via ${escapeHtml(customer.provider)}
              &middot; joined ${new Date(customer.created_at).toLocaleDateString()}
              ${customer.last_order_at ? `&middot; last order ${new Date(customer.last_order_at).toLocaleDateString()}` : ""}
            </span>
          </div>
          <div class="customer-row-stats">
            <div class="cstat"><span class="cstat-val">${customer.order_count || 0}</span><span class="cstat-label">orders</span></div>
            <div class="cstat"><span class="cstat-val">${formatJPY(customer.total_spent || 0)}</span><span class="cstat-label">spent</span></div>
          </div>
          <div class="customer-row-role">
            <button class="role-btn${customer.role==="customer"?" role-btn-active":""}" data-customer-role="${customer.id}" data-role="customer">Customer</button>
            <button class="role-btn role-btn-admin${customer.role==="admin"?" role-btn-active-admin":""}" data-customer-role="${customer.id}" data-role="admin">Admin</button>
            <button class="role-btn customer-details-btn" data-details-id="${customer.id}">Details ▾</button>
          </div>
          <div class="customer-details-panel hidden" id="cdetails-${customer.id}"></div>
        </article>`).join("")
      : `<div class="atab-empty">No customers yet.</div>`}
    </div>
  `;

  adminContent.querySelectorAll("[data-customer-role]").forEach((button) => {
    button.addEventListener("click", async () => {
      button.disabled = true;
      const response = await api(`/api/admin/customers/${button.dataset.customerRole}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: button.dataset.role }),
      });
      const data = await response.json();
      if (!response.ok) {
        showToast(data.error || "Could not update role.");
        button.disabled = false;
        return;
      }
      showToast(`Role set to ${button.dataset.role}.`);
      await reload();
    });
  });

  adminContent.querySelectorAll(".customer-details-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.detailsId;
      const panel = document.getElementById(`cdetails-${id}`);
      if (!panel.classList.contains("hidden")) {
        panel.classList.add("hidden");
        btn.textContent = "Details ▾";
        return;
      }
      btn.textContent = "Loading…";
      const res = await api(`/api/admin/customers/${id}`);
      const d = await res.json();
      const statusBadge = (s) => `<span class="ostatus ostatus-${s === "confirmed" || s === "completed" ? "green" : s === "shipped" ? "purple" : s === "cancelled" ? "red" : "amber"}">${s}</span>`;
      panel.innerHTML = `
        <div class="cdetails-grid">
          <div class="cdetails-block">
            <h4>Account</h4>
            <div class="cdetails-row"><span>Email</span><strong>${escapeHtml(d.user.email)}</strong></div>
            <div class="cdetails-row"><span>Provider</span><strong>${escapeHtml(d.user.provider)}</strong></div>
            <div class="cdetails-row"><span>Joined</span><strong>${new Date(d.user.created_at).toLocaleDateString()}</strong></div>
          </div>
          <div class="cdetails-block">
            <h4>Orders ${d.orders.length ? `(${d.orders.length})` : ""}</h4>
            ${d.orders.length ? d.orders.map((o) => `
              <div class="cdetails-row">
                <span>${escapeHtml(o.order_number)}</span>
                <span>${statusBadge(o.status)} ${formatJPY(o.grand_total)}</span>
              </div>`).join("") : `<p class="muted" style="font-size:0.85rem;">No orders yet.</p>`}
          </div>
          <div class="cdetails-block">
            <h4>Addresses ${d.addresses.length ? `(${d.addresses.length})` : ""}</h4>
            ${d.addresses.length ? d.addresses.map((a) => `
              <div class="cdetails-row">
                <span>${escapeHtml(a.full_name)}</span>
                <span>${escapeHtml(a.prefecture)}, ${escapeHtml(a.city)}</span>
              </div>`).join("") : `<p class="muted" style="font-size:0.85rem;">No addresses saved.</p>`}
          </div>
          <div class="cdetails-block">
            <h4>Messages ${d.messages.length ? `(${d.messages.length})` : ""}</h4>
            ${d.messages.length ? d.messages.map((m) => `
              <div class="cdetails-row">
                <span>${m.subject || "General"}</span>
                <span>${m.reply_count} repl${m.reply_count === 1 ? "y" : "ies"} &middot; ${new Date(m.created_at).toLocaleDateString()}</span>
              </div>`).join("") : `<p class="muted" style="font-size:0.85rem;">No messages sent.</p>`}
          </div>
        </div>
      `;
      panel.classList.remove("hidden");
      btn.textContent = "Details ▴";
    });
  });
}

function renderSettingsTab(adminContent, settings, reload) {
  adminContent.innerHTML = `
    <div class="settings-layout">
      <form id="settings-form" class="settings-card">
        <div class="settings-section-head">
          <h3>Shop Settings</h3>
          <p>Basic configuration for your store.</p>
        </div>
        <div class="settings-field">
          <label for="set-shopName">Shop name</label>
          <input id="set-shopName" name="shopName" value="${escapeHtml(settings.shopName || "")}" placeholder="e.g. Contact_Lens" required />
          <span class="settings-hint">Shown in the header and browser tab.</span>
        </div>
        <div class="settings-field">
          <label for="set-currency">Currency code</label>
          <input id="set-currency" name="currency" value="${escapeHtml(settings.currency || "JPY")}" placeholder="JPY" required style="max-width:120px;" />
          <span class="settings-hint">Three-letter ISO code, e.g. JPY, USD, EUR.</span>
        </div>
        <div class="settings-field">
          <label for="set-supportEmail">Support email</label>
          <input id="set-supportEmail" name="supportEmail" type="email" value="${escapeHtml(settings.supportEmail || "")}" placeholder="support@example.com" required />
          <span class="settings-hint">Displayed on the Contact page.</span>
        </div>
        <div class="settings-foot">
          <button class="button" id="settings-submit-btn" type="submit">Save Settings</button>
          <div id="settings-result" class="settings-result-msg"></div>
        </div>
      </form>
    </div>
  `;

  const settingsForm = document.querySelector("#settings-form");
  const settingsBtn = document.querySelector("#settings-submit-btn");
  const settingsResult = document.querySelector("#settings-result");

  settingsForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    settingsBtn.disabled = true;
    settingsBtn.textContent = "Saving…";
    settingsResult.textContent = "";
    const form = new FormData(event.currentTarget);
    try {
      const response = await api("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shopName: form.get("shopName"),
          currency: form.get("currency"),
          supportEmail: form.get("supportEmail"),
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        settingsResult.textContent = data.error || "Settings could not be saved.";
        return;
      }
      state.settings = data;
      updateHeader();
      showToast("Settings saved.");
    } catch (err) {
      settingsResult.textContent = err.message || "Something went wrong.";
    } finally {
      settingsBtn.disabled = false;
      settingsBtn.textContent = "Save Settings";
    }
  });
}

function renderHomeTab(adminContent, settings, reload) {
  const s = settings || {};
  adminContent.innerHTML = `
    <div class="settings-layout">
      <form id="home-form" class="settings-card">
        <div class="settings-section-head">
          <h3>Hero Section</h3>
          <p>Edit the main banner text on the home page.</p>
        </div>

        <div class="settings-field">
          <label>Badge label</label>
          <input name="heroBadge" value="${escapeHtml(s.heroBadge || "contact lens store")}" placeholder="contact lens store" />
          <span class="settings-hint">Small label above the title (uppercase).</span>
        </div>
        <div class="settings-field">
          <label>Hero title</label>
          <textarea name="heroTitle" rows="2" style="resize:vertical;">${escapeHtml(s.heroTitle || "")}</textarea>
          <span class="settings-hint">Main headline text.</span>
        </div>
        <div class="settings-field">
          <label>Hero subtitle</label>
          <textarea name="heroText" rows="2" style="resize:vertical;">${escapeHtml(s.heroText || "")}</textarea>
          <span class="settings-hint">Descriptive paragraph below the title.</span>
        </div>
        <div class="home-tab-row">
          <div class="settings-field">
            <label>Primary button</label>
            <input name="heroPrimaryBtn" value="${escapeHtml(s.heroPrimaryBtn || "Browse lenses")}" />
          </div>
          <div class="settings-field">
            <label>Secondary button</label>
            <input name="heroSecondaryBtn" value="${escapeHtml(s.heroSecondaryBtn || "Contact us")}" />
          </div>
        </div>

        <div class="settings-section-head" style="margin-top:24px;">
          <h3>Side Panels</h3>
          <p>Labels shown on the left and right hero panels.</p>
        </div>
        <div class="home-tab-row">
          <div class="settings-field">
            <label>Left panel label</label>
            <input name="heroLeftLabel" value="${escapeHtml(s.heroLeftLabel || "New arrival")}" />
          </div>
          <div class="settings-field">
            <label>Left panel title</label>
            <input name="heroLeftTitle" value="${escapeHtml(s.heroLeftTitle || "DAILY FRESH")}" />
          </div>
        </div>
        <div class="home-tab-row">
          <div class="settings-field">
            <label>Right panel label</label>
            <input name="heroRightLabel" value="${escapeHtml(s.heroRightLabel || "Seasonal pick")}" />
          </div>
          <div class="settings-field">
            <label>Right panel title</label>
            <input name="heroRightTitle" value="${escapeHtml(s.heroRightTitle || "soft daily wear")}" />
          </div>
        </div>

        <div class="settings-section-head" style="margin-top:24px;">
          <h3>Product Sections</h3>
          <p>Titles for the Featured and New In sections.</p>
        </div>
        <div class="home-tab-row">
          <div class="settings-field">
            <label>Featured section title</label>
            <input name="featuredTitle" value="${escapeHtml(s.featuredTitle || "Featured Lenses")}" />
          </div>
          <div class="settings-field">
            <label>Featured section subtitle</label>
            <input name="featuredSubtitle" value="${escapeHtml(s.featuredSubtitle || "Handpicked for you")}" />
          </div>
        </div>
        <div class="home-tab-row">
          <div class="settings-field">
            <label>New In title</label>
            <input name="newestTitle" value="${escapeHtml(s.newestTitle || "New In")}" />
          </div>
          <div class="settings-field">
            <label>New In subtitle</label>
            <input name="newestSubtitle" value="${escapeHtml(s.newestSubtitle || "Fresh arrivals")}" />
          </div>
        </div>

        <div class="settings-foot">
          <button class="button" id="home-submit-btn" type="submit">Save Home Page</button>
          <div id="home-result" class="settings-result-msg"></div>
        </div>
      </form>

      <div class="settings-card" id="hero-video-card">
        <div class="settings-section-head">
          <h3>Hero Video</h3>
          <p>Upload a background video for the hero banner (MP4 / WebM, max 50 MB). Replaces the animated design.</p>
        </div>
        ${s.heroVideoUrl ? `
          <div class="settings-field">
            <video src="${escapeHtml(s.heroVideoUrl)}" class="hero-video-preview" controls muted></video>
            <button type="button" id="remove-hero-video-btn" class="button-secondary" style="margin-top:10px;">Remove video</button>
          </div>
        ` : `<p class="settings-hint" style="margin-bottom:16px;">No video uploaded — animated background is active.</p>`}
        <div class="settings-field">
          <label for="hero-video-input">Upload new video</label>
          <input type="file" id="hero-video-input" accept="video/mp4,video/webm" />
          <span class="settings-hint">Plays muted and looped on the home page.</span>
        </div>
        <div class="settings-foot">
          <button class="button" id="hero-video-upload-btn" type="button">Upload Video</button>
          <div id="hero-video-result" class="settings-result-msg"></div>
        </div>
      </div>
    </div>
  `;

  const form = adminContent.querySelector("#home-form");
  const btn = adminContent.querySelector("#home-submit-btn");
  const result = adminContent.querySelector("#home-result");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = "Saving…";
    result.textContent = "";
    const fd = new FormData(e.currentTarget);
    try {
      const body = {};
      for (const [k, v] of fd.entries()) body[k] = v;
      const res = await api("/api/admin/home-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) { result.textContent = data.error || "Could not save."; return; }
      state.settings = data;
      state.home = null;
      showToast("Home page updated.");
    } catch (err) {
      result.textContent = err.message || "Something went wrong.";
    } finally {
      btn.disabled = false;
      btn.textContent = "Save Home Page";
    }
  });

  const videoUploadBtn = adminContent.querySelector("#hero-video-upload-btn");
  const videoInput = adminContent.querySelector("#hero-video-input");
  const videoResult = adminContent.querySelector("#hero-video-result");

  if (videoUploadBtn && videoInput) {
    videoUploadBtn.addEventListener("click", async () => {
      const file = videoInput.files[0];
      if (!file) { videoResult.textContent = "Please select a video file first."; return; }
      videoUploadBtn.disabled = true;
      videoUploadBtn.textContent = "Uploading…";
      videoResult.textContent = "";
      try {
        const fd = new FormData();
        fd.append("video", file);
        const res = await api("/api/admin/hero-video", { method: "POST", body: fd });
        const data = await res.json();
        if (!res.ok) { videoResult.textContent = data.error || "Upload failed."; return; }
        state.settings = { ...state.settings, heroVideoUrl: data.videoUrl };
        showToast("Video uploaded!");
        reload();
      } catch (err) {
        videoResult.textContent = err.message || "Upload failed.";
      } finally {
        videoUploadBtn.disabled = false;
        videoUploadBtn.textContent = "Upload Video";
      }
    });
  }

  const removeVideoBtn = adminContent.querySelector("#remove-hero-video-btn");
  if (removeVideoBtn) {
    removeVideoBtn.addEventListener("click", async () => {
      removeVideoBtn.disabled = true;
      removeVideoBtn.textContent = "Removing…";
      try {
        await api("/api/admin/hero-video", { method: "DELETE" });
        state.settings = { ...state.settings, heroVideoUrl: "" };
        showToast("Video removed.");
        reload();
      } catch (err) {
        showToast("Could not remove video.");
      }
    });
  }
}

async function renderAdmin(params) {
  updatePageMeta({ title: "Admin" });
  if (!state.me || state.me.role !== "admin") {
    location.hash = "#/login";
    return;
  }

  app.innerHTML = `<div class="page-loading">Loading…</div>`;

  const urlParams = params instanceof URLSearchParams ? params : new URLSearchParams(params || "");
  let currentTab = urlParams.get("tab") || "dashboard";

  const [dashboard, products, categories, orders, customers, settings, messages] = await Promise.all([
    api("/api/admin/dashboard").then((res) => res.json()),
    api("/api/admin/products").then((res) => res.json()),
    api("/api/admin/categories").then((res) => res.json()),
    api("/api/admin/orders").then((res) => res.json()),
    api("/api/admin/customers").then((res) => res.json()),
    api("/api/admin/settings").then((res) => res.json()),
    api("/api/admin/messages").then((res) => res.json()),
  ]);

  const tabNames = ["dashboard", "products", "categories", "orders", "customers", "messages", "settings", "home"];

  const unreadCount = dashboard.unreadMessages || 0;
  const tabLabels = { dashboard: "Dashboard", products: "Products", categories: "Categories", orders: "Orders", customers: "Customers", messages: unreadCount > 0 ? `Messages (${unreadCount})` : "Messages", settings: "Settings", home: "Home Page" };

  app.innerHTML = `
    <section class="panel admin-panel">
      <div class="admin-page-header">
        <div class="admin-page-header-text">
          <h2>Admin Panel</h2>
          <span class="admin-shop-name">${escapeHtml(currentBrandName())}</span>
        </div>
        <span class="admin-badge">Admin</span>
      </div>
      <div class="admin-tabs">
        ${tabNames.map((name) => `<button class="admin-tab${currentTab === name ? " active" : ""}" data-tab="${name}">${tabLabels[name] || name}</button>`).join("")}
      </div>
      <div id="admin-content"></div>
    </section>
  `;

  const adminContent = document.querySelector("#admin-content");

  async function reload() {
    await renderAdmin(new URLSearchParams(`tab=${currentTab}`));
  }

  function switchTab(tab) {
    currentTab = tab;
    history.replaceState(null, "", `#/admin?tab=${tab}`);
    document.querySelectorAll("[data-tab]").forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === tab));
    adminContent.innerHTML = "";
    if (tab === "dashboard") renderDashboardTab(adminContent, dashboard);
    if (tab === "products") renderProductsTab(adminContent, products, categories, reload);
    if (tab === "categories") renderCategoriesTab(adminContent, categories, reload);
    if (tab === "orders") renderOrdersTab(adminContent, orders, reload);
    if (tab === "customers") renderCustomersTab(adminContent, customers, reload);
    if (tab === "messages") renderMessagesTab(adminContent, messages, reload);
    if (tab === "settings") renderSettingsTab(adminContent, settings, reload);
    if (tab === "home") renderHomeTab(adminContent, settings, reload);
  }

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tab));
  });

  switchTab(currentTab);
  finishPageLoad();
}

function handleOauthCompletion(params) {
  const token = params.get("token");
  const returnTo = normalizeReturnTo(params.get("returnTo"));
  if (token) {
    setToken(token);
  }
  location.hash = `#${returnTo}`;
}

async function bootstrapAuthState() {
  await loadMe();
  await Promise.all([loadCart(), loadFavorites()]);
  updateHeader();
}

function renderTerms() {
  updatePageMeta({ title: "Terms of Service" });
  app.innerHTML = `
    <div class="policy-page">
      <h1 class="policy-title">Terms of Service</h1>
      <p class="policy-updated">Last updated: April 27, 2026</p>

      <section class="policy-section">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using Contact_Lens, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
      </section>

      <section class="policy-section">
        <h2>2. Products and Ordering</h2>
        <p>All contact lenses sold on this site are for use by individuals with a valid prescription. You are responsible for ensuring that the products you order are suitable for your prescription and eye health needs. We reserve the right to refuse or cancel orders at our discretion.</p>
      </section>

      <section class="policy-section">
        <h2>3. Pricing and Payment</h2>
        <p>All prices are displayed in Japanese Yen (¥) and include consumption tax. We accept payment via credit/debit card (Stripe) and cash on delivery. Payment must be completed before shipment.</p>
      </section>

      <section class="policy-section">
        <h2>4. Shipping</h2>
        <p>We ship within Japan. Orders over ¥10,000 qualify for free shipping; a flat shipping fee of ¥550 applies to orders below that amount. Estimated delivery is 2–5 business days after dispatch. We are not responsible for delays caused by carriers or events outside our control.</p>
      </section>

      <section class="policy-section">
        <h2>5. Intellectual Property</h2>
        <p>All content on this site — including text, images, logos, and design — is the property of Contact_Lens and may not be reproduced without written permission.</p>
      </section>

      <section class="policy-section">
        <h2>6. Limitation of Liability</h2>
        <p>Contact_Lens is not liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our total liability is limited to the amount you paid for the relevant order.</p>
      </section>

      <section class="policy-section">
        <h2>7. Privacy</h2>
        <p>We collect and store personal information necessary to fulfil your orders and communicate with you. We do not sell your data to third parties. By using our service you consent to this use of your data.</p>
      </section>

      <section class="policy-section">
        <h2>8. Changes to Terms</h2>
        <p>We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.</p>
      </section>

      <section class="policy-section">
        <h2>9. Contact</h2>
        <p>For questions about these terms, please <a href="#/contact">contact us</a>.</p>
      </section>
    </div>
  `;
  finishPageLoad();
}

function renderReturns() {
  updatePageMeta({ title: "Return Policy" });
  app.innerHTML = `
    <div class="policy-page">
      <h1 class="policy-title">Return &amp; Refund Policy</h1>
      <p class="policy-updated">Last updated: April 27, 2026</p>

      <section class="policy-section">
        <h2>Eligibility for Returns</h2>
        <p>We accept returns within <strong>14 days</strong> of delivery for items that are:</p>
        <ul>
          <li>Unopened and in their original sealed packaging</li>
          <li>Undamaged and free from signs of use</li>
          <li>Accompanied by the original order number</li>
        </ul>
        <p>For hygiene and safety reasons, <strong>opened or used contact lenses cannot be returned</strong> unless they are defective or were delivered incorrectly.</p>
      </section>

      <section class="policy-section">
        <h2>Defective or Incorrect Items</h2>
        <p>If you receive a defective product or an item different from what you ordered, please contact us within 7 days of delivery. We will arrange a full replacement or refund at no additional cost to you.</p>
      </section>

      <section class="policy-section">
        <h2>How to Request a Return</h2>
        <ol>
          <li>Contact us via the <a href="#/contact">Contact page</a> with your order number and reason for return.</li>
          <li>We will reply within 1–2 business days with instructions.</li>
          <li>Ship the item(s) back using a tracked service. Return shipping costs are the customer's responsibility unless the item is defective or incorrect.</li>
        </ol>
      </section>

      <section class="policy-section">
        <h2>Refunds</h2>
        <p>Once we receive and inspect the returned item(s), we will process a refund to your original payment method within 5–10 business days. Shipping fees are non-refundable unless the return is due to our error.</p>
      </section>

      <section class="policy-section">
        <h2>Questions?</h2>
        <p>Please <a href="#/contact">contact our support team</a> — we're happy to help.</p>
      </section>
    </div>
  `;
  finishPageLoad();
}

async function route() {
  const { path, params } = getHashRoute();

  if (path === "/oauth-complete") {
    handleOauthCompletion(params);
    return;
  }

  window.scrollTo({ top: 0, behavior: "instant" });
  const progressBar = document.getElementById("progress-bar");
  if (progressBar) { progressBar.style.width = "40%"; progressBar.style.opacity = "1"; }
  app.innerHTML = `<div class="page-loading">Loading…</div>`;

  /* highlight active nav link — exact hash match only */
  const currentHash = location.hash;
  document.querySelectorAll(".main-nav a, #nav-cats a").forEach((link) => {
    link.classList.toggle("nav-active", link.getAttribute("href") === currentHash);
  });

  if (!state.home || !state.categories.length || !state.oauthConfig || !state.paymentConfig) {
    await Promise.all([loadHome(), loadCategories(), loadOAuthConfig(), loadPaymentConfig(), loadPublicSettings()]);
  }
  await bootstrapAuthState();

  if (path === "/" || path === "") {
    renderHome();
    return;
  }
  if (path === "/shop") {
    await renderShop(params);
    return;
  }
  if (path.startsWith("/product/")) {
    await renderProduct(path);
    return;
  }
  if (path === "/cart") {
    renderCart();
    return;
  }
  if (path === "/checkout") {
    await renderCheckout(params);
    return;
  }
  if (path === "/order-confirmation") {
    await renderOrderConfirmation(params);
    return;
  }
  if (path === "/register") {
    await renderRegister(params);
    return;
  }
  if (path === "/login") {
    await renderLogin(params);
    return;
  }
  if (path === "/reset-password") {
    await renderResetPassword(params);
    return;
  }
  if (path === "/profile") {
    await renderProfile();
    return;
  }
  if (path === "/orders") {
    await renderOrders();
    return;
  }
  if (path === "/favorites") {
    renderFavorites();
    return;
  }
  if (path === "/contact") {
    renderContact();
    return;
  }
  if (path === "/admin") {
    await renderAdmin(params);
    return;
  }
  if (path === "/terms") {
    renderTerms();
    return;
  }
  if (path === "/returns") {
    renderReturns();
    return;
  }

  app.innerHTML = `
    <div class="not-found-page">
      <div class="not-found-lens">
        <svg viewBox="0 0 120 120" width="96" height="96" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(15,170,181,0.18)" stroke-width="6"/>
          <circle cx="60" cy="60" r="34" fill="none" stroke="rgba(15,170,181,0.28)" stroke-width="4"/>
          <circle cx="60" cy="60" r="14" fill="rgba(15,170,181,0.12)"/>
          <text x="60" y="67" text-anchor="middle" font-size="18" font-weight="700" fill="rgba(15,170,181,0.6)">404</text>
        </svg>
      </div>
      <h2 class="not-found-title">Page not found</h2>
      <p class="not-found-sub">This page doesn't exist or has been moved.</p>
      <div class="not-found-links">
        <a href="#/" class="button">Go home</a>
        <a href="#/shop" class="button-secondary">Browse shop</a>
      </div>
    </div>`;
  finishPageLoad();
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = new URLSearchParams();
  if (searchInput.value.trim()) {
    query.set("search", searchInput.value.trim());
  }
  location.hash = `#/shop?${query.toString()}`;
});

/* ── Mobile menu ─────────────────────────────────────── */
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileSearchForm = document.getElementById("mobile-search-form");
const mobileSearchInput = document.getElementById("mobile-search-input");
const mobileLangToggle = document.getElementById("mobile-lang-toggle");
const mobileLogoutBtn = document.getElementById("mobile-logout-btn");
const mobileAdminLink = document.getElementById("mobile-admin-link");
const mobileSignupLink = document.getElementById("mobile-signup-link");
const mobileAccountLink = document.getElementById("mobile-account-link");

function closeMobileMenu() {
  mobileMenu?.classList.remove("open");
  mobileMenuBtn?.classList.remove("open");
  if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "false");
}

mobileMenuBtn?.addEventListener("click", () => {
  const isOpen = mobileMenu?.classList.toggle("open");
  mobileMenuBtn.classList.toggle("open", isOpen);
  mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) mobileSearchInput?.focus();
});

mobileMenu?.addEventListener("click", (e) => {
  if (e.target.closest("a[href]")) closeMobileMenu();
});

mobileSearchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = new URLSearchParams();
  if (mobileSearchInput?.value.trim()) {
    query.set("search", mobileSearchInput.value.trim());
  }
  closeMobileMenu();
  location.hash = `#/shop?${query.toString()}`;
});

mobileLangToggle?.addEventListener("click", () => {
  setLang(currentLang === "en" ? "mn" : "en");
  if (mobileLangToggle) mobileLangToggle.textContent = currentLang === "en" ? "MN" : "EN";
});

mobileLogoutBtn?.addEventListener("click", async () => {
  closeMobileMenu();
  headerLogoutBtn?.click();
});

function updateMobileMenu() {
  const loggedIn = Boolean(state.me);
  if (mobileAdminLink) mobileAdminLink.classList.toggle("hidden", !(state.me && state.me.role === "admin"));
  if (mobileSignupLink) mobileSignupLink.classList.toggle("hidden", loggedIn);
  if (mobileLogoutBtn) mobileLogoutBtn.classList.toggle("hidden", !loggedIn);
  if (mobileAccountLink) {
    mobileAccountLink.textContent = state.me ? state.me.name : t("header.login");
    mobileAccountLink.href = state.me ? "#/profile" : "#/login";
  }
  if (mobileLangToggle) mobileLangToggle.textContent = currentLang === "en" ? "MN" : "EN";
}

window.addEventListener("hashchange", () => {
  closeMobileMenu();
  route().catch((error) => {
    console.error(error);
    app.innerHTML = `<div class="empty-state">Something went wrong while rendering the page.</div>`;
  });
});

/* ── Mobile bottom navigation bar ───────────────────────── */
const mbnHome    = document.getElementById("mbn-home");
const mbnShop    = document.getElementById("mbn-shop");
const mbnCartTab = document.getElementById("mbn-cart-tab");
const mbnAccount = document.getElementById("mbn-account");
const mbnCartCount = document.getElementById("mbn-cart-count");

function updateBottomNav() {
  const count = state.cart.reduce((s, i) => s + i.quantity, 0);
  if (mbnCartCount) {
    mbnCartCount.textContent = count;
    mbnCartCount.classList.toggle("hidden", count === 0);
  }

  if (mbnAccount) {
    mbnAccount.href = state.me ? "#/profile" : "#/login";
  }

  const { path } = getHashRoute();
  const tabs = [
    { el: mbnHome,    matches: (p) => p === "/" || p === "" },
    { el: mbnShop,    matches: (p) => p.startsWith("/shop") || p.startsWith("/product") },
    { el: mbnCartTab, matches: (p) => p === "/cart" || p === "/checkout" },
    { el: mbnAccount, matches: (p) => p === "/profile" || p === "/orders" || p === "/favorites" || p === "/register" || p === "/login" },
  ];
  tabs.forEach(({ el, matches }) => el?.classList.toggle("active", matches(path)));
}

window.addEventListener("hashchange", updateBottomNav);

route().catch((error) => {
  console.error(error);
  app.innerHTML = `<div class="empty-state">The app could not be loaded.</div>`;
});

/* ── Back to top ─────────────────────────────────────── */
const backToTop = document.createElement("button");
backToTop.id = "back-to-top";
backToTop.className = "back-to-top hidden";
backToTop.setAttribute("aria-label", "Back to top");
backToTop.innerHTML = "↑";
document.body.appendChild(backToTop);
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("hidden", window.scrollY < 400);
}, { passive: true });

