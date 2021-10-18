import React from "react";
import styled from "styled-components";
import { useState } from "react";

import UserForm from "./UserForm";

const Card = () => {
  const localStorageState = {
    prename: localStorage.getItem("prename"),
    surname: localStorage.getItem("surname"),
    email: localStorage.getItem("email"),
    street: localStorage.getItem("street"),
    number: localStorage.getItem("number"),
    postcode: localStorage.getItem("postcode"),
    city: localStorage.getItem("prename"),
  };
  const [user, setUser] = useState(localStorageState);
  console.log(user);

  console.log();

  return (
    <Container>
      <CardBox>
        <UserForm user={user} />
      </CardBox>
    </Container>
  );
};

const Container = styled.div`
  background: #f9f9f9;
  width: 100vw;
  height: 100vh;
`;

const CardBox = styled.div`
  height: 780px;
  width: 630px;
  background: white;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  box-shadow: 0px 0px 48px rgba(34, 34, 34, 0.08);
  box-sizing: border-box;
  padding: 40px;
`;

export default Card;
