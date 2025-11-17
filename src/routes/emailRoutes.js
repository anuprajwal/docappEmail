const express = require('express');
const router = express.Router();
const sendEmail = require('../controllers/email/sendEmail');

// POST /api/email
router.post('/send-email', sendEmail);

module.exports = router;