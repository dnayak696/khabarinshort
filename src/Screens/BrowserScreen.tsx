import React from 'react';

import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function BrowserScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { url } = route.params;

  const loadingIndicatorView = () => {
    return <ActivityIndicator size="large" color="#000" />;
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      <WebView
        source={{ uri: url }}
        renderLoading={loadingIndicatorView}
        startInLoadingState={true}
      />
      {/* <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
