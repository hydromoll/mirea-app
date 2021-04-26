import React, { useContext } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { AdMobBanner } from 'expo-ads-admob';
import AppContext from '../utils/context';
import { getDaySchedule } from '../utils/dataLoader';
import PairCard from '../view-components/pairCard';

export default function daySchedule(props) {

  const context = useContext(AppContext);

  return (
    <Container>
      {context.isLoadingSchedule ? (
        <ActivityIndicator />
      ) : (
        <>
          {context.showAd && (
            <AdMobBanner
              bannerSize="banner"
              adUnitID={__DEV__ ? 'ca-app-pub-3940256099942544/2934735716' : 'ca-app-pub-1986591976683938/4671126532'}
              servePersonalizedAds // true or false
              onDidFailToReceiveAdWithError={() => setTimeout(() => context.setShowAd(false), 0)}
            />
          )}
          <FlatList
            style={{
              width: '100%',
              height: '100%',
              alignSelf: 'stretch'
            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={getDaySchedule(context.schedule, +props.route.name)}
            renderItem={({ item }) => {
              const renderPairs = [];
              for (const key of Object.keys(item.info)) {
                if (key === context.weekNumber.toString() || key === context.weekName.toString()) {
                  const {
                    name,
                    professor,
                    type,
                    room
                  } = item.info[key];
                  renderPairs.push(
                    <PairCard
                      key={key}
                      item={item}
                      name={name}
                      professor={professor}
                      type={type}
                      room={room}
                    />
                  );
                  break;
                }
              }
              return renderPairs;
            }}
          />
        </>
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: #141519;
  align-items: center;
`;
