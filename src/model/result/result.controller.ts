import type { NextFunction, Request, Response } from "express";
import { resultService } from "./result.service.js";
import AppError from "../helper/AppError.js";

// Create Result
const createResultController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await resultService.createResultService(req.body);
    res.status(201).json({
      success: true,
      message: "Result created successfully",
      data: result,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Get All Results
const getAllResultController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allResult = await resultService.getAllResultService();
    if (!allResult || allResult.length === 0)
      return next(new AppError(404, "No results found"));

    res.status(200).json({
      success: true,
      message: "All results fetched successfully",
      data: allResult,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Get single Result
const getAResultController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Result ID is required"));

    const result = await resultService.getAResultService(id);
    if (!result) return next(new AppError(404, "Result not found"));

    res.status(200).json({
      success: true,
      message: "Result fetched successfully",
      data: result,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Update Result
const updateResultController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Result ID is required"));

    const result = await resultService.updateResultService(id, req.body);
    if (!result) return next(new AppError(404, "Result not found"));

    res.status(200).json({
      success: true,
      message: "Result updated successfully",
      data: result,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Delete Result
const deleteResultController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Result ID is required"));

    const result = await resultService.deleteAResultService(id);
    if (!result) return next(new AppError(404, "Result not found"));

    res.status(200).json({
      success: true,
      message: "Result deleted successfully",
      data: result,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

export const resultController = {
  createResultController,
  getAllResultController,
  getAResultController,
  updateResultController,
  deleteResultController,
};
