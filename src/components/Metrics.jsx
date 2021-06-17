import React from "react";
import styled from "styled-components";
import {
  AreaChart,
  XAxis,
  Area,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { WiHumidity, WiThermometer, WiRain } from "react-icons/wi";

const MetricsStyled = styled.section`
  background-color: #e4f1ff;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  padding: 3rem;
`;

const PercipitationChartStyled = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 3px 18px 5px rgba(0, 0, 0, 0.1);
`;

const WeatherMetricsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem;
  margin: 2rem 0;
`;

const MetricsCard = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 3px 18px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  h2 {
    text-align: center;
  }

  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    background-color: var(--blue);
    border-radius: 8px;
    color: white;
    font-size: 2rem;
  }

  .loading-bar {
    width: 100%;
    height: 8px;
    background-color: var(--gray);
    border-radius: 8px;
    margin: 1rem 0 0 0;
    position: relative;

    &::after {
      content: "";
      background-color: var(--blue);
      width: 60%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const Metrics = () => {
  const rangeData = [
    {
      day: "Mon",
      temperature: 10,
    },
    {
      day: "Tues",
      temperature: 14,
    },
    {
      day: "Wed",
      temperature: 12,
    },
    {
      day: "Thu",
      temperature: 13,
    },
    {
      day: "Fri",
      temperature: 9,
    },
  ];

  return (
    <MetricsStyled>
      <PercipitationChartStyled>
        <div>
          <h4>Upcoming Days</h4>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={rangeData}
            margin={{ top: 20, bottom: 20, left: 20, right: 15 }}
          >
            <XAxis
              xAxisId="top"
              orientation="top"
              dataKey="day"
              tickLine={false}
              axisLine={false}
            />
            {/* <YAxis axisLine={false} /> */}
            <XAxis
              orientation="bottom"
              dataKey="temperature"
              tickLine={false}
              tickFormatter={(tick) => `${tick}%`}
            />
            <CartesianGrid horizontal={false} />
            <Area dataKey="temperature" stroke="#5d9ce6" fill="#5d9ce6" />
            {/* <Tooltip /> */}
          </AreaChart>
        </ResponsiveContainer>
      </PercipitationChartStyled>
      <WeatherMetricsGrid>
        <MetricsCard>
          <h3>
            Humidity
            <WiHumidity />
          </h3>
          <h2>82%</h2>
          <div className="loading-bar" />
        </MetricsCard>
        <MetricsCard>
          <h3>
            Feels Like
            <WiThermometer />
          </h3>
          <h2>30&deg;</h2>
          <div className="loading-bar" />
        </MetricsCard>
        <MetricsCard>
          <h3>
            Chance of Rain
            <WiRain />
          </h3>
          <h2>42%</h2>
          <div className="loading-bar" />
        </MetricsCard>
      </WeatherMetricsGrid>
    </MetricsStyled>
  );
};

export default Metrics;
