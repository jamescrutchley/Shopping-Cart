import styles from "../styles/ShoppingPage.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import { useEffect } from "react";
import ProductControls from "./ProductControls";

const Product = ({ data = null, isInCart, addToCart }) => {
  const { title, price, image, description } = data || {};

  useEffect(() => console.log(isInCart));

  return (
    <article className={`${styles.product} ${isInCart ? styles.isInCart : ""}`}>
      <a href="">
        <div className={styles.productImg}>

          <div className={styles.imgOverlay}>
            <img className={styles.image} src={image} alt="" />
            <div className={styles.descriptionContainer}>
              <p>{description}</p>
            </div>
            <div className={styles.decoration}></div>
          </div>

        </div>
      </a>

      <div className={styles.productInfo}>
        <p>{title ?? "?"}</p>
        <p>{price ?? "?"}</p>
        {/* later own component */}
        <div className={styles.productControlsContainer}>
          <ProductControls data={data} addToCart={addToCart} />
        </div>
      </div>
    </article>
  );
};

export default Product;
