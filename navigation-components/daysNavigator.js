import { NavigationContainer } from "@react-navigation/native";
import daySchedule from "../logic-components/daySchedule";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";

const DaysTopBarNavigator = createMaterialTopTabNavigator();

const dayTabStyles = {
  activeTintColor: "#497dcd",
  inactiveTintColor: "gray",
  labelStyle: { fontSize: 23 },
  style: {
    backgroundColor: "#1f2025"
  }
}

const DaysNavigator = (props) => {

  const days = [
    {
      dayFullName: "Понедельник",
      daySortName: "Пн"
    },
    {
      dayFullName: "Вторник",
      daySortName: "Вт"
    },
    {
      dayFullName: "Среда",
      daySortName: "Ср"
    },
    {
      dayFullName: "Четверг",
      daySortName: "Чт"
    },
    {
      dayFullName: "Пятница",
      daySortName: "Пт"
    },
    {
      dayFullName: "Суббота",
      daySortName: "Сб"
    }
  ];
  const initialDay = (props.currentDate.getDay() - 1).toString();

  return (
    <NavigationContainer independent={true}>
      <DaysTopBarNavigator.Navigator
        initialRouteName={initialDay}
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
