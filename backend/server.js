require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all fields' });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // sends to yourself
      subject: `New Portfolio Contact from ${name}`,
      text: `You have received a new message from your portfolio contact form.\n\nFrom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`\n--- Email successfully sent ---`);
    console.log(`From: ${name} (${email})`);
    console.log(`Message ID: ${info.messageId}`);
    
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('\n--- Error sending email ---');
    console.error(error);
    
    // Check if it's an auth error to give a clearer message
    if (error.code === 'EAUTH') {
      return res.status(500).json({ error: 'Authentication failed. Please check the App Password in the .env file.' });
    }
    
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running with Nodemailer on http://localhost:${PORT}`);
  });
}

module.exports = app;
