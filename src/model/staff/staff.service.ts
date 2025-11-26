import type { IStaff } from "./staff.interface.js";
import { StaffModel } from "./staff.model.js";

const createStaffService = async (payload: IStaff) => {
  const createStaff = await StaffModel.create(payload);
  return createStaff;
};

const getAllStaffService = async () => {
  return await StaffModel.find();
};

const getAStaffService = async (id: string) => {
  return await StaffModel.findById(id);
};

const updateStaffService = async (id: string, payload: Partial<IStaff>) => {
  return await StaffModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteAStaffService = async (id: string) => {
  return await StaffModel.findByIdAndDelete(id);
};

export const staffService = {
  createStaffService,
  getAllStaffService,
  getAStaffService,
  updateStaffService,
  deleteAStaffService,
};
