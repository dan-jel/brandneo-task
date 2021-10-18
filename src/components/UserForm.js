import styled from "styled-components";
import React, { useState } from "react";

import Entry from "./Entry";

import { ReactComponent as Icon } from "../icons/ProfilePic.svg";

const submitHandler = (
  prename,
  surname,
  email,
  street,
  number,
  postcode,
  city,
  setUser
) => {
  const userDict = {
    prename,
    surname,
    email,
    street,
    number,
    postcode,
    city,
  };
  const userString = JSON.stringify(userDict);
  localStorage.setItem("user", userString);
  setUser(userDict);
};

const UserForm = ({ user, setUser }) => {
  const [prename, setPrename] = useState(user.prename);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [street, setStreet] = useState(user.street);
  const [number, setNumber] = useState(user.number);
  const [postcode, setPostcode] = useState(user.postcode);
  const [city, setCity] = useState(user.city);

  return (
    <Container>
      <Photo>
        <Icon />
      </Photo>
      <Row>
        <Entry
          width="55%"
          placeholder="Vorname"
          data={user.prename}
          setInput={setPrename}
        />
        <Entry
          width="40%"
          placeholder="Nachname"
          data={user.surname}
          setInput={setSurname}
        />
      </Row>
      <Row>
        <Entry
          width="100%"
          placeholder="E-Mail-Adresse"
          data={user.email}
          setInput={setEmail}
        />
      </Row>
      <Row>
        <Entry
          width="80%"
          placeholder="Straße"
          data={user.street}
          setInput={setStreet}
        />
        <Entry
          width="15%"
          placeholder="Hsnr."
          data={user.number}
          setInput={setNumber}
        />
      </Row>
      <Row>
        <Entry
          width="35%"
          placeholder="PLZ"
          data={user.postcode}
          setInput={setPostcode}
        />
        <Entry
          width="60%"
          placeholder="Ort"
          data={user.city}
          setInput={setCity}
        />
      </Row>
      <FormButton
        onClick={() =>
          submitHandler(
            prename,
            surname,
            email,
            street,
            number,
            postcode,
            city,
            setUser
          )
        }
      >
        Datensatz bearbeiten
      </FormButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const FormButton = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  position: absolute;
  bottom: 0;
  border-radius: 15px;
  border: none;
  background: #b9b9b9;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  :hover {
    cursor: pointer;
  }
`;

const Photo = styled.div`
  height: 260px;
  width: 260px;
  background: blue;
  border-radius: 100%;
  margin: 0 0 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0 5px 0;
`;

export default UserForm;
