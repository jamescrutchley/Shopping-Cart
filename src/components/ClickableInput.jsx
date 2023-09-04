
import styles from "../styles/Buttons.module.css";


const ClickableInput = ({ onChange, onClick, onBlur, ...props }) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
      }
  };

  return (
    <div onClick={() => handleClick()} className={styles.clickableInputContainer}
    >
      <input onChange={(e) => onChange(e)} onBlur={(e) => onBlur(e)} className={styles.clickableInput}{...props} />
    </div>
  );
};

export default ClickableInput;
