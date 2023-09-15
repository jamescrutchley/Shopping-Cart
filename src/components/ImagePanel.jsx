import styles from "../styles/ImagePanel.module.css";
import { useState, useRef } from "react";
import { useClickAway } from "react-use";

const ImagePanel = ({ clickBack, img, description }) => {
  const [fadeOutClass, setFadeOutClass] = useState(null);
  const ref = useRef(null);

  useClickAway(ref, () => {
    notifyClickBack();
  });

  const notifyClickBack = () => {
    setFadeOutClass(true);
    setTimeout(() => {
      clickBack(); // Call clickBack after 0.2s
    }, 150);
  };

  return (
    <section
      className={`${styles.panelWrapper} ${fadeOutClass ? styles.fade : ""}`}
    >
      <div className={styles.imagePanelContainer}>
        <div ref={ref} className={styles.imageContainer}>
          <img className={styles.image} src={img} alt="product" />
        </div>
        <div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <button onClick={() => notifyClickBack()} className={styles.closeButton}>
        <div>x</div>
      </button>
    </section>
  );
};

export default ImagePanel;
