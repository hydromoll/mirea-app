import React, { useRef } from "react";
import styled from "styled-components/native";
import RBSheet from "react-native-raw-bottom-sheet";
import normalize from "../utils/normalizeFontSize";
export default function BottomSheetView() {
    const refRBSheet = useRef();
  
    const buttonList = [
      {
        title: "1",
      },
      {
        title: "2",
      },
      {
        title: "3",
      },
      {
        title: "4",
      },
      {
        title: "5",
      },
      {
        title: "6",
      },
      {
        title: "7",
      },
      {
        title: "8",
      },
      {
        title: "9",
      },
      {
        title: "10",
      },
      {
        title: "11",
      },
      {
        title: "12",
      },
      {
        title: "13",
      },
      {
        title: "14",
      },
      {
        title: "15",
      },
      {
        title: "16",
      }

    ];
  
    return (
      <>
        <Problem onPress={() => refRBSheet.current.open()}>Возникла проблема?</Problem>
        <RBSheet
          ref={refRBSheet}
          height={700}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,128,0.10)"
            },
            draggableIcon: {
              backgroundColor: "#959688"
            },
            container: {
              backgroundColor: "#1f2025",
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
                <Close onPress={() => refRBSheet.current.close()}>Закрыть</Close>
              </Cancel>
            </Header>
            <ListContainer numColumns={3}>
              {buttonList.map(({ title,}, index) => (
                <Search key={index} onPress={() => Linking.openURL(link)}>
                  <Name>
                    <ItemTextWrapper>
                      <ItemText>{title}</ItemText>
                    </ItemTextWrapper>
                  </Name>
                </Search>))}
            </ListContainer>
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

  const Problem = styled.Text`
  align-self: center;
  position: absolute;
  bottom: 15%;
  font-size: ${normalize(16)};
  color: #6180e8;
`;
const Search = styled.TouchableOpacity`
  width: 100%;
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
const Name = styled.View`
  margin-top: 10px;
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

const ListContainer = styled.View`
  width: 15%;
  flex-direction: column;
  height:100%;
  margin-top: 25px;

`;
const ItemText = styled.Text`
  background-color:#6180e8;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
`;
const ItemTextWrapper = styled.View`
  margin-left: 20px;
`;
