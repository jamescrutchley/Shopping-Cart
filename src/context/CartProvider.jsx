import CartContext from "./CartContext";
import { useEffect, useState } from "react";
import mockData from "../mocks/mockdata.json";

function CartProvider({ children }) {
  const [cartArray, setCartArray] = useState(mockData);

  const addToCart = (product) => {
    setCartArray((prevCart) => [...prevCart, product]); // Add product to cart
  };

  return (
    <CartContext.Provider value={{ cartArray, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
