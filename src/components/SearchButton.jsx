import styles from '../styles/Buttons.module.css'
import searchIcon from '../assets/icons/search.svg'

const SearchButton = ({onClick}) => {
    return (
        <button className={styles.searchButton} onClick={() => onClick('search')}>
            <img src={searchIcon} alt="search" />
        </button>
    )
}

export default SearchButton;