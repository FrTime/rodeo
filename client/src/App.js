import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import axios from "axios";
import { GlobalContext } from "./global-context";
import LoadingAnimation from "./components/utils/LoadingAnimation";
import API from "./components/utils/API";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      environment: process.env.NODE_ENV,
      forecast: [],
      appIsLoading: true
    };
  }

  componentWillMount = async () => {
    console.log(process.env);
    console.log("App initializing");
    await this.globalWeatherLoad();
  };

  globalWeatherLoad = async () => {
    await this.loadForecast().then(res => {
      this.state.forecast = res.list;
      this.setState({
        forecast: res.list,
        appIsLoading: this.isStillLoading()
      });
      // console.log(this.state.forecast);
    });
  };

  isStillLoading = () => {
    if (!this.forecastLoading) {
      console.log("Loading completed");
      console.log("Howdy, partner.");
      console.log(` - Current 5-day forecast`, this.state.forecast);
      return false;
    }
    return true;
  };

  forecastLoading = true;
  loadForecast = () => {
    return API.getForecastByZip("23221")
      .then(res => {
        this.forecastLoading = false;
        return res.data;
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.appIsLoading) {
      return <LoadingAnimation />;
    } else {
      return (
        <GlobalContext.Provider value={this.state}>
          <PrimarySearchAppBar />
        </GlobalContext.Provider>
      );
    }
  }
}

export default App;
