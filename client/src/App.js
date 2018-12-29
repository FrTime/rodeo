import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import axios from "axios";
import { GlobalContext } from "./global-context";
import LoadingAnimation from "./components/utils/LoadingAnimation";
import API from "./components/utils/API";

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
    console.log("App initialization");
    await this.globalWeatherLoad();
  };

  logData = false;
  forecastRes;

  globalWeatherLoad = async () => {
    await this.loadForecast().then(res => {
      console.log(res.list);
      this.forecastRes = res.list;
      this.setState({
        forecast: res.list,
        appIsLoading: this.isStillLoading()
      });
      console.log(this.state.forecast);
    });
  };

  // logData = false;
  // loadGlobals = async () => {
  //   await this.loadTrips()
  //     .then(res => {
  //       console.log(`    Fetched ${res.length} trips from the API`);
  //       if (this.logData) console.log(res);
  //       this.setState({
  //         trips: res,
  //         appIsLoading: this.isStillLoading()
  //       });
  //     })

  // };

  isStillLoading = () => {
    console.log(this.state.forecast);

    if (!this.forecastLoading) {
      console.log("Loading completed");
      // return false;
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
        <h1>
          {/* {this.forecastRes} */}
        </h1>
        </GlobalContext.Provider>
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code> src / App.js </code> and save to reload.{" "}
        //     </p>{" "}
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer">
        //       Learn React{" "}
        //     </a>{" "}
        //   </header>{" "}
        // </div>
      );
    }
  }
}

export default App;
