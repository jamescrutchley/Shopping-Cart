import styles from "../styles/Buttons.module.css";
import { useState, useContext, useEffect } from "react";
import QuantityControls from "./QuantityControls";

import CartContext from "../context/CartContext";

const ProductControls = ({ data = null, isInCart = null }) => {
  const { cartArray, addToCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(isInCart);
  const [userQuantitySelection, setUserQuantitySelection] = useState(null);

  useEffect(() => {
    if (data) {
      const foundItem = cartArray.find((item) => item.id === data.id);
      if (foundItem !== undefined) {
        console.log("found item", foundItem.quantity);
        setInCart(foundItem ? foundItem.quantity : null);
      }
    }
  }, [cartArray, data, inCart]);

  const onQuantityChange = (value) => {
    setUserQuantitySelection(value);
  }

  return (
    <div className={styles.productControls}>
      <QuantityControls inCart={inCart} onChange={onQuantityChange}/>
      <div className={styles.addToCartContainer}>
        {!!inCart && <button onClick={() => addToCart(data, userQuantitySelection)} className={styles.addToCart}> Update Cart</button>}
        {!!inCart || (
          <button onClick={() => addToCart(data, userQuantitySelection)} className={styles.addToCart}>
            Add To Cart
          </button>
        )}
      </div>
      {/* visual queue for remove button */}
      <div
        className={`${styles.removeFromCartButton} ${
          inCart ? "enabled" : "disabled"
        }`}
      >
        Remove
      </div>
    </div>
  );
};

export default ProductControls;
