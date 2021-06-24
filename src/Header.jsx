import React from "react";
import styled from "styled-components";
import SettingsSystemDaydreamIcon from "@material-ui/icons/SettingsSystemDaydream";

const HomePage = styled.div`
  background-color: white;

  h1 {
    text-align: center;
    font-size: 3rem;
    margin-top: 250px;
  }

  input {
    margin-right: 10px;
  }
`;

const Header = () => {
  return (
    <HomePage>
      <h1>
        Meteor Log <SettingsSystemDaydreamIcon />
      </h1>
    </HomePage>
  );
};

export default Header;
