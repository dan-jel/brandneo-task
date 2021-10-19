import React from "react";
import styled from "styled-components";
import { useState } from "react";

import UserForm from "./UserForm";
import RandomData from "./RandomData";

const Card = () => {
  const storageCache = JSON.parse(localStorage.getItem("user"));
  if (storageCache) {
    var initialState = storageCache;
  } else {
    var initialState = "";
  }

  const [user, setUser] = useState(initialState);
  console.log("user: ", user);

  return (
    <Container>
      <CardBox>
        <UserForm user={user} setUser={setUser} />
        <RandomData setUser={setUser} />
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
