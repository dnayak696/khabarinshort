import React from 'react';
import {View, Text} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function SkeletonCard() {
  return (
    <SkeletonPlaceholder
      backgroundColor="#b5f2f5"
      highlightColor="#b5f2f5">
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: 450, height: 250, borderRadius: 4}} />

        <View style={{marginTop: 20, padding: 20}}>
          <View style={{width: 375, height: 30, borderRadius: 4}} />
          <View
            style={{marginTop: 6, width: 375, height: 30, borderRadius: 4}}
          />
        </View>

        <View style={{marginTop: 10, margin: 10, padding:20}}>
          <View style={{width: 350, height: 20, borderRadius: 4}} />
          <View
            style={{marginTop: 10, width: 350, height: 20, borderRadius: 4}}
          />
          <View
            style={{marginTop: 10, width: 350, height: 20, borderRadius: 4}}
          />
          <View
            style={{marginTop: 10, width: 350, height: 20, borderRadius: 4}}
          />
          <View
            style={{marginTop: 10, width: 350, height: 20, borderRadius: 4}}
          />
          <View
            style={{marginTop: 10, width: 350, height: 20, borderRadius: 4}}
          />
        </View>

        <View style={{margin: 20}}>
          <View
            style={{marginTop: 6, width: 100, height: 30, borderRadius: 20}}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
}
