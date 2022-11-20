import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import OrderRecived from "./components/OrderRecived";

export const PhotosContext = React.createContext();
export const CartContext = React.createContext();
export const OrderRecivedContext = React.createContext();

const App = () => {
  const [photosData, setPhotosData] = useState([]);
  const cartInitValue = JSON.parse(localStorage.getItem("pic-some-cart"))
    ? JSON.parse(localStorage.getItem("pic-some-cart"))
    : [];
  const [cart, setCart] = useState(cartInitValue);
  const [orderRecived, setOrderRecived] = useState(false);
  console.log(orderRecived);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotosData(data);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("pic-some-cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <BrowserRouter>
      <OrderRecivedContext.Provider value={{ orderRecived, setOrderRecived }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <PhotosContext.Provider value={{ photosData, setPhotosData }}>
            <Header />

            <Routes>
              <Route exact path="/picsome/" element={<Photos />} />

              <Route
                path="/picsome/cart/"
                element={
                  orderRecived ? (
                    <OrderRecived />
                  ) : (
                    <Cart
                      setOrderRecived={setOrderRecived}
                      orderRecived={orderRecived}
                    />
                  )
                }
              />
            </Routes>
          </PhotosContext.Provider>
        </CartContext.Provider>
      </OrderRecivedContext.Provider>
    </BrowserRouter>
  );
};

export default App;
