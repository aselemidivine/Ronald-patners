const { Schema, model } = require("mongoose");

// Create a schema and model for the form data
const formDataSchema = Schema({
  name: String,
  nationality: String,
  email: String,
  phoneNumber: String,
  country: String,
  note: String,
  course: String,
  employmentHistory: String,
  destinationCountry: String,
  purposeOfTravel: String,
  educationHistory: String,
});

module.exports.FormData = model("FormData", formDataSchema);
