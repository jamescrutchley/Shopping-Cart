import { useState, useRef } from "react";
import styles from "../styles/SearchProducts.module.css";
import searchIcon from "../assets/icons/search.svg";

const SearchProducts = ({ handleSubmit, searchTerms = [] }) => {
  const [input, setInput] = useState("");
  const ref = useRef(null);
  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(input);
    }
  };

  const handleButtonClick = () => {
    handleSubmit(input);
  };

  const currentSearchTerms = (
    <>
      <ul>
        {searchTerms.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );

  return (
    <div className={styles.searchContainer} ref={ref}>
      <label htmlFor="search"></label>
      <input
        ref={inputRef}
        className={styles.searchInput}
        id="search"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <button
        className={styles.searchButton}
        onClick={() => handleButtonClick()}
      >
        <img src={searchIcon} alt="search products" />
      </button>
    </div>
  );
};

export default SearchProducts;
