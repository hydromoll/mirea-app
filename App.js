import { StatusBar } from "expo-status-bar";
// import AppLoading from "expo-app-loading";
import React from "react";
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
// import AppNavigator from './navigator/AppNavigator';
import { enableScreens } from "react-native-screens";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tb = createBottomTabNavigator();
const Inp = createStackNavigator();
const Taab = createMaterialTopTabNavigator();
const Hid = () => (
  <NavigationContainer>
    <Taab.Navigator
      initialRouteName="Понедельник"
      tabBarOptions={{
        marginTop: 30,
        activeTintColor: "#497dcd",
        inactiveTintColor: "gray",
        labelStyle: { fontSize: 23, marginTop: 50 },
        style: {
          backgroundColor: "#1f2025",
        },
      }}
    >
      <Taab.Screen name="Пн" component={Sec} options={{ tabBarLabel: "Пн" }} />
      <Taab.Screen
        name="Вт"
        component={Toptabb}
        options={{ tabBarLabel: "Вт" }}
      />
      <Taab.Screen
        name="Ср"
        component={Sreda}
        options={{ tabBarLabel: "Ср" }}
      />
      <Taab.Screen name="Чт" component={Cht} options={{ tabBarLabel: "Чт" }} />
      <Taab.Screen name="Пт" component={Pt} options={{ tabBarLabel: "Пт" }} />
      <Taab.Screen name="Сб" component={Sb} options={{ tabBarLabel: "Сб" }} />
    </Taab.Navigator>
  </NavigationContainer>
);
const App = () => (
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
        component={Main}
        options={{ tabBarIcon: ({ color }) => <Schedule /> }}
      />

      <Tb.Screen
        name="Settings"
        component={Settings}
        options={{ tabBarIcon: ({ color }) => <Menu /> }}
      />
      {/* <Inp.Screen name ="Login" component={Login}/> */}
    </Tb.Navigator>
  </NavigationContainer>
);
const Main = () => (
  <Inp.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Inp.Screen name="Sec" component={Sec} />
    <Inp.Screen name="Stgs" component={Stgs} />
    <Inp.Screen name="Srch" component={Searchprof} />
  </Inp.Navigator>
);
export default App;
