const express = require("express");
const {
  allDoctors,
  singleDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
} = require("../controllers/doctor.controller");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, allDoctors);
router.get("/:id", authMiddleware, singleDoctor);
router.post("/", authMiddleware, addDoctor);
router.patch("/", authMiddleware, editDoctor);
router.delete("/", authMiddleware, deleteDoctor);

module.exports = router;
