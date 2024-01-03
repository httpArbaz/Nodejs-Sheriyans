// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.get("/profile", function (req, res) {
//   res.send("Hello Profile");
// });

// app.get("/profile/:username", function (req, res) {
//   res.send(`Hello From ${req.params.username}`);
// });

// app.listen(3000);

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(3000);
