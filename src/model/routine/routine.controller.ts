import type { NextFunction, Request, Response } from "express";
import { routineService } from "./routine.service.js";
import AppError from "../helper/AppError.js";

// Create Routine
const createRoutineController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const routine = await routineService.createRoutineService(req.body);
    res.status(201).json({
      success: true,
      message: "Routine created successfully",
      data: routine,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Get All Routine
const getAllRoutineController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allRoutine = await routineService.getAllRoutineService();
    if (!allRoutine || allRoutine.length === 0)
      return next(new AppError(404, "No routines found"));

    res.status(200).json({
      success: true,
      message: "All routines fetched successfully",
      data: allRoutine,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Get single Routine
const getARoutineController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Routine ID is required"));

    const routine = await routineService.getARoutineService(id);
    if (!routine) return next(new AppError(404, "Routine not found"));

    res.status(200).json({
      success: true,
      message: "Routine fetched successfully",
      data: routine,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Update Routine
const updateRoutineController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Routine ID is required"));

    const routine = await routineService.updateRoutineService(id, req.body);
    if (!routine) return next(new AppError(404, "Routine not found"));

    res.status(200).json({
      success: true,
      message: "Routine updated successfully",
      data: routine,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Delete Routine
const deleteRoutineController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Routine ID is required"));

    const routine = await routineService.deleteARoutineService(id);
    if (!routine) return next(new AppError(404, "Routine not found"));

    res.status(200).json({
      success: true,
      message: "Routine deleted successfully",
      data: routine,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

export const routineController = {
  createRoutineController,
  getAllRoutineController,
  getARoutineController,
  updateRoutineController,
  deleteRoutineController,
};
