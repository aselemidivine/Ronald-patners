const _ = require("lodash");
const otpGenerator = require("otp-generator");
const jwt = require('jsonwebtoken');
const  {User}  = require("../model/userModel");
const { Otp } = require("../model/otpModel");

// Generates a random 6 digit phone for OTP.
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
};

module.exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;

  // check if email
  const users = await User.find({ email })
    if (users.length  !== 0) {
      return res.status(400).send({ message: "Email is already registered", users });
    } else {
      // Adding user to DB and sending OTP to email/phone.
      await User.create({ name, email, password })  
      console.log("creating ") 
        // random otp
        const otp = generateOtp();
        Otp.create({ otp, email });
        return res.status(201).send({ 
          message: "OTP sent. Valid for only 2 minutes", 
          otp
        });  
    }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Email is not registered" });
  }
  // compare password
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return res.status(400).json({ error: "Invalid Password" });
  }
  // check if user is verified
  if(!user.is_verified) {
    return res.status(400).json({ error: "Email is not verified" });
  }
  // jwt token
  const token = await jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });
  // return a success message with user details and token.
  return res.status(200).json({
    message: "Login successful",
    user_token: token,
    user,
  });
};
