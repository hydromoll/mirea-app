import React, { useState } from "react";
import DaysNavigator from "../navigation-components/daysNavigator";
import ScheduleTopBar from "../view-components/schedule-top-bar";

const ScheduleScreen = () => {
  const [day, setDay] = useState("Понедельник");
  const startDate = new Date("2021-02-08T00:00:00.000Z");
  const date = new Date();

  return (
    <React.Fragment>
      <ScheduleTopBar day={day} currentDate={date} startDate={startDate}/>
      <DaysNavigator setDayCallback={(day) => setDay(day)} currentDate={date}/>
    </React.Fragment>
  );
};

export default ScheduleScreen;
