import React from "react";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";

const DashboardStyles = styled.div`
  border-radius: 50px;
  overflow: hidden;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 22.5rem 1fr;
  height: 80vh;
`;

const Dashboard = () => {
  return (
    <DashboardStyles>
      <DashboardGrid>
        <Sidebar />
      </DashboardGrid>
    </DashboardStyles>
  );
};

export default Dashboard;
