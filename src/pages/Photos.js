import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Image from "../components/Image";
import { PhotosContext, OrderRecivedContext } from "../App";

const Photos = (props) => {
  const { photosData } = useContext(PhotosContext);
  const { orderRecived, setOrderRecived } = useContext(OrderRecivedContext);

  setOrderRecived(false);
  const photosElemens = photosData.map((img) => (
    <Image key={img.id} id={img.id} url={img.url} isFavorite={img.isFavorite} />
  ));
  return <div className="main-container">{photosElemens}</div>;
};

export default Photos;
