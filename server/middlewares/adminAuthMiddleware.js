require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const adminAuthMiddleware = async (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    const verification = jwt.verify(token, JWT_SECRET);
    if (verification && verification.role === "Admin") {
      req.userId = verification.id;
      req.useRole = verification.role;
      next();
    } else {
      res.status(401).send("Operation not allowed");
    }
  } else {
    res.status(403).send("Token not provided");
  }
};

module.exports = adminAuthMiddleware;
