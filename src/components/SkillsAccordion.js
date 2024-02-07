import Accordion from "react-bootstrap/Accordion";
import React from "react";
import styles from "./SkillsAccordion.module.scss"; // Adjust the path if necessary
import { Container } from "react-bootstrap";
import skillCategories from "../skills.util";

const SkillsAccordion = () => {
  return (
    // <Container className={styles.accordion}>
    //   <h1 className={styles.header}>[My Skills]</h1>
    //   <Accordion data-bs-theme="dark">
    //     <Accordion.Item eventKey="0">
    //       <Accordion.Header>Languages</Accordion.Header>
    //       <Accordion.Body>
    //         <ul>
    //           <li>Javascript</li>
    //           <li>Java</li>
    //           <li>C#</li>
    //           <li>HTML</li>
    //           <li>CSS</li>
    //         </ul>
    //       </Accordion.Body>
    //     </Accordion.Item>
    //     <Accordion.Item eventKey="1">
    //       <Accordion.Header>Frameworks</Accordion.Header>
    //       <Accordion.Body>
    //         <li>React</li>
    //         <li>Spring Boot</li>
    //         <li>ASP.NET</li>
    //         <li>Sass</li>
    //         <li>Bootstrap</li>
    //       </Accordion.Body>
    //     </Accordion.Item>
    //     <Accordion.Item eventKey="2">
    //       <Accordion.Header>Other Skills</Accordion.Header>
    //       <Accordion.Body>
    //         <ul>
    //           <li>MVC Design</li>
    //           <li>AWS</li>
    //           <li>Object Relational Mapping</li>
    //           <li>Mobile Responsive Design</li>
    //           <li>Git / Github</li>
    //         </ul>
    //       </Accordion.Body>
    //     </Accordion.Item>
    //   </Accordion>
    // </Container>

    <Container className={styles.accordion}>
      <h1 className={styles.header}>[My Skills]</h1>
      <Accordion defaultActiveKey="0" data-bs-theme="dark">
        {skillCategories.map((category, index) => (
          <Accordion.Item
            eventKey={`${index}`}
            key={index}
            className={styles.item}
          >
            <Accordion.Header>{Object.keys(category)[0]}</Accordion.Header>
            <Accordion.Body>
              <ul className={styles.list}>
                {Object.values(category)[0].map((skill, skillIndex) => (
                  <li key={skillIndex} className={styles.item}>
                    {skill}
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default SkillsAccordion;
