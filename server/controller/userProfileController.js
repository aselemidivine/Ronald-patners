const { userProfile }  = require("../model/userProfileModel");

module.exports.createProfile = async (req, res) => {
  try {
    const {
      countryOfOrigin,
      previousCountryOfStudy,
      yearGraduated,
      currentOccupation,
      proposeCourseOfStudy,
      proposeCountryOfStudy,
      tuitionBudget,
      accompanyDependant,
    } = req.body;
    const userDetails = await userProfile.create({
      countryOfOrigin,
      previousCountryOfStudy,
      yearGraduated,
      currentOccupation,
      proposeCourseOfStudy,
      proposeCountryOfStudy,
      tuitionBudget,
      accompanyDependant,
    });
    return res.status(201).send({ 
      message: "Profile created",
      userDetails, 
    }); 
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error occured' });
  }
}

module.exports.modifyProfile = async (req, res) => {
  try {
    const { _id } = req.user;
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    } 
    await userProfile.findByIdAndUpdate(_id, req.body, { useFindAndModify: false });
    return res.status(200).json({ message: "User Profile was updated successfully." })

  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

module.exports.getOneProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const singleProfile = await userProfile.findById(id);
    return res.status(200).json({ singleProfile });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports.getAllProfile = async (req, res) => {
  try {
    const allProfile = await userProfile.find();
    return res.status(200).json({ allProfile });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
