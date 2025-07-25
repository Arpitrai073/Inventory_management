import axios from 'axios';
import { API_BASE_URL } from '../constants/apiConstants';

// The login function remains the same
export const login = async (username, password) => {
  const { data } = await axios.post(`${API_BASE_URL}/users/login`, { username, password });
  if (data && data.token) {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }
  return data;
};

// Add this new register function
export const register = async (username, password) => {
  const { data } = await axios.post(`${API_BASE_URL}/users/register`, { username, password });
  // After successful registration, log the user in directly
  if (data && data.token) {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }
  return data;
};