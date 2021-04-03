import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import convertScheduleData from "../utils/daysAdapter.js";
import { ActivityIndicator, FlatList, Text } from "react-native";
import styled from "styled-components/native";

export default function Main(props) {
  const [isLoading, setLoading] = useState(true);
  const [data123, setData123] = useState([]);
  useEffect(() => {
    fetch("http://api.mirea-assistant.ru/schedule?group=ivbo-08-19")
      .then((response) => response.json())
      .then((json1) => {
        const json = convertScheduleData(json1);
        const key = props.route.name;
        setData123(
          json
            .slice(key * 6, 6 + 6 * key)
            .sort((pairs, newPairs) => pairs.number - newPairs.number)
            .map((pair, index) => {
              pair.key = index.toString();
              return pair;
            })
        );
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
          renderItem={({ item }) => {
            let renderPairs = [];
            let pairs = [];
            const { day, number, startTime, endTime } = item;

            for (let key of Object.keys(item.info)) {
              // TODO calculate weekType and current week
              // TODO need past week from api usage getWeekNamer method calculate odd or even and get week number
              if (key === "8" || key === "even") {
                const { name, professor, type, room } = item.info[key];
                renderPairs.push(
                  <Card key={item.key}>
                    <Time>
                      <Starttime>{`${startTime}`}</Starttime>
                      <Endtime
                        style={{ marginTop: 10 }}
                      >{`${endTime}`}</Endtime>
                    </Time>
                    <Title>
                      <Name>{`${name + (name && ",") || "—"} ${type}`}</Name>
                      <Text style={{ color: "gray" }}>{`${
                        professor || "—"
                      }`}</Text>
                    </Title>
                    <Rooom
                      style={{
                        color: "white",
                      }}
                    >{`${room || "—"}`}</Rooom>
                  </Card>
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
//141519
const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: #141519;
  align-items: center;
`;

const Card = styled.View`
  display: flex;
  justify-content: space-between;
  padding-left: 22px;
  padding-right: 22px;
  height: 100px;
  align-items: center;

  /* border: 12px black so2222322lid; */
  background-color: #141519;
  flex-direction: row;
`;
const Time = styled.View`
  width: 15%;
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
  font-size: 18px;
  color: white;
`;
const Title = styled.View`
  padding-top: 2%;
  padding-left: 5%;
  width: 65%;
`;
const Rooom = styled.Text`
  width: 20%;
  text-align: center;
  background-color: #4b4f5b;
  border-radius: 5px;
  padding: 5px 10px;
`;
