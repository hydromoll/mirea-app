import React, { useRef, useState } from 'react';
import DaysNavigator from '../navigation-components/daysNavigator';
import ScheduleTopBar from '../shared/schedule-top-bar';
import WeekBottomSheet from '../shared/weekBottomSheet';

const ScheduleScreen = () => {
  const [day, setDay] = useState('Понедельник');
  const reference = useRef();

  return (
    <>
      <ScheduleTopBar day={day} reference={reference} />
      <DaysNavigator setDayCallback={(day) => setDay(day)} />
      <WeekBottomSheet reference={reference} />
    </>
  );
};

export default ScheduleScreen;
