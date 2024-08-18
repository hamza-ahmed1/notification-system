import express from 'express'
import { get_programs } from '../controller/sections.js';

export const router=express.Router();

router.get('/',get_programs);

export default router;
