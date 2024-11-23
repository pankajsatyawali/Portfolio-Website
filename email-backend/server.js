const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to send email
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gulatidevansh1@gmail', // Use your email service
        auth: {
            user: 'your-email@gmail.com', 
            pass: 'your-email-password', // Your email password or app password
        },
    });

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // Your email
        subject: `New message from ${name}`,
        text: message,
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send(error.toString());
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent!');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:5000`);
});