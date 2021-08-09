import React from "react";
import styled from "styled-components";
import Card from "./Card";
import CardRow from "./CardRow";
import MiniCard from "./MiniCard";
import mastercraft from "../images/logo-mastercraft.svg";
import Bookmark from "./Bookmark";
import "../index.css";
import Bar from "./Bar";

const StyledContainer = styled.div`
  position: relative;
  margin: auto;
  bottom: 15rem;
  width: 50%;
  min-width: 30rem;

  @media (max-width: 600px) {
    width: 92%;
    bottom: 25rem;
    min-width: 15rem;
  }

  & img {
    display: block;
    position: relative;
    top: 2.5rem;
    margin: auto;
    width: 10%;
    @media (max-width: 600px) {
      width: 20%;
    }
  }
`;

function Container(props) {
  return (
    <StyledContainer>
      <div>
        <img src={mastercraft} alt="logo-mastercraft" />
        <Card>
          <h2>Mastercraft Bamboo Monitor Riser</h2>
          <p className="intro-par">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="bookmark-container">
            <button onClick={props.popupHandler}>Back this project</button>
            <Bookmark />
          </div>
        </Card>

        <CardRow>
          <div className="rows">
            <span className="single-row with-line">
              <h2>${props.crowdfunding.money.toLocaleString()}</h2> of $100,000
              backed
            </span>
            <span className="single-row with-line">
              <h2>{props.crowdfunding.backers.toLocaleString()}</h2> total
              backers
            </span>
            <span className="single-row">
              <h2>56</h2> days left
            </span>
          </div>
          <Bar amount={props.amount} />
        </CardRow>

        <Card>
          <h3>About this project </h3>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
          <MiniCard>
            <div>
              <h3>Bamboo Stand</h3>
              <span>Pledge $25 or more</span>
            </div>

            <p>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
            <div>
              <div>
                <div>
                  <h1>{props.quantity.first}</h1>
                  <p>left</p>
                </div>
              </div>

              <button onClick={props.popupHandler}>Select Reward</button>
            </div>
          </MiniCard>
          <MiniCard>
            <div>
              <h3>Black Edition Stand</h3>
              <span>Pledge $75 or more</span>
            </div>
            <p>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
            <div>
              <div>
                <div>
                  <h1>{props.quantity.second}</h1>
                  <p>left</p>
                </div>
              </div>

              <button onClick={props.popupHandler}>Select Reward</button>
            </div>
          </MiniCard>
          <MiniCard isDisabled={true}>
            <div>
              <h3>Mahogany Special Edition</h3>
              <span>Pledge $200 or more</span>
            </div>

            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
            <div>
              <div>
                <div>
                  <h1>0</h1>
                  <p>left</p>
                </div>
              </div>

              <button>Out of Stock</button>
            </div>
          </MiniCard>
        </Card>
      </div>
    </StyledContainer>
  );
}

export default Container;
