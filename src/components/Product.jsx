import styles from "../styles/ShoppingPage.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import { useEffect } from "react";
import ProductControls from "./ProductControls";

const Product = ({data = null, isInCart, addToCart }) => {

  const { name, price } = data || {}

  useEffect(() => console.log(isInCart))

  return (
    <article className={`${styles.product} ${isInCart ? styles.isInCart : ''}`}>
      <a href="">
        <div className={styles.productImg}>
          <img src="" alt="" />
        </div>
      </a>

      <div className={styles.productInfo}>
        <p>{name ?? '?'}</p>
        <p>{price ?? '?'}</p>
        {/* later own component */}
        <div className={styles.productControlsContainer}>
          <ProductControls data={data} addToCart={addToCart} />
        </div>
      </div>
    </article>
  );
};

export default Product;
