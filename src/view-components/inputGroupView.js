import { Check } from "../../assets/images-components/Icons";
import styled from "styled-components/native/dist/styled-components.native.esm";
import { css } from "styled-components";
import React, { useContext, useState } from "react";
import AppContext from "../utils/context";
import { Animated, Easing } from "react-native";

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
    Animated.timing(shakeAnimation, {
      duration: 400,
      toValue: 3,
      ease: Easing.bounce
    }).start();
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
      <Animated.View style={{
        transform: [{
          translateX: shakeAnimation.interpolate({
            inputRange: [0, .5, 1, 1.5, 2, 2.5, 3],
            outputRange: [0, -15, 0, 15, 0, -15, 0]
          })
        }]
      }}>
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
