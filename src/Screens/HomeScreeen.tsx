import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLatestNews } from '../store/slices/newsSlice';
import { RootState, AppDispatch } from '../store';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import FastImage from 'react-native-fast-image';

export default function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading, error } = useSelector(
    (state: RootState) => state.news,
  );
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    dispatch(getLatestNews());
  }, [dispatch]);

  // Preload images + pages
  useEffect(() => {
    const preload = async () => {
      const preloadCount = 10;
      const startIndex = pageIndex + 1;
      const endIndex = Math.min(articles.length, pageIndex + preloadCount + 1);

      const nextPages = articles.slice(startIndex, endIndex);

      // Cache images
      const uris = nextPages
        .map(n => n.postImageUrl)
        .filter(Boolean)
        .map(uri => ({ uri, priority: FastImage.priority.normal }));

      if (uris.length) {
        FastImage.preload(uris);
      }
    };

    preload();
  }, [pageIndex, articles]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <PagerView
      style={styles.pager}
      initialPage={10}
      orientation="vertical"
      offscreenPageLimit={10}
      onPageScroll={({ nativeEvent }) => {
        const { position, offset } = nativeEvent;
        // If user is halfway to the next page
        if (offset > 7) {
          setPageIndex(position + 1);
        }
      }}
    >
      {articles.map(({ id, title, description, postImageUrl }, index) => (
        <ScrollView key={id || index} style={styles.page}>
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
        </ScrollView>
      ))}
    </PagerView>
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
  pager: { flex: 1, backgroundColor: '#000' },
  page: { flex: 1, backgroundColor: '#fff' },
  counter: { fontSize: 14, color: '#888', margin: 8, textAlign: 'right' },
  image: { width: '100%', height: 250, backgroundColor: '#eee' },
  title: { fontSize: 20, fontWeight: 'bold', margin: 10 },
  body: { fontSize: 16, marginHorizontal: 10, lineHeight: 22 },
});
