const jwt = require("jsonwebtoken");
const { responseError } = require("response-manager");
const User = require("../models/user.model");

const authenticate = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) return responseError(res, 400, "failed", "Unauthorized");
  try {
    token = token.split(" ")[1];
    const decoded = await jwt.decode(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    if (!user) {
      return responseError(res, 400, "failed", "Unauthorized");
    }

    req.user = user;
    next();
  } catch (error) {}
  responseError(res, 400, "failed", error);
};

module.exports = authenticate;
