const express = require("express");

//Controller functions
const { SignupUser, LoginUser } = require("../controllers/userController");

const router = express.Router();

//Login Route
router.post("/login", LoginUser);

//Signup Route
router.post("/signup", SignupUser);

module.exports = router;
