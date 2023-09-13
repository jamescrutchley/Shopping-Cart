import ProductRow from "./ProductRow";
import SearchProducts from "./SearchProducts";
import styles from "../styles/ShoppingPage.module.css";
import { useState } from "react";
import SortBy from "./SortBy";

const Gallery = () => {
  // gallery coordinates products according to user choice
  // category, search term, number to show passed to product row.
  // show number is just an initial default.

  const [showNumber, setShowNumber] = useState(10);
  const [sortBy, setSortBy] = useState(null);
  const [category, setCategory] = useState(null);

  //extract search component.
  const [search, setSearch] = useState(null);

  const handleSortBy = (value) => {
    setSortBy(value);
  };

  const handleSubmit = (value) => {
    if (value === '') setSearch(null)
    if (value) setSearch(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.galleryHeaderWrapper}>
        <div className={styles.categoryContainer}>
          <button
            className={category === null ? `${styles.active}` : null}
            onClick={() => setCategory(null)}
          >
            All Categories
          </button>
          <button
            className={category === "electronics" ? `${styles.active}` : null}
            onClick={() => setCategory("electronics")}
          >
            Electronics
          </button>
          <button
            className={category === "jewelery" ? `${styles.active}` : null}
            onClick={() => setCategory("jewelery")}
          >
            Jewelry
          </button>
        </div>
        <div className={styles.searchAndSort}>
          <SortBy handleSelect={handleSortBy} />
          <SearchProducts handleSubmit={handleSubmit} searchTerms={[search]} />
        </div>
      </div>

      <section className={styles.gallery}>
        <ProductRow
          sortBy={sortBy}
          searchTerm={search}
          category={category}
          showNumber={showNumber}
        />
      </section>
    </div>
  );
};

export default Gallery;
