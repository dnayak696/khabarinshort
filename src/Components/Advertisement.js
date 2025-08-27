import React from 'react';
import {View, Text, Image} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-admob/admob';

const adIds = {
  banner1: 'ca-app-pub-8667862065974396/8813763516',
  banner2: 'ca-app-pub-8667862065974396/9240288869',
};

export default function Advertisement() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color:"black"}}> AD </Text>
      {/* <View style={{margin: 5}}>
        <BannerAd size="300x250" unitId={adIds.banner1} />
      </View>
      <View style={{margin: 5}}>
        <BannerAd size="300x250" unitId={adIds.banner2} />
      </View> */}

      <View
        style={{
          margin: 5,
          backgroundColor: 'yellow',
          width: 300,
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 100, width: 100}}
          resizeMethod={'resize'}
          source={require('../assets/4.png')}
        />
        <Text style={{fontSize: 15, color: 'black'}}> Khabar in short</Text>
        <Text style={{fontSize: 20, color: 'black'}}> "Swipe up to view more" </Text>
      </View>

     
    </View>
  );
}
