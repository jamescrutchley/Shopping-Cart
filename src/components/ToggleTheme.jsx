import buttonStyles from "../styles/Buttons.module.css";
import themeIcon from "../assets/icons/dark-mode.svg";

const ToggleTheme = ({ onClick }) => {
  return (
    <button className={buttonStyles.toggleTheme} onClick={() => onClick()}>
      <img src={themeIcon} alt="search" />
    </button>
  );
};

export default ToggleTheme;
