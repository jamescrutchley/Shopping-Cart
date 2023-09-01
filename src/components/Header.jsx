import styles from '../styles/Header.module.css'
import '../styles/Root.module.css'

import ProductControls from './ProductControls'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Product Store</h1>
        </header>
    )
}

export default Header;