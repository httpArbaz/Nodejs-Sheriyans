const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mydb");

const userSchema = new mongoose.Schema({
  username: {
    type: [String],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: {
    type: [String],
  },
  dp: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
