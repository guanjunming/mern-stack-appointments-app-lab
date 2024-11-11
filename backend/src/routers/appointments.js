const express = require("express");
const {
  getAllAppointments,
  addAppointment,
  deleteAppointment,
  updateAppointment,
} = require("../controllers/appointments");

const router = express.Router();

router.get("/appts", getAllAppointments);
router.post("/appts", addAppointment);
router.delete("/appts/:id", deleteAppointment);
router.patch("/appts/:id", updateAppointment);

module.exports = router;
