import { StatusBar } from "expo-status-bar";
// import AppLoading from "expo-app-loading";
import Settings from "./screens/Settings";
import Menu from "./images/menuicon";
import Searchprof from "./screens/Searchprof";
import Schedule from "./images/Scheduleicon";
import Sec from "./screens/Sec";
import Toptabb from "./screens/Vt";
import Sreda from "./screens/Sreda";
import Cht from "./screens/Cht";
import Pt from "./screens/Pt";
import Sb from "./screens/Sb";
import { createStackNavigator } from "@react-navigation/stack";
import Stgs from "./screens/Stgs";
import Main from "./screens/Main.js";
// import AppNavigator from './navigator/AppNavigator';
import { enableScreens } from "react-native-screens";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import styled, { withTheme } from "styled-components";
import MiddleWareNavigator from "./middleware.js";

const Tb = createBottomTabNavigator();
const Inp = createStackNavigator();
const Taab = createMaterialTopTabNavigator();
//const state = State();
const Main1 = () => {
  const [day, setDay] = useState("Понедельник");
  return (
    <React.Fragment>
      <Toppolosa></Toppolosa>
      <SafeAreaView>
        <Container>
          <TopBar>
            <Day>{day}</Day>
            <Button>
              {/* <Bg><22/Bg> */}
              <Text style={{ color: "#B8C3DE" }}>{"Неделя 2"}</Text>
            </Button>
          </TopBar>
        </Container>
      </SafeAreaView>
      <NavigationContainer independent={true}>
        <Taab.Navigator
          initialRouteName="Понедельник"
          tabBarOptions={{
            activeTintColor: "#497dcd",
            inactiveTintColor: "gray",
            labelStyle: { fontSize: 23 },
            style: {
              backgroundColor: "#1f2025",
            },
          }}
        >
          <Taab.Screen
            name="0"
            component={Sec}
            options={{ tabBarLabel: "Пн" }}
            listeners={(e) => setDay("Понедельник")}
          />
          <Taab.Screen
            name="1"
            component={Sec}
            options={{ tabBarLabel: "Вт" }}
            listeners={(e) => setDay("Вторник")}
          />
          <Taab.Screen
            name="2"
            component={Sec}
            options={{ tabBarLabel: "Ср" }}
            listeners={(e) => setDay("Среда")}
          />
          <Taab.Screen
            name="3"
            component={Sec}
            options={{ tabBarLabel: "Чт" }}
            listeners={(e) => setDay("Четверг")}
          />
          <Taab.Screen
            name="4"
            component={Sec}
            options={{ tabBarLabel: "Пт" }}
            listeners={(e) => setDay("Пятница")}
          />
          <Taab.Screen
            name="5"
            component={Sec}
            options={{ tabBarLabel: "Сб" }}
            listeners={(e) => setDay("Суббота")}
          />
        </Taab.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};
const Toppolosa = styled.View`
  position: absolute;
  height: 300px;
  width: 100%;
  background-color: #1f2025;
  top: 0;
`;
const Container = styled.View`
  height: 100px;
  width: 100%;
  margin-top: 16px;
  background-color: #949494;
  align-items: center;
`;

const TopBar = styled.View`
  height: 110px;
  width: 100%;
  background-color: #1f2025;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Day = styled.Text`
  font-size: 25px;
  color: #fff;
  margin: 20px 0 0 20px;
`;
const Button = styled.TouchableOpacity`
  width: 80px;
  height: 40px;
  margin: 20px 20px 0 0;
  border-radius: 8px;
  background-color: #3f4662;
  display: flex;
  align-items: center;
  justify-content: center;
`;
/*const Bg = styled.View`
  width: 80px;
  height: 40px;
  background-color: white;
`;*/

const App = () => (
  <React.Fragment>
    <NavigationContainer>
      <Tb.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: "#e91e63",
          style: {
            backgroundColor: "#000",
          },
        }}
      >
        <Tb.Screen
          name="Home"
          component={Main1}
          options={{ tabBarIcon: ({ color }) => <Schedule /> }}
        />
        <Tb.Screen
          name="Settings"
          component={MiddleWareNavigator}
          options={{ tabBarIcon: ({ color }) => <Menu /> }}
        />
        {/* <Inp.Screen
        name="Sec"
        component={Sec}
        options={{ tabBarVisible: true }}
      />
      <Inp.Screen
        name="Stgs"
        component={Stgs}
        options={{ tabBarVisible: false }}
      />
      <Inp.Screen
        name="Srch"
        component={Searchprof}
        options={{ tabBarVisible: false }}
      /> */}
        {/* <Inp.Screen name="Login" component={Login} /> */}
      </Tb.Navigator>
    </NavigationContainer>
  </React.Fragment>
);

// const Hid = () => (
//   <NavigationContainer independent>
//     <Inp.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Inp.Screen name="Sec" component={Sec} />
//       <Inp.Screen name="Stgs" component={Stgs} />
//       <Inp.Screen name="Srch" component={Searchprof} />
//     </Inp.Navigator>
//   </NavigationContainer>
// );
export default App;
