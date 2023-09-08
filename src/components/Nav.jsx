import CartButton from "./CartButton";
import SearchPanel from "./SearchPanel";
import SearchButton from "./SearchButton"
import ToggleTheme from "./ToggleTheme";
import styles from "../styles/Nav.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import { useLocation } from "react-router-dom";


import { useEffect, useState } from "react";
import CartPanel from "./CartPanel";

const Nav = ({ toggleTheme }) => {
    const [panel, setPanel] = useState(null);

    const openPanel = (where) => {
        setPanel(where);
    }

    const currentPage = useLocation();

  return (
    <nav className={styles.nav}>
      <ToggleTheme className={buttonStyles.toggleTheme} onClick={toggleTheme} />

      <div className={styles.pageLinks}>
        <a href={"/about"} className={currentPage.pathname === '/about' ? styles.currentPage : null}>About</a>
        <a href={"/shop"} className={currentPage.pathname === '/shop' ? styles.currentPage : null}> Shop</a>
      </div>
      <div className={styles.actionsContainer}>
        <CartButton onClick={openPanel}/>
        <SearchButton onClick={openPanel} />
      </div>
      {panel === 'search' && <SearchPanel clickBack={openPanel} />}
      {panel === 'cart' && <CartPanel clickBack={openPanel} />}
    </nav>
  );
};

export default Nav;
