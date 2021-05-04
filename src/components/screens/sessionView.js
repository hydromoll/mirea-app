import React, { useContext } from 'react';
import { FlatList, Text } from 'react-native';

import styled from 'styled-components/native';
import AppContext from '../../utils/context';
import normalize from '../../utils/normalizeFontSize';

export default function SessionView({ route: { name } }) {
  const context = useContext(AppContext);

  return (
    <Container>
      <FlatList
        data={name === 'Зачёты' ? context.nonExamSchedule : context.examsSchedule}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={{
              color: 'white',
              marginTop: 20,
              marginLeft: 20
            }}
            >
              {item.date}
            </Text>
            <Name>{item.name}</Name>
            <Professor>{item.professor || '—'}</Professor>
            <Room>{item.room}</Room>
          </View>
        )}
      />
    </Container>
  );
}
const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: #1f2025;
`;
const Test = styled.Text`
  margin-top: 200px;
  text-align: center;
  color: #6180e8;
`;
const View = styled.View`
  height: 175px;
  width: 90%;
  align-self: center;
  border-radius: 20px;
  background-color: #35353F;
  margin-top: 20px;
`;
const Name = styled.Text`
  color: white;
  margin-top: 20px;
  margin-left: 20px;
  width: 60%;
`;
const Professor = styled.Text`
  color: gray;
  margin-top: 20px;
  margin-left: 20px;
`;
const Room = styled.Text`
  width: 50px;
  font-size: ${normalize(13)};
  background-color: #4b4f5b;
  text-align: center;
  color: white;
  position: absolute;
  right: 10%;
  bottom: 48%;
  border-radius: 6px;
  padding: 5px 5px;
`;
