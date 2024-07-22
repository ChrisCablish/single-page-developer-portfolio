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
            Hi! I'm <span>Chris Cablish</span>.
          </h1>
          <p>
            Welcome to my portfolio. I am a dedicated Web Developer and proud
            LaunchCode alumnus based in St. Louis. My journey in tech has
            allowed me to rapidly develop skills and complete projects using
            various languages and frameworks. This site showcases my ability to
            work and learn independently. I am eager to bring my expertise to a
            dynamic team, where I can add value and make an immediate impact.
          </p>
          <a href="#contact-form">Contact Me</a>
        </div>
        <div className={styles.placeholder}></div>
      </div>
    </Container>
  );
}

export default Hero;
