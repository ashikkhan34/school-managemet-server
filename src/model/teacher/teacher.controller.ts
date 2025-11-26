import type { Request, Response, NextFunction } from "express";
import { teacherService } from "./teacher.service.js";
import AppError from "../helper/AppError.js";

const createTeacherController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const teacher = await teacherService.createTeacherService(req.body);
    res.status(201).json({ success: true, message: "Teacher created", data: teacher });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

const getAllTeacherController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const teachers = await teacherService.getAllTeacherService();
    res.status(200).json({ success: true, message: "All teachers", data: teachers });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

const getATeacherController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Teacher id is required"));

    const teacher = await teacherService.getATeacherService(id);
    if (!teacher) return next(new AppError(404, "Teacher not found"));

    res.status(200).json({ success: true, message: "Teacher found", data: teacher });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

const updateTeacherController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Teacher id is required"));

    const teacher = await teacherService.updateTeacherService(id, req.body);
    if (!teacher) return next(new AppError(404, "Teacher not found"));

    res.status(200).json({ success: true, message: "Teacher updated", data: teacher });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

const deleteTeacherController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Teacher id is required"));

    const teacher = await teacherService.deleteATeacherService(id);
    if (!teacher) return next(new AppError(404, "Teacher not found"));

    res.status(200).json({ success: true, message: "Teacher deleted", data: teacher });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

export const teacherController = {
  createTeacherController,
  getAllTeacherController,
  getATeacherController,
  updateTeacherController,
  deleteTeacherController,
};
