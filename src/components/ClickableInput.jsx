import styles from "../styles/ClickableInput.module.css";

const ClickableInput = ({ onChange, onClick, onBlur, ...props }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={() => handleClick()}
      className={styles.clickableInputContainer}
    >
      <input
      id='quantity'
        onChange={(e) => onChange(e)}
        onBlur={(e) => onBlur(e)}
        className={styles.clickableInput}
        {...props}
      />
    </div>
  );
};

export default ClickableInput;
