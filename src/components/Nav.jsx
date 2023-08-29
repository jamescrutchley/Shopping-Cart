import CartButton from "./CartButton";
import SearchPanel from "./SearchPanel";
import SearchButton from "./SearchButton"
import ToggleTheme from "./ToggleTheme";
import styles from "../styles/Nav.module.css";
import buttonStyles from "../styles/Buttons.module.css";

import { useState } from "react";

const Nav = ({ toggleTheme }) => {
    const [panel, setPanel] = useState(null);

    const openPanel = (where) => {
        setPanel(where);
    }

  return (
    <nav className={styles.nav}>
      <ToggleTheme className={buttonStyles.toggleTheme} onClick={toggleTheme} />

      <div className={styles.pageLinks}>
        <a href={"/about"}>About</a>
        <a href={"/shop"}> Shop</a>
      </div>
      <div className={styles.actionsContainer}>
        <CartButton />
        <SearchButton onClick={openPanel} />
      </div>
      {panel === 'search' && <SearchPanel clickBack={openPanel} />}
    </nav>
  );
};

export default Nav;
