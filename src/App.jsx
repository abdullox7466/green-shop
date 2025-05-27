import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Filter from "./components/Filter/Filter";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/hero";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import "./App.css";

function Layout({ cartItems, addToCart }) {
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const isCartPage = location.pathname === "/cart";

  return (
    <div className="green-shop-container">
      {/* Navbar faqat search va cart sahifalarida ko'rinmasligi uchun shart qo'yildi */}
      {!isSearchPage && !isCartPage && <Navbar />} 

      {!isSearchPage && !isCartPage && (
        <>
          <Filter addToCart={addToCart} />
          <Feature />
          <Footer />
          <Hero />
        </>
      )}

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/shop" element={<></>} />
        <Route path="/care" element={<></>} />
        <Route path="/blogs" element={<></>} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </div>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <BrowserRouter>
      <Layout cartItems={cartItems} addToCart={addToCart} />
    </BrowserRouter>
  );
}

export default App;
