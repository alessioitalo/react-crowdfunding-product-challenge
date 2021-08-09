import React, { useState } from "react";
import styled from "styled-components";
import PopupMinicard from "./PopupMinicard";
import xIcon from "../images/icon-close-modal.svg";
import EnterPledgeForm from "./EnterPledgeForm";

const StyledPopup = styled.div`
  position: absolute;
  top: 8rem;
  right: 50%;
  width: 50%;
  z-index: 1;
  min-width: 20rem;

  @media (max-width: 600px) {
    width: 90%;
  }

  & h2 {
    margin: 0;
  }

  & div {
    margin-left: 0;
    width: 100%;
    position: relative;
    left: 50%;
    background-color: white;
    border-radius: 10px;
    z-index: 2;
    min-width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem 3rem;
    @media (max-width: 600px) {
      min-width: 15rem;
      padding: 2rem;
    }

    & img {
      position: relative;
      width: 1rem;
      height: 1rem;
      align-self: flex-end;
      cursor: pointer;
    }
  }
`;

function Popup(props) {
  const [showForm, setShowForm] = useState({
    zero: false,
    first: false,
    second: false,
  });

  const highlightZeroHandler = ()=>{
    setShowForm({zero:true, first:false, second:false})
  }

  const highlightFirstHandler = ()=>{
    setShowForm({zero:false, first:true, second:false})
  }

  const highlightSecondHandler = ()=>{
    setShowForm({zero:false, first:false, second:true})

  }

  return (
    <StyledPopup>
      <div>
        <img
          src={xIcon}
          alt="close-menu-icon"
          onClick={props.closePopupHandler}
        />
        <h2>Back this project</h2>
        <p>
          Want to support us in bringing Mastercraft Bamboo Riser out in the
          world?
        </p>
        <PopupMinicard selected={showForm.zero} highlightHandler={highlightZeroHandler}>
          <span className="popup-minicard-intro">
            <h3> Pledge with no reward</h3>
          </span>
          <p>
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>
        </PopupMinicard>
        {showForm.zero && (
          <EnterPledgeForm
            closePopupHandler={props.closePopupHandler}
            showPledgeHandler={props.showPledgeHandler}
            updateCrowdfundingState={props.updateCrowdfundingState}
            min={0}
            id="zero"
          />
        )}
        <PopupMinicard selected={showForm.first} highlightHandler={highlightFirstHandler}>
          <span className="popup-minicard-intro">
            <span>
              <h3>Bamboo Stand </h3>
              <span className="pledge"> Pledge $25 or more</span>
            </span>
            <span className="left">
              <strong>{props.quantity.first} </strong> left
            </span>
          </span>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.{" "}
          </p>
        </PopupMinicard>
        {showForm.first && (
          <EnterPledgeForm
            closePopupHandler={props.closePopupHandler}
            showPledgeHandler={props.showPledgeHandler}
            updateCrowdfundingState={props.updateCrowdfundingState}
            min={25}
            id="first"
            quantityHandler={props.quantityHandler}
            
          />
        )}
        <PopupMinicard selected={showForm.second} highlightHandler={highlightSecondHandler}>
          <span className="popup-minicard-intro">
            <span>
              <h3>Black Edition Stand </h3>
              <span className="pledge"> Pledge $75 or more</span>
            </span>
            <span className="left">
              <strong>{props.quantity.second}</strong> left
            </span>
          </span>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
        </PopupMinicard>
        {showForm.second && (
          <EnterPledgeForm
            closePopupHandler={props.closePopupHandler}
            showPledgeHandler={props.showPledgeHandler}
            updateCrowdfundingState={props.updateCrowdfundingState}
            min={75}
            id="second"
            quantityHandler={props.quantityHandler}
          />
        )}
        <PopupMinicard isDisabled={true}>
          <span className="popup-minicard-intro">
            <span>
              <h3>Mahogany Special Edition </h3>
              <span className="pledge"> Pledge $200 or more</span>
            </span>
            <span className="left">
              <strong>0 </strong> left
            </span>
          </span>
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
        </PopupMinicard>
      </div>
    </StyledPopup>
  );
}

export default Popup;
