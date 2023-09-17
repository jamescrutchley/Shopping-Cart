import styles from "../styles/CartCard.module.css";
import { useEffect, useContext } from "react";
import ProductControls from "./ProductControls";
import { DollarCents } from "../helpers/DollarCents";
import CartContext from "../context/CartContext";

const CartCard = ({ data = null }) => {
  const { title, price, quantity, image } = data || {};

  return (
    <article data-testid="card" className={styles.card}>
      <div className={styles.cardImg}>
        <img className={styles.thumbnail} src={image} alt="product thumbnail" />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.titleContainer}>
          <p>{title ?? ""}</p>
        </div>
        <div className={styles.priceContainer}>
          <p>{DollarCents(price)}</p>
        </div>
        <ProductControls
          className={styles.quantityControls}
          data={data}
          cartPanel="true"
        ></ProductControls>
        <div className={styles.priceTotalContainer}>
          <p>{DollarCents(price * quantity)}</p>
        </div>
        <div className={styles.productControlsContainer}></div>
      </div>
    </article>
  );
};

export default CartCard;
