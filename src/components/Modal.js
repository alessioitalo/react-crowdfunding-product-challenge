import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: auto;
`;

function Modal() {
  return <StyledModal />;
}

export default Modal;
