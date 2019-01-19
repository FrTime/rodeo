import axios from "axios";

// URL is set based on which env file is used.
// ENV file can be set with scripts in package.json, or set manually from terminal when starting.
const apiKey = "9dd2014a954fd85be11e3e94645023b9";
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

export default {
  getForecastByZip: function(zipCode) {
    return axios.get(`/forecast?zip=${zipCode}&APPID=${apiKey}`);
  }
};
