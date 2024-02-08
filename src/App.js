import styles from "./App.module.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import SkillsAccordion from "./components/SkillsAccordion";
import React from "react";

function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <Hero className={styles.hero} />
      <SkillsAccordion />
      <Projects />
      <ContactForm />
      <Header className={styles.header} />
      <div className={styles.paddingDiv}></div>
    </div>
  );
}

export default App;
