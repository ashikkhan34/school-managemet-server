import express from "express";
import { resultController } from "./result.controller.js";

const router = express.Router();

router.post("/create-result", resultController.createResultController);
router.get("/", resultController.getAllResultController);
router.get("/:id", resultController.getAResultController);
router.put("/:id", resultController.updateResultController);
router.delete("/:id", resultController.deleteResultController);

export const resultRouter = router;
