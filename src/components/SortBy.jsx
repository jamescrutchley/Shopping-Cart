import styles from "../styles/ShoppingPage.module.css";


const SortBy = ({handleSelect }) => {

  return (
    <div className={styles.sortByContainer}>
      <label htmlFor="sortby">Sort By:</label>
      <select id="sortby" name="sortby" onChange={(e) => handleSelect(e.target.value)}>
        <option disabled value="recommended">Recommended</option>
        <option value="asc">Price Ascending</option>
        <option value="desc">Price Descending</option>
        <option disabled value="rating">Rating</option>
        <option disabled value="alpha">Alphabetical A-Z</option>
      </select>
    </div>
  );
};

export default SortBy;
