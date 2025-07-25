// routes/userRoutes.js
import express from 'express';
const router = express.Router();
import { registerUser, authUser } from '../controllers/userController.js';

router.post('/register', registerUser);
router.post('/login', authUser); // Endpoint: POST /login [cite: 15]

export default router;