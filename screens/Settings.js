import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Linking } from "react-native";
import styled from "styled-components";
import Sicn from "../images/Settingsicn";
import BottomSheet from "reanimated-bottom-sheet";
import Dog from "../images/Dog";
import {
  User,
  Vk,
  Tg,
  Contact,
  Location,
  Rasp,
  Grad,
  Mail,
} from "../images/Icons";
export default function App({ navigation }) {
  const sheetRef = React.useRef(110);
  const buttonList = [
    {
      title: "Обратная связь",
      icon: <Contact />,
      navigation: () => sheetRef.current.snapTo(0),
    },
    {
      title: "Настройки",
      icon: <Sicn />,
      navigation: () => navigation.navigate("Stgs"),
    },
  ];
  const renderContent = () => (
    <View
      style={{
        height: 250,
        backgroundColor: "#1f2025",
        padding: 16,
      }}
    >
      <ContactUs>Обратная связь</ContactUs>
      <Writevk onPress={() => Linking.openURL("http://vk.com/hydromol")}>
        <Text style={{ color: "white", fontSize: 20, marginTop: 20 }}>
          <Vk />
          Написать в ВК
        </Text>
      </Writevk>
      <Writetg>
        <Text style={{ color: "white", fontSize: 20, marginTop: 20 }}>
          <Tg />
          Написать в Telegram
        </Text>
      </Writetg>
      <WriteMail>
        <Text style={{ color: "white", fontSize: 20 }}>
          <Mail />
          Написать на почту
        </Text>
      </WriteMail>
    </View>
  );
  return (
    <React.Fragment>
      <Container>
        <TopBar>
          <Menu>Меню</Menu>
        </TopBar>
        <StatusBar style="auto" />
        <BottomSheet
          ref={sheetRef}
          snapPoints={[250, 100, 0]}
          borderRadius={16}
          renderContent={renderContent}
        />

        {buttonList.map(({ title, icon, navigation }, index) => (
          <Search onPress={navigation} key={index}>
            <Text
              style={{
                color: "white",
                marginTop: 50,
                fontSize: 20,
                marginLeft: 30,
                paddingLeft: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              {icon}
              <Text style={{ marginLeft: 10 }}>{title}</Text>
            </Text>
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
const TopBar = styled.View`
  height: 100px;
  width: 100%;
  background-color: #1f2025;
`;
const Menu = styled.Text`
  color: #fff;
  margin-left: 22px;
  margin-top: 50px;
  font-size: 22px;
`;
const Buttons = styled.View`
  flex-direction: column;
  justify-content: center;
`;
const ContactUs = styled.Text`
  color: white;
  font-size: 20px;
`;
const Sb = styled.TouchableOpacity`
  background-color: black;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  justify-content: center;
`;
const Search = styled.TouchableOpacity``;
const Raspisanie = styled.TouchableOpacity``;
const Obratnaya = styled.TouchableOpacity``;
const MySem = styled.TouchableOpacity``;
const Schema = styled.TouchableOpacity``;
const Setting = styled.TouchableOpacity``;
const Writevk = styled.TouchableOpacity``;
const Writetg = styled.TouchableOpacity``;
const WriteMail = styled.TouchableOpacity``;
const But = styled.TouchableOpacity`
  color: blue;
  height: 20px;
  width: 20px;
  background-color: coral;
`;
