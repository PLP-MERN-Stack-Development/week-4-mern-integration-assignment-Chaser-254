import { Router } from 'express';
import { getPosts, getPostBySlug, createPost, updatePost, deletePost } from '../controllers/postController.js';
import { protect } from '../middleware/authMiddleware.js';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });
const router = Router();

router.get('/', getPosts);
router.get('/:slug', getPostBySlug);
router.post('/', protect, upload.single('featuredImage'), createPost);
router.put('/:slug', protect, upload.single('featuredImage'), updatePost);
router.delete('/:slug', protect, deletePost);

export default router;
