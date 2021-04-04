import { Text } from "react-native";
import styled from "styled-components/native/dist/styled-components.native.esm";
import React from "react";
import normalize from "../utils/normalizeFontSize";

const PairCard = (props) => (
  <Card key={props.item.key}>
    <Time>
      <Starttime>{`${props.item.startTime}`}</Starttime>
      <Endtime style={{ marginTop: 10 }}>{`${props.item.endTime}`}</Endtime>
    </Time>
    <Title>
      <Name>{`${props.name + (props.name && ",") || "—"} ${props.type}`}</Name>
      <Text style={{ color: "gray" }}>{`${props.professor || "—"}`}</Text>
    </Title>
    <Rooom
      style={{
        color: "white",
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
  width: 13%;
  margin-top: 15px;
`;

const Starttime = styled.Text`
  color: #929395;
  font-size: ${normalize(12)};
`;
const Endtime = styled.Text`
  color: #929395;
  font-size: ${normalize(12)};
`;

const Name = styled.Text`
  font-size: ${normalize(12)};
  color: white;
`;
const Title = styled.View`
  padding-top: 5%;
  padding-left: 2%;
  width: 55%;
`;
const Rooom = styled.Text`
  width: 25%;
  text-align: center;
  background-color: #4b4f5b;
  font-size: ${normalize(13)};
  padding: 7px 10px;
`;

export default PairCard;
