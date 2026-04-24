# CAN ONLINE SHOP

Full-stack Japanese fashion e-commerce website inspired by CAN ONLINE SHOP / Samansa Mos2.

## Features

- Customer authentication with email/password
- Google and Facebook OAuth hooks
- Product browsing, search, filtering, favorites, cart, checkout, order history
- Stripe payment integration for card payments with hosted checkout
- Optional payment method selection for convenience store, bank transfer, and cash on delivery
- User profile and saved addresses
- Admin dashboard for products, categories, orders, customers, and settings
- Product image upload support
- SQLite database with seeded categories, products, users, and placeholder images

## Tech

- Node.js
- Express
- SQLite
- Stripe
- Passport (Google / Facebook OAuth)
- Vanilla frontend SPA served from `public/`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env`.

3. Add Stripe test credentials:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

For local webhook testing with Stripe CLI, you can forward events to:

```bash
stripe listen --forward-to localhost:3000/api/payments/stripe/webhook
```

4. If you want Google / Facebook login, create provider apps and fill in the credentials:

- Google
  - Create an OAuth client in Google Cloud Console.
  - Add `http://localhost:3000/auth/google/callback` as an authorized redirect URI.
  - Copy the client ID and secret into `.env`.

- Facebook
  - Create an app in Meta for Developers.
  - Add `http://localhost:3000/auth/facebook/callback` as a valid OAuth redirect URI.
  - Copy the app ID and secret into `.env`.

5. Start the app:

```bash
npm start
```

6. Open:

```text
http://localhost:3000
```

## Seeded Accounts

- Admin
  - Email: `admin@can-shop.local`
  - Password: `Admin1234!`

- Customer
  - Email: `customer@can-shop.local`
  - Password: `Customer1234!`

## Notes

- Without OAuth credentials, email/password login still works.
- Real Google / Facebook sign-in cannot be shipped with hardcoded credentials. You must use your own provider keys in `.env`.
- Stripe card payments also require your own test/live Stripe keys in `.env`.
- Password reset is implemented for local development by returning a reset URL in the API response from `/api/auth/forgot-password`.
- Uploaded images are stored in `public/uploads/`.
- Placeholder product images are seeded automatically on first run.

## Main API Areas

- `/api/auth/*`
- `/api/products`
- `/api/categories`
- `/api/cart`
- `/api/favorites`
- `/api/addresses`
- `/api/checkout`
- `/api/orders/my`
- `/api/admin/*`

## Admin Capabilities

- Create, edit, and delete products
- Upload product images
- Manage categories
- View and update order statuses
- View customer records
- View dashboard overview stats

## Production Hardening To Add Next

- Email delivery for forgot password
- CSRF protection for browser-session auth if you move away from bearer tokens
- Stripe or another payment provider
- Better image processing and CDN storage
- Server-side validation library and request schemas
- Automated tests
