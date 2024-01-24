const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',
      port: 465,
      secure: true,
      auth: {
        user: 'bootcamp25@yahoo.com',
        pass: 'ENTER REAL ONE HERE FOR TESTING',
      },
    });

    const mailOptions = {
      from: 'bootcamp25@yahoo.com',
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