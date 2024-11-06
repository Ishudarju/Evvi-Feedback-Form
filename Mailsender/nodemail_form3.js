const nodemailer = require('nodemailer');
require('dotenv').config();

// // Configure the SMTP transporter
// const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
   
//     auth: {
//         user: process.env.EMAIL_USER, // Email user from environment variables
//         pass: process.env.EMAIL_PASS   // Email password from environment variables
//     }
// });

// const sendMail = async (userData) => {
//     // Destructure the relevant fields from userData
//     const {
//         sessions,
//         familiarity,
//         scale_familiarity,
//         improved_training,
//         attend,
//         updates,
//         email,
//         phone,
//     } = userData;

//     // Set up the mail options
//     const mailOptions = {
//         from: email, // Use the user email from environment variables
//         to: process.env.EMAIL_TO,      // Send to the recipient's email from environment variables
//         subject: 'Customer Submission Details',
//         html: `
//             <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 10px;">
//                 <h2 style="text-align: center; color: #333;">Submission Details</h2>
//                 <p style="text-align: center; color: #555;">Here are the provided details:</p>
//                 <ul style="list-style-type: none; padding: 0;">
//                     <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Sessions:</strong> ${sessions}</li>
//                     <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Familiarity:</strong> ${familiarity}</li>
//                     <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Scale Familiarity:</strong> ${scale_familiarity}</li>
//                     <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Improved Training:</strong> ${improved_training}</li>
//                     <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Attend:</strong> ${attend}</li>
//                     <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Updates:</strong> ${updates}</li>
//                     <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong> ${email}</li>
//                     <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong> ${phone}</li>
//                 </ul>
//             </div>
//         `
//     };

//     try {
//         // Send the email
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email sent: ' + info.response);
//     } catch (error) {
//         console.error('Error sending email:', error);
//         throw new Error('Email sending failed');
//     }
// };

// // Export the sendMail function
// module.exports = sendMail;



// Configure the SMTP transporter
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER, // Email user from environment variables
        pass: process.env.EMAIL_PASS   // Email password from environment variables
    }
});

const sendMail = async (userData) => {
    // Destructure the relevant fields from userData
    const {
        achievinggoal,
        learned,
        metervalue,
        familiarity,
        scalefamiliarity,
        improvedTraining,
        attend,
        email,
        phone
    } = userData;

    // Set up the mail options
    const mailOptions = {
        from: email, // Use the user email from environment variables
        to: process.env.EMAIL_TO,      // Send to the recipient's email from environment variables
        subject: 'Customer Submission Details',
        html: `
            <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 10px;">
                <h2 style="text-align: center; color: #333;">Submission Details</h2>
                <p style="text-align: center; color: #555;">Here are the provided details:</p>
                <ul style="list-style-type: none; padding: 0;">
                    <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Achieving Goal:</strong> ${achievinggoal}</li>
                    <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Learned:</strong> ${learned}</li>
                    <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Meter Value:</strong> ${metervalue}</li>
                    <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Familiarity:</strong> ${familiarity}</li>
                    <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Scale Familiarity:</strong> ${scalefamiliarity}</li>
                    <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Improved Training:</strong> ${improvedTraining}</li>
                    <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Attend:</strong> ${attend}</li>
                    <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong> ${email}</li>
                    <li style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong> ${phone}</li>
                </ul>
            </div>
        `
    };

    try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Email sending failed');
    }
};

// Export the sendMail function
module.exports = sendMail;
