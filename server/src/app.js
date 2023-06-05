const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://Ronald-Partners:ronald-partners@cluster0.gwdmzoy.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("Mongodb connection failed"));

// Create a schema and model for the form data
const formDataSchema = new mongoose.Schema({
  name: String,
  nationality: String,
  email: String,
  phoneNumber: String,
  country: String,
  note: String,
  employmentHistory: String,
  destinationCountry: String,
  purposeOfTravel: String,
  educationHistory: String,

});
const FormData = mongoose.model("FormData", formDataSchema);

// Handle form submission
app.post("/submit-form", async (req, res) => {
  const { name, nationality, country, email, phoneNumber, note } = req.body;

  try {
    // Save form data to MongoDB
    const form = new FormData({ name, nationality, country, email, phoneNumber, note });
    await form.save();

    // Send email to the customer
    const customerEmail = {
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
    await sendEmail(ownerEmail);

    res.send("Form submitted successfully");
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).send("An error occurred while submitting the form");
  }
});

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

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});