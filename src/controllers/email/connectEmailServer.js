
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true for port 465, false for others
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  pool: true,               // keep the connection alive
  maxConnections: 5,        // adjust to taste
  maxMessages: 100,
  connectionTimeout: 40000,
  greetingTimeout: 40000,
  socketTimeout: 45000,
});

module.exports = transporter;