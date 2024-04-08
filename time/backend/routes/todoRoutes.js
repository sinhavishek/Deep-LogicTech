import express from 'express';
const router= express.Router();
import { viewStory } from '../controllers/todoController.js';


//Routes
router.get("/show/stories", viewStory);     //then view the all story
export default router;