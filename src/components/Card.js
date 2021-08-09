import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  padding: 2rem 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  & div {
    display: flex;
    justify-content: space-between;
  }

  & button {
    padding: 1rem 2.5rem;
  }

  & h1 {
    padding: 0 4rem;
    font-weight: 700;
  }

  & h3 {
    align-self: flex-start;
    margin: 0;
  }

  & p {
    text-align: left;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  & .intro-par{
    text-align: center;
  }

  & .bookmark-container {
    display: flex;
    justify-content: space-between;
  }
`;

function Card(props) {
  return <StyledCard>{props.children}</StyledCard>;
}

export default Card;
