import { useContext, useEffect } from "react";
import styles from "../styles/SearchPanel.module.css";
import CartContext from "../context/CartContext";
import CartCard from "./CartCard";
import sumPrice from "../helpers/sumPrice";

import buttonStyles from "../styles/Buttons.module.css";
import { useState } from "react";

const CartPanel = ({ clickBack }) => {
  const [fadeOutClass, setFadeOutClass] = useState(null);
  const { cartArray, addToCart } = useContext(CartContext);
  const shippingPrice = Math.round(Math.random() * 10)

  const notifyClickBack = () => {
    setFadeOutClass(true);
    setTimeout(() => {
      clickBack(null); // Call clickBack after 0.2s
    }, 150);
  };

  useEffect(() => {
    console.log(cartArray);
  });

  return (
    <section
      className={`${styles.panelWrapper} ${fadeOutClass ? styles.fade : ""}`}
    >
      <div
        className={`${styles.cart} ${styles.searchContainer} ${
          fadeOutClass ? styles.fade : ""
        }`}
      >
        <button onClick={() => notifyClickBack()} className={styles.back}>
          Back
        </button>
        <h2>Your Cart</h2>
        <div className={styles.cartWrapper}>
        <section className={styles.cartContainer}>
          {cartArray.map((data, index) => (
            <CartCard key={index} data={data} />
          ))}
        </section>
        <section className={styles.orderSummaryContainer}>
          <div>
            <p>Subtotal</p>
            <p>${sumPrice(...cartArray.map((item) => item.price))}</p>
          </div>
          <div>
            <p>Shipping</p>
            <p>${shippingPrice}.00</p>
          </div>
          <div>
            <p>Total</p>
            <p>${sumPrice(...cartArray.map((item) => item.price)) + shippingPrice}</p>
          </div>
        </section>
        </div>
      </div>
    </section>
  );
};

export default CartPanel;
