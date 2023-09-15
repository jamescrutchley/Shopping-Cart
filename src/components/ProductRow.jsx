import Product from "./Product";
import styles from "../styles/ShoppingPage.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import useFetch from "../hooks/useFetch";
import { sortProducts, searchProducts } from "../helpers/sortProducts";

import mockProductList from "../mocks/mockProductList";
import { fakeStore } from "../mocks/copiedObj";

const ProductRow = ({
  showNumber,
  category = null,
  sortBy = null,
  searchTerm = null,
}) => {
  const [itemsDisplayed, setItemsDisplayed] = useState(showNumber);
  // any reason to have context this high up? why pass it along?
  const [products, setProducts] = useState([]);
  const { cartArray, addToCart } = useContext(CartContext);

  const productsToDisplay = mockProductList;

  let {
    data: fetchedProducts,
    loading,
    error,
  } = useFetch(
    category
      ? `https://fakestoreapi.com/products/category/${category}`
      : `https://fakestoreapi.com/products`,
  );

  const loadMore = () => {
    setItemsDisplayed((prevCount) => prevCount + 5);
  };

  // upon requesting new products -- clear current product array?

  // if sorting - arrange array.
  useEffect(() => {
    if (fetchedProducts) {
      //for each modifier - loop
      const sortedProducts = sortProducts(fetchedProducts, sortBy);
      const sortedAndSearchedProducts = searchProducts(
        sortedProducts,
        searchTerm,
      );
      setProducts(sortedAndSearchedProducts);
    }
  }, [fetchedProducts, sortBy, searchTerm]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {Array.isArray(products) &&
        products.slice(0, itemsDisplayed).map((product, index) => {
          const isInCart = !!cartArray.find((item) => product.id === item.id);
          return (
            <Product
              key={index}
              data={product}
              isInCart={isInCart}
              addToCart={addToCart}
            />
          );
        })}
      <div className={styles.loadWrapper}>
        <div className={styles.showingItemsContainer}>
          <p>
            Showing{" "}
            {products && itemsDisplayed < products.length
              ? itemsDisplayed
              : products.length}{" "}
            of {products.length} items
          </p>
        </div>
        {products && products.length > itemsDisplayed && (
          <button className={styles.loadMore} onClick={() => loadMore()}>
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default ProductRow;
