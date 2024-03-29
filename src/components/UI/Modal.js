import { Fragment } from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";

// Define the keyframes
const leftKeyframes = keyframes`
  from {
    transform: translateX(30rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const GlobalStyle = createGlobalStyle`
  @keyframes left {
    ${leftKeyframes}
  }
`;

const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOverlayStyled = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0%;
  width: 50%;
  width: 80%;
  background-color: #f5f5f5;
  padding: 1rem 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${leftKeyframes} 0.3s ease-in-out;
  animation-timing-function: linear;

  @media (min-width: 768px) {
    width: 30rem;
    left: calc(89% - 20rem);
  }
`;

// Styled-component for content
const ContentStyled = styled.div`
  /* Add any content styles here */
`;

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackdropStyled onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlayStyled>
          <ContentStyled>{props.children}</ContentStyled>
        </ModalOverlayStyled>,
        portalElement
      )}
      <GlobalStyle /> {/* Include the global styles */}
    </Fragment>
  );
};

export default Modal;
