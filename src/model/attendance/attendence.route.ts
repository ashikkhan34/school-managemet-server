import express from "express";
import { attendanceController } from "./attendence.controller.js";

const router = express.Router();

router.post("/create-attendance", attendanceController.createAttendanceController);
router.get("/", attendanceController.getAllAttendanceController);
router.get("/:id", attendanceController.getAAttendanceController);
router.put("/:id", attendanceController.updateAttendanceController);
router.delete("/:id", attendanceController.deleteAttendanceController);

export const attendanceRouter = router;
