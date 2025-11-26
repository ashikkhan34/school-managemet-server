import type { NextFunction, Request, Response } from "express";
import { noticeService } from "./notice.service.js";
import AppError from "../helper/AppError.js";

// Create Notice
const createNoticeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notice = await noticeService.createNoticeService(req.body);
    res.status(201).json({
      success: true,
      message: "Notice created successfully",
      data: notice,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Get all Notices
const getAllNoticeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allNotice = await noticeService.getAllNoticeService();
    if (!allNotice || allNotice.length === 0)
      return next(new AppError(404, "No notices found"));

    res.status(200).json({
      success: true,
      message: "All notices fetched successfully",
      data: allNotice,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Get single Notice
const getANoticeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Notice ID is required"));

    const notice = await noticeService.getANoticeService(id);
    if (!notice) return next(new AppError(404, "Notice not found"));

    res.status(200).json({
      success: true,
      message: "Notice fetched successfully",
      data: notice,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Update Notice
const updateNoticeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Notice ID is required"));

    const notice = await noticeService.updateNoticeService(id, req.body);
    if (!notice) return next(new AppError(404, "Notice not found"));

    res.status(200).json({
      success: true,
      message: "Notice updated successfully",
      data: notice,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

// Delete Notice
const deleteNoticeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) return next(new AppError(400, "Notice ID is required"));

    const notice = await noticeService.deleteANoticeService(id);
    if (!notice) return next(new AppError(404, "Notice not found"));

    res.status(200).json({
      success: true,
      message: "Notice deleted successfully",
      data: notice,
    });
  } catch (err: any) {
    next(new AppError(err.statusCode || 500, err.message || "Internal server error"));
  }
};

export const noticeController = {
  createNoticeController,
  getAllNoticeController,
  getANoticeController,
  updateNoticeController,
  deleteNoticeController,
};
