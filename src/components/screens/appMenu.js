import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Grad, Sicn } from '../../../assets/images-components/Icons';

export default function appMenu({ navigation }) {
  const buttonList = [
    {
      title: 'Расписание сессии',
      icon: <Grad/>,
      navigation: () => navigation.navigate('Расписание сессии'),
    },
    {
      title: 'Настройки',
      icon: <Sicn/>,
      navigation: () => navigation.navigate('Настройки'),
    },
    {
      title: 'Поиск преподавателя',
      icon: <Sicn/>,
      navigation: () => navigation.navigate('Поиск преподавателя'),
    },

  ];
  return (
    <React.Fragment>
      <Container>
        {buttonList.map(({
          title,
          icon,
          navigation
        }, index) => (
          <Search onPress={navigation} key={index}>
            <ListItem>
              <ListIcon>{icon}</ListIcon>
              <Text style={{ color: 'white', fontSize: 20, paddingLeft: 20 }}>{title}</Text>
            </ListItem>
          </Search>
        ))}
      </Container>
    </React.Fragment>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #000;
`;
const Search = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: 30px;
`;

const ListItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ListIcon = styled.View``;
