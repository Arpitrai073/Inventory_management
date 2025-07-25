import axios from 'axios';
import { API_BASE_URL } from '../constants/apiConstants';

const getAuthHeaders = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return {
    headers: {
      Authorization: `Bearer ${userInfo?.token}`,
    },
  };
};

export const getProducts = async (page = 1) => {
  const { data } = await axios.get(`${API_BASE_URL}/products?pageNumber=${page}`, getAuthHeaders());
  return data;
};

export const addProduct = async (productData) => {
  const { data } = await axios.post(`${API_BASE_URL}/products`, productData, getAuthHeaders());
  return data;
};

export const updateQuantity = async (id, quantity) => {
  const { data } = await axios.put(`${API_BASE_URL}/products/${id}/quantity`, { quantity }, getAuthHeaders());
  return data;
};