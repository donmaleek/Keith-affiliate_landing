const nodemailer = require("nodemailer");

async function sendConfirmationEmail(to, name) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Affiliate Masterclass" <${process.env.EMAIL_USER}>`,
    to,
    subject: "You're Confirmed – Affiliate Marketing Masterclass",
    html: `
      <h2>Hi ${name},</h2>
      <p>Your payment was successful.</p>
      <p><strong>Date:</strong> 20 Feb 2026</p>
      <p><strong>Time:</strong> 8PM EAT</p>
      <p>Zoom Link: https://zoom.us/your-link</p>
      <p>See you inside!</p>
    `,
  });
}

module.exports = sendConfirmationEmail;
