import React, { useContext, useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import styled from "styled-components/native";
import { Find } from "../../../assets/images-components/Icons";
export default function searchProf() {
  const [name, setName] = useState();
  const [isLoading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState([]);
  const [semester, setSemester] = useState([]);
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch(`http://api.mirea-assistant.ru/professor?query=Пименов`)
      .then((response) => response.json())
      .then((json) => {
        setSemester(json.semester);
        setSchedule(json.schedule);
        setInfo(json.info);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Container>
      <Search
        prefix={<Find />}
        placeholder="Имя преподавателя"
        placeholderTextColor="gray"
        value={name}
        onChangeText={(text) => setName(text)}
      ></Search>
      <Text>
        {semester.endDate}
        {schedule.day}
      </Text>
      <FlatList
        style={{ color: "white", fontSize: 20 }}
        data={schedule}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text style={{ color: "white", fontSize: 20 }}>
            {item.day}, {item.name} {item.room}
            {/* {info.name} */}
          </Text>
        )}
      />
    </Container>
  );
}
const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: #35353f;
  align-items: center;
`;
const Search = styled.TextInput`
  padding-left: 8px;
  border-radius: 6px;
  background-color: #3f4662;
  color: #fff;
  height: 6%;
  width: 80%;
`;
