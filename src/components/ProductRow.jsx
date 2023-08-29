import Product from "./Product";
import styles from "../styles/ShoppingPage.module.css"

const ProductRow = () => {
    const productCount = 10;

    // Create an array of product indices
    const productIndices = Array.from({ length: productCount }, (_, index) => index);
  
    return (
      <div className={styles.productRow}>
        {productIndices.map((index) => (
          <Product key={index} /> // Render the Product component
        ))}
      </div>
    );
}

export default ProductRow;