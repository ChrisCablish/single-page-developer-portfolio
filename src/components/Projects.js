import styles from "./Projects.module.scss";
import projects from "../projects.util";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <div className={styles.projectSection}>
      <h1>[ My Projects ]</h1>
      <Container className={styles.projectsHolder}>
        <Row>
          <Col sm className={styles.column}>
            <div className={styles.projectImage}>
              <img className={styles.image} src={projects[0].image}></img>
            </div>
            <p className={styles.title}>{projects[0].title}</p>
          </Col>
          <Col sm>
            <div className={styles.projectImage}>
              <img className={styles.image} src={projects[1].image}></img>
            </div>
            <p className={styles.title}>{projects[1].title}</p>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <div className={styles.projectImage}>
              <img className={styles.image} src={projects[2].image}></img>
            </div>
            <p className={styles.title}>{projects[2].title}</p>
          </Col>
          <Col sm>
            <div className={styles.projectImage}>
              <img className={styles.image} src={projects[3].image}></img>
            </div>
            <p className={styles.title}>{projects[3].title}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
