import type { IAttendance } from "./attendance.interface.js";
import { AttendanceModel } from "./attendance.model.js";

const createAttendanceService = async (payload: IAttendance) => {
  const attendance = await AttendanceModel.create(payload);
  return attendance;
};

const getAllAttendanceService = async () => {
  return await AttendanceModel.find().populate("studentId teacherId");
};

const getAAttendanceService = async (id: string) => {
  return await AttendanceModel.findById(id).populate("studentId teacherId");
};

const updateAttendanceService = async (id: string, payload: Partial<IAttendance>) => {
  return await AttendanceModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteAAttendanceService = async (id: string) => {
  return await AttendanceModel.findByIdAndDelete(id);
};

export const attendanceService = {
  createAttendanceService,
  getAllAttendanceService,
  getAAttendanceService,
  updateAttendanceService,
  deleteAAttendanceService,
};
