import styled from "styled-components";
import React, { useState } from "react";

import Entry from "./Entry";
import RandomData from "./RandomData";

import { ReactComponent as Icon } from "../icons/ProfilePic.svg";

const submitHandler = (
  prename,
  surname,
  email,
  street,
  number,
  postcode,
  city,
  setUser,
  complete
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
  const checkSum = complete.reduce((pv, cv) => pv + cv, 0);

  if (checkSum === 7) {
    const userString = JSON.stringify(userDict);
    localStorage.setItem("user", userString);
    setUser(userDict);
  } else {
    console.log("wrong input", complete);
  }
};

const UserForm = ({ user, setUser }) => {
  const [prename, setPrename] = useState(user.prename);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [street, setStreet] = useState(user.street);
  const [number, setNumber] = useState(user.number);
  const [postcode, setPostcode] = useState(user.postcode);
  const [city, setCity] = useState(user.city);

  const [complete, setComplete] = useState([
    Boolean(prename),
    Boolean(surname),
    Boolean(email),
    Boolean(street),
    Boolean(number),
    Boolean(postcode),
    Boolean(city),
  ]);

  return (
    <Container>
      <RandomData
        setPrename={setPrename}
        setSurname={setSurname}
        setEmail={setEmail}
        setStreet={setStreet}
        setNumber={setNumber}
        setPostcode={setPostcode}
        setCity={setCity}
      />
      <Photo>
        <Icon />
      </Photo>
      <Row>
        <Entry
          width="55%"
          type="text"
          placeholder="Vorname"
          data={prename}
          setInput={setPrename}
          complete={complete}
          setComplete={setComplete}
          id="0"
        />
        <Entry
          width="40%"
          type="text"
          placeholder="Nachname"
          data={surname}
          setInput={setSurname}
          complete={complete}
          setComplete={setComplete}
          id="1"
        />
      </Row>
      <Row>
        <Entry
          width="100%"
          type="email"
          placeholder="E-Mail-Adresse"
          data={email}
          setInput={setEmail}
          complete={complete}
          setComplete={setComplete}
          id="2"
        />
      </Row>
      <Row>
        <Entry
          width="80%"
          type="text"
          placeholder="Straße"
          data={street}
          setInput={setStreet}
          complete={complete}
          setComplete={setComplete}
          id="3"
        />
        <Entry
          width="15%"
          type="text"
          placeholder="Hsnr."
          data={number}
          setInput={setNumber}
          complete={complete}
          setComplete={setComplete}
          id="4"
        />
      </Row>
      <Row>
        <Entry
          width="35%"
          type="text"
          placeholder="PLZ"
          data={postcode}
          setInput={setPostcode}
          complete={complete}
          setComplete={setComplete}
          id="5"
        />
        <Entry
          width="60%"
          type="text"
          placeholder="Ort"
          data={city}
          setInput={setCity}
          complete={complete}
          setComplete={setComplete}
          id="6"
        />
      </Row>
      <FormButton
        complete={complete}
        onClick={() =>
          submitHandler(
            prename,
            surname,
            email,
            street,
            number,
            postcode,
            city,
            setUser,
            complete
          )
        }
      >
        Datensatz speichern
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
  background: ${(props) =>
    props.complete.reduce((pv, cv) => pv + cv, 0) === 7
      ? "#1dd1a1"
      : "#b9b9b9"};
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
  background: #f1f2f6;
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
