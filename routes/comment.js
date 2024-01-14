import express from 'express';
import { CFAdminPanel, deleteComment, newComments } from '../controller/commentController.js';
import { authAdmin } from '../utils/authAdmin.js';

const router = express.Router()

router.post('/new', newComments)
router.delete('/delete/:id',deleteComment)
router.get('/comments', CFAdminPanel)

export default router;