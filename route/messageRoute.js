import express from "express";
import {
  postMessage,
  getAllMessages,
  deleteMessage,
  getMessageById,
} from "../controller/messageController.js";

const router = express.Router();

router.post("/posting", postMessage);

router.get("/getting", getAllMessages);

router.get("/gettingById/:id", getMessageById);

router.delete("/delete/:id", deleteMessage);

export default router;
