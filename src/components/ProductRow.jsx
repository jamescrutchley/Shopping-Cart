import Product from "./Product";
import styles from "../styles/ShoppingPage.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import useFetch from "../hooks/useFetch";

import mockProductList from '../mocks/mockProductList';
import { fakeStore } from "../mocks/copiedObj";

const ProductRow = () => {
    // any reason to have context this high up? why pass it along?
    const {cartArray, addToCart} = useContext(CartContext);
    const productsToDisplay = mockProductList;
    // const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products?limit=10')
    const [products, setProducts]= useState(fakeStore);

  useEffect(() => console.log(Array.isArray(products), 'is an array??'))

  return (
    <>
    {Array.isArray(products) && products.map((product, index) => {
            const isInCart = !!cartArray.find(item => product.id === item.id);
           return <Product key={index} data={product} isInCart={isInCart} addToCart={addToCart} />
    })}
          {/* { loading && <p>{loading}</p> }
      { products && 
      {products.map((item, index) => {
                    const isInCart = !!cartArray.find(item => data.id === item.id);

        <Product key={index} data={item} isInCart={isInCart} addToCart={addToCart} />
      })} }
      { error && <p>{error}</p> } */}
    {/* <div className={styles.productRow}>
        {productsToDisplay.map((data, index) => {
            const isInCart = !!cartArray.find(item => data.id === item.id);
    return ( <Product key={index} data={data}
                isInCart={isInCart} addToCart={addToCart}/> )
})}
    </div> */}


      {/* <div className={styles.productRow}>
        {productIndices.map((index) => (
          <Product key={index} 
          isInCart={productIndices} />
        ))}
      </div> */}
      {/* <div className={styles.productRow}>
        {cartData.map((data, index) => {
            {console.log(data)}
          return <Product key={index} data={data} />
})}
      </div> */}
      <div className={styles.showingItemsContainer}>
        <p>Showing {products.length} of {products.length} items</p>
      </div>
    </>
  );
};

export default ProductRow;
