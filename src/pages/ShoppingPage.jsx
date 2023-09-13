import Gallery from "../components/Gallery";
import styles from "../styles/ShoppingPage.module.css"
import { useEffect, useState } from "react";

const ShoppingPage = () => {

    return (
        <section className={styles.shoppingPage}>
            <h2>Browse <span className={styles.nameSpan}>Our Collection</span></h2>
            <Gallery />
        </section>
    )
}

export default ShoppingPage;