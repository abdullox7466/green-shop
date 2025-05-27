import React, { useState } from "react";
import Mockdata from "../Data/data";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(Mockdata.map(item => ({ ...item, quantity: 1 })));

  const handleExitSearch = () => navigate("/");

  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 0) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  return (
    <div className="cart-container">
      <h2>Shopping</h2>
      <button className="wasck" onClick={handleExitSearch}>back</button>
      <div className="product-list">
        {cartItems.map((item) => (
          <div key={item.id} className={`result-card ${item.quantity <= 0 ? 'd-none' : ''}`}>
            <img src={item.img} alt={item.name} />
            <div className="cart-texts">
              <h4>{item.name}</h4>
              <h6>{item.price}</h6>
              <div className="counter">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
