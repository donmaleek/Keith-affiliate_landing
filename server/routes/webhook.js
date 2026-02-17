const express = require("express");
const crypto = require("crypto");
const logger = require("../utils/logger");
const { enqueueEmail } = require("../utils/emailQueue");
const { isProcessed, markProcessed } = require("../utils/db");

const router = express.Router();

router.post("/", express.raw({ type: "application/json" }), async (req, res) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) {
    logger.error("PAYSTACK_SECRET_KEY is not set");
    return res.sendStatus(500);
  }

  const signature = req.headers["x-paystack-signature"];
  if (!signature) {
    return res.sendStatus(401);
  }

  const hash = crypto
    .createHmac("sha512", secret)
    .update(req.body)
    .digest("hex");

  const hashBuffer = Buffer.from(hash);
  const signatureBuffer = Buffer.from(signature);
  const isValid =
    hashBuffer.length === signatureBuffer.length &&
    crypto.timingSafeEqual(hashBuffer, signatureBuffer);

  if (!isValid) {
    return res.sendStatus(401);
  }

  let event;
  try {
    event = JSON.parse(req.body.toString("utf8"));
  } catch (err) {
    logger.error({ err }, "Invalid webhook payload");
    return res.sendStatus(400);
  }

  const eventId = event.data && event.data.id ? String(event.data.id) : null;
  if (eventId && (await isProcessed(eventId))) {
    return res.sendStatus(200);
  }

  if (event.event === "charge.success") {
    const customer = event.data && event.data.customer;
    if (!customer || !customer.email) {
      logger.error({ eventId }, "Missing customer data");
      return res.sendStatus(400);
    }
    const { email, first_name } = customer;

    try {
      await enqueueEmail(email, first_name);
      await markProcessed(eventId);
    } catch (err) {
      logger.error({ err }, "Failed to send confirmation email");
      return res.sendStatus(500);
    }
  }

  res.sendStatus(200);
});

module.exports = router;
