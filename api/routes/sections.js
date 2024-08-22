import express from 'express';
import { get_dec, get_programs } from '../controller/sections.js';

const router = express.Router();

router.get('/', get_programs);
router.get('/dec', get_dec);

export default router;
