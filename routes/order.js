import express from 'express';
import { order, orders } from '../controller/orderController.js';

const router = express.Router()

router.get('/all',orders)
router.get('/one/:id',order)
 
export default router;