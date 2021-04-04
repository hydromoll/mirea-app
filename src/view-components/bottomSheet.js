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
        height={400}
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
            <ContactUs>Обратная связь</ContactUs>
            <Cancel>
              <Close onPress={() => refRBSheet.current.close()}>Закрыть</Close>
            </Cancel>
          </Header>
          {buttonList.map(({ title, icon, link }, index) => (
            <Search key={index} onPress={() => Linking.openURL(link)}>
              <Name>{icon}{title}</Name>
            </Search>))}


          {/*<Writevk*/}
          {/*  style={{ marginTop: 20, flexDirection: "row" }}*/}
          {/*  onPress={() => Linking.openURL("https://vk.com/hydromol")}*/}
          {/*>*/}
          {/*  <Vkontakte*/}
          {/*    style={{*/}
          {/*      color: "white",*/}
          {/*      fontSize: 20,*/}

          {/*      paddingLeft: 10,*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Написать в ВК*/}
          {/*  </Vkontakte>*/}
          {/*</Writevk>*/}
          {/*<Writetg*/}
          {/*  style={{ marginTop: 20, flexDirection: "row" }}*/}
          {/*  onPress={() => Linking.openURL("https://t.me/hydromoll")}*/}
          {/*>*/}
          {/*  <Tg />*/}
          {/*  <Telegram*/}
          {/*    style={{*/}
          {/*      color: "white",*/}
          {/*      fontSize: 20,*/}
          {/*      paddingLeft: 10,*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Написать в Telegram*/}
          {/*  </Telegram>*/}
          {/*</Writetg>*/}
          {/*<WriteMail*/}
          {/*  onPress={() => Linking.openURL("mailto:hydromoll@mail.ru")}*/}
          {/*  style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}*/}
          {/*>*/}
          {/*  <Mail />*/}
          {/*  <MailT*/}
          {/*    style={{*/}
          {/*      color: "white",*/}
          {/*      fontSize: 20,*/}
          {/*      paddingLeft: 10,*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Написать на почту*/}
          {/*  </MailT>*/}
          {/*</WriteMail>*/}
        </Buttons>
      </RBSheet>
    </>
  );
}

const Problem = styled.Text`
  align-self: center;
  position: absolute;
  font-size: ${normalize(16)};
  bottom: 80px;
  color: #6180e8;
`;
const Search = styled.TouchableOpacity`
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
const Name = styled.Text`
  font-size: 20px;
  color: white;
  margin-top: 40px;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Cancel = styled.TouchableOpacity``;
const Close = styled.Text`
  color: white;`;
const Writevk = styled.TouchableOpacity``;
const Writetg = styled.TouchableOpacity``;
const WriteMail = styled.TouchableOpacity``;
const MailT = styled.Text``;
const Telegram = styled.Text``;
const Vkontakte = styled.Text``;
