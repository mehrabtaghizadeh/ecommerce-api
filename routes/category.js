import express from 'express';
import { deleteCategory, editCategory, getCategory, getCategoryes, getProductAsCategory, newCategory } from '../controller/categoryController.js';

const router = express.Router()

router.post("/new",newCategory)
router.get("/all",getCategoryes)
router.get("/oneCat/:id",getCategory)
router.get("/catPage",getProductAsCategory)
router.put("/editCat/:id",editCategory)
router.delete("/deleteCat/:id",deleteCategory)

export default router;