import type { NextFunction, Request, Response } from "express";
import { staffService } from "./staff.service.js";
import AppError from "../helper/AppError.js";

// Create Staff
const createStaffController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createStaff = await staffService.createStaffService(req.body);
    res.status(201).json({
      success: true,
      message: "Staff created successfully",
      data: createStaff,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Get All Staff
const getAllStaffController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allStaff = await staffService.getAllStaffService();
    if (!allStaff || allStaff.length === 0) return next(new AppError(404, "No staff found"));

    res.status(200).json({
      success: true,
      message: "All staff fetched successfully",
      data: allStaff,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Get single Staff
const getAStaffController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Staff ID is required"));

    const aStaff = await staffService.getAStaffService(id);
    if (!aStaff) return next(new AppError(404, "Staff not found"));

    res.status(200).json({
      success: true,
      message: "Staff fetched successfully",
      data: aStaff,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Update Staff
const updateStaffController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Staff ID is required"));

    const aStaff = await staffService.updateStaffService(id, req.body);
    if (!aStaff) return next(new AppError(404, "Staff not found"));

    res.status(200).json({
      success: true,
      message: "Staff updated successfully",
      data: aStaff,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Delete Staff
const deleteStaffController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Staff ID is required"));

    const aStaff = await staffService.deleteAStaffService(id);
    if (!aStaff) return next(new AppError(404, "Staff not found"));

    res.status(200).json({
      success: true,
      message: "Staff deleted successfully",
      data: aStaff,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

export const staffController = {
  createStaffController,
  getAllStaffController,
  getAStaffController,
  updateStaffController,
  deleteStaffController,
};
