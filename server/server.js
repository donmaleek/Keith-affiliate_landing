require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const pinoHttp = require("pino-http");
const logger = require("./utils/logger");
const { validateEnv } = require("./utils/validateEnv");
const webhookRoute = require("./routes/webhook");

const app = express();

app.use(cors());
app.use(helmet());

app.use(
  pinoHttp({
    logger,
    genReqId: (req, res) => {
      const requestId =
        req.headers["x-request-id"] ||
        `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      res.setHeader("x-request-id", requestId);
      return requestId;
    },
  })
);

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

const webhookLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/webhook/paystack", webhookLimiter, webhookRoute);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  validateEnv();
  logger.info({ port }, "server started");
});

function shutdown(signal) {
  logger.info({ signal }, "shutdown started");
  server.close(() => {
    logger.info("shutdown complete");
    process.exit(0);
  });
  setTimeout(() => {
    logger.error("forced shutdown");
    process.exit(1);
  }, 10000).unref();
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
