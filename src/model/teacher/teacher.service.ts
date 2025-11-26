import type { ITeacher } from "./teacher.interface.js";
import { TeacherModel } from "./teacher.model.js";

const createTeacherService = async (payload: ITeacher) => {
  const teacher = await TeacherModel.create(payload);
  return teacher;
};

const getAllTeacherService = async () => {
  return await TeacherModel.find();
};

const getATeacherService = async (id: string) => {
  return await TeacherModel.findById(id);
};

const updateTeacherService = async (id: string, payload: Partial<ITeacher>) => {
  return await TeacherModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteATeacherService = async (id: string) => {
  return await TeacherModel.findByIdAndDelete(id);
};

export const teacherService = {
  createTeacherService,
  getAllTeacherService,
  getATeacherService,
  updateTeacherService,
  deleteATeacherService,
};
