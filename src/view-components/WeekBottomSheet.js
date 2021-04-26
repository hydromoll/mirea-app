import React, { useContext } from 'react';
import styled, { css } from 'styled-components/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { FlatList } from 'react-native';
import normalize from '../utils/normalizeFontSize';
import AppContext from '../utils/context';

export default function BottomSheetView(props) {
  // const refRBSheet = useRef();
  const context = useContext(AppContext);

  const changeWeek = (weekNumber) => {
    context.setWeekNumber(weekNumber);
  };

  return (
    <>
      <RBSheet
        ref={props.reference}
        height={400}
        closeOnDragDown
        closeOnPressMask
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,128,0.10)'
          },
          draggableIcon: {
            backgroundColor: '#959688'
          },
          container: {
            backgroundColor: '#1f2025',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30
          }

        }}
      >
        <Buttons>
          <Header>
            <HeaderContainer>
              <ContactUs>Выбрать неделю</ContactUs>
              <Line />
            </HeaderContainer>
            <Cancel>
              <Close onPress={() => props.reference.current.close()}>Закрыть</Close>
            </Cancel>
          </Header>
          <FlatList
            style={{ marginTop: 40 }}
            numColumns={4}
            keyExtractor={(item, index) => index.toString()}
            data={[...Array(16)
              .keys()]}
            renderItem={({ item }) => (
              <WeekItem
                onPress={() => changeWeek(item + 1)}
                active={context.weekNumber === item + 1}
              >
                <WeekText>{item + 1}</WeekText>
              </WeekItem>
            )}
          />
        </Buttons>
      </RBSheet>
    </>
  );
}

const Buttons = styled.View`
  padding: 16px;
  width: 100%;
  justify-content: center;
`;

const HeaderContainer = styled.View`
  flex-direction: column;
  width: 100%;
  position: absolute;
`;
const Line = styled.View`
  top: 40px;
  position: absolute;
  border: 0.5px #9B9B9B solid;
  width: 100%;
`;
const ContactUs = styled.Text`
  color: white;
  font-size: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Cancel = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;
const Close = styled.Text`
  align-items: center;
  justify-content: center;
  color: #6180e8;
`;

const WeekItem = styled.TouchableOpacity`
  width: 50px;
  height: 40px;
  flex: 0.25;

  ${(props) => (props.active ? css`background-color: #6180e8;` : css`background-color: #35353f;`)}
  border-radius: 6px;
  margin: 10px;
  align-content: center;
  justify-content: center;
`;

const WeekText = styled.Text`
  font-size: 20px;
  color: white;
  text-align: center;
`;
