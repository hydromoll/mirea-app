import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Logo></Logo>
      <Txt>MIREA Assiatant 1.0</Txt>
      <Dev>by hydromoll and Misha98857</Dev>
      <GroupContainer>
        <Urgrp style={{ fontSize: 20 }}>Ваша группа</Urgrp>
        <GroupNum>
          <Text style={{ color: "white", fontSize: 20 }}> ИВБО-13-19 </Text>
        </GroupNum>
      </GroupContainer>
      <Ok></Ok>
      <Problem>Возникла проблема?</Problem>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #141519;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.View`
  background-color: blue;
  width: 100px;
  height: 100px;
`;
const Txt = styled.Text`
  color: white;
`;
const GroupContainer = styled.View`
  width: 350px;
  height: 100px;
  border-radius: 10px;
  background-color: #1f2025;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
const Urgrp = styled.Text`
  color: white;
`;
const Ok = styled.View`
  width: 350px;
  height: 75px;
  border-radius: 10px;
  background-color: #1f2025;
  margin-top: 25px;
`;
const Problem = styled.Text`
  position: absolute;
  font-size: 16px;
  bottom: 25px;
  color: #6180e8;
`;
const GroupNum = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  border-radius: 9px;
  margin-left: 50px;
  background-color: #35353f;
  align-items: center;
  justify-content: center;
`;
const Dev = styled.Text``;
