// src/pages/Shop/Shop.jsx

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/api'; // Correct the import path
import ProductCard from "../../Components/ProductCard/ProductCard.jsx";  // New import

// src/pages/Shop/Shop.jsx
// In your components or pages where you're using it
import { useCart } from "../../components/context/CartContext.jsx"; // Updated to .jsx


 // Correct the import path



const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // Access the addToCart function from CartContext

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(); // Fetch products from the backend API
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    getProducts();
  }, []);

  return (
    <div className="shop-page">
      <h2>Shop</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
