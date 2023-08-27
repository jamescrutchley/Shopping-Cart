import styles from '../styles/Buttons.module.css'
import searchIcon from '../assets/icons/search.svg'

const SearchButton = () => {
    return (
        <button className={styles.searchButton}>
            <img src={searchIcon} alt="search" />
        </button>
    )
}

export default SearchButton;