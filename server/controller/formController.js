const nodemailer = require("nodemailer");
const { FormData } = require('../model/index');

// Function to send emails using Nodemailer
async function sendEmail(emailOptions) {
  // Configure the SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "aselemidivine@gmail.com",
      pass: "govzfgkfzvunpqfl",
    },
  });

  // Send the email
  await transporter.sendMail(emailOptions);
}

// Handle form submission
module.exports.handleForm = async (req, res) => {
  const { 
    name, nationality, 
    country, email, phoneNumber,
    note, course, skillsSpecialization, 
    studyDestination, countryToStudy, 
    educationHistory, employmentHistory, 
    destinationCountry, purposeOfTravel 
  } = req.body;

  try {
    // Save form data to MongoDB
    const formData = new FormData({ 
      name, nationality, country, 
      email, phoneNumber, note, 
      course, skillsSpecialization, 
      studyDestination, countryToStudy, 
      educationHistory, employmentHistory, 
      destinationCountry, purposeOfTravel 
    });
    await formData.save();

   
    console.log(email)

    // Send email to the customer
    const customerEmail = {
      from: "aselemidivine@gmail.com",
      // to: email,
      to: 'dev.codertjay@gmail.com',
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
      text: `A new form submission has been received.\n\nEmail: ${email}\nMessage: ${phoneNumber} \nSpecialization: ${skillsSpecialization} \nCourse: ${course} `,
    };
    await sendEmail(ownerEmail);

    res.send("Form submitted successfully");
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).send("An error occurred while submitting the form");
  }
};
