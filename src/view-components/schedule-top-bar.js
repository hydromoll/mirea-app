import styled from "styled-components/native/dist/styled-components.native.esm";
import React, { useContext } from "react";
import AppContext from "../utils/context";

const ScheduleTopBar = (props) => {
  const context = useContext(AppContext);

  return (
    <TopBar>
        <DayName>{props.day}</DayName>
        <WeekNumberView>
          <WeekNumber>{`Неделя ${context.weekNumber}`}</WeekNumber>
        </WeekNumberView>
    </TopBar>
  );
};

export default ScheduleTopBar;

const TopBar = styled.View`
  height: 120px;
  width: 100%;
  background-color: #1f2025;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DayName = styled.Text`
  font-size: 25px;
  color: #fff;
  margin: 35px 0 0 20px;
`;
const WeekNumberView = styled.View`
  width: 80px;
  height: 40px;
  margin: 35px 20px 0 0;
  border-radius: 8px;
  background-color: #3f4662;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeekNumber = styled.Text`
  color: #b8c3de;
`;
