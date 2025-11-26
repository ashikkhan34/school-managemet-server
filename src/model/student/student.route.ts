import { Router } from "express";
import { studentController } from "./student.controller.js";

const router = Router();

router.post("/create-student", studentController.createStudentController);
router.get("/", studentController.getAllStudentController);
router.get("/:id", studentController.getAStudentController);
router.put("/:id", studentController.updateStudentController);
router.delete("/:id", studentController.deleteStudentController);

export default router;
