const express = require("express");
const {
  allDoctors,
  singleDoctor,
  addDoctor,
  editDoctor,
  deleteDoctor,
} = require("../controllers/doctor.controller");
const adminAuthMiddleware = require("../middlewares/adminAuthMiddleware");
const router = express.Router();

router.get("/", adminAuthMiddleware, allDoctors);
router.get("/:id", adminAuthMiddleware, singleDoctor);
router.post("/", adminAuthMiddleware, addDoctor);
router.patch("/:id", adminAuthMiddleware, editDoctor);
router.delete("/:id", adminAuthMiddleware, deleteDoctor);

module.exports = router;
