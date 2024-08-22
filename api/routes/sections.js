import express from 'express';
import { get_dec, get_programs, get_sec, get_sem } from '../controller/sections.js';

const router = express.Router();

router.get('/', get_programs);
router.get('/dec/:id', get_dec);
router.get('/get_sem',get_sem);
router.get('/get_sec',get_sec);

export default router;
