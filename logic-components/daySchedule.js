import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import styled from "styled-components/native";
import { loadSchedule } from "../utils/dataLoader";
import ScheduleCard from "../view-components/scheduleCard";

export default function daySchedule(props) {
  const [isLoading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    loadSchedule(setSchedule, setLoading, +props.route.name);
  }, []);
  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "stretch"
          }}
          data={schedule}
          renderItem={({ item }) => {
            let renderPairs = [];
            for (let key of Object.keys(item.info)) {
              // TODO calculate weekType and current week
              // TODO need past week from api usage getWeekNamer method calculate odd or even and get week number
              if (key === "8" || key === "even") {
                const { name, professor, type, room } = item.info[key];
                renderPairs.push(
                  <ScheduleCard key={key} item={item} name={name} professor={professor} type={type} room={room} />
                );
                break;
              }
            }
            return renderPairs;
          }}
        />
      )}
      <StatusBar style="auto" />
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
