import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SessionView from '../screens/sessionView';

const sessionTopBarNavigator = createMaterialTopTabNavigator();

const dayTabStyles = {
  activeTintColor: '#497dcd',
  inactiveTintColor: 'gray',
  labelStyle: { fontSize: 16 },
  style: {
    backgroundColor: '#1f2025'
  }
};

const sessionNavigator = () => {

  return (
    <NavigationContainer independent>
      <sessionTopBarNavigator.Navigator
        initialRouteName="Зачёты"
        tabBarOptions={dayTabStyles}
      >
        <sessionTopBarNavigator.Screen name="Зачёты" component={SessionView} />
        <sessionTopBarNavigator.Screen name="Экзамены" component={SessionView} />
      </sessionTopBarNavigator.Navigator>
    </NavigationContainer>
  );
};

export default sessionNavigator;
