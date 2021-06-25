import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import settingsView from '../screens/settingsView';
import appMenu from '../screens/appMenu';
import sessionNavigator from './sessionNavigator';
import searchProf from '../screens/searchProf';

const Tb = createStackNavigator();
export default function MiddleWareNavigator() {
  return (
    <>
      <NavigationContainer independent>
        <Tb.Navigator
          initialRouteName="Меню"
          screenOptions={{
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1f2025',
            },
          }}
        >
          <Tb.Screen name="Меню" component={appMenu} />
          <Tb.Screen name="Настройки" component={settingsView} />
          <Tb.Screen
            name="Расписание сессии"
            component={sessionNavigator}
          />
          <Tb.Screen
            name="Поиск преподавателя"
            component={searchProf}
          />
        </Tb.Navigator>
      </NavigationContainer>
    </>
  );
}
