import React, { useContext } from "react";
import { PhotosContext, CartContext } from "../App";
import AddPhotoToCart from "../utils/AddPhotoToCart";
const Image = (props) => {
  const { photosData, setPhotosData } = useContext(PhotosContext);
  const { cart, setCart } = useContext(CartContext);
  const photo = photosData.find((img) => img.id === props.id);

  const heartClassName = props.isFavorite ? "ri-heart-fill" : "ri-heart-line";
  const newArr = photosData.map((img) => {
    if (img.id === props.id) {
      return { ...img, isFavorite: img.isFavorite ? false : true };
    }
    return { ...img };
  });

  const favoritePhoto = (e) => {
    setPhotosData(newArr);
  };

  return (
    <div className="image-container">
      <img className="image" src={props.url} alt="" />;
      <div className="dark-over">
        <div onClick={favoritePhoto} className="favorite-icon">
          <i className={heartClassName}></i>
        </div>
        <div
          onClick={() => AddPhotoToCart(photo, cart, setCart)}
          className="add-to-cart-icon"
        >
          <i className="ri-add-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Image;
