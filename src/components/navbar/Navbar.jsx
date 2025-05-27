import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import main from "../../assets/img-5.svg";
import smallFlower from "../../assets/img-6.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="green-shop-header">
        <div className="shop-header">
          <img src="./src/assets/img-1.svg" alt="Logo" />
        </div>
        <ul className="header-texts">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/care">Plant Care</NavLink></li>
          <li><NavLink to="/blogs">Blogs</NavLink></li>
        </ul>
        <div className="header-buttons">
          <NavLink to="/search">
            <img src="./src/assets/img-2.svg" alt="Search" />
          </NavLink>
          <NavLink to="/cart">
            <img src="./src/assets/img-3.svg" alt="Cart" />
          </NavLink>
          <a href="#"><img src="./src/assets/img-4.svg" alt="Login" /></a>
        </div>
      </div>

      <img className="line-img" src="./src/assets/line.svg" alt="" />

      <div className="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="main">
              <div className="main-texts">
                <h2 className="main-h2">Welcome to GreenShop</h2>
                <h1 className="main-h1">
                  LET'S MAKE A BETTER <span className="main-span">PLANET</span>
                </h1>
                <p className="main-p">
                  We are an online plant shop offering a wide range of cheap
                  and trendy plants. Use our plants to create a unique
                  Urban Jungle. Order your favorite plants!
                </p>
                <button className="main-button">SHOP NOW</button>
              </div>
              <div className="main-img">
                <img src={main} />
                <img className="main-img-2" src={smallFlower} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
