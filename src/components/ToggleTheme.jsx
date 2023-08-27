import styles from '../styles/Buttons.module.css'
import themeIcon from '../assets/icons/dark-mode.svg'

const ToggleTheme = ({onClick}) => {
    return (
        <button className={styles.toggleTheme} onClick={() => onClick()}>
            <img src={themeIcon} alt="search" />
        </button>
    )
}

export default ToggleTheme;