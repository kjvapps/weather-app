import React from "react";
import styled from "styled-components";

import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { TiLocationArrowOutline } from "react-icons/ti";
import { WiDaySunny } from "react-icons/wi";

import skyscrapperImage from "../assets/images/skyscrapers.png";

const SidebarStyled = styled.div`
  position: relative;
  color: white;
  background-color: var(--blue);

  img {
    position: absolute;
    height: 60%;
    left: 0;
    bottom: 0;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const AddButton = styled.button`
  border: none;
  padding: 0.4rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    color: var(--blue);
    font-size: 1.25rem;
  }
`;

const LocationStyles = styled.div`
  padding: 1rem 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem 0.5rem;
  }

  h2 {
    font-weight: 300;
  }

  span {
    font-weight: 400;
  }

  span > svg {
    margin: 0 0.75rem 0 0;
  }
`;

const TempCarousel = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;

  h1 {
    font-size: 6.5rem;
    font-weight: 400;
  }

  h2 {
    display: flex;
    align-items: center;
    font-weight: 300;
  }

  svg {
    font-size: 1.75rem;
    margin: 0 0.25rem 0 0;
    cursor: pointer;
  }
`;

const Sidebar = () => {
  return (
    <SidebarStyled>
      <SidebarHeader>
        <AddButton>
          <AiOutlinePlus />
        </AddButton>
      </SidebarHeader>
      <LocationStyles>
        <div>
          <h2>
            <TiLocationArrowOutline /> New York, USA
          </h2>
          <span>
            <FiSunrise />
            07:19
          </span>
        </div>
        <div>
          <p>Today 28 Sept</p>
          <span>
            <FiSunset />
            19:32
          </span>
        </div>
      </LocationStyles>
      <TempCarousel>
        <BiChevronLeft />
        <div>
          <h1>27&deg;</h1>
          <h2>
            <WiDaySunny /> Sunny
          </h2>
        </div>
        <BiChevronRight />
      </TempCarousel>
      <img src={skyscrapperImage} alt="A cartoon of skyscrappers" />
    </SidebarStyled>
  );
};

export default Sidebar;
