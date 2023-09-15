import styles from "../styles/CartCard.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import { useEffect, useContext } from "react";
import ProductControls from "./ProductControls";
import QuantityControls from "./QuantityControls";
import { DollarCents } from "../helpers/DollarCents";
import CartContext from "../context/CartContext";

const CartCard = ({ data = null }) => {
  const { title, price, quantity, image } = data || {};
  const { cartArray, addToCart } = useContext(CartContext);

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
          <p>{DollarCents(price)}</p>
        </div>
        {/* <QuantityControls className={styles.quantityControls} inCart={quantity} onChange={addToCart} /> */}
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
