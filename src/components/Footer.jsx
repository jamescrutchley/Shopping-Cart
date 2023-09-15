import styles from "../styles/Footer.module.css";
import github from "../assets/icons/github-mark.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.promotionContainer}>
        <div className={styles.promotionInfo}>
          <h3>Say Hello To Great Savings</h3>
          <p>
            <a href="#email">Sign up now</a> to receive 10% off your first
            order!
          </p>
        </div>
        <div className={styles.signup}>
          <label htmlFor="email"></label>
          <input type="text" id="email" placeholder="Your Email Here" />
        </div>
      </div>

      <div className={styles.nav}>
        <div className={styles.navLinks}>
          <div className={styles.linksGroup}>
            <h5>Information</h5>
            <ul className={styles.linksList}>
              <li>Our History</li>
              <li>Delivery</li>
              <li>Brands</li>
            </ul>
          </div>
          <div className={styles.linksGroup}>
            <h5>Services</h5>
            <ul className={styles.linksList}>
              <li>Recalls</li>
              <li>Magazine</li>
              <li>Subscription</li>
            </ul>
          </div>
          <div className={styles.linksGroup}>
            <h5>Our Vision</h5>
            <ul className={styles.linksList}>
              <li>Your Account</li>
              <li>Track Your Order</li>
              <li>Returns and Refunds</li>
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
          <li>Policies</li>
          <li>Terms and Conditions</li>
          <li>For Suppliers</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.subFooter}>
        <a href="https://github.com/jamescrutchley">
          <img src={github} alt="github logo" />
        </a>
        <p>Developed by James Crutchley</p>
      </div>
    </footer>
  );
};

export default Footer;
