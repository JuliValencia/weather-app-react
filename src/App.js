import "./App.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <div className="row">
            <div className="col-md-6">
              <form>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search City"
                  autocomplete="off"
                  autofocus="on"
                />
                <input
                  type="submit"
                  value="🔍"
                  className="btn btn-outline-primary"
                />
              </form>
            </div>

            <div className="col-md-6">
              <div className="location-date-time">
                <h1>
                  <strong>Lokeren</strong>,<strong> Belgium </strong>
                </h1>
                <p className="current-date-time">Sunday, April 2</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-3">
              <ul className="current-low-high">
                <li className="weather-forecast-temperature-low">
                  L:<span>8</span>°
                </li>
                <li className="weather-forecast-temperature-high">
                  H:<span>10</span>°
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="current-temperature">
                <strong>9</strong>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>{" "}
                  |<a href="#">°F</a>
                </span>
                <span>
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                    className="weather-icon"
                    alt="weather-icon"
                  />
                </span>
              </div>
              <div className="current-weather">Partly Cloudy</div>
            </div>
            <div className="col-3">
              <ul className="current-humidity-wind">
                <li>
                  Humidity: <span>98</span>%
                </li>
                <li>
                  Wind: <span>20</span>km/h
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="weather-forecast"></div>
        </div>
        <small>
          Coded by Juliana Valencia,
          <a
            href="https://github.com/JuliValencia/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </small>
      </div>
    </div>
  );
}
