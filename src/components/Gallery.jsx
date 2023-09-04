import ProductRow from "./ProductRow";
import styles from "../styles/ShoppingPage.module.css";
import { useState } from "react";

const Gallery = () => {
  return (
    <>
      <div className={styles.sortByContainer}>
        <label htmlFor="sortby">Sort By:</label>
        <select id="sortby" name="sortby">
          <option value="asc">Price Ascending</option>
          <option value="desc">Price Descending</option>
          <option value="rating">Rating</option>
          <option selected value="alpha">Alphabetical A-Z</option>
        </select>
      </div>
      <section className={styles.gallery}>
        {/* replace with own comp */}
        <ProductRow />
      </section>
    </>
  );
};

export default Gallery;
