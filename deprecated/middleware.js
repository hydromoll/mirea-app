import React from "react";
import Start from "../src/view-components/startScreenView";
import Stgs from "../src/view-components/settingsView";
import Sec from "../src/logic-components/daySchedule";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Tb = createStackNavigator();
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
          <Tb.Screen name="Sec" component={Sec} />
          <Tb.Screen name="Start" component={Start} />
          <Tb.Screen name="Настройки" component={Stgs} />
        </Tb.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
