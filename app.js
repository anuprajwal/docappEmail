
require('dotenv').config();
const express = require('express');
const app = express();
const emailRoutes = require("./src/routes/emailRoutes")

// Built‑in JSON parser
app.use(express.json());

// Routes
app.use('/api', emailRoutes);

// Host & port
const PORT = process.env.PORT || 5500;
const HOST = '0.0.0.0';

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});