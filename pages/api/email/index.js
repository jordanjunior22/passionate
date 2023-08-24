import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const emailUser = process.env.GMAIL_EMAIL;
    const emailPass = process.env.GMAIL_PASSWORD;

  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: emailUser,
        pass: emailPass, // Use an app password or your Gmail password
      }
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: emailUser, // Replace with the recipient's email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Form submission successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while sending the email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
