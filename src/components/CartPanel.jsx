import { useContext, useEffect } from "react";
import styles from "../styles/SearchPanel.module.css";
import CartContext from "../context/CartContext";
import Product from "./Product";

import buttonStyles from "../styles/Buttons.module.css";
import { useState } from "react";

const CartPanel = ({ clickBack }) => {
  const [fadeOutClass, setFadeOutClass] = useState(null);
  const { cartArray, addToCart } = useContext(CartContext);

  const notifyClickBack = () => {
    setFadeOutClass(true);
    setTimeout(() => {
      clickBack(null); // Call clickBack after 0.2s
    }, 150);
  };

  useEffect(() => {
    console.log(cartArray)
  })

  return (
    <section
      className={`${styles.panelWrapper} ${fadeOutClass ? styles.fade : ""}`}
    >
      <div
        className={`${styles.searchContainer} ${
          fadeOutClass ? styles.fade : ""
        }`}
      >
        <button onClick={() => notifyClickBack()} className={styles.back}>
          Back
        </button>
        <h2>Your Cart</h2>
        <section className={styles.cartContainer}>
          {cartArray.map((data, index) => (
            <Product key={index} data={data} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default CartPanel;
