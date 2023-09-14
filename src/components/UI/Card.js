import React from "react";

import styled from "styled-components";

const CousineContainer = styled.div`
  display: block;
  width: 90%;
  justify-content: center;
  margin: auto;
  gap: 30px;
`;

const Card = (props) => {
  return (
    <CousineContainer style={props.style}>{props.children}</CousineContainer>
  );
};

export default Card;
