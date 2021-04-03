import React, { useContext } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import styled from "styled-components/native";
import { getDaySchedule } from "../utils/dataLoader";
import { ScheduleContext } from "../App";
import PairCard from "../view-components/pairCard";

export default function daySchedule(props) {

  const schedule = useContext(ScheduleContext);

  return (
    <Container>
      {schedule.isLoadingSchedule ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "stretch"
          }}
          showsVerticalScrollIndicator ={false}
          showsHorizontalScrollIndicator={false}
          data={getDaySchedule(schedule.schedule, +props.route.name)}
          renderItem={({ item }) => {
            let renderPairs = [];
            for (let key of Object.keys(item.info)) {
              if (key === schedule.weekNumber || key === schedule.weekName) {
                const { name, professor, type, room } = item.info[key];
                renderPairs.push(
                  <PairCard key={key} item={item} name={name} professor={professor} type={type} room={room} />
                );
                break;
              }
            }
            return renderPairs;
          }}
        />
      )}
    </Container>
  );
}


const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: #141519;
  align-items: center;
`;
