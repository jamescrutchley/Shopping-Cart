import CartContext from "./CartContext";
import { useEffect, useState } from "react";
// import mockData from "../mocks/mockdata.json";

function CartProvider({ children }) {
  const [cartArray, setCartArray] = useState([]);

  const addToCart = (product, quant = null) => {
    const index = cartArray.findIndex((item) => item.id === product.id);
  
    if (index !== -1) {
      // If the product already exists, update the quantity
      const updatedCartArray = [...cartArray];
      updatedCartArray[index] = {
        ...updatedCartArray[index],
        quantity: quant,
      };
      setCartArray(updatedCartArray);
    } else {
      // If the product doesn't exist, add it to the cartArray with quantity
      setCartArray((prevCart) => [
        ...prevCart,
        { ...product, quantity: quant }, // Include quantity directly in the object
      ]);
    }
  };
  
  

  return (
    <CartContext.Provider value={{ cartArray, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
