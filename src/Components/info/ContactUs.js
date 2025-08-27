import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

export default function ContactUs() {
  return (
    <View style={{padding:10}}>
       <Text style={{fontSize: 15, fontWeight:'bold'}}> Contact Us</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Email</Text>
      <Text>  khabarinshort@gmail.com</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>Phone No</Text>
      <Text>  +91 8249428963</Text>
    </View>
  );
}
