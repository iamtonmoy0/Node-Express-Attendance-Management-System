const { Schema, model } = require("mongoose");

const { ObjectId } = Schema;

const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  avatar: String,
  user: {
    type: ObjectId,
    ref: "User",
  },
});

const profile = model("Profile", profileSchema);
