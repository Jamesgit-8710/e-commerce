// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/navbar.css';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalCount = cartItems.length;

    return (
        <nav className="navbar">
            <Link to="/" className="logo">🛍️ ShopKaro</Link>
            <Link to="/cart" className="cart-link">
                🛒 Cart ({totalCount})
            </Link>
        </nav>
    );
};

export default Navbar;
