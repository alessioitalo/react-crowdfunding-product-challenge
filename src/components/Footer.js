import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: hsl(176, 50%, 47%);
  padding: 4rem;
  color: white;

  & div{
    margin: 0.5rem 0;
  }

  & a {
    font-weight: 500;
    text-decoration: none;
    color: hsl(176, 72%, 28%);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div>Challenge by{" "}
      <a target="_blank" rel="noreferrer" href="https://www.frontendmentor.io/">
        Frontend Mentor
      </a></div>
      <div>
      Coded by{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/alessioitalo"
      >
        alessioitalo
      </a></div>
    </StyledFooter>
  );
}

export default Footer;
