import express from 'express'
import { sendmessage } from '../controller/message.js';

const router=express.Router();

router.get('/',sendmessage);


export default router;