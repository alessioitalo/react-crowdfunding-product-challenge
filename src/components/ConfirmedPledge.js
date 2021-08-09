import React from "react";
import styled from "styled-components";
import checkIcon from "../images/icon-check.svg";

const StyledConfirmedPledge = styled.div`
  background-color: white;
  width: 34%;
  position: fixed;
  top: 8rem;
  left: 33%;
  z-index: 3;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 16rem;
  @media(max-width:600px){
    width: 60%;
    left: 15%;
  }

  & button{
      margin-top: 1rem;
  }
`;

function ConfirmedPledge(props) {
  return (
    <StyledConfirmedPledge>
      <img src={checkIcon} alt="icon-green-check" />
      <h3>Thanks for your support!</h3>
      Your pledge brings us one step closer to sharing Mastercraft Bamboo
      Monitor Riser worldwide. You will get an email once our campaign is
      completed.
      <button onClick={props.closePledgeHandler}>Got it!</button>{" "}
    </StyledConfirmedPledge>
  );
}

export default ConfirmedPledge;
