var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/create", async function (req, res) {
  const createdUsers = await userModel.create({
    username: "arbaz",
    age: 5,
    name: "arbaz",
  });
  res.send(createdUsers);
});

module.exports = router;
