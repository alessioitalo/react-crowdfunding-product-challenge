import React, { useState } from "react";
import styled from "styled-components";

const StyledPledgeForm = styled.form`
  width: 100%;
  margin-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid hsl(176, 50%, 47%);
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 2rem 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 1rem 1.5rem;
    & span {
      width: 100%;
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
    }
  }

  & input {
    padding: 1rem 1.5rem;
    border-radius: 50px;
    width: 6rem;
    border: 1px solid hsla(0, 0%, 48%, 0.3);
    margin-right: 0.2rem;
    outline: none;
    @media (max-width: 600px) {
      margin-right: 1rem;
    }

    & button {
      @media (max-width: 600px) {
        margin-left: 1rem;
      }
    }
  }
`;

function EnterPledgeForm(props) {
  const [enteredPledge, setEnteredPledge] = useState(0);
  // const [invalidForm, setInvalidForm] = useState(undefined);

  const submitHandler = (event) => {
    event.preventDefault();
    switch (props.id) {
      case "first":
        props.quantityHandler("first");
        break;
      case "second":
        props.quantityHandler("second");
        break;
      default:
        break;
    }
    props.updateCrowdfundingState(parseInt(enteredPledge));
    setEnteredPledge(0);
    props.closePopupHandler();
    props.showPledgeHandler();
    console.log('test test test')
  };

  const getEnteredPledge = (e) => {
    setEnteredPledge(e.target.value);
  };

  return (
    <StyledPledgeForm onSubmit={submitHandler} id={props.id}>
      <label>Enter your pledge</label>
      <span>
        <input
          type="number"
          onChange={getEnteredPledge}
          value={enteredPledge}
          min={props.min}
        ></input>
        <button>Continue</button>
      </span>
    </StyledPledgeForm>
  );
}

export default EnterPledgeForm;
