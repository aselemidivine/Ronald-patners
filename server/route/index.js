const express = require("express");
const multer =  require('multer');
const router = express.Router();

<<<<<<< HEAD
const { signUpRequestSerializer } = require('../serializer/userSerializers');
const { verifyToken } = require('../middleware/jwt');
const { signUp, login } = require('../controller/userController');
const { createProfilePicture, getOneProfilePic } = require('../controller/pictureController');
const { requestOTP, verifyUserOTP } = require('../controller/otpController');
const { createApplication, getAllApplication } = require('../controller/applicationController');
const { createDocument, getOneDocument, getAllDocument } = require('../controller/userDocumentController');
const { createProfile, modifyProfile, getOneProfile, getAllProfile } = require('../controller/userProfileController');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    },
})
const upload = multer({ storage: storage })
=======
const formController = require("../controller/formController");
>>>>>>> 756c603975d364b626dc53fd6537ed05659a15c5

// api route
router.post("/signup", signUpRequestSerializer, signUp);
router.post("/login", login);
router.post("/verify", verifyUserOTP);
router.post("/request", requestOTP);

//profile route
router.post("/profile", verifyToken, createProfile);
router.get("/profile", verifyToken, getAllProfile);
router.get("/profile/:id", verifyToken, getOneProfile);
router.patch("/profile/:id", verifyToken, modifyProfile);

//document route
router.post("/document", verifyToken, upload.array('file', 3), createDocument);
router.get("/document/:id", verifyToken, getOneDocument);
router.get("/document", verifyToken, getAllDocument);

//application route
router.post("/application", verifyToken, createApplication);
router.get("/application", verifyToken, getAllApplication);

//picture route
router.post("/picture", verifyToken, upload.single('file'), createProfilePicture);
router.get("/picture/:id", verifyToken, getOneProfilePic);
    
module.exports = router;
