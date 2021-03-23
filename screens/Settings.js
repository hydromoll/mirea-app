import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Settings,
  Linking,
} from "react-native";
import styled, { withTheme } from "styled-components";
import Idk from "./Stgs";
import Schedule from "../images/schedule";
import Sicn from "../images/Settingsicn";
import Vkicn from "../images/Vkicn";
import Tgicn from "../images/Tgicn";
import Location from "../images/locationicn";
import Contact from "../images/contacticn";
import Rasp from "../images/raspicn";
import User from "../images/usericn";
import Grad from "../images/graduationicn";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import Dog from "../images/Dog";
export default function App({ navigation }) {
  const sheetRef = React.useRef(1);
  const fall = new Animated.Value(1);
  const renderContent = () => (
    <View
      style={{
        backgroundColor: "#1f2025",
        padding: 16,
        height: 250,
      }}
    >
      <Text style={{ color: "white", fontSize: 20 }}>Обратная связь</Text>
      <Writevk onPress={() => Linking.openURL("http://vk.com/hydromol")}>
        <Text style={{ color: "white", fontSize: 20 }}>
          <Vkicn />
          Написать в ВК
        </Text>
      </Writevk>
      <Writetg>
        <Text style={{ color: "white", fontSize: 20 }}>
          <Tgicn />
          Написать в Telegram
        </Text>
      </Writetg>
      <WriteMail>
        <Text style={{ color: "white", fontSize: 20 }}>
          <Dog />
          Написать на почту
        </Text>
      </WriteMail>
    </View>
  );
  return (
    <Container>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[200, 200, 0]}
        borderRadius={16}
        enabledInnerScrolling={false}
        renderContent={renderContent}
      />
      <TopBar>
        <Menu>Меню</Menu>
      </TopBar>
      <StatusBar style="auto" />
      <Buttons>
        <Search onPress={() => navigation.navigate("Srch")}>
          <Text
            style={{
              color: "white",
              marginTop: 50,
              fontSize: 20,
              marginLeft: 30,
              paddingLeft: 10,
            }}
          >
            <User />
            Найти преподавателя
          </Text>
        </Search>
        <Raspisanie
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <Text
            style={{
              color: "white",
              marginTop: 50,
              fontSize: 20,
              marginLeft: 30,
              paddingLeft: 10,
            }}
          >
            <Grad />
            Расписание сессии
          </Text>
        </Raspisanie>
        <Obratnaya onPress={() => sheetRef.current.snapTo(0)}>
          <Text
            style={{
              color: "white",
              marginTop: 50,
              fontSize: 20,
              marginLeft: 30,
              paddingLeft: 10,
            }}
          >
            <Contact />
            Обратная связь
          </Text>
        </Obratnaya>
        <MySem>
          <Text
            style={{
              color: "white",
              marginTop: 50,
              fontSize: 20,
              marginLeft: 30,
              paddingLeft: 10,
            }}
          >
            <Rasp />
            Мой семестр
          </Text>
        </MySem>
        <Schema>
          <Text
            style={{
              color: "white",
              marginTop: 50,
              fontSize: 20,
              marginLeft: 30,
              paddingLeft: 10,
            }}
          >
            <Location />
            Схема университета
          </Text>
        </Schema>
        <Setting onPress={() => navigation.navigate("Stgs")}>
          <Text
            style={{
              color: "white",
              marginTop: 50,
              fontSize: 20,
              marginLeft: 30,
              paddingLeft: 10,
            }}
          >
            <Sicn />
            Настройки
          </Text>
        </Setting>
      </Buttons>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
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
