const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const authController = require("../controllers/auth")
//REGISTER
router.post("/register", authController.user_register);

//LOGIN
router.post("/login", authController.user_login);

module.exports = router;
