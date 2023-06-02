const express = require("express");
const router = express.Router();

const formController = require("../controller/formcontroller");

// api route
router.post("/submit-form", formController.handleForm);
    
module.exports = router;
