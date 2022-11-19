import React from "react";
import { Link } from "react-router-dom";
import Photos from "../pages/Photos";
const Header = () => {
  return (
    <div className="main-nav">
      <Link to="/">
        <h1>פיק-מי!</h1>
      </Link>
      <Link to="/cart">
        <div className="ri-shopping-cart-line ri-fw ri-2x"></div>
      </Link>
    </div>
  );
};

export default Header;
