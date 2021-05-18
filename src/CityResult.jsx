import React from "react";

function CityResult(props) {
  return (
    <div className="description">
      <h1>{props.name}</h1>
      <p>{Math.round(props.temp)}°F</p>
      <p>{props.description}</p>
      <img
        src={`http://openweathermap.org/img/w/${props.icon}.png`}
        alt="weather icon"
      ></img>
    </div>
  );
}

export default CityResult;
