import React from "react";
import styled from "styled-components";
import xIcon from "../images/icon-close-menu.svg";

const StyledDiv = styled.div`
  position: relative;
  top: 2rem;
  background-color: white;
  text-align: left;
  border-radius: 10px;
  z-index: 2;
  margin: 0 1rem;

  & li {
    list-style: none;
    padding: 2.5rem 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: black;
  }
  & img {
    position: absolute;
    width: 25px;
    top: -6.5rem;
    right: 0.5rem;
    cursor: pointer;
  }

  & .mobile-menu-lines {
    border-top: 1px solid hsl(0, 0%, 96%);
    border-bottom: 1px solid hsl(0, 0%, 96%);
  }
`;

function MobileMenu(props) {
  return (
    <StyledDiv>
      <img
        src={xIcon}
        alt="close-menu-icon"
        onClick={props.mobileMenuHandler}
      />
      <li>About</li>
      <div className="mobile-menu-lines">
        <li>Discover</li>
      </div>
      <div>
        <li>Get Started</li>
      </div>
    </StyledDiv>
  );
}

export default MobileMenu;
