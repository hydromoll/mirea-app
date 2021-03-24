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
    });
    convertedData.push(updatePair);
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

export default function Main(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [semester, setSemester] = useState([]);
  const [data123, setData123] = useState([]);
  const [info, setInfo] = useState([]);
  const odd = "odd";
  useEffect(() => {
    fetch("http://api.mirea-assistant.ru/schedule?group=ivbo-08-19")
      .then((response) => response.json())
      .then((json1) => {
        const json = updateData(json1);
        const key = props.route.name;
        setData123(json.slice(key * 6, 6 + 6 * key));
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
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
            alignSelf: "stretch",
          }}
          data={data123}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => {
            let pairs = [];
            const weekTypes = Object.keys(item.info);
            weekTypes.forEach((week) => {
              if (week === "odd") {
                const { day, number, startTime, endTime } = item;
                const { name, professor, type, room } = item.info[week];
                pairs.push(
                  <Card>
                    <Time>
                      <Starttime>{`${startTime}`}</Starttime>
                      <Endtime
                        style={{ marginTop: 10 }}
                      >{`${endTime}`}</Endtime>
                    </Time>
                    <Title>
                      <Name>{`${name || "—"} ${type}`}</Name>
                      <Text style={{ color: "gray" }}>{`${
                        professor || "—"
                      }`}</Text>
                    </Title>
                    <Rooom style={{ color: "white" }}>{`${room || "—"}`}</Rooom>
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
  background-color: #141519;
  align-items: center;
`;

const Card = styled.View`
  padding-left: 22px;
  padding-right: 22px;
  height: 100px;
  align-items: center;

  /* border: 12px black so222232lid; */
  background-color: #141519;
  flex-direction: row;
`;
const Time = styled.View`
  margin-top: 15px;
`;

const Starttime = styled.Text`
  color: #929395;
  font-size: 16px;
`;
const Endtime = styled.Text`
  color: #929395;
  font-size: 16px;
`;

const Name = styled.Text`
  color: white;
`;
const Title = styled.View`
  padding-top: 2%;
  padding-left: 5%;
  width: 65%;
`;
const Room = styled.View`
  align-self: center;
  background-color: #4b4f5b;
  border-radius: 5px;
  padding: 2%;
  padding-left: 15px;
  padding-right: 15px;
`;
const Rooom = styled.Text`
  background-color: #4b4f5b;
  border-radius: 5px;
  padding: 2%;
  padding-left: 15px;
  padding-right: 15px;
`;
