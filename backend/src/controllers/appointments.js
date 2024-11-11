const Appointment = require("../models/Appointment");

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", message: "failed getting all appointments" });
  }
};

const addAppointment = async (req, res) => {
  try {
    await Appointment.create(req.body);
    res.status(201).json({ status: "ok", message: "appointment saved" });
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", message: "failed to add appointment" });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const appt = await Appointment.findByIdAndDelete(req.params.id);
    if (!appt) {
      return res
        .status(404)
        .json({ status: "error", message: "appointment not found" });
    }
    res.json({ status: "ok", msg: "appointment deleted" });
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "failed to delete appointment" });
  }
};

const updateAppointment = async (req, res) => {
  try {
    const appt = await Appointment.findByIdAndUpdate(req.params.id, req.body);
    if (!appt) {
      return res
        .status(404)
        .json({ status: "error", message: "appointment not found" });
    }
    res.json({ status: "ok", msg: "appointment updated" });
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "failed to update appointment" });
  }
};

module.exports = {
  getAllAppointments,
  addAppointment,
  deleteAppointment,
  updateAppointment,
};
