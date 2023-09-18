import styles from "../styles/Header.module.css";
import "../styles/Root.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="">
        <h1>Consumer Goods</h1>
      </Link>
    </header>
  );
};

export default Header;
