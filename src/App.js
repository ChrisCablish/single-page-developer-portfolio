import styles from "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <Hero className={styles.hero} />
    </div>
  );
}

export default App;
