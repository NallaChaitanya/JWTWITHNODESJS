var express = require("express");
var mongoose = require("mongoose");

var bcrypt = require("bcrypt");
//var app = express();
const router = express.Router();

const User = require("../models/User");

router.post("/signUp", (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then(hashedPassword => {
      // return usersDB.saveUser(username, hashedPassword);
      // console.log(hashedPassword);

      const user = User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hashedPassword
      });

      user
        .save()
        .then(user => {
          res.json("Email " + user.email + " registered succesfully");
        })
        .catch(err => console.log(err));
    })
    .catch(err => {
      if (err) {
        res.json("REQUEST failed due to hasing");
      }
    });
});

module.exports = router;
