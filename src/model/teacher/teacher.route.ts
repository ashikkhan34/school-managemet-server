import express from "express";
import { teacherController } from "./teacher.controller.js";
import { validateRequest } from "../middleware/validateRequiest.js";
import { createTeacherSchema, updateTeacherSchema } from "./teacher.validate.js";

const router = express.Router();

router.post("/create", validateRequest(createTeacherSchema), teacherController.createTeacherController);
router.get("/", teacherController.getAllTeacherController);
router.get("/:id", teacherController.getATeacherController);
router.put("/:id", validateRequest(updateTeacherSchema), teacherController.updateTeacherController);
router.delete("/:id", teacherController.deleteTeacherController);

export const teacherRouter = router;
