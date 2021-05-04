import React, {useEffect, useState} from 'react';
import {FlatList,Text,SafeAreaView} from 'react-native';

import styled from 'styled-components/native';
export default function SessionView(){
    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
    useEffect(() => {
        fetch('http://api.mirea-assistant.ru/exams?group=ivbo-08-19')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
      // function dateConvert(){
      //   Date.UTC(item.date)
      // }
      // let Date = dateConvert();
    return(
      <SafeAreaView style={{backgroundColor:'green'}}>
        <Container>
          <TopBar>
            <BackButton>
            </BackButton>
          </TopBar>
            <FlatList
            data={data}
            keyExtractor={({ type }, index) => type}
            renderItem={({ item }) => (
                <View>
              <Text style={{color:'white', marginTop:20,marginLeft:20}}>{new Date(item.date)  + ', ' + item.type + ' '}</Text>
              <Name>{item.name}</Name>
              <Professor>{item.professor|| '—'}</Professor>
              <Room>{item.room}</Room>
              </View>
            )}
          />
        </Container>
        </SafeAreaView>
    )
}
const Container = styled.View`
height:100%;
width:100%;
background-color:#1f2025;
`;
const Test = styled.Text`
margin-top:200px;
text-align: center;
color: #6180e8;
`;
const View = styled.View`
height:175px;
width:90%;
align-self: center;
border-radius:20px;
background-color: #35353F;
margin-top:20px;
`;
const Name = styled.Text`
color:white;
margin-top:20px;
margin-left: 20px;
width:60%;
`;
const Professor = styled.Text`
color:gray;
margin-top:20px;
margin-left:20px;
`;
const Room = styled.Text`
width:50px;
background-color: gray;
text-align:center;
color:white;
position:absolute;
right:10%;
bottom:48%;
`;
const TopBar = styled.View`
justify-content: center;
align-items: center;
background-color:green;
height:7%;
width:100%;
`;
const BackButton = styled.TouchableOpacity`
height:20px;
width:20px;
background-color:blue;
`;
const Neumorph = styled.View`
width: 30%;
height:55px;
background-color:green;
`;