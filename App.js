import { StatusBar } from "expo-status-bar";
// import AppLoading from "expo-app-loading";
import Settings from "./screens/Settings";
import Menu from "./images/menuicon";
import Searchprof from "./screens/Searchprof";
import Schedule from "./images/Scheduleicon";
import Sec from "./screens/Sec";
import { createStackNavigator } from "@react-navigation/stack";
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
function getWeekNumber(startYear, d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  const yearStart = new Date(startYear);
  // Calculate full weeks to nearest Thursday
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  // Return array of year and week number
  return weekNo;
}
Date.prototype.getWeek = function () {
  var onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
};

// function getWeek() {
//   const now = new Date();
//   const september = new Date(now.getFullYear() + "-09-01");
//   return getWeekNumber(september)[1];
// }
// if (getWeekNumber(september)[1] % 2 == 0) {
//   if ((getWeekNumber(now)[1] + 1) % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// } else {
//   if (getWeekNumber(now)[1] % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
//const state = State();
const Main1 = () => {
  const [day, setDay] = useState("Понедельник");
  const startDate = new Date("2021-02-08T00:00:00.000Z");
  const date = new Date();
  return (
    <React.Fragment>
      <Toppolosa></Toppolosa>
      <SafeAreaView>
        <Container>
          <TopBar>
            <Day>{day}</Day>
            <Button>
              {/* <Bg><22/Bg> */}
              <Text style={{ color: "#B8C3DE" }}>{`Неделя ${getWeekNumber(
                startDate,
                date
              )}`}</Text>
            </Button>
          </TopBar>
        </Container>
      </SafeAreaView>
      <NavigationContainer independent={true}>
        <Taab.Navigator
          initialRouteName={(date.getDay() - 1).toString()}
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
          showLabel: false,
          activeTintColor: "#e91e63",
          style: {
            backgroundColor: "#000",
          },
        }}
      >
        <Tb.Screen
          name="Home"
          component={Main1}
          options={{
            tabBarIcon: ({ focused }) => <Schedule focused={focused} />,
          }}
        />
        <Tb.Screen
          name="Settings"
          component={MiddleWareNavigator}
          options={{ tabBarIcon: ({ focused }) => <Menu focused={focused} /> }}
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
