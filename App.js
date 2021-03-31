import Menu from "./images/menuicon";
import Schedule from "./images/Scheduleicon";
import daySchedule from "./screens/daySchedule";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState } from "react";
import { Text, SafeAreaView } from "react-native";
import styled from "styled-components";
import MiddleWareNavigator from "./middleware.js";
import getWeekNumber from "./utils/calculateWeek";
import Start from "./screens/Start";

const bottomTabNavigator = createBottomTabNavigator();
const weekDaysNavigator = createMaterialTopTabNavigator();

const ScheduleScreen = () => {
  const [day, setDay] = useState("Понедельник");
  const startDate = new Date("2021-02-08T00:00:00.000Z");
  const date = new Date();
  const initialDay = (date.getDay() - 1).toString();

  const days = [
    {
      dayFullName: "Понедельник",
      daySortName: "Пн",
    },
    {
      dayFullName: "Вторник",
      daySortName: "Вт",
    },
    {
      dayFullName: "Среда",
      daySortName: "Ср",
    },
    {
      dayFullName: "Четверг",
      daySortName: "Чт",
    },
    {
      dayFullName: "Пятница",
      daySortName: "Пт",
    },
    {
      dayFullName: "Суббота",
      daySortName: "Сб",
    },
  ];

  return (
    <React.Fragment>
      <SafeAreaView>
        <Container>
          <TopBar>
            <Day>{day}</Day>
            <WeekNumberView>
              <WeekNum>{`Неделя ${getWeekNumber(startDate, date)}`}</WeekNum>
            </WeekNumberView>
          </TopBar>
        </Container>
      </SafeAreaView>
      <NavigationContainer independent={true}>
        <weekDaysNavigator.Navigator
          initialRouteName={initialDay}
          tabBarOptions={{
            activeTintColor: "#497dcd",
            inactiveTintColor: "gray",
            labelStyle: { fontSize: 23 },
            style: {
              backgroundColor: "#1f2025",
            },
          }}
        >
          {days.map(({ daySortName, dayFullName }, index) => (
            <weekDaysNavigator.Screen
              key={index}
              name={index.toString()}
              component={daySchedule}
              options={{ tabBarLabel: daySortName }}
              listeners={(e) => setDay(dayFullName)}
            />
          ))}
        </weekDaysNavigator.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

const Container = styled.View`
  height: 100px;
  width: 100%;
  background-color: #949494;
  align-items: center;
`;

const TopBar = styled.View`
  height: 110px;
  width: 100%;
  background-color: #1f2025;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Day = styled.Text`
  font-size: 25px;
  color: #fff;
  margin: 20px 0 0 20px;
`;
const WeekNumberView = styled.View`
  width: 80px;
  height: 40px;
  margin: 20px 20px 0 0;
  border-radius: 8px;
  background-color: #3f4662;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeekNum = styled.Text`
  color: #b8c3de;
`;

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  if (showRealApp) {
    return (
      <NavigationContainer>
        <bottomTabNavigator.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            showLabel: false,
            activeTintColor: "#e91e63",
            style: {
              backgroundColor: "#1f2025",
              borderTopColor: "#1f2025",
            },
          }}
        >
          <bottomTabNavigator.Screen
            name="Home"
            component={ScheduleScreen}
            options={{
              tabBarIcon: ({ focused }) => <Schedule focused={focused} />,
            }}
          />
          <bottomTabNavigator.Screen
            name="Settings"
            component={MiddleWareNavigator}
            options={{
              tabBarIcon: ({ focused }) => <Menu focused={focused} />,
            }}
          />
        </bottomTabNavigator.Navigator>
      </NavigationContainer>
    );
  } else {
    return <Start chooseGroupEvent={() => setShowRealApp(true)} />;
  }
};

export default App;
