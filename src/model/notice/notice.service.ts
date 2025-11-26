import type { INotice } from "./notice.interface.js";
import { NoticeModel } from "./notice.model.js";

const createNoticeService = async (payload: INotice) => {
  const notice = await NoticeModel.create(payload);
  return notice;
};

const getAllNoticeService = async () => {
  return await NoticeModel.find();
};

const getANoticeService = async (id: string) => {
  return await NoticeModel.findById(id);
};

const updateNoticeService = async (id: string, payload: Partial<INotice>) => {
  return await NoticeModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteANoticeService = async (id: string) => {
  return await NoticeModel.findByIdAndDelete(id);
};

export const noticeService = {
  createNoticeService,
  getAllNoticeService,
  getANoticeService,
  updateNoticeService,
  deleteANoticeService,
};
