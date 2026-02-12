import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Built-in alternative to body-parser

// SMTP Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'muhammadahmedasif13@gmail.com',
    pass: 'blaw hayk cnkw eyie' 
  }
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.log("Transporter error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// HTML Template Generators
const createOwnerTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #112240; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
    .header { background-color: #0a192f; color: #ffffff; padding: 20px; text-align: center; }
    .content { padding: 30px; background-color: #ffffff; }
    .field { margin-bottom: 15px; border-bottom: 1px solid #f3f4f6; padding-bottom: 10px; }
    .label { font-weight: bold; color: #c5a059; text-transform: uppercase; font-size: 12px; }
    .value { font-size: 16px; margin-top: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h2>New Consultation Request</h2></div>
    <div class="content">
      <div class="field"><div class="label">Client Name</div><div class="value">${data.firstName} ${data.lastName}</div></div>
      <div class="field"><div class="label">Email Address</div><div class="value">${data.email}</div></div>
      <div class="field"><div class="label">Visa Category</div><div class="value">${data.visaCategory}</div></div>
      <div class="field"><div class="label">Country</div><div class="value">${data.country}</div></div>
      <div class="field"><div class="label">Case Details</div><div class="value">${data.details || 'No details provided.'}</div></div>
    </div>
  </div>
</body>
</html>
`;

const createClientTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Georgia', serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; }
    .header { background-color: #0a192f; padding: 30px; text-align: center; color: white; }
    .content { padding: 40px; background-color: #ffffff; }
    .details-box { background-color: #f8f9fa; border-left: 4px solid #c5a059; padding: 15px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h1>APEX ROUTE</h1><p>Consultants</p></div>
    <div class="content">
      <p>Dear ${data.firstName},</p>
      <p>Thank you for reaching out. We have received your request for <strong>${data.visaCategory}</strong> regarding <strong>${data.country}</strong>.</p>
      <div class="details-box">
        <p><strong>Status:</strong> Under Review</p>
        <p><strong>Next Step:</strong> Our experts will contact you within 24 business hours.</p>
      </div>
      <p>Best regards,<br/>The Apex Route Team</p>
    </div>
  </div>
</body>
</html>
`;

// API Endpoint
app.post('/api/send-email', async (req, res) => {
  const { firstName, email } = req.body;

  if (!email || !firstName) {
    return res.status(400).json({ success: false, message: 'Required fields missing: name or email' });
  }

  try {
    // 1. Send to Owner
    await transporter.sendMail({
      from: `"Apex Web System" <muhammadahmedasif13@gmail.com>`,
      to: 'muhammadahmedasif13@gmail.com',
      subject: `📢 Lead: ${firstName} (${req.body.country})`,
      html: createOwnerTemplate(req.body)
    });

    // 2. Send to Client
    await transporter.sendMail({
      from: `"Apex Route Consultants" <muhammadahmedasif13@gmail.com>`,
      to: email,
      subject: 'Inquiry Received - Apex Route Consultants',
      html: createClientTemplate(req.body)
    });

    res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send emails' });
  }
});

// Production Setup
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));