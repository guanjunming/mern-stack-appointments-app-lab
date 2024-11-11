const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  title: { type: String, required: true, minLength: 1, maxLength: 50 },
  type: { type: String, required: true, minLength: 1, maxLength: 50 },
  purpose: { type: String, required: true },
  company: { type: String },
  person: { type: String },
  address: { type: String },
  date: { type: Date, required: true, default: Date.now },
  comments: { type: String },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
