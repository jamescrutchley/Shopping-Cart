import { useContext } from "react";
import styles from "../styles/SearchPanel.module.css";
import CartContext from "../context/CartContext";

import buttonStyles from "../styles/Buttons.module.css";
import { useState } from "react";

const CartPanel = ({clickBack}) => {
        const [fadeOutClass, setFadeOutClass] = useState(null);
        const [cart] = useState(CartContext)

        const notifyClickBack = () => {
            setFadeOutClass(true)
            setTimeout(() => {
                clickBack(null); // Call clickBack after 0.2s
              }, 150);
        }

      return (
        <div className={`${styles.searchContainer} ${fadeOutClass ? styles.fade : ''}`}>
            <button onClick={() => notifyClickBack()} className={styles.back}>Back</button>
          <h2>Your Cart</h2>
            <section>
                {/* your products via context */}
            </section>
        </div>
      );
}

export default CartPanel;