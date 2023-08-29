import styles from '../styles/ShoppingPage.module.css'
import buttonStyles from '../styles/Buttons.module.css'

const Product = () => {
    const mockProductData = {
        id: 1234,
        name: "sunglasses",
        description: "stylish and trendy unisex sunglasses",
        price: 32.50,
    }
    
    return (
        <div className={styles.product}>
            <div className={styles.productImg}>
                <img src="" alt="" />
            </div>
            <div className={styles.productInfo}>
                <p>{mockProductData.name}</p>
                <p>{mockProductData.price}</p>
                {/* later own component */}
                <div>
                    <button className={buttonStyles.addToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product;