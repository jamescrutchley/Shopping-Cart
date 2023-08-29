import ProductRow from "./ProductRow";
import styles from '../styles/ShoppingPage.module.css'

const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <ProductRow />
        </section>
    )
}

export default Gallery;