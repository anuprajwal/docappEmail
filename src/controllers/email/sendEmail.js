
const transporter = require('./connectEmailServer');


const sendEmail = async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;

    if (!to || !subject || (!text && !html)) {
      return res.status(400).json({ message: 'to, subject and text or html are required' });
    }

    const info = await transporter.sendMail({
      from: `DocApp <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    res.status(200).json({ message: 'Email sent', messageId: info.messageId });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ message: 'Failed to send email', error: err.message });
  }
};

module.exports = sendEmail