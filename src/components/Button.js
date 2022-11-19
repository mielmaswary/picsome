import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext, OrderRecivedContext } from "../App";

const Button = (props) => {
  const value = props.value;
  const { orderRecived, setOrderRecived } = useContext(OrderRecivedContext);
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setOrderRecived(true);
    setCart([]);
    setTimeout(() => {
      navigate("/");
      setOrderRecived(false);
    }, 3000);
  };
  return (
    <div onClick={handleClick} className="btn">
      {value}
    </div>
  );
};

export default Button;
