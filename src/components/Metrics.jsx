import React from "react";
import styled from "styled-components";
import {
  AreaChart,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
} from "recharts";

import { WiHumidity, WiThermometer, WiRain } from "react-icons/wi";

const MetricsStyled = styled.section`
  background-color: #e4f1ff;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  padding: 3rem;
`;

const WeekForecast = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 3px 18px 5px rgba(0, 0, 0, 0.1);
`;

const MetricsCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 2rem;
  margin: 2rem 0;
`;

const MetricCard = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 3px 18px 5px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
  }

  h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    font-size: 2rem;
    background-color: var(--blue);
    color: white;
    border-radius: 8px;
  }

  .loading-bar {
    width: 100%;
    height: 5px;
    background-color: #eeeeee;
    border-radius: 8px;
    position: relative;
    margin: 1rem 0;

    &::after {
      content: "";
      height: 100%;
      width: 30%;
      background-color: var(--blue);
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
      <WeekForecast>
        <div>
          <h4>Upcoming Week</h4>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={rangeData}
            margin={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Area dataKey="temperature" stroke="#5d9ceb" fill="#5d9ceb" />
            <XAxis
              xAxisId="day"
              dataKey="day"
              orientation="top"
              axisLine={false}
              tickLine={false}
            />
            <XAxis
              dataKey="temperature"
              orientation="bottom"
              axisLine={false}
              tickLine={false}
              tickFormatter={(tick) => `${tick}%`}
            />
            <CartesianGrid horizontal={false} stroke="#000000" />
          </AreaChart>
        </ResponsiveContainer>
      </WeekForecast>
      <div>
        <h4 style={{ margin: "2rem 0" }}>More details of today's weather</h4>
        <MetricsCardGrid>
          <MetricCard>
            <h4>
              Humidity
              <WiHumidity />
            </h4>
            <h2>82%</h2>
            <div className="loading-bar" />
          </MetricCard>
          <MetricCard>
            <h4>
              Feels Like
              <WiThermometer />
            </h4>
            <h2>30&deg;</h2>
            <div className="loading-bar" />
          </MetricCard>
          <MetricCard>
            <h4>
              Chance of Rain
              <WiRain />
            </h4>
            <h2>42%</h2>
            <div className="loading-bar" />
          </MetricCard>
        </MetricsCardGrid>
      </div>
    </MetricsStyled>
  );
};

export default Metrics;
