import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AppMenu from '../screens/appMenu';
import ScheduleScreen from '../screens/scheduleScreen';
import {
  MenuIcon,
  ScheduleIcon
} from '../../../assets/images-components/Icons';
import MiddleWareNavigator from './middleware';

const BottomTabNavigator = createBottomTabNavigator();

const homeTabStyles = {
  showLabel: false,
  activeTintColor: '#e91e63',
  style: {
    backgroundColor: '#1f2025',
    borderTopColor: '#1f2025',
  },
};

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
          tabBarIcon: ({ focused }) => <ScheduleIcon focused={focused} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="StackNavigator"
        component={MiddleWareNavigator}
        options={{
          tabBarIcon: ({ focused }) => <MenuIcon focused={focused} />,
        }}
      />
    </BottomTabNavigator.Navigator>
  </NavigationContainer>
);

export default bottomNavigator;
