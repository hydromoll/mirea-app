import React, { useEffect, useState } from "react";
import Start from "./view-components/startScreenView";
import BottomNavigator from "./navigation-components/bottomNavigator";
import { loadSchedule } from "./utils/dataLoader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translit } from "./utils/transliter";

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
  const [startDate, setStartDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLoadingSchedule, setLoadingSchedule] = useState(true);
  const [schedule, setSchedule] = useState([]);
  const [weekNumber, setWeekNumber] = useState("0");
  const [weekName, setWeekName] = useState("odd");
  const [isCorrectGroup, setCorrectGroup] = useState(false);

  const getGroupFromStorage = async () => {
    try {
      const group = await AsyncStorage.getItem("group");
      if (group !== null) {
        loadSchedule(setSchedule, setLoadingSchedule, setStartDate, setWeekNumber, setWeekName, group);
        setCurrentDate(new Date());
        setShowRealApp(true);
      }
    } catch (e) {
    }
  };

  const setGroup = async (group) => {
    try {
      const transliteratedGroup = translit.translit(group.toString().toLocaleLowerCase(), 1);
      await AsyncStorage.setItem("group", transliteratedGroup);
      await AsyncStorage.setItem("showApp", true);
      loadSchedule(setSchedule, setLoadingSchedule, setStartDate, setWeekNumber, setWeekName, transliteratedGroup);
      setCurrentDate(new Date());
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
    <Start chooseGroupEvent={(group) => setGroup(group)} isCorrectGroup={isCorrectGroup} />;
};

export default App;
