// src/services/api.js

import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://your-api-url.com/products'); // Replace with your actual API URL
    return response.data; // Assuming the API returns the products in the response body
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
