import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import gitHub from "../assets/images/icon-github.svg";
import FrontEndMentor from "../assets/images/icon-frontend-mentor.svg";
import linkedIn from "../assets/images/icon-linkedin.svg";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <span>chriscablish</span>
      <div className={styles.linkContainer}>
        <a href="https://github.com/ChrisCablish" target="_blank">
          <img src={gitHub} alt=""></img>
        </a>

        <a
          href="https://www.frontendmentor.io/profile/ChrisCablish"
          target="_blank"
        >
          <img src={FrontEndMentor} alt=""></img>
        </a>

        <a
          href="https://www.linkedin.com/in/chris-cablish-a947481b6/"
          target="_blank"
        >
          <img src={linkedIn} alt=""></img>
        </a>
      </div>
    </header>
  );
}

export default Header;
