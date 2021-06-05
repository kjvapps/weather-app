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
  height: 80vh;
`;

const Dashboard = () => {
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
