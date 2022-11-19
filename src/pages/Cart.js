import React, { useContext } from "react";

import { PhotosContext, CartContext } from "../App";
import Button from "../components/Button";
import CartImage from "../components/CartImage";

const Cart = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const cartPhotosElements = cart.map((photo) => {
    return <CartImage key={photo.id} photo={photo} />;
  });

  let totalPrice = cart
    .map((photo) => photo.quantity * 15)
    .reduce((a, b) => a + b, 0);
  return (
    <div className="cart-container">
      <h2 className="h2">התמונות שלי</h2>
      {cartPhotosElements}
      <div className="total-container">
        {cart.length === 0 && (
          <div className="empty-cart-msg">עגלת הקניות ריקה...</div>
        )}
        <div className="btn">סה"כ : {totalPrice} ש"ח</div>
        {cart.length !== 0 && (
          <Button
            setOrderRecived={props.setOrderRecived}
            orderRecived={props.orderRecived}
            value="בצע הזמנה"
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
