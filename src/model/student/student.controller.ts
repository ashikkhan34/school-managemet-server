import type { NextFunction, Request, Response } from "express";
import { studentService } from "./student.service.js";
import AppError from "../helper/AppError.js";

// Create Student
const createStudentController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createStudent = await studentService.createStudentService(req.body);
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: createStudent,
    });
  } catch (error: any) {
    next(
      new AppError(error.statusCode || 500, error.message || "Internal server error")
    );
  }
};

// Get all Students
const getAllStudentController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allStudent = await studentService.getAllStudentService();
    if (!allStudent || allStudent.length === 0)
      return next(new AppError(404, "No students found"));

    res.status(200).json({
      success: true,
      message: "All students fetched successfully",
      data: allStudent,
    });
  } catch (err: any) {
    next(
      new AppError(err.statusCode || 500, err.message || "Internal server error")
    );
  }
};

// Get single Student
const getAStudentController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Student ID is required"));

    const aStudent = await studentService.getAStudentService(id);
    if (!aStudent) return next(new AppError(404, "Student not found"));

    res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      data: aStudent,
    });
  } catch (err: any) {
    next(
      new AppError(err.statusCode || 500, err.message || "Internal server error")
    );
  }
};

// Update Student
const updateStudentController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Student ID is required"));

    const aStudent = await studentService.updateStudentService(id, req.body);
    if (!aStudent) return next(new AppError(404, "Student not found"));

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: aStudent,
    });
  } catch (err: any) {
    next(
      new AppError(err.statusCode || 500, err.message || "Internal server error")
    );
  }
};

// Delete Student
const deleteStudentController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Student ID is required"));

    const aStudent = await studentService.deleteAStudentService(id);
    if (!aStudent) return next(new AppError(404, "Student not found"));

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      data: aStudent,
    });
  } catch (err: any) {
    next(
      new AppError(err.statusCode || 500, err.message || "Internal server error")
    );
  }
};

export const studentController = {
  createStudentController,
  getAllStudentController,
  getAStudentController,
  updateStudentController,
  deleteStudentController,
};
