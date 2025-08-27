import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Button} from 'react-native-paper';
// import logo from '../../assets/1.png';

//  const imageUri = Image.resolveAssetSource(logo).uri

export default function Haeder({navigation}) {
  return (
    <View style={Styles.header1}>
      {/* <Text style={{fontSize: 20, padding:30, backgroundColor:'red'}}>Kahabar in Short</Text> */}
      <Image
        style={Styles.image2}
        resizeMethod={'resize'}
        source={require('../assets/4.png')}
      />
      <Button
        labelStyle={{fontSize: 30}}
        icon="information-outline"
        onPress={() => {
          // navigate to info page
          navigation.push('Info');
          console.log('hii');
        }}></Button>
    </View>
  );
}

const Styles = StyleSheet.create({
  header1: {
    backgroundColor: '#e6eff0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

    // alignSelf: 'center',
    // paddingTop:20,
    // paddingBottom:10
  },
  image2: {
    alignSelf: 'center',
    height: 60,
    width: 80,
  },
});
