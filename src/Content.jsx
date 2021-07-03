import React, { useState } from "react";
import axios from "axios";
import CityResult from "./CityResult";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const FormStyled = styled.div`
  display: flex;
  justify-content: center;

  input {
    padding: 0.5rem;
    border: 1px solid rgb(170, 170, 170);
    border-radius: 7px;
    font-size: 1rem;
    margin: 10px;
  }

  input:focus {
    outline: none;
  }

  button {
    font-size: 1rem;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.2s ease-in-out 0s;
    outline: none;
    position: relative;
    top: 7px;
    background: transparent;
    border: 1px solid rgb(170, 170, 170);
    color: black;
  }

  svg {
    height: 1.15em;
    padding: 1px;
  }
`;

const CityGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 8rem 0px;
  justify-items: center;
  row-gap: 4rem;
`;

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
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
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
      <FormStyled>
        <form onSubmit={handleClick} action="">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search for a city"
            value={city}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </FormStyled>
      <CityGrid>
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
      </CityGrid>
    </div>
  );
}

export default Content;
