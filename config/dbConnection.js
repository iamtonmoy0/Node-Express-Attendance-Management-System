const mongoose = require("mongoose");
require("dotenv").config();
require("colors");
// db connection
const dbConnect = async () => {
  await mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("Database Connected...".green);
    })
    .catch((err) => {
      console.log("Error Connecting to Database ".red, err);
    });
};
dbConnect();
