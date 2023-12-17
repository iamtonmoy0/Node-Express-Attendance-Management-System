const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  roles: [String],
  accountStatus: String,
});

const user = model("User", userSchema);
module.exports = user;
