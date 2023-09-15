import styles from "../styles/Buttons.module.css";
import { useState, useContext, useEffect } from "react";
import QuantityControls from "./QuantityControls";

import check from "../assets/icons/check.svg";
import CartContext from "../context/CartContext";

const ProductControls = ({
  data = null,
  isInCart = null,
  cartPanel = null,
}) => {
  const { cartArray, addToCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(isInCart);
  const [userQuantitySelection, setUserQuantitySelection] = useState(null);

  const inSync = inCart === userQuantitySelection;

  useEffect(() => {
    if (data) {
      const foundItem = cartArray.find((item) => item.id === data.id);
      setInCart(foundItem ? foundItem.quantity : null);
    }
  }, [cartArray, data, inCart]);

  const onQuantityChange = (value) => {
    setUserQuantitySelection(value);
  };

  const quantityControlsOnly = (
    <QuantityControls
      key={inCart}
      inCart={inCart}
      onChange={onQuantityChange}
      data={data}
    />
  );

  if (cartPanel) {
    return quantityControlsOnly;
  }

  return (
    <div className={styles.productControls}>
      {inCart ? (
        <p className={styles.inCartNotif}>
          In cart <img className={styles.icon} src={check} />
        </p>
      ) : null}
      <QuantityControls
        key={inCart}
        inCart={inCart}
        onChange={onQuantityChange}
      />
      <div className={styles.addToCartContainer}>
        {!!inCart && (
          <button
            disabled={inSync}
            onClick={() => addToCart(data, userQuantitySelection)}
            className={`${styles.addToCart} ${inSync ? styles.disabled : null}`}
          >
            {" "}
            Update Cart
          </button>
        )}
        {!!inCart || (
          <button
            onClick={() => addToCart(data, userQuantitySelection)}
            className={styles.addToCart}
          >
            Add To Cart
          </button>
        )}
      </div>
      {/* Visual queue for remove button */}
      {inCart !== null && (
        <button
          className={`${styles.removeFromCartButton} ${
            inCart ? "enabled" : "disabled"
          }`}
          onClick={() => addToCart(data, 0)}
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default ProductControls;
