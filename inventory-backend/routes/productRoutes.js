// routes/productRoutes.js
import express from 'express';
const router = express.Router();
import {
  addProduct,
  updateProductQuantity,
  getProducts,
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

// All routes here are protected
router.route('/').post(protect, addProduct).get(protect, getProducts); // POST /products [cite: 26], GET /products [cite: 46]
router.route('/:id/quantity').put(protect, updateProductQuantity); // PUT /products/{id}/quantity [cite: 40]

export default router;