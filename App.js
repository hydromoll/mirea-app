import React, { useEffect, useState } from "react";
import Start from "./view-components/startScreenView";
import BottomNavigator from "./navigation-components/bottomNavigator";
import { loadSchedule } from "./utils/dataLoader";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ScheduleContext = React.createContext({
  isLoadingSchedule: true,
  schedule: [],
  weekNumber: "0",
  weekName: "odd",
  startDate: new Date(),
  currentDate: new Date()
});

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  // const [groups, setGroups] = useState([]);
  // const [isLoadingGroups, setLoadingGroups] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [isLoadingSchedule, setLoadingSchedule] = useState(true);
  const [schedule, setSchedule] = useState([]);
  const [weekNumber, setWeekNumber] = useState("0");
  const [weekName, setWeekName] = useState("odd");
  const currentDate = new Date();

  const getGroupFromStorage = async () => {
    try {
      const group = await AsyncStorage.getItem("group");
      if (group !== null) {
        loadSchedule(setSchedule, setLoadingSchedule, setStartDate, setWeekNumber, setWeekName, group);
        setShowRealApp(true);
      }
    } catch (e) {
    }
  };

  const setGroup = async (group) => {
    try {
      await AsyncStorage.setItem("group", group.toString());
      await AsyncStorage.setItem("showApp", true);
      loadSchedule(setSchedule, setLoadingSchedule, setStartDate, setWeekNumber, setWeekName, group);
      setShowRealApp(true);
    } catch (e) {
    }
  };


  useEffect(() => {
    getGroupFromStorage();
  }, []);

  return showRealApp ?
    <ScheduleContext.Provider
      value={{
        isLoadingSchedule,
        schedule,
        startDate,
        currentDate,
        weekName,
        weekNumber
      }}><BottomNavigator /></ScheduleContext.Provider> :
    <Start chooseGroupEvent={(group) => setGroup(group)} />;
};

export default App;
