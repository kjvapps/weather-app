import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Metrics from "./components/Metrics";

const DashboardStyles = styled.div`
  border-radius: 50px;
  overflow: hidden;
`;

const DashboardGrid = styled.div`
  background-color: var(--blue);
  display: grid;
  grid-template-columns: 22.5rem 1fr;
  min-height: 50rem;
`;

const Dashboard = () => {
  // function fetchWeatherData() {
  //   let API_KEY = "7f3239c7e2e8c0f0f1443790964c9de0";

  //   axios
  //     .get(
  //       `http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&units=imperial&appid=${API_KEY}`
  //     )
  //     .then((res) => {
  //       let data = res.data;
  //       setWeatherData([...weatherData, data]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  return (
    <DashboardStyles>
      <DashboardGrid>
        <Sidebar />
        <Metrics />
      </DashboardGrid>
    </DashboardStyles>
  );
};

export default Dashboard;
