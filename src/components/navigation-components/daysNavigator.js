import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useContext } from 'react';
import daySchedule from '../screens/daySchedule';
import AppContext from '../../utils/context';

const DaysTopBarNavigator = createMaterialTopTabNavigator();

const dayTabStyles = {
  activeTintColor: '#497dcd',
  inactiveTintColor: 'gray',
  labelStyle: { fontSize: 16 },
  style: {
    backgroundColor: '#1f2025'
  }
};

const DaysNavigator = (props) => {

  const days = [
    {
      dayFullName: 'Понедельник',
      daySortName: 'Пн'
    },
    {
      dayFullName: 'Вторник',
      daySortName: 'Вт'
    },
    {
      dayFullName: 'Среда',
      daySortName: 'Ср'
    },
    {
      dayFullName: 'Четверг',
      daySortName: 'Чт'
    },
    {
      dayFullName: 'Пятница',
      daySortName: 'Пт'
    },
    {
      dayFullName: 'Суббота',
      daySortName: 'Сб'
    }
  ];

  const schedule = useContext(AppContext);

  return (
    <NavigationContainer independent>
      <DaysTopBarNavigator.Navigator
        initialRouteName={schedule.initialDay}
        tabBarOptions={dayTabStyles}
      >
        {days.map(({ daySortName, dayFullName }, index) => (
          <DaysTopBarNavigator.Screen
            key={index}
            name={index.toString()}
            component={daySchedule}
            options={{ tabBarLabel: daySortName }}
            listeners={() => props.setDayCallback(dayFullName)}
          />
        ))}
      </DaysTopBarNavigator.Navigator>
    </NavigationContainer>
  );
};

export default DaysNavigator;
