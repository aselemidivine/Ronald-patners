const express = require("express");
const router = express.Router();

const formController = require("../controller/formController");

// api route
router.post("/submit-form", formController.handleForm);
    
module.exports = router;
