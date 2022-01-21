const User = require("../models/User");
const router = require("express").Router();
// import express from "express"
// const router=express.Router();
const bcrypt = require("bcrypt");

const userController = require("../controllers/users")

//update user
router.put("/:id", userController.update_user);
//delete user
router.delete("/:id", userController.delete_user);
//get a user
router.get("/:id", userController.get_user);
//follow a user
router.put("/:id/follow", userController.follow_user);
//unfollow a user
router.put("/:id/unfollow", userController.unfollow_user);
module.exports = router;
