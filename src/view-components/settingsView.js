import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import normalize from '../utils/normalizeFontSize';
import ModalView from './modalView';
import logo from '../../assets/images/panda.png';
import AppContext from '../utils/context';
import BottomSheetView from './bottomSheet';

export default function settingsView() {

  const { height } = Dimensions.get('screen');
  const context = useContext(AppContext);

  return (
    <Container style={{ height }}>
      <TopBar>
        <Logo source={logo} />
        <Title>Расписание МИРЭА</Title>
        <Developers>by hydromoll and misha98857</Developers>
      </TopBar>
      <GroupContainer>
        <Urgrp>Ваша группа</Urgrp>
        <GroupNum onPress={() => context.setVisibleModalDialog(true)}>
          <Urgrp>{context.currentGroup}</Urgrp>
        </GroupNum>
      </GroupContainer>
      <BottomSheetView />
      <ModalView />
    </Container>
  );
}
const Container = styled.View`
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #141519;
`;
const TopBar = styled.View`
  align-items: center;
  justify-content: center;
  height: 45%;
  width: 100%;
  background-color: #1f2025;
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
`;
const Logo = styled.Image`
  margin-top: 25px;
  height: 120px;
  width: 120px;
`;
const Title = styled.Text`
  margin-top: 8%;
  color: white;
  font-size: ${normalize(20)};
`;
const Developers = styled.Text`
  font-size: ${normalize(20)};

  color: white;
  margin-top: 5%;
`;
const GroupContainer = styled.View`
  width: 95%;
  height: 15%;
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
  font-size: ${normalize(16)};
`;

const GroupNum = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  border-radius: 9px;
  margin-left: 50px;
  background-color: #35353f;
  align-items: center;
  justify-content: center;
`;
