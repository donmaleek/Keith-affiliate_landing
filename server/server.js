require("dotenv").config();
const express = require("express");
const cors = require("cors");
const webhookRoute = require("./routes/webhook");

const app = express();

app.use(cors());

app.use("/webhook/paystack", webhookRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
