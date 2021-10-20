import React, { useState } from "react";
import styled from "styled-components";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const changeHandler = (e, setInput, type, id, correct, setCorrect) => {
  const input = e.target.value;
  setInput(input);

  // text | prename, surname, street, housenumber, city
  if (type === "text") {
    // prüfen ob string leer ist
    if (input === "") {
      setCorrect(false);
    } else {
      setCorrect(true);
    }
  }
  // email | email
  else if (type === "email") {
    if (e.target.validity.valid) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }
};

const Entry = ({ width, placeholder, data, setInput, type, id, loading }) => {
  const [correct, setCorrect] = useState(true);

  return (
    <Container width={width}>
      {loading ? (
        <Loader
          className="anim"
          type="ThreeDots"
          color="#89898c"
          height={30}
          width={60}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) =>
            changeHandler(e, setInput, type, id, correct, setCorrect)
          }
          value={data}
        />
      )}
      <Line correct={correct} />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  border: none;
  position: relative;
  .anim {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
  }

  input {
    font-size: 16px;
    color: #222222;
    width: 100%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    padding: 0 10px 0 10px;
    :focus {
      outline: none;
    }
  }
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: ${(props) => (props.correct ? "#10ac84" : "#ff0018")};
`;

export default Entry;
