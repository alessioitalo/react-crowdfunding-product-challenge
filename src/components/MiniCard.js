import React from "react";
import styled from "styled-components";

const StyledMiniCard = styled.div`
  border: 1px solid hsla(0, 0%, 48%, 0.3);
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: 3rem;
  }

  & .invalid {
  }

  & > div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    opacity: ${(props) => (props.isDisabled ? "0.6" : "none")};
    @media (max-width: 600px) {
      display: block;
      text-align: left;
      opacity: ${(props) => (props.isDisabled ? "0.6" : "none")};
    }
  }

  & div div {
    display: flex;
    align-items: flex-end;
  }

  & h1 {
    display: inline-block;
    padding: 0.2rem;
  }

  & h3 {
    align-self: flex-start;
  }

  & span {
    font-weight: 500;
    color: hsl(176, 50%, 47%);
  }

  & p {
    text-align: left;
    display: inline;
    opacity: ${(props) => (props.isDisabled ? "0.6" : "none")};
  }

  & button {
    background-color: ${(props) =>
      props.isDisabled ? "grey" : "hsl(176, 50%, 47%)"};
    cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  }

  & button:hover {
    background-color: ${(props) =>
      props.isDisabled ? "hsl(0, 0%, 48%)" : "hsl(176, 72%, 28%)"};
  }

  .left{
    align-items: baseline;
    justify-content: baseline;
  }
`;

function MiniCard(props) {
  return (
    <StyledMiniCard isDisabled={props.isDisabled} >
      {props.children}
    </StyledMiniCard>
  );
}

export default MiniCard;
