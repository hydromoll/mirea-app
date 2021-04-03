import { StatusBar } from "expo-status-bar";
import React from "react";
import { Linking, Text, View } from "react-native";
import styled from "styled-components/native";
import Sicn from "../images/Settingsicn";
import { Contact, Mail, Tg, Vk } from "../images/Icons";

export default function App({ navigation }) {
  const sheetRef = React.useRef(0);
  const buttonList = [
    {
      title: "Обратная связь",
      icon: <Contact />,
      navigation: () => sheetRef.current.snapTo(0),
    },
    {
      title: "Настройки",
      icon: <Sicn />,
      navigation: () => navigation.navigate("Настройки"),
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
      <Writevk
        style={{ marginTop: 20, flexDirection: "row" }}
        onPress={() => Linking.openURL("https://vk.com/hydromol")}
      >
        <Vk />
        <Text
          style={{
            color: "white",
            fontSize: 20,

            paddingLeft: 10,
          }}
        >
          Написать в ВК
        </Text>
      </Writevk>
      <Writetg
        style={{ marginTop: 20, flexDirection: "row" }}
        onPress={() => Linking.openURL("https://t.me/hydromoll")}
      >
        <Tg />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            paddingLeft: 10,
          }}
        >
          Написать в Telegram
        </Text>
      </Writetg>
      <WriteMail
        onPress={() => Linking.openURL("mailto:hydromoll@mail.ru")}
        style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
      >
        <Mail />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            paddingLeft: 10,
          }}
        >
          Написать на почту
        </Text>
      </WriteMail>
    </View>
  );
  return (
    <React.Fragment>
      <Container>
        <StatusBar style="auto" />
        {/*<BottomSheet*/}
        {/*  ref={sheetRef}*/}
        {/*  snapPoints={[250, 100, 0]}*/}
        {/*  borderRadius={16}*/}
        {/*  renderContent={renderContent}*/}
        {/*/>*/}

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
const Writevk = styled.TouchableOpacity``;
const Writetg = styled.TouchableOpacity``;
const WriteMail = styled.TouchableOpacity``;
