import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Axios from "axios";
import CloudyImg from "../assets/Cloudy.jpg";
import RainyImg from "../assets/Rain.jpg";
import ClearImg from "../assets/Clear.jpg";
import DrizzleImg from "../assets/Drizzle.jpg";
import SnowImg from "../assets/Snow.jpg";
import ThunderImg from "../assets/Thunder.jpg";
import AtmospherImg from "../assets/Atmospher.jpg";

import "../styles/ClimatePage.css";
import moment from "moment";
import kelvinToCelsius from "kelvin-to-celsius";

const api = {
  key: "a68a42fb2cbf8c127ec4f724bb6c92c6",
  base: "https://api.openweathermap.org/data/2.5/",
};

const ClimatePage = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const cityName = location.state.name.passingValue;
  const url = `${api.base}weather?q=${cityName}&units=metrics&APPID=${api.key}`;

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get(url);

      setWeather(response.data);

      setLoading(false);

      return response;
    }
    fetchData();
  }, []);

  if (loading) return <h1>Loading</h1>;

  const description = weather.weather[0].description;
  const weatherDesc =
    description.charAt(0).toUpperCase() + description.slice(1);
  const date = moment.unix(weather.dt).format("MM/DD/YY");
  const kelvinToCelsius = require("kelvin-to-celsius");

  const weatherId = weather.weather[0].id;

  function imgSelector() {
    var image = "";
    if (weatherId > 199 && weatherId < 300) {
      image = ThunderImg;
    } else if (weatherId > 299 && weatherId < 400) {
      image = DrizzleImg;
    } else if (weatherId > 499 && weatherId < 600) {
      image = RainyImg;
    } else if (weatherId > 599 && weatherId < 699) {
      image = SnowImg;
    } else if (weatherId > 699 && weatherId < 799) {
      image = AtmospherImg;
    } else if (weatherId === 800) {
      image = ClearImg;
    } else if (weatherId > 800 && weatherId < 900) {
      image = CloudyImg;
    } else {
      image = null;
    }
    return image;
  }

  const bgImg = imgSelector();

  return (
    <div>
      <div>
        <div
          className="climate-page-container"
          style={{
            backgroundImage: `url("${bgImg}")`,
          }}
        >
          <div className="flex flex-container-3">
            <div className="logo">ForecastNow</div>

            <div className="primary-details">
              <div className="city-name">
                {weather.name}, {weather.sys.country}
              </div>

              <div className="city-temp">
                {Math.floor(kelvinToCelsius(weather.main.temp))}°
              </div>
              <div className="city-weather">{weather.weather[0].main}</div>
            </div>
          </div>
          <div className="flex flex-container-4">
            <div className="back-arrow">
              <Link to="/">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0469 19.9062C13.5156 19.4375 13.4688 18.7344 13.0469 18.2656L7.375 12.875H20.875C21.4844 12.875 22 12.4062 22 11.75V10.25C22 9.64062 21.4844 9.125 20.875 9.125H7.375L13.0469 3.78125C13.4688 3.3125 13.5156 2.60938 13.0469 2.14062L12.0156 1.10938C11.5938 0.6875 10.8438 0.6875 10.4219 1.10938L1.32812 10.25C0.859375 10.6719 0.859375 11.375 1.32812 11.7969L10.4219 20.9375C10.8438 21.3594 11.5469 21.3594 12.0156 20.9375L13.0469 19.9062Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
            <div className="weather-details">
              <div className="city-description">{weatherDesc}</div>
              <div className="detailed-info">
                <div className="detailed-heading">Lon, Lat</div>
                <div className="detailed-value">
                  {weather.coord.lon} - {weather.coord.lat}
                </div>
                <hr className="break" />
                <div className="detailed-heading">Wind</div>
                <div className="detailed-value">{weather.wind.speed} km/h</div>
                <hr className="break" />
                <div className="detailed-heading">Humidity</div>
                <div className="detailed-value">{weather.main.humidity}%</div>
                <hr className="break" />
                <div className="detailed-heading">Date</div>
                <div className="detailed-value">{date}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimatePage;
