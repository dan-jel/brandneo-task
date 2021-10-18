import React from "react";
import styled from "styled-components";

const Entry = ({ width, placeholder, data, setInput }) => {
  return (
    <Container width={width}>
      <input
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
        defaultValue={data}
      />
      <Line />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  border: none;
  input {
    font-size: 16px;
    color: #222222;
    width: 100%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    padding: 0 10px 0 10px;
  }
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background: #10ac84;
`;

export default Entry;
