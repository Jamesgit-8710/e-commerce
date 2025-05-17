// @ts-nocheck
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adjustQuantity, removeFromCart } from '../features/cart/CartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, quantity) => {
    dispatch(adjustQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  handleQuantityChange(item.id, Number(e.target.value))
                }
              />
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default CartPage;
