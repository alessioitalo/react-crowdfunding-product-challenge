import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import React, { useState } from "react";
import ConfirmedPledge from "./components/ConfirmedPledge";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPledge, setShowPledge] = useState(false);
  const [crowdfunding, setCrowdfunding] = useState({ money: 49914, backers: 5007})
  const [quantity, setQuantity] = useState({first: 101, second: 64 })
  const popupHandler = () => {
    setShowModal(true);
    setShowPopup(true);
  };

  const closePopupHandler = () => {
    setShowModal(false);
    setShowPopup(false);
  };

  const showPledgeHandler = () => {
    setShowPledge(true);
    setShowModal(true);
  };
  const closePledgeHandler = () => {
    setShowPledge(false);
    setShowModal(false);
  };
  const updateCrowdfundingState = (addedMoney)=>{
    setCrowdfunding({money: crowdfunding.money+addedMoney, backers: crowdfunding.backers+=1})
  }
  const quantityHandler = (quantityState)=>{
    if (quantityState === 'first'){
      setQuantity({first : quantity.first -= 1, second: quantity.second})
    }
    else{
      setQuantity({first : quantity.first, second: quantity.second - 1})
    }
  }
  const collectedAmount = `${crowdfunding.money / 10000 * 10}%`


  return (
    <div className="App">
        {showModal && <Modal />}
        <Header setShowModal={setShowModal} />
        <Container popupHandler={popupHandler} crowdfunding={crowdfunding} amount={collectedAmount} quantity={quantity} />
        {showPopup && (
          <Popup
            closePopupHandler={closePopupHandler}
            showPledgeHandler={showPledgeHandler}
            updateCrowdfundingState={updateCrowdfundingState}
            quantity={quantity}
            quantityHandler={quantityHandler}
          />
        )}
        {showPledge && <ConfirmedPledge closePledgeHandler={closePledgeHandler}/>}
      <Footer />
    </div>
  );
}

export default App;
