require("dotenv").config();
const DoctorModel = require("../models/DoctorModel");
const { generateOTP, fast2sms } = require("../utils/otpUtils");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const getOTP = async (req, res) => {
  const { contact } = req.body;
  try {
    const user = await DoctorModel.findOne({ contact });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const otp = generateOTP(6);
    user.phoneOTP = otp;
    await user.save();
    //send otp otp to phone no
    const checkUser = await fast2sms({
      message: `Your OTP is ${otp}`,
      contactNumber: user.contact,
    });
    return res.status(200).send(checkUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const verifyOTP = async (req, res) => {
  const { phoneOTP } = req.body;

  try {
    const user = await DoctorModel.findOne({ phoneOTP });
    if (!user) {
      return res.status(400).send("Incorrect OTP");
    }
    user.phoneOTP = "";
    await user.save();
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(200).send(token);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getOTP,
  verifyOTP,
};
