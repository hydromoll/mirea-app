import React, { useState } from "react";
import DaysNavigator from "../navigation-components/daysNavigator";
import ScheduleTopBar from "../view-components/schedule-top-bar";
import WeekBottomSheet from"../view-components/WeekBottomSheet";
const ScheduleScreen = () => {
  const [day, setDay] = useState("Понедельник");

  return (
    <React.Fragment>
      <ScheduleTopBar day={day}/>
      <DaysNavigator setDayCallback={(day) => setDay(day)}/>
      <WeekBottomSheet/>
    </React.Fragment>
  );
};

export default ScheduleScreen;
