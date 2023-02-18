const { Schema, model } = require("mongoose");

const DoctorSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    speciality: {
      type: String,
    },
    contact: {
      type: Number,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Doctor"],
      default: "Doctor",
    },
    phoneOTP: {
      type: Number,
    },
  },
  { timestamps: true }
);

const DoctorModel = model("doctor", DoctorSchema);

module.exports = DoctorModel;
