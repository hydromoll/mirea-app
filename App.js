import React, { useEffect, useState } from "react";
import Start from "./src/view-components/startScreenView";
import BottomNavigator from "./src/navigation-components/bottomNavigator";
import { loadSchedule } from "./src/utils/dataLoader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translit } from "./src/utils/transliter";
import AppContext from "./src/utils/context";
import convertScheduleData from "./src/utils/daysAdapter";
import getWeekNumber from "./src/utils/calculateWeek";
import { StatusBar } from "react-native";
const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLoadingSchedule, setLoadingSchedule] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [weekNumber, setWeekNumber] = useState("0");
  const [weekName, setWeekName] = useState("odd");
  const [isVisibleBottomSheet, setVisibleBottomSheet] = useState(false);
  const [isVisibleModalDialog, setVisibleModalDialog] = useState(false);
  const [currentGroup, setCurrentGroup] = useState("");
  const [isError, setErrorState] = useState(false);
  const [errorText, setErrorTextState] = useState("");
  const [isAppLoading, setAppLoading] = useState(true);
  const [showAd, setShowAd] = useState(true);

  const getGroupFromStorage = async () => {
    try {
      const group = await AsyncStorage.getItem("group");
      if (group !== null) {
        await setGroup(group);
      } else {
        setAppLoading(false);
      }
    } catch (e) {
    }
  };

  const setGroup = async (group) => {
    try {
      setLoadingSchedule(true);
      const lowerCaseGroup = group.toString().toLocaleLowerCase();
      let transliteratedGroup;
      if (/[а-яА-ЯЁё]/.test(lowerCaseGroup)) {
        transliteratedGroup = translit.translit(lowerCaseGroup, 1);
      } else {
        transliteratedGroup = lowerCaseGroup;
      }

      loadSchedule(transliteratedGroup).then((schedule) => {
        if (schedule.error) {
          setLoadingSchedule(false);
          setErrorState(true);
          setErrorTextState("Такой группы не найдено");
          // console.error("Такой группы не найдено");
          setAppLoading(false);
          setTimeout(() => setErrorState(false), 1500);
          return;
        }
        setSchedule(convertScheduleData(schedule));
        const semesterStartDate = schedule.semester.startDate;
        const currentWeekNumber = getWeekNumber(semesterStartDate, new Date());
        setWeekNumber(currentWeekNumber);
        setWeekName(currentWeekNumber % 2 ? "odd" : "even");
        setStartDate(semesterStartDate);
        AsyncStorage.setItem("group", group);
        AsyncStorage.setItem("showApp", "true");
        setCurrentDate(new Date());
        setCurrentGroup(group);
        setVisibleModalDialog(false);
        setShowRealApp(true);
        setErrorState(false);
        setLoadingSchedule(false);
        setAppLoading(false);
      }).catch(() => {
        setLoadingSchedule(false);
        setErrorState(true);
        setErrorTextState("Ошибка подключения к интернету");
        setAppLoading(false);
        setTimeout(() => setErrorState(false), 1500);
        //console.warn("Ошибка подключения к интернету");
      })
        .finally(() => setLoadingSchedule(false));
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
    setShowAd: (showApp) => setShowAd(showApp),
    currentGroup,
    isError,
    errorText,
    showAd
  };

  if (isAppLoading) {
    return <AppContext.Provider
      value={updatedContextData}>
      <BottomNavigator />
    </AppContext.Provider>;
  }

  return (
    <>
      <StatusBar
        animated={true}
        barStyle='light-content'/>
      <AppContext.Provider
        value={updatedContextData}>
        {showRealApp ? <BottomNavigator /> : <Start />}
      </AppContext.Provider>
    </>
  );
};

export default App;
