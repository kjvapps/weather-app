import React from "react";
import styled from "styled-components";

const MetricsStyled = styled.section`
  background-color: #e4f1ff;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  padding: 3rem;
`;

const Metrics = () => {
  return (
    <MetricsStyled>
      <div>
        <h3>Welcome back Chris!</h3>
        <div></div>
      </div>
    </MetricsStyled>
  );
};

export default Metrics;
