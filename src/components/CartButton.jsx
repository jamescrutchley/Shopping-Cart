import styles from "../styles/Buttons.module.css";
import buttonIcon from "../assets/icons/cart.svg";
import CartContext from "../context/CartContext";
import { useContext, useEffect } from "react";

//implementation - redux/context?

const CartButton = ({ full = false, onClick }) => {
  const { cartArray } = useContext(CartContext);

  const itemsInCart = cartArray.length;

  useEffect(() => {
  }, [cartArray, itemsInCart]);

  return (
    <>
      <button
        onClick={() => onClick("cart")}
        className={`${styles.cartButton} ${full ? styles.active : ""}`}
      >
        <img src={buttonIcon} alt="shopping-cart" />
        <p aria-hidden="true" className={styles.cartBadge}>
          {itemsInCart}
        </p>
      </button>
    </>
  );
};

export default CartButton;
