import styles from "./Projects.module.scss";
import projects from "../projects.util";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <div className={styles.projectSection}>
      <h1>[ My Projects ]</h1>
      <Container className={styles.projectsHolder}>
        <Row>
          {projects.map((project) => (
            <Col sm className={styles.column}>
              <a href={project.link} target="_blank">
                <div className={styles.projectImage}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.image}
                  ></img>
                </div>
              </a>
              <p className={styles.title}>
                {project.title} -{" "}
                <a
                  className={styles.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.code}
                >
                  View code
                </a>
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
