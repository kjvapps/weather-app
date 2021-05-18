import React, { useState } from "react";
import axios from "axios";
import CityResult from "./CityResult";
import SearchIcon from "@material-ui/icons/Search";
import { PinDropSharp } from "@material-ui/icons";

function Content() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  function handleChange(event) {
    // console.log(event.target.value);
    setCity(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setCity(city);
    setCity("");

    let API_KEY = "7f3239c7e2e8c0f0f1443790964c9de0";

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
      )
      .then((res) => {
        let data = res.data;
        setWeatherData([...weatherData, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <form onSubmit={handleClick} className="searchbox" action="">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search for a city"
          value={city}
        />
        <button className="button" type="submit">
          <SearchIcon />
        </button>
      </form>
      {weatherData.map((data) => {
        return (
          <CityResult
            name={data.name}
            temp={data.main.temp}
            description={data.weather[0].description}
            icon={data.weather[0].icon}
          />
        );
      })}
    </div>
  );
}

export default Content;
