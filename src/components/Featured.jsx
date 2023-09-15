import styles from "../styles/Featured.module.css";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className={styles.featuredPanel}>
      <Link className={styles.link} to="/shop">
        <h2>Browse Our Collection</h2>
      </Link>
    </div>
  );
};

export default Featured;
