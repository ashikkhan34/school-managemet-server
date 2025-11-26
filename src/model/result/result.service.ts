import type { IResult } from "./result.interface.js";
import { ResultModel } from "./result.model.js";

const createResultService = async (payload: IResult) => {
  const result = await ResultModel.create(payload);
  return result;
};

const getAllResultService = async () => {
  return await ResultModel.find().populate("studentId");
};

const getAResultService = async (id: string) => {
  return await ResultModel.findById(id).populate("studentId");
};

const updateResultService = async (id: string, payload: Partial<IResult>) => {
  return await ResultModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteAResultService = async (id: string) => {
  return await ResultModel.findByIdAndDelete(id);
};

export const resultService = {
  createResultService,
  getAllResultService,
  getAResultService,
  updateResultService,
  deleteAResultService,
};
