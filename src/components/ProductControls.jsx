import styles from "../styles/Buttons.module.css";

const productControls = ({addToCart = null, data = null}) => {
    //render differently if already in cart. Possibly 'remove' button.
    //or not at all. different component?
  return (
    <div className={styles.productControls}>
      <div className={styles.quantityControls}>
        <label htmlFor="quantity">Qty:</label>
        <input name="quantity" type="number" defaultValue="1" min={1} />
      </div>
      <div className={styles.addToCartContainer}>
        <button onClick={() => addToCart(data)}
        className={styles.addToCart}>Add To Cart</button>
      </div>

    </div>
  );
};

export default productControls;
