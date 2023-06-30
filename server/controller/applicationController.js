const { userApplication } = require('../model/applicationModel');

module.exports.createApplication = async (req, res) => {
  try {
    const { application_type } = req.body;
    const application = await userApplication.create({
      application_type,
      userId: req.user._id,
    })
    return res.status(201).json({
      message: 'Application sent',
      application,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error occured' });
  }
}

module.exports.getAllApplication = async (req, res) => {
  try {
    const allApplication = await userApplication.find();
    return res.status(200).json({ allApplication });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
