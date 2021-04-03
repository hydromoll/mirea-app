import Schedule from "../images/Scheduleicon";
import Stgs from "../view-components/settingsView";
import Menu from "../images/menuicon";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ScheduleScreen from "../logic-components/scheduleScreen";

const BottomTabNavigator = createBottomTabNavigator();

const homeTabStyles = {
  showLabel: false,
  activeTintColor: "#e91e63",
  style: {
    backgroundColor: "#1f2025",
    borderTopColor: "#1f2025",
  },
}

const bottomNavigator = () => (
  <NavigationContainer>
    <BottomTabNavigator.Navigator
      initialRouteName="Home"
      tabBarOptions={homeTabStyles}
    >
      <BottomTabNavigator.Screen
        name="Home"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({ focused }) => <Schedule focused={focused} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="Settings"
        component={Stgs}
        options={{
          tabBarIcon: ({ focused }) => <Menu focused={focused} />,
        }}
      />
    </BottomTabNavigator.Navigator>
  </NavigationContainer>
)

export default bottomNavigator;
