import type { NextFunction, Request, Response } from "express";
import AppError from "../helper/AppError.js";
import { admissionService } from "./addmission.service.js";

// Create Admission
const createAdmissionController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const admission = await admissionService.createAdmissionService(req.body);
    res.status(201).json({
      success: true,
      message: "Admission created successfully",
      data: admission,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Get all Admissions
const getAllAdmissionController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allAdmission = await admissionService.getAllAdmissionService();
    if (!allAdmission || allAdmission.length === 0)
      return next(new AppError(404, "No admissions found"));

    res.status(200).json({
      success: true,
      message: "All admissions fetched successfully",
      data: allAdmission,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Get single Admission
const getAAdmissionController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Admission ID is required"));

    const admission = await admissionService.getAAdmissionService(id);
    if (!admission) return next(new AppError(404, "Admission not found"));

    res.status(200).json({
      success: true,
      message: "Admission fetched successfully",
      data: admission,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Update Admission
const updateAdmissionController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Admission ID is required"));

    const admission = await admissionService.updateAdmissionService(id, req.body);
    if (!admission) return next(new AppError(404, "Admission not found"));

    res.status(200).json({
      success: true,
      message: "Admission updated successfully",
      data: admission,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Delete Admission
const deleteAdmissionController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Admission ID is required"));

    const admission = await admissionService.deleteAAdmissionService(id);
    if (!admission) return next(new AppError(404, "Admission not found"));

    res.status(200).json({
      success: true,
      message: "Admission deleted successfully",
      data: admission,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

export const admissionController = {
  createAdmissionController,
  getAllAdmissionController,
  getAAdmissionController,
  updateAdmissionController,
  deleteAdmissionController,
};
