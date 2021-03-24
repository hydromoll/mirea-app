import React from "react";
import styled from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import Srchicn from "../images/Searchicn";
export default function App({ navigation }) {
  return (
    <Container>
      <TopBar>
        <Back onPress={() => navigation.goBack()}>
          <Text>Test</Text>
        </Back>
        <SearchBox
          style={{ padding: 20 }}
          placeholder="Имя преподавателя"
          placeholderTextColor="#1f2025"
        ></SearchBox>
      </TopBar>
      <Srchicn />
      <Text>Здесь появятся результаты поиска</Text>
    </Container>
  );
}
const Container = styled.View`
  background-color: black;
  height: 100%;
  width: 100%;
  align-items: center;
`;
const TopBar = styled.View`
  height: 161px;
  margin-top: 0px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #1f2025;
`;

const Text = styled.Text`
  font-size: 20px;
  color: gray;
`;
const SearchBox = styled.TextInput`
  background-color: gray;
  height: 50px;
  width: 300px;
  border-radius: 10px;
`;
const Back = styled.TouchableOpacity``;
