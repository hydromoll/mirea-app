import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import styled from "styled-components";
import Back from "../images/Back";
export default function App({ navigation }) {
  return (
    <SafeAreaView>
      <Container>
        <TopBar>
          <Menu>
            {/* <Back onPress={() => navigation.goBack()} /> */}
            Настройки
          </Menu>
        </TopBar>
        <Cont>
          <Logo></Logo>
          <Title>MIREA Assiatant 1.0</Title>
          <Developers>by hydromoll and misha98857</Developers>
          <GroupContainer>
            <Urgrp>Ваша группа</Urgrp>
            <GroupNum>
              <Text style={{ color: "white", fontSize: 20 }}> ИВБО-13-19 </Text>
            </GroupNum>
          </GroupContainer>
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
const TopBar = styled.View`
  flex-direction: row;
  height: 100px;
  width: 100%;
  background-color: #1f2025;
`;
const Menu = styled.Text`
  color: #fff;
  margin-left: 22px;
  margin-top: 50px;
  font-size: 22px;
`;
const Settingg = styled.Text`
  margin-top: 5%;
  color: #fff;
  font-size: 22px;
`;
const Cont = styled.View`
  margin-top: 25%;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.View`
  background-color: blue;
  width: 100px;
  height: 100px;
`;
const Title = styled.Text`
  color: white;
`;
const Developers = styled.Text`
  color: white;
  margin-top: 5%;
`;
const GroupContainer = styled.View`
  width: 350px;
  height: 100px;
  border-radius: 10px;
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
  width: 150px;
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
