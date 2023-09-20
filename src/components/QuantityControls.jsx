import styles from "../styles/QuantityControls.module.css";
import { useEffect, useState, useContext } from "react";
import ClickableInput from "./ClickableInput";
import CartContext from "../context/CartContext";

const QuantityControls = ({ inCart = null, onChange = null, data = null }) => {
  const { cartArray, addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(inCart || 1);

  useEffect(() => {
    if (inCart !== null) {
      setQuantity(inCart);
    }
  }, [inCart]);

  useEffect(() => {
    onChange ? onChange(quantity) : null;
  }, [quantity, onChange]);

  const onInputChange = (e) => {
    const newQuantity = e.target.value < 10 ? Number(e.target.value) : "";

    setQuantity(newQuantity);

    if (data) {
      addToCart(data, newQuantity); // Pass the updated value
    }
  };

  const onButtonClick = (val) => {
    const newQuantity = val;

    setQuantity(newQuantity);

    if (data) {
      addToCart(data, newQuantity);
    }
  };

  return (
    <div className={styles.quantityControls}>
      <label htmlFor="quantity">Qty:</label>
      <div className={styles.controlsWrapper}>
        <div className={styles.decrementContainer}>
          <button
            onClick={() => onButtonClick(quantity < 1 ? 0 : quantity - 1)}
          >
            -
          </button>
        </div>
        <ClickableInput
          onBlur={onInputChange}
          onChange={onInputChange}
          name="quantity"
          value={quantity}
          min={1}
          max={9}
          disabled={false}
          type="quantity"
        />
        <div className={styles.incrementContainer}>
          <button
            onClick={() => onButtonClick(quantity > 8 ? 9 : quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityControls;
