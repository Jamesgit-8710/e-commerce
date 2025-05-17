// @ts-nocheck
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/products/ProductsSlice';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import '../styles/home.css';

const Home = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <div className="home-container">
                {status === 'failed' ? (
                    <p>Error fetching products.</p>
                ) : status === 'loading' ? (
                    <p>Loading...</p>
                ) : (
                    <div className="product-grid">
                        {items.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
