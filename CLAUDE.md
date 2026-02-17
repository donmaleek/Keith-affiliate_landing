# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Affiliate marketing landing page for "Keith Muoki's Affiliate Marketing Masterclass." Monorepo with independent `client/` (React SPA) and `server/` (Express API) directories — no root-level package.json. All npm commands must be run inside `client/` or `server/`.

## Commands

### Client (`client/`)
- `npm run dev` — Vite dev server (port 5173)
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — ESLint

### Server (`server/`)
- `npm run dev` — nodemon auto-restart dev server
- `npm start` — production start (`node server.js`)

### No test framework is configured.

## Architecture

### Client
React 18 + Vite + Tailwind CSS + Framer Motion. Two routes defined in `App.jsx`:
- `/` → `Landing.jsx` — sales/conversion page with animated sections, comparison table, value stack, trainer bio, sticky purchase card
- `/success` → `Success.jsx` — post-payment confirmation with Calendly booking link

### Server
Express 4 with CommonJS modules. Single webhook endpoint:
- `POST /webhook/paystack` — verifies Paystack HMAC-SHA512 signature, deduplicates via event ID, then queues a confirmation email
- `GET /health` — liveness check

**Utilities (`server/utils/`):**
- `db.js` — idempotency store: Supabase-backed if configured, otherwise in-memory Map (capped at 1000 entries, resets on restart)
- `emailQueue.js` — serial in-process email queue (not persistent)
- `sendEmail.js` — Nodemailer Gmail SMTP transport with hard-coded email template
- `logger.js` — Pino structured JSON logger (use this, not `console.log`)
- `validateEnv.js` — warns on missing env vars at startup

### Data Flow
Paystack payment → webhook POST → signature verification → idempotency check → email queued → confirmation email sent via Gmail SMTP

## Environment Variables (server/.env)

| Variable | Required | Purpose |
|---|---|---|
| `PORT` | No | Server port (default: 3000) |
| `PAYSTACK_SECRET_KEY` | Yes | Webhook HMAC verification |
| `EMAIL_USER` | Yes | Gmail SMTP username |
| `EMAIL_PASS` | Yes | Gmail app password |
| `SUPABASE_URL` | No | Enables persistent event deduplication |
| `SUPABASE_SERVICE_ROLE_KEY` | No | Supabase auth |
| `LOG_LEVEL` | No | Pino log level (default: `info`) |

## Key Conventions

- **Module systems differ:** client uses ESM (`"type": "module"`), server uses CommonJS. Do not mix.
- **Logging:** server uses Pino (`utils/logger.js`), never `console.log`.
- **CORS** is currently open with no origin whitelist.
- **No Vite proxy** is configured — client does not proxy API calls to the server.

## Known Incomplete Items

- Landing page CTA button has no `onClick`/`href` wired to Paystack checkout
- Countdown timer state (`timeLeft`) is declared but `setInterval` is never set up
- Zoom link in `sendEmail.js` is a placeholder (`https://zoom.us/your-link`)
