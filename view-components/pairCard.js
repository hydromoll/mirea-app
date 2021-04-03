import { Text } from "react-native";
import styled from "styled-components/native/dist/styled-components.native.esm";
import React from "react";
import normalize from "../utils/normalizeFontSize";

const PairCard = (props) => (
  <Card key={props.item.key}>
    <Time>
      <Starttime>{`${props.item.startTime}`}</Starttime>
      <Endtime
        style={{ marginTop: 10 }}
      >{`${props.item.endTime}`}</Endtime>
    </Time>
    <Title>
      <Name>{`${props.name + (props.name && ",") || "—"} ${props.type}`}</Name>
      <Text style={{ color: "gray" }}>{`${
        props.professor || "—"
      }`}</Text>
    </Title>
    <Rooom
      style={{
        color: "white"
      }}
    >{`${props.room || "—"}`}</Rooom>
  </Card>
);

const Card = styled.View`
  display: flex;
  justify-content: space-between;
  padding-left: 22px;
  padding-right: 22px;
  height: 100px;
  align-items: center;

  /* border: 12px black so2222322lid; */
  background-color: #141519;
  flex-direction: row;
`;
const Time = styled.View`
  width: 15%;
  margin-top: 15px;
`;

const Starttime = styled.Text`
  color: #929395;
  font-size: 16px;
`;
const Endtime = styled.Text`
  color: #929395;
  font-size: 16px;
`;

const Name = styled.Text`
  font-size: ${normalize(16)};
  color: white;
`;
const Title = styled.View`
  padding-top: 2%;
  padding-left: 5%;
  width: 65%;
`;
const Rooom = styled.Text`
  width: 20%;
  text-align: center;
  background-color: #4b4f5b;
  font-size: ${normalize(14)};
  border-radius: 5px;
  padding: 5px 10px;
`;

export default PairCard;
