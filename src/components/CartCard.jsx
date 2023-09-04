import styles from "../styles/CartCard.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import { useEffect } from "react";
import ProductControls from "./ProductControls";
import QuantityControls from "./QuantityControls";

const CartCard = ({ data = null }) => {
  const { title, price, quantity, image } = data || {};

  return (
    <article className={styles.card}>
      <div className={styles.cardImg}>
        <img className={styles.thumbnail} src={image} alt="product thumbnail" />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.titleContainer}>
          <p>{title ?? ""}</p>
        </div>
        <div className={styles.priceContainer}>
          <p>${price}</p>
        </div>
        <QuantityControls className={styles.quantityControls} inCart={quantity} />
        <div className={styles.priceTotalContainer}>
          <p>${price * quantity}</p>
        </div>
        <div className={styles.productControlsContainer}></div>
      </div>
    </article>
  );
};

export default CartCard;
