const logger = require("./logger");

const REQUIRED = ["PAYSTACK_SECRET_KEY", "EMAIL_USER", "EMAIL_PASS"];

function validateEnv() {
  const missing = REQUIRED.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    logger.warn({ missing }, "Missing required environment variables");
  }
}

module.exports = { validateEnv };
