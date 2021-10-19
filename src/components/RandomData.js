import React from "react";
import styled from "styled-components";
import axios from "axios";

import { ReactComponent as DiceIcon } from "../icons/Dice.svg";

const Randomdata = ({ setUser }) => {
  const getData = async () => {
    const res = await axios.get("https://randomuser.me/api/");
    const dummyUser = res.data.results[0];
    const prename = dummyUser.name.first;
    const surname = dummyUser.name.last;
    const email = dummyUser.email;
    const street = dummyUser.location.street.name;
    const number = dummyUser.location.street.number;
    const postcode = dummyUser.location.postcode;
    const city = dummyUser.location.city;
    const dummyDict = {
      prename,
      surname,
      email,
      street,
      number,
      postcode,
      city,
    };
    setUser(dummyDict);
    console.log(dummyDict);
  };

  return (
    <Container onClick={getData}>
      <DiceIcon tooltip="pull random dataset from api" />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: 40px;
  top: 40px;
  height: 40px;
  width: 40px;
  svg {
    height: 100%;
    width: 100%;
    g {
      fill: #89898c;
    }
  }
  :hover {
    cursor: pointer;
    svg {
      g {
        fill: #10ac84;
      }
    }
  }
`;

export default Randomdata;
