import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {
  CircleButton,
  DetailBid,
  DetailDesc,
  FocusedStatusBar,
  RectButton,
} from '../components';
import { SubInfo } from '../components/SubInfo';
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants';

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
        source={data.image}
      />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight}
      />
      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight}
      />
    </View>
  );
};

export default function Details({ route, navigation }) {
  const { data } = route.params;
  console.log(data);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <FocusedStatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.5)',
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => {
          return (
            <>
              <DetailsHeader data={data} navigation={navigation} />
              <SubInfo />
              <View style={{ padding: SIZES.font }}>
                <DetailDesc data={data} />
                {data.bids.length > 0 && (
                  <Text
                    style={{
                      fontSize: SIZES.font,
                      fontFamily: FONTS.semiBold,
                      color: COLORS.primary,
                    }}
                  >
                    Current Bids
                  </Text>
                )}
              </View>
            </>
          );
        }}
      />
    </SafeAreaView>
  );
}
