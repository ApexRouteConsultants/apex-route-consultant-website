import nodemailer from 'nodemailer';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { firstName, lastName, email, phone, visaCategory, country, details } = req.body;
  const fullName = `${firstName} ${lastName}`;
  const serviceId = `ARC-${Math.floor(1000 + Math.random() * 9000)}`;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const navy = "#0a192f";
  const gold = "#c5a059";

  try {
    // 1. ADMIN TEMPLATE (To Company)
    const adminMail = {
      from: `"Apex Route Consultants" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `🚨 NEW CONSULTATION REQUEST 🚨: #${serviceId} - ${fullName}`,
      html: `
        <div style="background-color: #f1f5f9; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
         <table align="center" width="100%" style="max-width: 600px; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
            <tr><td style="background: ${navy}; padding: 30px; text-align: center;"><h1 style="color: #ffffff; margin: 0; font-size: 22px;">NEW CONSULTATION REQUEST</h1></td></tr>
            <tr>
              <td style="padding: 40px;">
                <p style="color: ${gold}; font-weight: bold; text-transform: uppercase; border-left: 4px solid ${gold}; padding-left: 10px;">Case Information</p>
                <table width="100%" style="font-size: 15px; line-height: 2;">
                  <tr><td width="120" style="color: #94a3b8;">ID:</td><td><strong>#${serviceId}</strong></td></tr>
                  <tr><td style="color: #94a3b8;">Client:</td><td><strong>${fullName}</strong></td></tr>
                  <tr><td style="color: #94a3b8;">Service:</td><td>${visaCategory}</td></tr>
                  <tr><td style="color: #94a3b8;">Country:</td><td>${country}</td></tr>
                  <tr><td style="color: #94a3b8;">Phone:</td><td><a href="tel:${phone}" style="color: ${navy}; text-decoration: none; font-weight: bold;">${phone}</a></td></tr>
                  <tr><td style="color: #94a3b8;">Email:</td><td>${email}</td></tr>
                </table>
                <div style="margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 8px; font-style: italic; color: #475569;">"${details || 'No additional instructions.'}"</div>
              </td>
            </tr>
            <tr><td style="background: #1e293b; padding: 20px; text-align: center; color: #ffffff; font-size: 11px;">Apex Route Consultants • Premium Immigration Services</td></tr>
          </table>
        </div>`
    };

    // 2. CUSTOMER TEMPLATE (To Client)
    const customerMail = {
      from: `"Apex Route Consultants" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Request Confirmed: ${visaCategory} - Apex Route`,
      html: `
        <div style="background-color: #f8fafc; padding: 40px 20px; font-family: 'Segoe UI', sans-serif;">
        <table align="center" width="100%" style="max-width: 600px; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <tr><td style="padding: 40px; text-align: center;"><h2 style="color: ${navy}; font-size: 28px; margin: 0;">Request Received</h2><p style="color: ${gold}; text-transform: uppercase; letter-spacing: 2px;">Apex Route Consultants</p></td></tr>
            <tr>
              <td style="padding: 0 40px 40px;">
                <p>Hello <strong>${firstName} ${lastName}</strong>,</p>
                <p>We have successfully received your inquiry regarding <strong>${visaCategory}</strong> for <strong>${country}</strong>.</p>
                <div style="background: ${navy}; color: white; padding: 25px; border-radius: 12px; margin: 25px 0; text-align: center;">
                  <span style="font-size: 12px; opacity: 0.7;">REFERENCE ID</span><br><span style="font-size: 20px; font-weight: bold; color: ${gold};">#${serviceId}</span>
                  <p style="font-size: 14px; margin-top: 15px;">A senior immigration expert will contact you at <strong>${phone}</strong> within 24 business hours.</p>
                </div>
                <p style="font-size: 14px; color: #64748b; line-height: 1.6;">Our team is reviewing your profile to provide the most accurate assessment for your visa application.</p>
              </td>
            </tr>
            <tr><td style="background: #1e293b; padding: 10px; text-align: center; color: #ffffff; font-size: 11px;">If you have urgent queries, please feel free to reply to this email.</td></tr>
            <tr><td style="padding: 25px; background: #f1f5f9; text-align: center; font-size: 12px; color: #64748b;"><strong>Apex Route Consultants</strong><br>LG12A, Big City Plaza, Gulberg 3, Lahore<br>© 2026 Licensed & Insured</td></tr>
          </table>
        </div>`
    };

    await Promise.all([transporter.sendMail(adminMail), transporter.sendMail(customerMail)]);
    return res.status(200).json({ success: true, id: serviceId });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
}