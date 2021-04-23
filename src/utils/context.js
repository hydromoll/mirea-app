import React from "react";

const AppContext = React.createContext({
  isLoadingSchedule: true,
  schedule: [],
  weekNumber: "0",
  weekName: "odd",
  startDate: new Date(),
  currentDate: new Date(),
  initialDay: 0,
  setGroup: () => {},
  currentGroup: "",
  isVisibleModalDialog: false,
  setVisibleModalDialog: () => {},
  isVisibleBottomSheet: false,
  setVisibleBottomSheet: () => {},
  isError: false,
  errorText: "",
  setShowAd: () => {},
  showAd: true
});

export default AppContext;
