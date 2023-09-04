import styles from "../styles/Buttons.module.css";
import { useEffect, useState } from "react";
import ClickableInput from "./ClickableInput";

const QuantityControls = ({ inCart = null, onChange = null }) => {
  const [quantity, setQuantity] = useState(1);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (inCart !== null) {
      setQuantity(inCart);
    }
  }, [inCart]);

  useEffect(() => {
    onChange ?
    onChange(quantity) : null
  }, [quantity, onChange]);

  const onInputChange = (e) => {
    if (quantity === "") {
        setQuantity(0);
    }
    setQuantity(e.target.value < 10 ? Number(e.target.value) : "");
  };

  const onButtonClick = (val) => {
    setQuantity(val);
  }

  return (
    <div className={styles.quantityControls}>
      <label htmlFor="quantity">Qty:</label>
      <div className={styles.controlsWrapper}>
      <div className={styles.decrementContainer}>
        <button onClick={() => onButtonClick(quantity < 1 ? 0 : quantity - 1)}>
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
        <button onClick={() => onButtonClick(quantity > 8 ? 9 : quantity + 1)}>
          +
        </button>
      </div>
      </div>
    </div>
  );
};

export default QuantityControls;
