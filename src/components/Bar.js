import React, { Fragment } from "react";
import styled from "styled-components";

const StyledBar = styled.div`
  margin-top: 2rem;
  height: 0.7rem;
  width: 100%;
  background-color: hsla(0, 0%, 48%, 0.1);
  border-radius: 50px;
  display: block;
`;

const StyledSpan = styled.span`
  background-color: hsl(176, 50%, 47%);
  border-radius: 50px;
  width: ${(props) => (props.amount ? props.amount : "20%")};
  height: 0.7rem;
  position: relative;
  bottom: 0.7rem;
`;

function Bar(props) {
  return (
    <Fragment>
      <StyledBar>
        
      </StyledBar>
      <StyledSpan amount={props.amount}></StyledSpan>
    </Fragment>
  );
}

export default Bar;
