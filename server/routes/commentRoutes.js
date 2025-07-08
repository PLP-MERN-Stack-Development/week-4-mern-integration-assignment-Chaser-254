import { Router } from 'express';
import { addComment } from '../controllers/commentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/:slug', protect, addComment);

export default router;
