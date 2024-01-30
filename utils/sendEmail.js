const nodemailer = require('nodemailer');

// function to send welcome email when email recipient, subject, and email content are supplied
const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: 'mkelly11560@gmail.com',
        pass: 'zgpe wqmt whqe eumx',
      },
    });

    const mailOptions = {
      from: 'mkelly11560@gmail.com',
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; 
  }
};

module.exports = { sendEmail };