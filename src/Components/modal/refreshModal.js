import React from 'react';
import {View, Text} from 'react-native';
import {Button, IconButton, MD3Colors} from 'react-native-paper';

function RefreshModal({refresh}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize:20, fontWeight: 'bold', color: 'black'}}> Feed Completed !!!</Text>
      <Button
        icon="check-circle"
        color="green"
        style={{color: 'red'}}
        labelStyle={{
            fontSize: 70
        }}
        onPress={() => console.log('Pressed')}
      />
      <Text style={{fontSize:14, fontWeight: 'bold', color: 'black'}}> Please Refresh to View More </Text>
      <Button
        style={{width: 150, marginTop: 10}}
        icon="refresh"
        mode="outlined"
        onPress={() => refresh()}>
        Refresh
      </Button>
    </View>
  );
}

export default RefreshModal;
