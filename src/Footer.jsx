import React from "react";
import styled from "styled-components";

const CopyrightFooter = styled.div`
  p {
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
  }
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <CopyrightFooter>
      <p>Kathleen Valdez © {year}</p>
    </CopyrightFooter>
  );
}

export default Footer;
