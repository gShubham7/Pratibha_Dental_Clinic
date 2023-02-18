require("dotenv").config();
const fast2sms = require("fast-two-sms");
const FAST2SMS = process.env.FAST2SMS;

exports.generateOTP = (otp_length) => {
  let digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

exports.fast2sms = async ({ message, contactNumber }) => {
  try {
    const res = await fast2sms.sendMessage({
      authorization: FAST2SMS,
      message,
      numbers: [contactNumber],
    }); 
    return res;
  } catch (error) {
    return res.send(error.message);
  }
};
