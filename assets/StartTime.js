import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
export default class StartTime extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.book_title}</Text>
      </View>
    );
  };
  componentDidMount() {
    const url =
      "http://www.//json-generator.com/api/json/get/ccLAsEcOSq?indent=1";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.book_array,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
const Text = styled.Text`
  color: #fff;
  font-size: 100px;
`;
