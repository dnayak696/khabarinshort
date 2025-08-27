import React, { use, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewsItem,
  clearNews,
  getLatestNews,
  NewsItem,
} from '../store/slices/newsSlice';
import { RootState, AppDispatch } from '../store';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import FastImage from 'react-native-fast-image';
import { FAB } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SkeletonCard from '../Components/SkeletonCard';

export default function HomeScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const notificationData = route.params?.notification;
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading, error } = useSelector(
    (state: RootState) => state.news,
  );

  const [initiaLoading, setInitialLoading] = useState(true);

  const [pageIndex, setPageIndex] = useState(0);
  // Preload images + pages

  // useEffect(() => {
  //   if (!notificationData) {
  //     dispatch(getLatestNews());
  //   }
  // }, []);

  useEffect(() => {
    if (notificationData) {
      console.log('Notification data received:', notificationData);
      dispatch(clearNews());
      dispatch(addNewsItem(notificationData as NewsItem));
      dispatch(getLatestNews());
    } else {
      dispatch(getLatestNews());
    }
  }, [notificationData]);

  useEffect(() => {
    if (!loading) {
      setInitialLoading(false);
    }
  }, [loading]);

  // useEffect(() => {
  //   const preload = async () => {
  //     const preloadCount = 10;
  //     const startIndex = pageIndex + 1;
  //     const endIndex = Math.min(articles.length, pageIndex + preloadCount + 1);

  //     const nextPages = articles.slice(startIndex, endIndex);

  //     // Cache images
  //     const uris = nextPages
  //       .map(n => n.postImageUrl)
  //       .filter(Boolean)
  //       .map(uri => ({ uri, priority: FastImage.priority.normal }));

  //     if (uris.length) {
  //       FastImage.preload(uris);
  //     }
  //   };

  //   preload();
  // }, [pageIndex, articles]);

  // if (initiaLoading) return <Text>Loading...</Text>;
  // if (error) return <Text>Error: {error}</Text>;

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#000' }}>
      <PagerView
        style={styles.pager}
        initialPage={10}
        orientation="vertical"
        offscreenPageLimit={10}
        onPageScroll={({ nativeEvent }) => {
          // const { position, offset } = nativeEvent;
          //If user is halfway to the next page
          // if (offset > 7) {
          //   setPageIndex(position + 1);
          // }
        }}
      >
        {articles.length > 0 ? (
          articles.map(
            (
              { id, title, description, postImageUrl, postSourceLink },
              index,
            ) => {
              return (
                <View key={id} style={styles.page}>
                  <FastImage
                    style={styles.image}
                    source={{
                      uri: postImageUrl,
                      priority: FastImage.priority.high,
                      cache: FastImage.cacheControl.immutable,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.body} numberOfLines={15}>
                    {description}
                  </Text>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        padding: 5,
                        borderRadius: 20,
                        backgroundColor: '#49cade',
                      }}
                      onPress={() =>
                        navigation.navigate('Browser', { url: postSourceLink })
                      }
                    >
                      {' '}
                      ଅଧିକ ପଢନ୍ତୁ ।
                    </Text>
                  </View>
                </View>
              );
            },
          )
        ) : (
          <View>
            <SkeletonCard />
          </View>
        )}
      </PagerView>

      <FAB
        style={styles.fab}
        size="small"
        icon={'apps'}
        onPress={() => navigation.push('Menu')}
      />

      {/* {loading ? (
              <FAB
                style={styles.fab2}
                size={'small'}
                loading={true}
                onPress={() => console.log('Pressed')}
              />
            ) : null} */}
    </SafeAreaProvider>
  );
}

// function sortDescription(description: string[]) {
//   return (
//     description
//       .join(' ')
//       ?.split(/\s+/) // split by whitespace
//       .slice(0, 100) // take first 100 words
//       .join(' ') + '...'
//   );
// }
const styles = StyleSheet.create({
  pager: { flex: 1, backgroundColor: '#fff' },
  page: { flex: 1, backgroundColor: '#fff' },
  counter: { fontSize: 14, color: '#888', margin: 8, textAlign: 'right' },
  image: { width: '100%', height: 250, backgroundColor: '#eee' },
  title: { fontSize: 20, fontWeight: 'bold', margin: 10 },
  body: { fontSize: 16, marginHorizontal: 10, lineHeight: 22 },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  fab2: {
    position: 'absolute',
    // width: 200,
    // alignSelf: 'center',
    left: 0,
    margin: 16,
    bottom: 0,
  },
});
