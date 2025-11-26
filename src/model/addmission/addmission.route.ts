import express from "express";
import { admissionController } from "./addmission.controller.js";

const router = express.Router();

router.post("/create-admission", admissionController.createAdmissionController);
router.get("/", admissionController.getAllAdmissionController);
router.get("/:id", admissionController.getAAdmissionController);
router.put("/:id", admissionController.updateAdmissionController);
router.delete("/:id", admissionController.deleteAdmissionController);

export const admissionRouter = router;
