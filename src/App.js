import styles from "./App.module.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CoreSkills from "./components/CoreSkills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <Hero className={styles.hero} />
      <CoreSkills />
      <Projects />
    </div>
  );
}

export default App;
