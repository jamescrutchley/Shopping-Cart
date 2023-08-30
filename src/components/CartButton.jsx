import styles from "../styles/Buttons.module.css";
import buttonIcon from "../assets/icons/cart.svg";

//implementation - redux/context?

const CartButton = ({ full = false, onClick }) => {
  return (
    //or implement another component like a badge which displays no. of items.
    <button
      onClick={() => onClick("cart")}
      className={`${styles.cartButton} ${full ? styles.active : ""}`}
    >
      <img src={buttonIcon} alt="shopping-cart" />
    </button>
  );
};

export default CartButton;
