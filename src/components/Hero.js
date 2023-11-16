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
            Hi there! I'm <span className={styles.name}>Chris Cablish</span>.
          </h1>
          <p>
            Welcome to my portfolio! I'm an aspiring developer, freshly
            graduated from LaunchCode's part-time web dev course. While my
            professional experience is just beginning, don't let that fool you.
            Over the past year, I've immersed myself in acquiring new skills and
            have completed several intermediate-level projects that highlight my
            ability to integrate new tools and concepts into my workflow
            quickly. This site serves not only as a testament to my acquired
            knowledge but also as a showcase of my potential. I'm excited to
            explore opportunities where I can contribute, grow, and add value by
            making meaningful impacts with my coding abilities.
          </p>
          <a href="#contact-form">Contact Me</a>
        </div>
        <div className={styles.placeholder}></div>
      </div>
    </Container>
  );
}

export default Hero;
