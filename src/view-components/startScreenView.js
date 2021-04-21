import React from "react";
import styled from "styled-components/native";
import normalize from "../utils/normalizeFontSize";
import InputGroupView from "./inputGroupView";
import BottomSheetView from "./bottomSheet";

export default function startScreenView() {
  return (
    <Container>
      <Hi>Привет!</Hi>
      <Choose>Укажи свою группу</Choose>
      <InputGroupView/>
      <BottomSheetView/>
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
