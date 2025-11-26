import type { IAdmission } from "./addmission.interface.js";
import { AdmissionModel } from "./addmission.model.js";


const createAdmissionService = async (payload: IAdmission) => {
  const admission = await AdmissionModel.create(payload);
  return admission;
};

const getAllAdmissionService = async () => {
  return await AdmissionModel.find().populate("studentId");
};

const getAAdmissionService = async (id: string) => {
  return await AdmissionModel.findById(id).populate("studentId");
};

const updateAdmissionService = async (id: string, payload: Partial<IAdmission>) => {
  return await AdmissionModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteAAdmissionService = async (id: string) => {
  return await AdmissionModel.findByIdAndDelete(id);
};

export const admissionService = {
  createAdmissionService,
  getAllAdmissionService,
  getAAdmissionService,
  updateAdmissionService,
  deleteAAdmissionService,
};
