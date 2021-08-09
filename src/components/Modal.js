import React from "react";
import styled from "styled-components";

// const StyledModal = styled.div`
// position: absolute;
// top: 0;
// left: 0;
// background-color: rgba(0,0,0,0.5);
// height: 100%;
// width: 100%;
// z-index: 1;
// `

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

function Modal() {
  return <StyledModal />;
}

export default Modal;
