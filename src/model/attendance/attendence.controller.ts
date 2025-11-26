import type { NextFunction, Request, Response } from "express";
import { attendanceService } from "./attendance.service.js";
import AppError from "../helper/AppError.js";

// Create Attendance
const createAttendanceController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const attendance = await attendanceService.createAttendanceService(req.body);
    res.status(201).json({
      success: true,
      message: "Attendance created successfully",
      data: attendance,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Get All Attendance
const getAllAttendanceController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allAttendance = await attendanceService.getAllAttendanceService();
    if (!allAttendance || allAttendance.length === 0)
      return next(new AppError(404, "No attendance records found"));

    res.status(200).json({
      success: true,
      message: "All attendance records fetched successfully",
      data: allAttendance,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Get single Attendance
const getAAttendanceController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Attendance ID is required"));

    const attendance = await attendanceService.getAAttendanceService(id);
    if (!attendance) return next(new AppError(404, "Attendance record not found"));

    res.status(200).json({
      success: true,
      message: "Attendance record fetched successfully",
      data: attendance,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Update Attendance
const updateAttendanceController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Attendance ID is required"));

    const attendance = await attendanceService.updateAttendanceService(id, req.body);
    if (!attendance) return next(new AppError(404, "Attendance record not found"));

    res.status(200).json({
      success: true,
      message: "Attendance updated successfully",
      data: attendance,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Delete Attendance
const deleteAttendanceController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Attendance ID is required"));

    const attendance = await attendanceService.deleteAAttendanceService(id);
    if (!attendance) return next(new AppError(404, "Attendance record not found"));

    res.status(200).json({
      success: true,
      message: "Attendance deleted successfully",
      data: attendance,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

export const attendanceController = {
  createAttendanceController,
  getAllAttendanceController,
  getAAttendanceController,
  updateAttendanceController,
  deleteAttendanceController,
};
