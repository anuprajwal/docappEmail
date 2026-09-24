const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT), // 587
  secure: true, // MUST be false for port 587
  requireTLS: true, // Forces Nodemailer to send STARTTLS command
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false // Prevents local TLS handshake failures
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Verification Failed:', error);
  } else {
    console.log('✅ SMTP Server is ready to send emails');
  }
});

module.exports = transporter;