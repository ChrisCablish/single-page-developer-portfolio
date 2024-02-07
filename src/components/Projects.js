import styles from "./Projects.module.scss";
import projects from "../projects.util";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <div className={styles.projectSection}>
      <h1>[ My Projects ]</h1>
      <Container className={styles.projectsHolder}>
        <Row>
          {/* <Col sm className={styles.column}>
            <a href={projects[0].link} target="_blank">
              <div className={styles.projectImage}>
                <img className={styles.image} src={projects[0].image}></img>
              </div>
            </a>

            <p className={styles.title}>
              {" "}
              {projects[0].title} -{" "}
              <a
                className={styles.codeLink}
                target="_blank"
                href={projects[0].code}
              >
                View code
              </a>
            </p>
          </Col>
          <Col sm>
            <a href={projects[1].link} target="_blank">
              <div className={styles.projectImage}>
                <img className={styles.image} src={projects[1].image}></img>
              </div>
            </a>

            <p className={styles.title}>
              {" "}
              {projects[1].title} -{" "}
              <a
                className={styles.codeLink}
                target="_blank"
                href={projects[1].code}
              >
                View code
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <a href={projects[2].link} target="_blank">
              <div className={styles.projectImage}>
                <img className={styles.image} src={projects[2].image}></img>
              </div>
            </a>

            <p className={styles.title}>
              {projects[2].title} -{" "}
              <a
                className={styles.codeLink}
                target="_blank"
                href={projects[2].code}
              >
                View code
              </a>
            </p>
          </Col>
          <Col sm>
            <a href={projects[3].link} target="_blank">
              <div className={styles.projectImage}>
                <img className={styles.image} src={projects[3].image}></img>
              </div>
            </a>
            <p className={styles.title}>
              {" "}
              {projects[3].title} -{" "}
              <a
                className={styles.codeLink}
                target="_blank"
                href={projects[3].code}
              >
                View code
              </a>
            </p>
          </Col> */}

          {projects.map((project) => (
            <Col sm className={styles.column}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
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
