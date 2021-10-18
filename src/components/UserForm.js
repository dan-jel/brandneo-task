import styled from "styled-components";
import React from "react";

import Entry from "./Entry";

const UserForm = ({ user }) => {
  return (
    <Container>
      <Photo />
      <Row>
        <Entry
          width="55%"
          id="prename"
          placeholder="Vorname"
          data={user.prename}
        />
        <Entry
          width="40%"
          id="surename"
          placeholder="Nachname"
          data={user.surname}
        />
      </Row>
      <Row>
        <Entry
          width="100%"
          id="mail"
          placeholder="E-Mail-Adresse"
          data={user.mail}
        />
      </Row>
      <Row>
        <Entry
          width="80%"
          id="street"
          placeholder="Straße"
          data={user.street}
        />
        <Entry
          width="15%"
          id="housenumber"
          placeholder="Hsnr."
          data={user.number}
        />
      </Row>
      <Row>
        <Entry
          width="35%"
          id="postcode"
          placeholder="PLZ"
          data={user.postcode}
        />
        <Entry width="60%" id="city" placeholder="Ort" data={user.city} />
      </Row>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Photo = styled.div`
  height: 260px;
  width: 260px;
  background: blue;
  border-radius: 100%;
  margin: 0 0 40px 0;
`;

const Row = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0 5px 0;
`;

export default UserForm;
