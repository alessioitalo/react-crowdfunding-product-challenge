import React from "react";
import styled from "styled-components";

const StyledCardRow = styled.div`
  background-color: white;
  padding: 2rem 3rem;
  margin: 1rem 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  & .rows {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }

  & .single-row {
    display: flex;
    flex-direction: column;
    padding-left: 0.5rem;
    padding-right: 2.5rem;
    padding-bottom: 1.5rem;
    @media (max-width: 600px) {
      padding: 0 0 1.5rem 0;
    }
  }

  & .with-line {
    border-right: 1px solid hsla(0, 0%, 48%, 0.3);
    @media (max-width: 600px) {
      border-right: none;
      border-bottom: 1px solid hsla(0, 0%, 48%, 0.3);
      width: 40%;
    }
  }
`;

function CardRow(props) {
  return <StyledCardRow>{props.children}</StyledCardRow>;
}

export default CardRow;
