import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import styled from "styled-components";
export default function Main(navigation) {
  return (
    <Container>
      <TopBar>
        <Day> Пятница </Day>
      </TopBar>
      <StatusBar style="auto" />
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: #141519;
  align-items: center;
`;
const TopBar = styled.View`
  height: 161px;
  margin-top: 0px;
  width: 100%;
  background-color: #1f2025;
`;
const Day = styled.Text`
  margin-top: 50px;
  margin-left: 16px;
  font-size: 25px;
  color: #fff;
`;
