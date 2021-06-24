import React from "react";
import styled from "styled-components";

const CityCard = styled.div`
  text-align: center;
  font-size: 1rem;
  border: 1px solid rgb(250, 250, 250);
  border-radius: 7px;
  background-color: white;
  color: black;
  min-height: 15rem;
  width: 20rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px,
    rgb(0 0 0 / 5%) 0px 4px 6px -2px, rgb(0 0 0 / 10%) 0px -2px 20px 3px;
  overflow: hidden;
`;

function CityResult(props) {
  return (
    <CityCard>
      <h1>{props.name}</h1>
      <p>{Math.round(props.temp)}°F</p>
      <p>{props.description}</p>
      <img
        src={`http://openweathermap.org/img/w/${props.icon}.png`}
        alt="weather icon"
      ></img>
    </CityCard>
  );
}

export default CityResult;
