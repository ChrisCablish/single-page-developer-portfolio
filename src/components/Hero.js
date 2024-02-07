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
            Welcome to my portfolio! I'm an aspiring software developer and a
            recent alumnus of LaunchCode. While my professional experience is
            just beginning, I've honed new skills and completed multiple
            projects in a short period of time, demonstrating my propensity to
            adapt quickly to new tools and concepts. This site serves not only
            as a testament to my abilities but also as a showcase of my
            potential. I am eager to join a team where I can immediately
            contribute and grow, leveraging my prgramming skills to make a
            meaningful impact from day one.
          </p>
          <a href="#contact-form">Contact Me</a>
        </div>
        <div className={styles.placeholder}></div>
      </div>
    </Container>
  );
}

export default Hero;
