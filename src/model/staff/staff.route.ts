import express from "express";
import { staffController } from "./staff.controller.js";

const router = express.Router();

router.post("/create-staff", staffController.createStaffController);
router.get("/", staffController.getAllStaffController);
router.get("/:id", staffController.getAStaffController);
router.put("/:id", staffController.updateStaffController);
router.delete("/:id", staffController.deleteStaffController);

export const staffRouter = router;
