const { FormData } = require("../model/index");
const nodemailer = require("nodemailer");

// Function to send emails using Nodemailer

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
// Handle form submission
module.exports.submitForm = async (req, res) => {
  const { name, nationality, 
      country, email, 
      phoneNumber, note,
      employmentHistory, destinationCountry,
      purposeOfTravel, educationHistory,
    } = req.body;

  try {
    // Save form data to MongoDB
    await FormData.create({ name, nationality, 
      country, email, 
      phoneNumber, note, 
      employmentHistory, destinationCountry,
      purposeOfTravel, educationHistory,
    });

    // Send email to the customer
    /* const customerEmail = {
      from: "aselemidivine@gmail.com",
      // to: email,
      to: 'sammybammystudios@gmail.com',
      subject: "Thank you for your submission",
      text: "Your message has been received. We will get back to you soon.",
    };
    await sendEmail(customerEmail);

    // Send email to the business owner
    const ownerEmail = {
      from: email,
      // from: "aselemidivine@gmail.com",
      to: "aselemidivine@gmail.com",
      subject: "New Form Submission",
      text: `A new form submission has been received.\n\nEmail: ${email}\nMessage: ${phoneNumber}`,
    };
    await sendEmail(ownerEmail); */

    await transporter.sendMail({
      from: ' "Bookstack" <owietutorial@gmail.com>',
      to: email,
      subject: 'Reset Password Requested',
      html: ` <p>Your message has been received. We will get back to you soon.<br></br>
        Please note that this link is only valid for 60 minutes.<br></br></p>
      `,
    });

    await transporter.sendMail({
      from: ' "Bookstack" <owietutorial@gmail.com>',
      to: email,
      subject: 'Reset Password Requested',
      html: ` <p>Alert<br></br>
        A new form submission has been 
        received.\n\nEmail: ${email}\nMessage: ${phoneNumber}<br></br></p>
      `,
    });
    return res.status(200).json({ message: 'Kindly check your email' });

  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ message: "An error occurred while submitting the form" });
  }
};
