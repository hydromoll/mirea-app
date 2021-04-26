import React, { useState } from 'react';
import DaysNavigator from '../navigation-components/daysNavigator';
import ScheduleTopBar from '../view-components/schedule-top-bar';
import WeekBottomSheet from '../view-components/WeekBottomSheet';

const ScheduleScreen = () => {
  const [day, setDay] = useState('Понедельник');

  return (
    <>
      <ScheduleTopBar day={day} />
      <DaysNavigator setDayCallback={(day) => setDay(day)} />
      <WeekBottomSheet />
    </>
  );
};

export default ScheduleScreen;
