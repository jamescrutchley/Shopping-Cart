import styles from "../styles/SearchPanel.module.css";
import SearchButton from "./SearchButton";
import searchIcon from "../assets/icons/search.svg";
import buttonStyles from "../styles/Buttons.module.css";
import { useState } from "react";

const SearchPanel = ({ clickBack }) => {
  const [fadeOutClass, setFadeOutClass] = useState(null);

  // click 'outside' listener as well



  const notifyClickBack = () => {
    setFadeOutClass(true);
    setTimeout(() => {
      clickBack(null); // Call clickBack after 0.2s
    }, 150);
  };
  return (
    <section className={`${styles.panelWrapper} ${
        fadeOutClass ? styles.fade : ""
      }`}>
      <div
        className={`${styles.searchContainer} ${
          fadeOutClass ? styles.fade : ""
        }`}
      >
        <button onClick={() => notifyClickBack()} className={styles.back}>
          Back
        </button>
        <h2>Search Our Collection:</h2>

        <div className={styles.searchInputContainer}>
          <label>
            <p className={styles.visuallyHidden}>Search</p>
            <input type="text" />
          </label>
          <button className={buttonStyles.searchCollection}>
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchPanel;
