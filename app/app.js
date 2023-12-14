const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// initialize app
const app = express();

//middlewares
app.use(express.json());
// cors
app.use(cors());
// morgan
app.use(morgan("dev"));

// routes

// default route
app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});
// Invalid route
app.all("*", (req, res) => {
  res.status(404).send("Invalid route");
});

module.exports = app;
