const { Schema, model } = require("mongoose");

const DoctorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  contact: {
    type: Number,
    unique: true,
    required: true,
  },
});

const DoctorModel = model("doctor", DoctorSchema);

module.exports = DoctorModel;
