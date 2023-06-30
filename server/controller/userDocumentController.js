/* eslint-disable import/prefer-default-export */
const Cloudinary = require('cloudinary');
const { userDocument }  = require("../model/userDocumentModel");
require('dotenv/config');

//clodinary configuration
//create a cloudinary account and get this keys.
const cloudinary = Cloudinary.v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

//create product funtion
module.exports.createDocument = async (req, res) => {
  try {
    const uploadedImage = await cloudinary.uploader.upload(req.files[0].path);
    const uploadedSecondImage = await cloudinary.uploader.upload(req.files[1].path);
    const uploadedThirdImage = await cloudinary.uploader.upload(req.files[2].path);
    const documents = await userDocument.create({
      documentOne: uploadedImage.secure_url,
      documentTwo: uploadedSecondImage.secure_url,
      otherDocument: uploadedThirdImage.secure_url,
      userId: req.user._id, //creatorId
    });
    return res.status(201).json({
      message: 'Document saved Succesfully',
      documents,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error occured while creating the product' });
  }
};


module.exports.getOneDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const singleDocument = await userDocument.findById(id);
    return res.status(200).json({ singleDocument });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports.getAllDocument = async (req, res) => {
  try {
    const allDocument = await userDocument.find();
    return res.status(200).json({ allDocument });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};