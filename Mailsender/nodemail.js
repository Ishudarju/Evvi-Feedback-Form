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
    const { fullname, age, currentStatus, city, country, goalChallenges, goalFamiliarity, goalReview, goalTraining, otherDetails, studentDetails, professionalDetails, effectiveness } = userDetails;

    const { college, yearstudy, major } = studentDetails || {};
    const { jobtitle, company, industry } = professionalDetails || {};

    // Compose the email content
    const mailOptions = {
        from: "test@enrichminds.co.in",
        to: process.env.EMAIL_TO, // recipient
        subject: 'New User Details Submission',
        html: `
    <div style="font-family: 'Helvetica Neue', sans-serif; background-color: #2b2b2b; color: #ffffff; padding: 20px; border-radius: 8px;">
        <div style="text-align: center;">
            <img src="https://enrichminds.co.in/assets/logo-qxzcuzYY.png" alt="Company Logo" style="width: 120px; margin-bottom: 20px;" />
        </div>
        <h2 style="color: #ff9800; text-align: center;">Feedback Summary</h2>
        <p style="text-align: center; font-size: 14px; margin-bottom: 30px;">User feedback form has been successfully submitted!</p>
        <table style="width: 100%; border-collapse: collapse;">
            <tbody>
                <tr style="background-color: #3c3c3c;">
                    <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Full Name</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #555;">${fullname}</td>
                </tr>
                <tr style="background-color: #2b2b2b;">
                    <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Age</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #555;">${age}</td>
                </tr>
                <tr style="background-color: #3c3c3c;">
                    <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Status</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #555;">${currentStatus}</td>
                </tr>
                <tr style="background-color: #2b2b2b;">
                    <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>City</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #555;">${city}</td>
                </tr>
                <tr style="background-color: #3c3c3c;">
                    <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Country</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #555;">${country}</td>
                </tr>
                <tr style="background-color: #2b2b2b;">
                    <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Goal Familiarity</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #555;">${goalFamiliarity}</td>
                </tr>
                <tr style="background-color: #3c3c3c;">
                    <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Goal Challenges</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #555;">${goalChallenges}</td>
                </tr>
                <tr style="background-color: #2b2b2b;">
                    <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Goal Review</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #555;">${goalReview}</td>
                </tr>
                <tr style="background-color: #3c3c3c;">
                    <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Goal Training</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #555;">${goalTraining}</td>
                </tr>
                <tr style="background-color: #2b2b2b;">
                    <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Effectiveness</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #555;">${effectiveness}</td>
                </tr>
                <tr style="background-color: #3c3c3c;">
                    <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Other Details</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #555;">${otherDetails}</td>
                </tr>
                ${college ? `<tr style="background-color: #2b2b2b;"><td style="padding: 10px; border-bottom: 1px solid #555;"><strong>College</strong></td><td style="padding: 10px; border-bottom: 1px solid #555;">${college}</td></tr>` : ''}
                ${yearstudy ? `<tr style="background-color: #3c3c3c;"><td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Year of Study</strong></td><td style="padding: 10px; border-bottom: 1px solid #555;">${yearstudy}</td></tr>` : ''}
                ${major ? `<tr style="background-color: #2b2b2b;"><td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Major</strong></td><td style="padding: 10px; border-bottom: 1px solid #555;">${major}</td></tr>` : ''}
                ${jobtitle ? `<tr style="background-color: #3c3c3c;"><td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Job Title</strong></td><td style="padding: 10px; border-bottom: 1px solid #555;">${jobtitle}</td></tr>` : ''}
                ${company ? `<tr style="background-color: #2b2b2b;"><td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Company</strong></td><td style="padding: 10px; border-bottom: 1px solid #555;">${company}</td></tr>` : ''}
                ${industry ? `<tr style="background-color: #3c3c3c;"><td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Industry</strong></td><td style="padding: 10px; border-bottom: 1px solid #555;">${industry}</td></tr>` : ''}
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
