import pool from '../db.js';
import nodemailer from 'nodemailer';

export const saveMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to DB
    await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );

    // Send Email
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact",
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
