const { Schema, model } = require("mongoose");

// Create a schema and model for the form data
const userProfileSchema = Schema({
  countryOfOrigin: String,
  previousCountryOfStudy: String,
  yearGraduated: String,
  currentOccupation: String,
  proposeCourseOfStudy: String,
  proposeCountryOfStudy: String,
  tuitionBudget: String,
  accompanyDependant: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
});

module.exports.userProfile = model("userProfile", userProfileSchema);
