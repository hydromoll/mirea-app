import { Modal, StyleSheet, View } from "react-native";
import styled from "styled-components";
import React, { useState } from "react";
import normalize from "../utils/normalizeFontSize";
const ModalView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Background>
        <YourGroup>Ваша группа:</YourGroup>
        <GroupField placeholder="XXXX-00-00" placeholderTextColor="white" />
        <Button></Button>
      </Background>
    </Modal>
  );
};
const Background = styled.View`
  margin: 20;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;
const YourGroup = styled.Text`
  font-size: ${normalize(10)};
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
const Button = styled.TouchableOpacity`
  border-radius: 5px;
  padding: 10px;
`;
export default ModalView;
