import Gallery from "../components/Gallery";
import styles from "../styles/ShoppingPage.module.css"

const ShoppingPage = () => {
    return (
        <section className={styles.shoppingPage}>
            <h2>This is the Shopping Page.</h2>
            <Gallery />
        </section>
    )
}

export default ShoppingPage;