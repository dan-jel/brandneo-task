import styled from "styled-components";
import React from "react";

const Navigation = () => {
  return <Container></Container>;
};

const Container = styled.div`
  height: 100px;
  width: 50px;
  background: red;
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translate(350px, -50%);
  background: #10ac84;
`;

export default Navigation;
