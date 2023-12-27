import express from 'express';
import { getAllUsers, getUser, login, profile, register } from '../controller/authController.js';
import { authAdmin } from '../utils/authAdmin.js';

const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/profile",profile)
router.get("/alluser",getAllUsers)
router.get("/user/:id",getUser)

export default router;