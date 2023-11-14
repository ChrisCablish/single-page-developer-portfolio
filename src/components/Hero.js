import avatar from "../assets/images/greyscale-avatar.jpg";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.imgContainer}></div>
      <div className={styles.heroText}>
        <h1>
          Nice to meet you! I'm{" "}
          <span className={styles.name}>Chris Cablish</span>.
        </h1>
        <p>
          Based in St. Louis, Missouri, I'm a front-end developer passionate
          about building accessable web apps that users love.
        </p>
        <a>Contact Me</a>
      </div>
      <div className={styles.placeholder}></div>
    </div>
  );
}

export default Hero;
