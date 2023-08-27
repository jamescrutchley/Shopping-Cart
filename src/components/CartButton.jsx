import styles from '../styles/Buttons.module.css'
import buttonIcon from '../assets/icons/cart.svg'

const CartButton = () => {
    return (
        <button className={styles.cartButton}>
            <img src={buttonIcon} alt="shopping-cart" />
        </button>
    )
}

export default CartButton;