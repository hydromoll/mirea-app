import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import styled, { withTheme } from "styled-components";

const formatePairData = (pair, type) => {
  return {
    name: pair.name,
    room: pair.room,
    professor: pair.professor,
    type: pair.type,
  };
};

const updateData = (data) => {
  const { schedule } = data;
  const convertedData = [];

  schedule.forEach((globalPair) => {
    const { day, number, info: pairs, interval, type } = globalPair;

    const updatePair = {
      info: {},
      startTime: interval.startTime,
      endTime: interval.endTime,
      number: number,
      day: day,
    };
    pairs.forEach((pair) => {
      const weekType = pair.weeks;
      if (weekType === "odd") {
        updatePair.info[weekType] = formatePairData(pair, type);
      } else if (weekType === "even") {
        updatePair.info[weekType] = formatePairData(pair, type);
      } else if (weekType.includes(",")) {
        const parsedWeeks = weekType.split(",");
        parsedWeeks.forEach((weekNumber) => {
          updatePair.info[weekNumber] = formatePairData(pair, type);
        });
      } else if (weekType.length === 1) {
        updatePair.info[weekType] = formatePairData(pair, type);
      }
      convertedData.push(updatePair);
    });
  });
  return convertedData;
};

//const { day, number, info: pairs, interval } = data;
// week is odd, even, number "3,7" and "3"

/*
      [ 
        {
          startTime: "",
          endTime: "",
          day: "",
          number: "",
          info: {
          "even": {
            name: "",
            room: "",
            professor: "",
            type: ""
          },
          "odd": {} ,
          "3": {},
          "7": {}
          }
        }
      ]
    */

export default function Main() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [semester, setSemester] = useState([]);
  const [data123, setData123] = useState([]);
  const [info, setInfo] = useState([]);
  const odd = "odd";
  useEffect(() => {
    fetch("http://api.mirea-assistant.ru/schedule?group=ivbo-08-19")
      .then((response) => response.json())
      .then((json) => {
        setData123(updateData(json));
        setData(json.schedule);
        setSemester(json.semester);
        setInfo(json.info);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Container>
      <TopBar>
        <Day>123</Day>
        {data123.map((pair, key) => {
          let pairs = [];
          const weekTypes = Object.keys(pair.info);
          weekTypes.forEach((week) => {
            pairs.push(<Bred style={{ color: "white" }}>{week.name}</Bred>);
          });
          return pairs;
        })}
      </TopBar>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        // <FlatList
        //   data={data}
        //   keyExtractor={({ id }, index) => id}
        //   renderItem={({ item }) => (
        //     <Text style={{ color: "black" }}>
        //       {item.number + "  "}
        //       {item.day + "  "}
        //       {(item.info.weeks = +"  ")}
        //       {item.interval.startTime}
        //       {item.interval.endTime + " "}
        //       {item.info.name}
        //     </Text>
        //   )}
        // />
        <FlatList
          data={data123.slice(1, 6)}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => {
            //console.warn(item);
            let pairs = [];
            const weekTypes = Object.keys(item.info);
            weekTypes.forEach((week) => {
              // console.warn(week);

              // if (stateDay === lesson[day] && stateWeek === lesson[week]) {
              // }

              if (week === "even") {
                const { day, number, startTime, endTime } = item;
                const { name, professor, type, room } = item.info[week];
                pairs.push(
                  <Card>
                    <Text
                      style={{ color: "black" }}
                    >{` ${professor} ${type} ${room}`}</Text>

                    <Starttime>{`${startTime}`}</Starttime>
                    <Name>{`${name}`}</Name>
                    <Endtime>{`${endTime}`}</Endtime>
                    <Text></Text>
                  </Card>
                );
              }
            });
            return pairs;
          }}
        />
      )}

      <StatusBar style="auto" />
    </Container>
  );
}
//141519
const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: #949494;
  align-items: center;
`;
const TopBar = styled.View`
  height: 161px;
  margin-top: 0px;
  width: 100%;
  background-color: #1f2025;
`;
const Day = styled.Text`
  margin-top: 50px;
  margin-left: 16px;
  font-size: 25px;
  color: #fff;
`;
const Bred = styled.Text`
  align-items: center;
  justify-content: center;
`;
const Time = styled.Text``;
const Card = styled.View`
  background-color: #585858;
`;
const Starttime = styled.Text`
  color: purple;
  font-size: 16px;
`;
const Endtime = styled.Text`
  font-size: 16px;
`;
const Name = styled.Text``;
