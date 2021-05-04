import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Start from '../screens/startScreenView';
import Stgs from '../screens/settingsView';
import Sec from '../screens/daySchedule';

const Tb = createStackNavigator();
export default function MiddleWareNavigator() {
  return (
    <>
      <NavigationContainer independent>
        <Tb.Navigator
          initialRouteName="Settings"
          screenOptions={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1f2025',
            },
          }}
        >
          <Tb.Screen name="Sec" component={Sec} />
          <Tb.Screen name="Start" component={Start} />
          <Tb.Screen name="Настройки" component={Stgs} />
        </Tb.Navigator>
      </NavigationContainer>
    </>
  );
}
