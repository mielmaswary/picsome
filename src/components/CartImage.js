import React, { useContext } from "react";
import "../utils/nubrerToArray";
import { CartContext } from "../App";

import { nanoid } from "nanoid";

const CartImage = (props) => {
  const { url, id, quantity } = props.photo;
  const quantityArr = ["עדכון כמות", 0, 1, 2, 3, 4, 5];
  const { cart, setCart } = useContext(CartContext);
  const quantityOptionsElements = quantityArr.map((unit) =>
    unit === "עדכון כמות" ? (
      <option className="bold" defaultValue key={nanoid()} value={unit}>
        {unit}
      </option>
    ) : (
      <option key={nanoid()} value={unit}>
        {unit}
      </option>
    )
  );

  const handleChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue != quantity) {
      let newCart = cart.map((photo) => {
        if (photo.id === id) {
          let updatedPhoto = { ...photo };
          updatedPhoto.quantity = selectedValue;
          return updatedPhoto;
        }
        return photo;
      });

      newCart = newCart.filter((photo) => photo.quantity !== "0");
      setCart(newCart);
    }
  };

  return (
    <div className="img-container">
      <img className="image" src={url} />
      <div className="flex-center">
        <select
          className="choose-quantity"
          onChange={handleChange}
          name=""
          id=""
        >
          {" "}
          photo, cart, setCart
          {quantityOptionsElements}
        </select>

        {/* <input
          className="choose-quantity"
          type="number"
          min="0"
          max="5"
          onKeyDown="return false"
          inputmode="numeric"
          pattern="[0,2,3,4,5]*"
          onChange={handleChange}
        /> */}
        <div className="quantity">{quantity}</div>
        <div className="price">{quantity * 15} ש"ח</div>
      </div>
    </div>
  );
};

export default CartImage;
