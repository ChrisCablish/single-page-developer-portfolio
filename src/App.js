import styles from "./App.module.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CoreSkills from "./components/CoreSkills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <Hero className={styles.hero} />
      <CoreSkills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
