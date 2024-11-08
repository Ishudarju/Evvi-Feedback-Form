const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter object using the SMTP transport
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // email user
        pass: process.env.EMAIL_PASS  // email password
    }
});

// Function to send an email
const sendEmail = async (userDetails) => {
    const {
        full_name, fun_metor, options, other_status, state, country, district, 
        fun_metter_value, meter_value, learning_impact, star_rating, emoji_rating, 
        quality, concerns, testimonial, contact_consent, phone, email_address
    } = userDetails;

    // Compose the email content
    const mailOptions = {
        from: "test@enrichminds.co.in",
        to: process.env.EMAIL_TO, // recipient
        subject: 'New User Details Submission',
        html: `
       <div style="font-family: 'Helvetica Neue', sans-serif; background-color: #f4f4f9; color: #333333; padding: 20px; border-radius: 8px;">
    <div style="text-align: center;">
        <img src="https://enrichminds.co.in/assets/logo-qxzcuzYY.png" alt="Company Logo" style="width: 120px; margin-bottom: 20px;" />
    </div>
    <h2 style="color: #ff9800; text-align: center;">Feedback Summary</h2>
    <p style="text-align: center; font-size: 14px; margin-bottom: 30px;">User feedback form has been successfully submitted!</p>
    <table style="width: 100%; border-collapse: collapse;">
        <tbody>
            <tr style="background-color: #e1e8f0;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Full Name</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${full_name}</td>
            </tr>
            <tr style="background-color: #f9fafc;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Fun Mentor</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${fun_metor}</td>
            </tr>
            <tr style="background-color: #e1e8f0;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Options</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${options}</td>
            </tr>
            <tr style="background-color: #f9fafc;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Other Status</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${other_status}</td>
            </tr>
            <tr style="background-color: #e1e8f0;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>State</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${state}</td>
            </tr>
            <tr style="background-color: #f9fafc;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Country</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${country}</td>
            </tr>
            <tr style="background-color: #e1e8f0;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>District</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${district}</td>
            </tr>
            <tr style="background-color: #f9fafc;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Fun Meter Value</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${fun_metter_value}</td>
            </tr>
            <tr style="background-color: #e1e8f0;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Meter Value</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${meter_value}</td>
            </tr>
            <tr style="background-color: #f9fafc;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Learning Impact</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${learning_impact}</td>
            </tr>
            <tr style="background-color: #e1e8f0;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Star Rating</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${star_rating}</td>
            </tr>
            <tr style="background-color: #f9fafc;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Emoji Rating</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${emoji_rating}</td>
            </tr>
            <tr style="background-color: #e1e8f0;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Quality</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${quality}</td>
            </tr>
            <tr style="background-color: #f9fafc;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Concerns</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${concerns}</td>
            </tr>
            <tr style="background-color: #e1e8f0;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Testimonial</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${testimonial}</td>
            </tr>
           
            <tr style="background-color: #e1e8f0;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Phone</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${phone}</td>
            </tr>
            <tr style="background-color: #f9fafc;">
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;"><strong>Email Address</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #d1d9e1;">${email_address}</td>
            </tr>
        </tbody>
    </table>
    <div style="text-align: center; margin-top: 30px;">
        <p style="color: #ff9800;">Thank you for your feedback!</p>
    </div>
</div>

`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ' + error.message);
        throw new Error('Email sending failed');
    }
};

module.exports = sendEmail;
