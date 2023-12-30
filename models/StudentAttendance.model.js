const { Schema, model } = require("mongoose");
const { ObjectId } = Schema;

const studentAttendanceSchema = new Schema({
  createdAt: Date,
  user: {
    type: ObjectId,
    ref: "User",
  },
  adminAttendance: {
    type: ObjectId,
    ref: "AdminAttendance",
  },
});

const StudentAttendance = model("StudentAttendance", studentAttendanceSchema);

module.exports = StudentAttendance;
