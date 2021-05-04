import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Schedule from '../../assets/images-components/Scheduleicon';
import SettingsView from '../view-components/settingsView';
import Menu from '../../assets/images-components/menuicon';
import Settings from "../../deprecated/Settings";
import ScheduleScreen from '../logic-components/scheduleScreen';
import Session from '../view-components/SessionView';

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
          tabBarIcon: ({ focused }) => <Schedule focused={focused} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => <Menu focused={focused} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="Session"
        component={Session}
        options={{
          tabBarIcon: ({ focused }) => <Menu focused={focused} />,
        }}
      />
    </BottomTabNavigator.Navigator>
  </NavigationContainer>
);

export default bottomNavigator;
