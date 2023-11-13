import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import gitHub from "../assets/images/icon-github.svg";
import FrontEndMentor from "../assets/images/icon-frontend-mentor.svg";
import linkedIn from "../assets/images/icon-linkedin.svg";
import styles from "./Header.module.scss";

function BasicExample() {
  return (
    // <Navbar expand="lg" className={`bg-body-tertiary ${styles.darkBackground}`}>
    //   <Container>
    //     <Navbar.Brand href="#home">chriscablish</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="https://github.com/ChrisCablish">
    //           <img src={gitHub} alt=""></img>
    //         </Nav.Link>
    //         <Nav.Link href="#https://www.frontendmentor.io/profile/ChrisCablish">
    //           <img src={FrontEndMentor} alt=""></img>
    //         </Nav.Link>
    //         <Nav.Link href="https://www.linkedin.com/in/chris-cablish-a947481b6/">
    //           <img src={linkedIn} alt=""></img>
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

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

export default BasicExample;
