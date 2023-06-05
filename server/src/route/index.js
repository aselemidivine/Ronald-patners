const express = require("express");
const router = express.Router();

const form = require("../controller/index");

// Registering the user.
router.post("/submit-form", form.submitForm);

module.exports = router;

