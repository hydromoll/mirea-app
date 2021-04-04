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
  currentDate: new Date(),
  initialDay: 0,
  chooseGroupEvent: () => {
  }
});

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLoadingSchedule, setLoadingSchedule] = useState(true);
  const [schedule, setSchedule] = useState([]);
  const [weekNumber, setWeekNumber] = useState("0");
  const [weekName, setWeekName] = useState("odd");

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
      const lowerCaseGroup = group.toString().toLocaleLowerCase();
      let transliteratedGroup;
      if (/[а-яА-ЯЁё]/.test(lowerCaseGroup)) {
        transliteratedGroup = translit.translit(lowerCaseGroup, 1);
      } else {
        transliteratedGroup = lowerCaseGroup;
      }


      await AsyncStorage.setItem("group", transliteratedGroup);
      await AsyncStorage.setItem("showApp", "true");
      loadSchedule(setSchedule, setLoadingSchedule, setStartDate, setWeekNumber, setWeekName, transliteratedGroup);
      setCurrentDate(new Date());
      setShowRealApp(true);
    } catch (e) {
    }
  };


  useEffect(() => {
    getGroupFromStorage();
  }, []);

  return (
    <ScheduleContext.Provider
      value={{
        isLoadingSchedule,
        schedule,
        startDate,
        currentDate,
        weekName,
        weekNumber,
        initialDay: (currentDate.getDay() - 1).toString(),
        chooseGroupEvent: (group) => setGroup(group)
      }}>
      {showRealApp ? <BottomNavigator /> : <Start />}
    </ScheduleContext.Provider>
  );
};

export default App;
