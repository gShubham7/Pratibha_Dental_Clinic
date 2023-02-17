const express = require("express");
const DoctorModel = require("../models/doctorModel");

const allDoctors = async (req, res) => {
  try {
    const allDocs = await DoctorModel.find();
    return res.status(200).send(allDocs);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const singleDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await DoctorModel.find({ _id: id });
    return res.status(200).send(doc);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const addDoctor = async (req, res) => {
  const { firstName, lastName, speciality, email, contact } = req.body;
  try {
    const newDoc = await new DoctorModel({
      firstName,
      lastName,
      speciality,
      email,
      contact,
    });
    newDoc.save();
    return res.status(201).send(newDoc);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const editDoctor = async (req, res) => {
  const { firstName, lastName, speciality, email, contact } = req.body;
  try {
    const updateDoc = await DoctorModel.findOneAndUpdate(
      { email },
      { firstName, lastName, speciality, email, contact },
      { new: true }
    );
    return res.status(200).send(updateDoc);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await DoctorModel.findByIdAndDelete({ _id: id });
    return res.status(200).send(doc);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  allDoctors,
  singleDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
