import express from "express";
import { routineController } from "./routine.controller.js";

const router = express.Router();

router.post("/create-routine", routineController.createRoutineController);
router.get("/", routineController.getAllRoutineController);
router.get("/:id", routineController.getARoutineController);
router.put("/:id", routineController.updateRoutineController);
router.delete("/:id", routineController.deleteRoutineController);

export const routineRouter = router;
