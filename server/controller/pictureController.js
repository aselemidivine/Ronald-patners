const Cloudinary = require('cloudinary');
const { userPicture } = require('../model/userProfileModel');
require('dotenv/config');

//clodinary configuration
//create a cloudinary account and get this keys.
const cloudinary = Cloudinary.v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});


module.exports.createProfilePicture = async (req, res) => {
  try {
    const uploadedImage = await cloudinary.uploader.upload(req.file);
    const application = await userPicture.create({
      image_url: uploadedImage.secure_url,
      userId: req.user._id,
    })
    return res.status(201).json({
      message: 'Profile picture updated',
      application,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error occured' });
  }
}

module.exports.getOneProfilePic = async (req, res) => {
  try {
    const { id } = req.params;
    const singlePicture = await userPicture.findById(id);
    return res.status(200).json({ singlePicture });
  } catch (err) {
      return res.status(500).json({ message: err });
    }
};
