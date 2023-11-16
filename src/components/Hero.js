import avatar from "../assets/images/greyscale-avatar.jpg";
import styles from "./Hero.module.scss";
import Container from "react-bootstrap/Container";

function Hero() {
  return (
    <Container>
      <div className={styles.hero}>
        <div className={styles.imgContainer}></div>
        <div className={styles.heroText}>
          <h1>
            Nice to meet you! I'm{" "}
            <span className={styles.name}>Chris Cablish</span>.
          </h1>
          <p>
            Welcome to my portfolio! I'm a passionate web developer, freshly
            graduated from LaunchCode's coding course. While my professional
            experience in the field is just beginning, don't let that fool you.
            Over the past year, I've dedicated myself to self-study and have
            completed several intermediate-level projects that showcase my
            skills and creativity in web development. This site is not only a
            testament to what I've learned but also a window into my journey and
            potential. I'm excited to explore opportunities where I can
            contribute, grow, and make meaningful impacts with my coding
            abilities. Let's create something amazing together!
          </p>
          <a>Contact Me</a>
        </div>
        <div className={styles.placeholder}></div>
      </div>
    </Container>
  );
}

export default Hero;
