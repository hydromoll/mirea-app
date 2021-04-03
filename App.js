import React, { useEffect, useState } from "react";
import Start from "./view-components/startScreenView";
import BottomNavigator from "./navigation-components/bottomNavigator";
import { loadGroups, loadSchedule } from "./utils/dataLoader";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ScheduleContext = React.createContext({ isLoadingSchedule: true, schedule: [] });

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  // const [groups, setGroups] = useState([]);
  // const [isLoadingGroups, setLoadingGroups] = useState([]);
  const [isLoadingSchedule, setLoadingSchedule] = useState(true);
  const [schedule, setSchedule] = useState([]);

  const getGroupFromStorage = async () => {
    try {
      const group = await AsyncStorage.getItem("group");
      if (group !== null) {
        loadSchedule(setSchedule, setLoadingSchedule, group);
        setShowRealApp(true);
      }
    } catch (e) {
    }
  };

  const setGroup = async (group) => {
    try {
      await AsyncStorage.setItem("group", group);
      await AsyncStorage.setItem("showApp", true);
      loadSchedule(setSchedule, setLoadingSchedule, group);
      setShowRealApp(true);
    } catch (e) {
    }
  };


  useEffect(() => {
    getGroupFromStorage();
  }, []);

  return showRealApp ?
    <ScheduleContext.Provider value={{ isLoadingSchedule, schedule }}><BottomNavigator /></ScheduleContext.Provider> :
    <Start chooseGroupEvent={(group) => setGroup(group)} />;
};

export default App;
