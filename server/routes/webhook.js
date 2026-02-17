const express = require("express");
const crypto = require("crypto");
const sendConfirmationEmail = require("../utils/sendEmail");

const router = express.Router();

router.post("/", express.raw({ type: "application/json" }), async (req, res) => {
  const hash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(req.body)
    .digest("hex");

  if (hash !== req.headers["x-paystack-signature"]) {
    return res.sendStatus(401);
  }

  const event = JSON.parse(req.body.toString("utf8"));

  if (event.event === "charge.success") {
    const { email, first_name } = event.data.customer;

    await sendConfirmationEmail(email, first_name);
  }

  res.sendStatus(200);
});

module.exports = router;
