import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method !== 'POST') return res.status(405).end();

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT!),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_FROM!}>`,
      to: process.env.SMTP_TO!,
      replyTo: email,
      subject: subject || `New message from ${name}`,
      text: message,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Subject:</b> ${subject || '-'}</p><p>${message}</p>`,
    });
    res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Email failed' });
  }
}