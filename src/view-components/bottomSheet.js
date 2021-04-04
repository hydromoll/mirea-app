import React, { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import styled from "styled-components/native";
import normalize from "../utils/normalizeFontSize";

export default function BottomSheetView() {
  const refRBSheet = useRef();
  return (
    <>
      <Problem onPress={() => refRBSheet.current.open()}>Возникла проблема?</Problem>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,128,0.10)"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
      </RBSheet>
    </>
  );
}

const Problem = styled.Text`
  align-self: center;
  position: absolute;
  font-size: ${normalize(16)};
  bottom: 80px;
  color: #6180e8;
`;
