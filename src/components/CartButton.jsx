import styles from "../styles/Buttons.module.css";
import buttonIcon from "../assets/icons/cart.svg";
import CartContext from "../context/CartContext";
import { useContext } from "react";

const CartButton = ({ full = false, onClick }) => {
  const { cartArray } = useContext(CartContext);

  const itemsInCart = cartArray.length;

  return (
    <>
      <button
        role="status"
        onClick={() => onClick("cart")}
        className={`${styles.cartButton} ${full ? styles.active : ""}`}
      >
        <img src={buttonIcon} alt="shopping-cart" />
        <p role="badgeValue" className={styles.cartBadge}>
          {itemsInCart}
        </p>
      </button>
    </>
  );
};


export default CartButton;
