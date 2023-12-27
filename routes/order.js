import express from 'express';
import { newOrder, order, orders } from '../controller/orderController.js';
import { authAdmin } from '../utils/authAdmin.js';

const router = express.Router()

router.post('/new',newOrder)
router.get('/all',authAdmin,orders)
router.get('/one/:id',order)

export default router;