import { useContext, useEffect } from "react";
import styles from "../styles/SearchPanel.module.css";
import CartContext from "../context/CartContext";
import CartCard from "./CartCard";
import sumPrice from "../helpers/sumPrice";
import { DollarCents } from "../helpers/DollarCents";
import { useClickAway } from "react-use";

import buttonStyles from "../styles/Buttons.module.css";
import { useState, useRef } from "react";

const CartPanel = ({ clickBack }) => {
  const [fadeOutClass, setFadeOutClass] = useState(null);
  const { cartArray, addToCart } = useContext(CartContext);
  const shippingPrice =
    sumPrice(...cartArray.map((item) => 1 * item.quantity)) / 2;
  const ref = useRef(null);

  useClickAway(ref, () => {
    notifyClickBack();
  });

  const notifyClickBack = () => {
    setFadeOutClass(true);
    setTimeout(() => {
      clickBack(null); // Call clickBack after 0.2s
    }, 150);
  };

  return (
    <section
      className={`${styles.panelWrapper} ${fadeOutClass ? styles.fade : ""}`}
    >
      <div
        ref={ref}
        className={`${styles.cart} ${styles.searchContainer} ${
          fadeOutClass ? styles.fade : ""
        }`}
      >
        <button onClick={() => notifyClickBack()} className={styles.back}>
          Back
        </button>
        <div className={styles.cartHeaders}>
          <p>Item</p>
          <p className={styles.price}>Price</p>
          <p className={styles.quantity}>Quantity</p>
          <p>Total</p>
        </div>
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
              <p>
                {DollarCents(
                  sumPrice(
                    ...cartArray.map((item) => item.price * item.quantity),
                  ),
                )}
              </p>
            </div>
            <div>
              <p>Shipping</p>
              <p>{DollarCents(shippingPrice)}</p>
            </div>
            <div>
              <p>Total</p>
              <p>
                {DollarCents(
                  sumPrice(
                    ...cartArray.map((item) => item.price * item.quantity),
                  ) + shippingPrice,
                )}
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CartPanel;
