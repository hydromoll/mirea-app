import React, { useEffect, useState } from "react";
import Start from "./src/view-components/startScreenView";
import BottomNavigator from "./src/navigation-components/bottomNavigator";
import { loadSchedule } from "./src/utils/dataLoader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translit } from "./src/utils/transliter";
import AppContext from "./src/utils/context";

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLoadingSchedule, setLoadingSchedule] = useState(true);
  const [schedule, setSchedule] = useState([]);
  const [weekNumber, setWeekNumber] = useState("0");
  const [weekName, setWeekName] = useState("odd");
  const [isVisibleBottomSheet, setVisibleBottomSheet] = useState(false);
  const [isVisibleModalDialog, setVisibleModalDialog] = useState(false);
  const [currentGroup, setCurrentGroup] = useState("");

  const getGroupFromStorage = async () => {
    try {
      const group = await AsyncStorage.getItem("group");
      if (group !== null) {
        loadSchedule(setSchedule, setLoadingSchedule, setStartDate, setWeekNumber, setWeekName, group);
        setCurrentDate(new Date());
        setCurrentGroup(group);
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
      setCurrentGroup(group);
      setShowRealApp(true);
    } catch (e) {
    }
  };

  useEffect(() => {
    getGroupFromStorage();
  }, []);

  const updatedContextData = {
    isLoadingSchedule,
    schedule,
    startDate,
    currentDate,
    weekName,
    weekNumber,
    initialDay: (currentDate.getDay() - 1).toString(),
    setGroup: (group) => setGroup(group),
    isVisibleBottomSheet,
    isVisibleModalDialog,
    setVisibleModalDialog: (isVisible) => setVisibleModalDialog(isVisible),
    setVisibleBottomSheet: (isVisible) => setVisibleBottomSheet(isVisible),
    currentGroup
  };

  return (
    <>
      <AppContext.Provider
        value={updatedContextData}>
        {showRealApp ? <BottomNavigator /> : <Start />}
      </AppContext.Provider>
    </>
  );
};

export default App;
