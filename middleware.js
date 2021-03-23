import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Linking } from "react-native";
import styled, { withTheme } from "styled-components";
import Schedule from "./images/schedule";

import Stgs from "./screens/Stgs";
import Sec from "./screens/Sec";
import Srch from "./screens/Searchprof";
import Settings from "./screens/Settings";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Tb = createStackNavigator();

export default function MiddleWareNavigator() {
  return (
    <React.Fragment>
      <NavigationContainer independent>
        <Tb.Navigator initialRouteName="Settings">
          <Tb.Screen
            name="Settings"
            component={Settings}
            options={{ tabBarIcon: ({ color }) => <Schedule /> }}
          />
          <Tb.Screen name="Sec" component={Sec} />
          <Tb.Screen name="Stgs" component={Stgs} />
          <Tb.Screen name="Srch" component={Srch} />
        </Tb.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
