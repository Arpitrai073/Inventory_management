// controllers/productController.js
import Product from '../models/Product.js';

// @desc    Add a new product
// @route   POST /api/products
// @access  Private
const addProduct = async (req, res) => {
  const { name, type, sku, description, quantity, price, image_url } = req.body;

  const product = new Product({
    name,
    type,
    sku,
    description,
    quantity,
    price,
    image_url,
  });

  try {
    const createdProduct = await product.save();
    res.status(201).json({
      message: 'Product added successfully',
      productId: createdProduct._id, // Response includes Product ID and confirmation [cite: 38]
    });
  } catch (error) {
    res.status(400).json({ message: 'Error adding product', error: error.message });
  }
};

// @desc    Update product quantity
// @route   PUT /api/products/:id/quantity
// @access  Private
const updateProductQuantity = async (req, res) => {
  const { quantity } = req.body;

  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      product.quantity = quantity;
      const updatedProduct = await product.save();
      res.json({
        message: 'Quantity updated successfully',
        product: updatedProduct, // Response: Updated product details [cite: 42]
      });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating quantity', error: error.message });
  }
};

// @desc    Get all products
// @route   GET /api/products
// @access  Private
const getProducts = async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  try {
    const count = await Product.countDocuments();
    const products = await Product.find()
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({ products, page, pages: Math.ceil(count / pageSize) }); // Response: List of all products with pagination [cite: 47, 48]
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

export { addProduct, updateProductQuantity, getProducts };