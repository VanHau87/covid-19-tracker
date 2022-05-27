import styles from "./App.module.css";
import { Cards, Charts, CountryPicker } from "./components";
import { fetchData } from "./api";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: "",
    };
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  componentDidMount = async () => {
    const data = await fetchData();
    this.setState({ data });
  };
  async handleCountryChange(country) {
    const data = await fetchData(country);
    this.setState({ data: data, country: country });
  }
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://drive.google.com/uc?export=view&id=16NbIbKdHXTVuIpZpJeknxvhEyiZz2U7Z"
          alt="covid-19 tracker"
        />
        <Cards data={data} />
        <CountryPicker onCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
//https://drive.google.com/file/d/16NbIbKdHXTVuIpZpJeknxvhEyiZz2U7Z/view?usp=sharing
