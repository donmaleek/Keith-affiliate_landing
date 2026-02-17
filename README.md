# Affiliate Marketing Masterclass — Landing Page

A high-conversion landing page and webhook server for **Keith Muoki's Affiliate Marketing Masterclass**, a live Zoom training event.

**Live site:** [donmaleek.github.io/Keith-affiliate_landing](https://donmaleek.github.io/Keith-affiliate_landing/)

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, Tailwind CSS, Framer Motion |
| Backend | Express 4, Nodemailer (Gmail SMTP), Pino logger |
| Payments | Paystack (M-Pesa/mobile), Stripe (card/Visa) |
| Hosting | GitHub Pages (frontend), any Node host (server) |
| Database | Supabase (optional, for webhook deduplication) |

## Project Structure

```
├── client/                 React SPA
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Landing.jsx     Sales & conversion page
│   │   │   └── Success.jsx     Post-payment confirmation
│   │   ├── App.jsx             Router (/, /success)
│   │   └── main.jsx            Entry point
│   ├── public/
│   │   ├── keith1.png          Trainer photo
│   │   └── 404.html            GitHub Pages SPA fallback
│   └── vite.config.js
│
├── server/                 Express API
│   ├── server.js               App entry — health check, webhook route
│   ├── routes/
│   │   └── webhook.js          Paystack webhook handler
│   └── utils/
│       ├── db.js               Idempotency store (Supabase or in-memory)
│       ├── emailQueue.js       Serial email queue
│       ├── sendEmail.js        Gmail SMTP transport + email template
│       ├── logger.js           Pino structured logger
│       └── validateEnv.js      Startup env var checks
│
└── CLAUDE.md               AI assistant instructions
```

## How It Works

1. Visitor lands on the sales page and clicks **"Claim Your Seat"**
2. They pay via **Paystack** (M-Pesa) or **Stripe** (card)
3. Paystack sends a `charge.success` webhook to the server
4. Server verifies the HMAC-SHA512 signature, deduplicates the event, and queues a confirmation email
5. Student receives an email with the Zoom link and event details

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Client

```bash
cd client
npm install
npm run dev        # http://localhost:5173
```

### Server

```bash
cd server
npm install
cp .env .env.local # edit with your real credentials
npm run dev        # http://localhost:3000
```

### Environment Variables (server)

| Variable | Required | Purpose |
|----------|----------|---------|
| `PAYSTACK_SECRET_KEY` | Yes | Webhook HMAC verification |
| `EMAIL_USER` | Yes | Gmail SMTP username |
| `EMAIL_PASS` | Yes | Gmail app password |
| `PORT` | No | Server port (default: 3000) |
| `SUPABASE_URL` | No | Persistent event deduplication |
| `SUPABASE_SERVICE_ROLE_KEY` | No | Supabase auth |
| `LOG_LEVEL` | No | Pino log level (default: info) |

## Deployment

### Frontend (GitHub Pages)

```bash
cd client
npm run deploy     # builds + publishes to gh-pages branch
```

### Server

Deploy `server/` to any Node.js host (Render, Railway, VPS). Set the environment variables and run:

```bash
npm start
```

## License

All rights reserved.
