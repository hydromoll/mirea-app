import { Check } from "../../assets/images-components/Icons";
import styled from "styled-components/native/dist/styled-components.native.esm";
import { css } from "styled-components";
import React, { useContext, useState } from "react";
import AppContext from "../utils/context";
import { Animated } from "react-native";

const InputGroupView = () => {
  const [text, setText] = useState("");
  const [isCorrectGroupName, setIsCorrectGroupName] = useState(false);
  const context = useContext(AppContext);
  const defaultValue = context.currentGroup;
  const shakeAnimation = new Animated.Value(0);

  const setGroupName = (groupName) => {
    const re = /^([а-яА-Я\w]{4}-\d{2}-\d{2})$/g;
    const isGroupCorrect = re.test(groupName);
    setText(groupName);
    setIsCorrectGroupName(isGroupCorrect);
  };

  const startShake = () => {
    Animated.loop(Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 5, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -5, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 5, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
    ])).start();
  };

  if (context.isError) {
    startShake();
  }


  return (
    <>
      <GroupField
        placeholder="XXXX-00-00"
        placeholderTextColor="#6A6A74"
        onChangeText={(text) => setGroupName(text)}
        defaultValue={defaultValue}
        autoFocus
      />
      <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
        <Forward
          disabled={!isCorrectGroupName}
          errorState={context.isError}
          isLoading={context.isLoadingSchedule}
          onPress={() => {
            context.setGroup(text);
          }}
        >
          <Check disabled={!isCorrectGroupName} />
        </Forward>
      </Animated.View>
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
          props.isLoading
                  ? css`
                    background: coral;
                  ` :
                  props.errorState
                          ? css`
                            background: #35353f;
                          `
                          :
                          props.disabled
                                  ? css`
                                    background: #35353f;
                                  `
                                  : css`
                                    background: #6180e8;
                                  `}
`;

export default InputGroupView;
