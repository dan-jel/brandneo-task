import React from "react";
import styled from "styled-components";
import axios from "axios";

import { ReactComponent as DiceIcon } from "../icons/Dice.svg";

const RandomData = ({
  setPrename,
  setSurname,
  setEmail,
  setStreet,
  setNumber,
  setPostcode,
  setCity,
  setImage,
  setLoading,
}) => {
  const getData = async () => {
    setLoading(true);
    const res = await axios.get("https://randomuser.me/api/");
    const dummyUser = res.data.results[0];
    setPrename(dummyUser.name.first);
    setSurname(dummyUser.name.last);
    setEmail(dummyUser.email);
    setStreet(dummyUser.location.street.name);
    setNumber(dummyUser.location.street.number);
    setPostcode(dummyUser.location.postcode);
    setCity(dummyUser.location.city);
    setImage(dummyUser.picture.large);
    setLoading(false);
  };

  return (
    <Container onClick={getData}>
      <DiceIcon tooltip="pull random dataset from api" />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
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

export default RandomData;
