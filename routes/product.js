import express from 'express';
import { deleteProduct, editProduct, getProduct, getProducts, newProduct } from '../controller/productCotroller.js';
import { authAdmin } from '../utils/authAdmin.js';

const router = express.Router()

router.post('/new',newProduct)
router.put('/edit/:id',editProduct)
router.delete('/delete/:id',deleteProduct)
router.get('/all',getProducts)
router.get('/one/:id', getProduct)

export default router;