// @ts-nocheck
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/CartSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/productCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent triggering parent click
    dispatch(addToCart(product));
  };

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card" onClick={handleNavigate}>
      <img src={product.image} alt={product.title} />
      <h3 className="title">{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="rating">⭐ {product.rating.rate}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
