
const express = require("express");
const router = express.Router();
const auth = require('../../middleware/authMiddleware')
const profileController = require("../../controller/profileController");

router.post("/create-profile",auth, profileController.createUserProfile);

module.exports = router;