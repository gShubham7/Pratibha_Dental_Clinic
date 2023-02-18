const express = require("express");
const { getOTP, verifyOTP } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/get-otp", getOTP);
router.post("/verify-otp", verifyOTP);

module.exports = router;
