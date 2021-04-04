import { Check } from "../../images/Icons";
import styled from "styled-components/native/dist/styled-components.native.esm";
import { css } from "styled-components";
import React, { useContext, useState } from "react";
import { ScheduleContext } from "../../App";

const InputGroupView = (props) => {
  const [text, setText] = useState("");
  const [isCorrectGroupName, setIsCorrectGroupName] = useState(false);
  const context = useContext(ScheduleContext);

  const setGroupName = (groupName) => {
    const re = /^([а-яА-Я\w]{4}-\d{2}-\d{2})$/g;
    const isGroupCorrect = re.test(groupName);
    setText(groupName);
    setIsCorrectGroupName(isGroupCorrect);
  };

  return (
    <>
      <GroupField
        placeholder="XXXX-00-00"
        placeholderTextColor="white"
        onChangeText={(text) => setGroupName(text)}
        autoFocus
      />
      <Forward
        disabled={!isCorrectGroupName}
        onPress={() => {
          context.chooseGroupEvent(text);
          if (props.callback) {
            props.callback();
          }
        }}
      >
        <Check disabled={!isCorrectGroupName} />
      </Forward>
    </>
  );
};

const GroupField = styled.TextInput`
  margin-top: 30px;
  color: white;
  background-color: #1f2025;
  padding: 12px;
  width: 250px;
  height: 52px;
  border-radius: 7px;
  text-align: center;
`;
const Forward = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin-top: 30px;
  height: 52px;
  width: 124px;
  ${(props) =>
          props.disabled
                  ? css`
                    background: #35353f;
                  `
                  : css`
                    background: #6180e8;
                  `}
`;

export default InputGroupView;
