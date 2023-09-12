import aboutData from "../data/about.json";
import { useEffect } from "react";
import styles from "../styles/About.module.css";

import money from "../assets/icons/money-bag.svg";
import revenue from "../assets/icons/revenue.svg";
import target from "../assets/icons/target.svg";

const About = () => {
  const images = [revenue, money, target];
  useEffect(() => console.log(aboutData[0]));
  return (
    <section className={styles.container}>
      {aboutData.map((section, index) => (
        <div key={index} className={styles.panel}>
          <img className={styles.image} src={images[index]} />
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>{section.title}</h2>
            <p className={styles.copy}>{section.copy}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
