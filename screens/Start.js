import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";

export default function Main(props) {
  return (
    <Container>
      <StatusBar style="auto" />
      <Hi>Привет!</Hi>
      <GroupField
        onPress={() => props.chooseGroupEvent()}
        placeholder="Введите группу"
        placeholderTextColor="white"
      ></GroupField>
      <Forward></Forward>
      <Problembutton>
        <Problem onPress={() => props.chooseGroupEvent()}>
          Возникла проблема?
        </Problem>
      </Problembutton>
    </Container>
  );
}

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  background-color: #141519;
  align-items: center;
`;
const Hi = styled.Text`
  color: white;
  font-size: 28px;
`;
const GroupField = styled.TextInput`
  margin-top: 5%;
  color: coral;
  background-color: #1f2025;
  padding: 12px;
  width: 200px;
  height: 40px;
  border-radius: 5px;
`;
const Forward = styled.TouchableOpacity``;
const Problembutton = styled.TouchableOpacity``;
const Problem = styled.Text`
  font-size: 18px;
  color: blue;
`;
