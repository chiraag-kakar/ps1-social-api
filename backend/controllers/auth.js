const User = require("../models/User");
const bcrypt = require("bcrypt");
exports.user_register=async (req, res) => {
    try {
      //generate new password
      // const salt = await bcrypt.genSalt(10);
      // const hashedPassword = await bcrypt.hash(req.body.password, salt);
      
      // console.log("+-+-+-+-+-+");
      // console.log(req);
      // let hashedPassword
      // bcrypt.genSalt(10, (err, salt) => {
      //     bcrypt.hash(req.body.password, salt, (err, hash) => {
      //         // Now we can store the password hash in db.
      //         hashedPassword=hash
      //     });
      // });
  
      // check before making request to db (best practices)
  
      //create new user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      console.log({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        });
  
      //save user and respond
      const user = await newUser.save();
      console.log(user);
      res.status(200).json(user);
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }

exports.user_login=async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (!user) return res.status(404).json("user not found");
  
      // const validPassword = await bcrypt.compare(req.body.password, user.password)
      // if (!validPassword) return res.status(400).json("wrong password")
  
      if(req.body.password!=user.password) return res.status(400).json("wrong password")
  
      res.status(200).json(user)
    } catch (err) {
      res.status(500).json(err)
    }
  }