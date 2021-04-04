import Modal from "react-native-modal";
import styled from "styled-components/native";
import React, { useState } from "react";
import normalize from "../utils/normalizeFontSize";
import InputGroupView from "./inputGroupView";

const ModalView = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={modalVisible}
        onBackdropPress={()=>{setModalVisible(false)}}
      >
        <Background>
          <YourGroup>Ваша группа:</YourGroup>
          <InputGroupView />
        </Background>
      </Modal>
    </Container>
  );
};
const Container = styled.View`
`;

const Background = styled.View`
  margin: 20px;
  background-color: #141519;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;
const YourGroup = styled.Text`
  font-size: ${normalize(14)};
  color: white;
`;
const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin-top: 30px;
  height: 52px;
  width: 124px;
  background-color: #6180e8;
`;
const Close = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  background-color: #FFF;
`;
export default ModalView;
