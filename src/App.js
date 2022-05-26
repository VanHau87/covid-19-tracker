import styles from "./App.module.css";
import { Cards, ChartLine, CountryPicker } from "./components";
import { fetchData } from "./api";
import { Component } from "react";

class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <ChartLine />
      </div>
    );
  }
}

export default App;
