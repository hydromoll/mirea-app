import React, { useRef } from "react";
import { Linking } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import styled from "styled-components/native";
import normalize from "../utils/normalizeFontSize";
import { Mail, Tg, Vk } from "../../assets/images-components/Icons";

export default function BottomSheetView() {
  const refRBSheet = useRef();

  const buttonList = [
    {
      title: "ВКонтакте",
      icon: <Vk />,
      link: "https://vk.com/hydromol"
    },
    {
      title: "Telegram",
      icon: <Tg />,
      link: "https://t.me/hydromoll"
    },
    {
      title: "Электронная почта",
      icon: <Mail />,
      link: "mailto:hydromoll@mail.ru"
    }
  ];

  return (
    <>
      <Problem onPress={() => refRBSheet.current.open()}>Возникла проблема?</Problem>
      <RBSheet
        ref={refRBSheet}
        height={380}
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
              <ContactUs>Обратная связь</ContactUs>
              <Line />
            </HeaderContainer>
            <Cancel>
              <Close onPress={() => refRBSheet.current.close()}>Закрыть</Close>
            </Cancel>
          </Header>
          <ListContainer>
            {buttonList.map(({ title, icon, link }, index) => (
              <Search key={index} onPress={() => Linking.openURL(link)}>
                <Name>
                  <Icon>{icon}</Icon>
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
const Buttons = styled.View`
  padding: 16px;
  width: 100%;
  justify-content: center;`;
const ContactUs = styled.Text`
  color: white;
  font-size: 20px;
`;
const Name = styled.View`
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
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
  color: #6180e8;
`;

const ListContainer = styled.View`
  width: 100%;
  margin-top: 25px;
`

const Icon = styled.View`
`;
const ItemText = styled.Text`
  font-size: 20px;
  color: white;
`;
const ItemTextWrapper = styled.Text`
  margin-left: 20px;
`;
