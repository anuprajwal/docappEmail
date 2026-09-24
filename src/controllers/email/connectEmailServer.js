
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: false, // true for port 465, false for others
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
//   pool: true,               // keep the connection alive
//   maxConnections: 5,        // adjust to taste
//   maxMessages: 100,
// });

// module.exports = transporter;



const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // smtpout.secureserver.net
  port: Number(process.env.SMTP_PORT), // 587
  secure: false, // MUST be false for port 587 (uses STARTTLS)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  // Adding these prevents sendMail from hanging forever
  connectionTimeout: 10000, // 10 seconds to connect
  greetingTimeout: 10000,   // 10 seconds to receive SMTP greeting
  socketTimeout: 15000,     // 15 seconds for socket inactivity
});

// Verify connection configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Verification Failed:', error.message);
  } else {
    console.log('SMTP Server is ready to send emails');
  }
});

module.exports = transporter;