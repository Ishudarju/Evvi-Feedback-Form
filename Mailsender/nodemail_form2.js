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

const sendEmail = async (userData) => {
    const {
        fullname,
        age,
        current_status, // Ensure this matches the input structure
        college,
        year_study,
        major,
        job_title,
        company,
        industry,
        other_details,
        city,
        country,
        familiarity,
        goal_setting,
        review,
        effectiveness,
        challenges,
        training_expectations,
        created_at
    } = userData;

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
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${current_status}</td>
                    </tr>
                    <tr style="background-color: #2b2b2b;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>College</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${college}</td>
                    </tr>
                    <tr style="background-color: #3c3c3c;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Year of Study</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${year_study}</td>
                    </tr>
                    <tr style="background-color: #2b2b2b;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Major</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${major}</td>
                    </tr>
                    <tr style="background-color: #3c3c3c;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Job Title</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${job_title}</td>
                    </tr>
                    <tr style="background-color: #2b2b2b;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Company</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${company}</td>
                    </tr>
                    <tr style="background-color: #3c3c3c;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Industry</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${industry}</td>
                    </tr>
                    <tr style="background-color: #2b2b2b;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Other Details</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${other_details? other_details:"-"}</td>
                    </tr>
                    <tr style="background-color: #3c3c3c;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>City</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${city}</td>
                    </tr>
                    <tr style="background-color: #2b2b2b;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Country</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${country}</td>
                    </tr>
                    <tr style="background-color: #3c3c3c;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Familiarity</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${familiarity}</td>
                    </tr>
                    <tr style="background-color: #2b2b2b;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Goal Setting</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${goal_setting}</td>
                    </tr>
                    <tr style="background-color: #3c3c3c;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Review</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${review}</td>
                    </tr>
                    <tr style="background-color: #2b2b2b;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Effectiveness</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${effectiveness}</td>
                    </tr>
                    <tr style="background-color: #3c3c3c;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Challenges</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${challenges}</td>
                    </tr>
                    <tr style="background-color: #2b2b2b;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Training Expectations</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${training_expectations}</td>
                    </tr>
                    <tr style="background-color: #2b2b2b;">
                        <td style="padding: 10px; border-bottom: 1px solid #555;"><strong>Training Expectations</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #555;">${created_at}</td>
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
