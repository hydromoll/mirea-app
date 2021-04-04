import React from "react";
import styled from "styled-components/native";
import Schedule from "../images/schedule";
import Start from "../src/view-components/startScreenView";
import Stgs from "../src/view-components/settingsView";
import Sec from "../src/logic-components/daySchedule";
import Srch from "./Searchprof";
import Settings from "./Settings";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Tb = createStackNavigator();
const Sb = styled.TouchableOpacity`
  background-color: black;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  justify-content: center;
`;

export default function MiddleWareNavigator() {
  return (
    <React.Fragment>
      <NavigationContainer independent>
        <Tb.Navigator
          initialRouteName="Settings"
          screenOptions={{
            headerShown: true,
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#1f2025",
            },
          }}
        >
          <Tb.Screen
            name="Settings"
            component={Settings}
            options={{ tabBarIcon: ({ color }) => <Schedule /> }}
          />
          <Tb.Screen name="Sec" component={Sec} />
          <Tb.Screen name="Start" component={Start} />
          <Tb.Screen name="Настройки" component={Stgs} />
          <Tb.Screen name="Srch" component={Srch} />
        </Tb.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
