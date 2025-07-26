
import express from 'express';
const router = express.Router();
import {
  addProduct,
  updateProductQuantity,
  getProducts,
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

// All routes here are protected
router.route('/').post(protect, addProduct).get(protect, getProducts); 
router.route('/:id/quantity').put(protect, updateProductQuantity); 

export default router;