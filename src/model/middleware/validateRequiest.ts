import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";
import AppError from "../helper/AppError.js";

export const validateRequest =
  (schema: ZodSchema<any>) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = await schema.parseAsync(req.body);
      req.body = parsed;
      next();
    } catch (err: any) {
      // zod error হলে neat message পাঠানো
      const issues = err?.issues?.map((i: any) => ({ path: i.path.join("."), message: i.message })) || [];
      return next(new AppError(400, "Validation error"));
    }
  };
