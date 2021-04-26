import styled from 'styled-components/native/dist/styled-components.native.esm';
import { css } from 'styled-components';
import React, { useContext, useRef, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import SnackBar from 'react-native-snackbar-component';
import AppContext from '../utils/context';
import { Check } from '../../assets/images-components/Icons';

const InputGroupView = () => {
  const [text, setText] = useState('');
  const [isCorrectGroupName, setIsCorrectGroupName] = useState(false);
  const context = useContext(AppContext);
  const defaultValue = context.currentGroup;
  const shakeAnimation = useRef();

  const setGroupName = (groupName) => {
    const re = /^([а-яА-Я\w]{4}-\d{2}-\d{2})$/g;
    const isGroupCorrect = re.test(groupName);
    setText(groupName);
    setIsCorrectGroupName(isGroupCorrect);
  };

  if (context.isError) {
    shakeAnimation.current.shake(800);
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
      <Animatable.View ref={shakeAnimation} useNativeDriver>
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
      </Animatable.View>
      <SnackBar visible={context.isError} textMessage={context.errorText} />
    </>
  );
};

const GroupField = styled.TextInput`
  background-color: #1f2025;
  border-radius: 7px;
  color: white;
  height: 52px;
  margin-top: 30px;
  padding: 12px;
  text-align: center;
  width: 250px;
`;
const Forward = styled.TouchableOpacity`
  align-items: center;
  border-radius: 7px;
  height: 52px;
  justify-content: center;
  margin-top: 30px;
  width: 124px;
  ${(props) => (props.errorState ? css`background: #35353f;` : props.disabled ? css`background: #35353f;` : css`background: #6180e8;`)}
`;

export default InputGroupView;
