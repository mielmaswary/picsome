import React, { useContext } from "react";
import { PhotosContext, CartContext } from "../App";

const AddPhotoToCart = (photo, cart, setCart) => {
  photo.quantity = cart.find((img) => img.id === photo.id)
    ? photo.quantity + 1
    : 1;

  if (photo.quantity <= 1) setCart((prev) => [...prev, photo]);
};

export default AddPhotoToCart;
