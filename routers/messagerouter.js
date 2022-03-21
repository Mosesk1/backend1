import express from "express";
import {createMessage, getMessage, getMessages, updateMessage, deleteMessage} from '../controllers/messages.js';
import  {isAdmin} from "../middlewares/usermiddle.js";

const router = express.Router();


router.post('/messages', createMessage)
router.get('/messages',  getMessages)
router.get('/messages/:id',  getMessage)
// router.patch('/messages/:id', updateMessage)
router.delete('/messages/:id', isAdmin, deleteMessage)

export default router;
