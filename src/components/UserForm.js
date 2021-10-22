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
  image,
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
    image,
  };
  const userString = JSON.stringify(userDict);
  localStorage.setItem("user", userString);
  setUser(userDict);
};

const UserForm = ({ user, setUser }) => {
  const [prename, setPrename] = useState(user.prename ? user.prename : "");
  const [surname, setSurname] = useState(user.surname ? user.surname : "");
  const [email, setEmail] = useState(user.email ? user.email : "");
  const [street, setStreet] = useState(user.street ? user.street : "");
  const [number, setNumber] = useState(user.number ? user.number : "");
  const [postcode, setPostcode] = useState(user.postcode ? user.postcode : "");
  const [city, setCity] = useState(user.city ? user.city : "");
  const [image, setImage] = useState(user.image ? user.image : "");

  const [loading, setLoading] = useState(false);

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
        setImage={setImage}
        setLoading={setLoading}
      />
      <Photo>
        <img src={image} alt="" />
        <Icon />
      </Photo>
      <Row>
        <Entry
          width="55%"
          type="text"
          placeholder="Vorname"
          data={prename}
          setInput={setPrename}
          id="0"
          loading={loading}
        />
        <Entry
          width="40%"
          type="text"
          placeholder="Nachname"
          data={surname}
          setInput={setSurname}
          id="1"
          loading={loading}
        />
      </Row>
      <Row>
        <Entry
          width="100%"
          type="email"
          placeholder="E-Mail-Adresse"
          data={email}
          setInput={setEmail}
          id="2"
          loading={loading}
        />
      </Row>
      <Row>
        <Entry
          width="80%"
          type="text"
          placeholder="Straße"
          data={street}
          setInput={setStreet}
          id="3"
          loading={loading}
        />
        <Entry
          width="15%"
          type="text"
          placeholder="Hsnr."
          data={number}
          setInput={setNumber}
          id="4"
          loading={loading}
        />
      </Row>
      <Row>
        <Entry
          width="35%"
          type="text"
          placeholder="PLZ"
          data={postcode}
          setInput={setPostcode}
          id="5"
          loading={loading}
        />
        <Entry
          width="60%"
          type="text"
          placeholder="Ort"
          data={city}
          setInput={setCity}
          id="6"
          loading={loading}
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
            image,
            setUser
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
  background: #1dd1a1;
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
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    height: 262px;
    width: 262px;
  }
`;

const Row = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0 5px 0;
`;

export default UserForm;
