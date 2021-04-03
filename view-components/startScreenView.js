import React, { useState } from "react";
import styled from "styled-components/native";
import { Check } from "../images/Icons";
import { css } from "styled-components";

export default function startScreenView(props) {
  const [text, setText] = useState('');
  const [isCorrectGroupName, setIsCorrectGroupName] = useState(false);

  const setGroupName = (groupName) => {
    const re = /^([а-яА-Я\w]{4}-\d{2}-\d{2})$/g;
    const isGroupCorrect = re.test(groupName);
    setText(groupName);
    setIsCorrectGroupName(isGroupCorrect);
  };

  return (
    <Container>
      <Hi>Привет!</Hi>
      <Choose>Укажи свою группу</Choose>
      <GroupField
        onPress={() => props.chooseGroupEvent()}
        placeholder="XXXX-00-00"
        placeholderTextColor="white"
        onChangeText={(text) => setGroupName(text)}
        autoFocus
      />
      <Forward disabled={!isCorrectGroupName} onPress={() => props.chooseGroupEvent(text)}><Check /></Forward>
      <Problembutton>
        <Problem onPress={() => props.chooseGroupEvent()}>
          Возникла проблема?
          {text} {isCorrectGroupName.toString()}
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
  font-size: 42px;`;
const Choose = styled.Text`
  margin-top: 15px;
  font-size: 20px;
  color: white;
`;
const GroupField = styled.TextInput`
  margin-top: 30px;
  color: white;
  background-color: #1f2025;
  padding: 12px;
  width: 250px;
  height: 52px;
  border-radius: 7px;
  text-align: center;
`;
const Forward = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin-top: 30px;
  height: 52px;
  width: 124px;
  ${props => props.disabled ? css`background: #1B1B21` : css`background: #6180E8`}
`;
const Problembutton = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;

`;
const Problem = styled.Text`
  font-size: 18px;
  color: #6180E8;
`;
