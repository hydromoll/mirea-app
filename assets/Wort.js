import React from "react";
import styled from "styled-components";
import StartTime from "./StartTime";
export default function Wort() {
  return (
    <Container>
      <Time>
        <StartTime />
        <End>10:30</End>
      </Time>
      <Name>Автоматное программирование систем</Name>
    </Container>
  );
}
const Container = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
`;

const Time = styled.View`
  height: 55px;
  width: 55px;
  align-items: center;
`;
const End = styled.Text`
  margin-top: 25px;
  color: #fff;
  font-size: 20px;
`;
const Name = styled.Text`
  width: 100%;
  flex-direction: row;
  color: #fff;
  font-size: 20;
`;
