import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

export default function AboutUs() {
  return (
    <View style={{padding:10}} >
       <Text style={{fontSize: 15, fontWeight: 'bold'}}> About us</Text>
      <Text> We are sourcing news from various reputed odia news website like sambad
       Odisha bhashkar, etc.. We are providing better user experience through our app. It is fun to read
        news article in our app.
      </Text>
    </View>
  );
}
