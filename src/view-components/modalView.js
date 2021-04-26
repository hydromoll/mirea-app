import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import React, { useContext } from 'react';
import normalize from '../utils/normalizeFontSize';
import InputGroupView from './inputGroupView';
import AppContext from '../utils/context';

const ModalView = () => {
  const context = useContext(AppContext);
  return (
    <Container>
      <Modal
        animationType="slide"
        transparent
        isVisible={context.isVisibleModalDialog}
        onBackdropPress={() => {
          context.setVisibleModalDialog(false);
        }}
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
export default ModalView;
