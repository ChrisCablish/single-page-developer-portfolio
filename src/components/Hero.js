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
            Welcome to my portfolio. I am an aspiring software developer and
            recent LaunchCode alumnus based in St. Louis. My professional
            journey in the tech world is just beginning, but in the last 18
            months, I've quickly honed new skills and completed projects using
            various languages and frameworks. This site serves as a testament to
            my ability to work and learn independently. I am eager to join a
            team where I can add value and make an impact from day one.
          </p>
          <a href="#contact-form">Contact Me</a>
        </div>
        <div className={styles.placeholder}></div>
      </div>
    </Container>
  );
}

export default Hero;
