import React from "react";
import styled from "styled-components/native";
import normalize from "../utils/normalizeFontSize";
import InputGroupView from "./inputGroupView";

export default function startScreenView() {
  return (
    <Container>
      <Hi>Привет!</Hi>
      <Choose>Укажи свою группу</Choose>
      <InputGroupView/>
      <Problembutton>
        <Problem>
          Возникла проблема?
        </Problem>
      </Problembutton>
      {/*<ActionSheet actionItems={actionItems} actionTextColor={"#333"} />*/}
    </Container>
  );
}

const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  background-color: #141519;
  align-items: center;
`;
const Hi = styled.Text`
  color: white;
  font-size: ${normalize(42)};
`;
const Choose = styled.Text`
  margin-top: 15px;
  font-size: ${normalize(15)};
  color: white;
`;
const Problembutton = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
`;
const Problem = styled.Text`
  font-size: 18px;
  color: #6180e8;
`;
