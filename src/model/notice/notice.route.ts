import express from "express";
import { noticeController } from "./notice.controller.js";

const router = express.Router();

router.post("/create-notice", noticeController.createNoticeController);
router.get("/", noticeController.getAllNoticeController);
router.get("/:id", noticeController.getANoticeController);
router.put("/:id", noticeController.updateNoticeController);
router.delete("/:id", noticeController.deleteNoticeController);

export const noticeRouter = router;
