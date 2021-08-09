import styled from "styled-components";

const StyledPopupMinicard = styled.span`
  padding: 1.5rem 2rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: ${(props)=>props.selected? 'none' : '10px'};;
  border-bottom-left-radius: ${(props)=>props.selected? 'none' : '10px'};;
  border: ${(props)=>props.selected? '2px solid hsl(176, 50%, 47%)' : '1px solid hsla(0, 0%, 48%, 0.3)'};
  border-bottom: 1px solid hsla(0, 0%, 48%, 0.3);
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  opacity: ${(props) => (props.isDisabled ? "0.6" : "none")};

  @media (max-width: 600px) {
    padding: 1rem 1.5rem;
  }

  & h3 {
    display: inline;
    margin: 0;
    padding-right: 1rem;
    text-align: left;
  }

  & span {
    display: flex;
    flex-direction: column;
  }

  & .pledge {
    font-weight: 500;
    color: hsl(176, 50%, 47%);
  }

  & .left {
    flex-direction: row;
    @media (max-width: 600px) {
      order: 1;
    }
  }

  & .popup-minicard-intro {
    align-items: baseline;
    justify-content: space-between;
    flex-direction: row;
  }

  & .popup-minicard-intro span {
    display: flex;
    flex-direction: row;
    align-items: baseline;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  & strong {
    display: inline;
    color: black;
    padding-right: 0.1rem;
  }

  & p {
    text-align: left;
  }

  & input {
    margin: 0 0.5rem 0 0;
    display: inline;
    border: 0px;
    width: 20%;
    height: 1.5rem;
    @media (max-width: 600px) {
      width: 50%;
    }
  }
`;

function PopupMinicard(props) {
  return (
    <StyledPopupMinicard isDisabled={props.isDisabled} selected={props.selected}>
      <input disabled={props.isDisabled} name="selected-pledge" type="radio" onChange={props.highlightHandler}/>
      <span>{props.children}</span>
    </StyledPopupMinicard>
  );
}

export default PopupMinicard;
