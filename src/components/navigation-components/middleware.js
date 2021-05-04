import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Sec from '../screens/daySchedule';
import Session from '../screens/sessionView';
import appMenu from '../screens/appMenu';

const Tb = createStackNavigator();
export default function MiddleWareNavigator() {
  return (
    <>
      <NavigationContainer independent>
        <Tb.Navigator
          initialRouteName="Schedule"
          screenOptions={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1f2025',
            },
          }}
        >
          <Tb.Screen name="Schedule" component={Sec} />
          <Tb.Screen name="Настройки" component={appMenu} />
          <Tb.Screen
            name="Session"
            component={Session}
          />
        </Tb.Navigator>
      </NavigationContainer>
    </>
  );
}
