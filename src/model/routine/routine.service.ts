import type { IRoutine } from "./routine.interface.js";
import { RoutineModel } from "./routine.model.js";

const createRoutineService = async (payload: IRoutine) => {
  const routine = await RoutineModel.create(payload);
  return routine;
};

const getAllRoutineService = async () => {
  return await RoutineModel.find().populate("teacherId");
};

const getARoutineService = async (id: string) => {
  return await RoutineModel.findById(id).populate("teacherId");
};

const updateRoutineService = async (id: string, payload: Partial<IRoutine>) => {
  return await RoutineModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteARoutineService = async (id: string) => {
  return await RoutineModel.findByIdAndDelete(id);
};

export const routineService = {
  createRoutineService,
  getAllRoutineService,
  getARoutineService,
  updateRoutineService,
  deleteARoutineService,
};
