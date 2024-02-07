import skills from "../skills.util";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./CoreSkills.module.scss";

function CoreSkills() {
  return (
    <section>
      <h1>[ My Skills ]</h1>
      <Container>
        <Row>
          <Col sm className={styles.column}>
            HTML
          </Col>
          <Col sm className={styles.column}>
            CSS
          </Col>
          <Col sm className={styles.column}>
            Javscript
          </Col>
          <Col sm className={styles.column}>
            React.js
          </Col>
          <Col sm className={styles.column}>
            Sass
          </Col>
          <Col sm className={styles.column}>
            {" "}
            Java
          </Col>
          <Col sm="auto" className={styles.column}>
            Spring Boot
          </Col>
          <Col sm className={styles.column}>
            MVC
          </Col>
          <Col sm className={styles.column}>
            MySQL
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CoreSkills;
