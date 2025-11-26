import type { IStudent } from "./student.interface.js";
import { StudentModel } from "./student.model.js";

const createStudentService = async (payload: IStudent) => {
  const createStudent = await StudentModel.create(payload);
  return createStudent;
};

const getAllStudentService = async () => {
  return await StudentModel.find();
};

const getAStudentService = async (id: string) => {
  return await StudentModel.findById(id);
};

const updateStudentService = async (id: string, payload: Partial<IStudent>) => {
  return await StudentModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteAStudentService = async (id: string) => {
  return await StudentModel.findByIdAndDelete(id);
};

export const studentService = {
  createStudentService,
  getAllStudentService,
  getAStudentService,
  updateStudentService,
  deleteAStudentService,
};
