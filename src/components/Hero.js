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
            Over the past year, I've honed new skills and completed multiple
            projects, demonstrating my propensity to adapt quickly to new tools
            and concepts. This site serves not only as a testament to my
            abilities but also as a showcase of my potential. I am eager to join
            a team where I can immediately contribute and grow, leveraging my
            coding skills to make a meaningful impact from day one.
          </p>
          <a href="#contact-form">Contact Me</a>
        </div>
        <div className={styles.placeholder}></div>
      </div>
    </Container>
  );
}

export default Hero;
