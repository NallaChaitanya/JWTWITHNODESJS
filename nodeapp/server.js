//console.log("success fully running...!");
var express = require("express");
var app = express();

var bodyPaser = require("body-parser");

var mongoose = require("mongoose");

const PORT = 5000;
const db = require("./config/keys").mongoURI;
const userRouter = require("./router/user.router");

app.use(bodyPaser.urlencoded({ extended: true }));
app.use(bodyPaser.json());
mongoose
  .connect(db)
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch(err => {
    console.log(err);
  });

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

app.get("/", (req, res) => {
  res.json({
    Tutorial: "Welcome to the Node express JWT Tutorial"
  });
});

app.use("/user", userRouter);
