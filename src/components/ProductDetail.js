// @ts-nocheck
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/CartSlice';
import '../styles/productDetail.css';
import Navbar from '../components/Navbar';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );

  if (!product) return <p>Product not found.</p>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  return (
    <>
      <Navbar />
      <div className="product-page">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1 className="title">{product.title}</h1>
          <p className="category">{product.category}</p>
          <p className="price">₹{(product.price * 80).toFixed(2)}</p>
          <p className="rating">
            ⭐ {product.rating.rate} / 5 ({product.rating.count} reviews)
          </p>
          <p className="description">{product.description}</p>
          <button className="buy-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
