const logger = require("./logger");
const sendConfirmationEmail = require("./sendEmail");

const queue = [];
let working = false;

function processQueue() {
  if (working) return;
  const job = queue.shift();
  if (!job) return;
  working = true;
  sendConfirmationEmail(job.to, job.name)
    .then(() => job.resolve())
    .catch((err) => {
      logger.error({ err, to: job.to }, "email send failed");
      job.reject(err);
    })
    .finally(() => {
      working = false;
      setImmediate(processQueue);
    });
}

function enqueueEmail(to, name) {
  return new Promise((resolve, reject) => {
    queue.push({ to, name, resolve, reject });
    setImmediate(processQueue);
  });
}

module.exports = { enqueueEmail };
