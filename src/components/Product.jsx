import styles from "../styles/Product.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import { useEffect, useState } from "react";
import ProductControls from "./ProductControls";
import ImagePanel from "./ImagePanel";

const Product = ({ data = null, isInCart, addToCart }) => {
  const { title, price, image, description } = data || {};
  const [expand, setExpand] = useState(false);

  const expandImage = () => {
    setExpand(expand ? false : true);
  };

  return (
    <article className={`${styles.product} ${isInCart ? styles.isInCart : ""}`}>
      {expand && <ImagePanel img={image} description={description} clickBack={expandImage} />}
      <a onClick={() => expandImage()}>
        <div className={styles.productImg}>
          <div className={styles.imgOverlay}>
            <img className={styles.image} src={image} alt="" />
            <div className={styles.decoration}></div>
          </div>
        </div>
      </a>
      <div className={styles.productControlsContainer}>
        <ProductControls data={data} addToCart={addToCart} />
      </div>
      <div className={styles.productInfo}>
        <p>{title ?? "?"}</p>
        <p>${price ?? "?"} AUD</p>
        <p className={styles.productDescription}>{description}</p>
        {/* later own component */}
      </div>
    </article>
  );
};

export default Product;
