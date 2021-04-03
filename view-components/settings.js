import React from "react";
import { SafeAreaView, Text } from "react-native";
import styled from "styled-components/native";

export default function App() {
  return (
    <SafeAreaView>
      <Container>
        <Cont>
          <GroupContainer>
            <Urgrp>Ваша группа</Urgrp>
            <GroupNum>
              <Text style={{ color: "white", fontSize: 20 }}> ИВБО-13-19 </Text>
            </GroupNum>
          </GroupContainer>
          <Title>MIREA Assiatant 1.0</Title>
          <Developers>by hydromoll and misha98857</Developers>
        </Cont>
        <Problem>Возникла проблема?</Problem>
      </Container>
    </SafeAreaView>
  );
}
const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #141519;
`;

const Cont = styled.View`
  margin-top: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  color: white;
`;
const Developers = styled.Text`
  color: white;
  margin-top: 5%;
`;
const GroupContainer = styled.View`
  width: 85%;
  height: 30%;
  border-radius: 10px;
  padding: 5%;
  background-color: #1f2025;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
`;
const Urgrp = styled.Text`
  color: white;
  font-size: 20px;
`;
const Problem = styled.Text`
  align-self: center;
  position: absolute;
  font-size: 16px;
  bottom: 25px;
  color: #6180e8;
`;
const GroupNum = styled.TouchableOpacity`
  width: 45%;
  height: 50px;
  border-radius: 9px;
  margin-left: 50px;
  background-color: #35353f;
  align-items: center;
  justify-content: center;
`;
const BarItems = styled.View`
  flex-direction: row;
`;
