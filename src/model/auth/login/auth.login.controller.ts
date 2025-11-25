

import type { NextFunction, Request, Response } from "express";
import AppError from "../../helper/AppError.js";
import { loginService } from "./auth.login.service.js";

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await loginService(req.body);
    res.status(201).json({
      success: true,
      message: "user register successful",
      data: user,
    });
  } catch (error) {
    next(new AppError(400, "login failed"));
  }
};
