import Product from "./Product";
import styles from "../styles/ShoppingPage.module.css";
import { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";

import mockProductList from '../mocks/mockProductList';

const ProductRow = () => {
    const {cartArray, addToCart} = useContext(CartContext);
    const productsToDisplay = mockProductList;
  const productCount = 10;

  // Create an array of product indices
  const productIndices = Array.from(
    { length: productCount },
    (_, index) => index
  );

  useEffect(() => console.log('cartarray', cartArray))


  return (
    <>
    <div className={styles.productRow}>
        {productsToDisplay.map((data, index) => {
            const isInCart = !!cartArray.find(item => data.id === item.id);
    return ( <Product key={index} data={data}
                isInCart={isInCart} addToCart={addToCart}/> )
})}
    </div>


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
    </>
  );
};

export default ProductRow;
