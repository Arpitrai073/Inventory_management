// src/pages/InventoryPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, updateQuantity } from '../services/productService';

const InventoryPage = () => {
  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data.products || []); // Ensure products is always an array
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleUpdate = async (id) => {
    const newQuantity = prompt('Enter the new quantity:');
    if (newQuantity && !isNaN(newQuantity)) {
      try {
        await updateQuantity(id, Number(newQuantity));
        fetchProducts(); // Refresh list
      } catch (error) {
        alert('Failed to update quantity');
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Product Inventory</h1>
        <Link to="/add-product" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Add Product
        </Link>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left">SKU</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left">Name</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left">Quantity</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left">Price</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-5 py-4">{product.sku}</td>
                <td className="px-5 py-4">{product.name}</td>
                <td className="px-5 py-4">{product.quantity}</td>
                {/* Safely display the price, defaulting to '0.00' if not available */}
                <td className="px-5 py-4">${product.price?.toFixed(2) ?? '0.00'}</td>
                <td className="px-5 py-4 text-center">
                  <button onClick={() => handleUpdate(product._id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded text-xs">
                    Update Qty
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryPage;