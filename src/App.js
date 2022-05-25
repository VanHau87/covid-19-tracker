import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
function App() {
  return (
    <div className={styles.container}>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
