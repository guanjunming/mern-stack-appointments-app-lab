const express = require("express");
const {
  getAllAppointments,
  addAppointment,
  deleteAppointment,
  updateAppointment,
} = require("../controllers/appointments");
const {
  validateApptData,
  validateIdInParam,
} = require("../validators/appointments");
const checkErrors = require("../validators/checkErrors");

const router = express.Router();

router.get("/appts", getAllAppointments);
router.post("/appts", validateApptData, checkErrors, addAppointment);
router.delete("/appts/:id", validateIdInParam, checkErrors, deleteAppointment);
router.patch(
  "/appts/:id",
  validateIdInParam,
  validateApptData,
  checkErrors,
  updateAppointment
);

module.exports = router;
