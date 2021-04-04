import React from "react";

const AppContext = React.createContext({
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

export default AppContext;
