import type { NextFunction, Request, Response } from "express";
import { registerService } from "./auth.register.service.js";
import AppError from "../../helper/AppError.js";

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await registerService(req.body);
    res.status(201).json({
      success: true,
      message: "user register successful",
      data: user,
    });
  } catch (error) {
    next(new AppError(400, "registration failed"));
  }
};
