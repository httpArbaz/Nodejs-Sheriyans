var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/createuser", async function (req, res, next) {
  let createdUser = await userModel.create({
    username: "Arbaz",
    password: "Arbaz",
    posts: [],
    email: "arbaz@male.com",
    fullName: "Muhammad Arbaz Uddin",
  });
  res.send(createdUser);
});

router.get("/createpost", async function (req, res, next) {
  let createdPost = await postModel.create({
    postText: "Hello everyone",
  });
  res.send(createdPost);
});

module.exports = router;
