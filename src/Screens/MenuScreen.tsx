import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import Header from '../Components/Header';
import Category from '../Components/Category';
import Sources from '../Components/Sources';
import { FAB } from 'react-native-paper';

function MenuScreen({ navigation, route }: { navigation: any; route: any }) {
  return (
    <>
      <Header navigation={navigation} />
      <View style={{ padding: 10 }}>
        <Category navigation={navigation} />
        <View style={{ height: 50 }}>
          {/* <BannerAd size="400x50" unitId={TestIds.BANNER} /> */}
        </View>

        <Sources navigation={navigation} />
      </View>
      {/* <FAB
        style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
        small
        icon="home"
        onPress={() => navigation.navigate({ name: 'Home' })}
      /> */}
    </>
  );
}

export default MenuScreen;
