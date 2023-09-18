import CartButton from "./CartButton";
import SearchPanel from "./SearchPanel";
import SearchButton from "./SearchButton";
import ToggleTheme from "./ToggleTheme";
import styles from "../styles/Nav.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import { useLocation, Link } from "react-router-dom";

import { useState } from "react";
import CartPanel from "./CartPanel";

const Nav = ({ toggleTheme }) => {
  const [panel, setPanel] = useState(null);

  const openPanel = (where) => {
    setPanel(where);
  };

  const currentPage = useLocation();

  return (
    <nav className={styles.nav}>
      <ToggleTheme className={buttonStyles.toggleTheme} onClick={toggleTheme} />

      <div className={styles.pageLinks}>
        <Link
          to="about"
          className={
            currentPage.pathname === "/about" ? styles.currentPage : null
          }
        >
          About
        </Link>
        <Link
          to="shop"
          className={
            currentPage.pathname === "/shop" ? styles.currentPage : null
          }
        >
          {" "}
          Shop
        </Link>
      </div>
      <div className={styles.actionsContainer}>
        <CartButton onClick={openPanel} />
        <SearchButton onClick={openPanel} />
      </div>
      {panel === "search" && <SearchPanel clickBack={openPanel} />}
      {panel === "cart" && <CartPanel clickBack={openPanel} />}
    </nav>
  );
};

export default Nav;
