import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.promotionContainer}>
        <div className={styles.promotionInfo}>
          <h3>Say Hello To Great Savings</h3>
          <p>Sign up now to receive 10% off your first order!</p>
        </div>
        <div className={styles.signup}>
          <label htmlFor="email"></label>
          <input type="text" id="email" />
        </div>
      </div>

      <div className={styles.nav}>
        <div className={styles.navLinks}>
          <div className={styles.linksGroup}>
            <h5>Group 1</h5>
            <ul className={styles.linksList}>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
          <div className={styles.linksGroup}>
            <h5>Group 2</h5>
            <ul className={styles.linksList}>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
          <div className={styles.linksGroup}>
            <h5>Group 3</h5>
            <ul className={styles.linksList}>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.contact}>
          <div className={styles.contactInfo}>
            <h4>Get In Touch</h4>
            <p>
              Our friendly staff are here to help. In-store, online, anytime!
            </p>
          </div>
          <ul>
            <li>Phone</li>
            <li>Email</li>
            <li>Live Chat</li>
          </ul>
        </div>
      </div>
      <div className={styles.legal}>
        <ul>
          <li>legal item 1</li>
          <li>legal item 2</li>
          <li>legal item 3</li>
          <li>legal item 4</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
