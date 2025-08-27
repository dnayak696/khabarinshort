import messaging from '@react-native-firebase/messaging';
// import { store } from '../../store';
import {
  addNewsItem,
  clearNews,
  getLatestNews,
  NewsItem,
} from '../../store/slices/newsSlice';
import { navigate, navigationRef } from '../NavigationService';
// import { useDispatch } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
// import { useEffect } from 'react';

export default async function NotificationHandler() {
  messaging().onNotificationOpenedApp(async remoteMessage => {
    console.log('📩 Notification received in foreground:', remoteMessage);
    navigateToNews(remoteMessage.data);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage?.data?.id) {
        console.log(
          '📩 Notification caused app to open from background:',
          remoteMessage,
        );

        navigateToNews(remoteMessage.data);
      }
    });
  // store.dispatch(getLatestNews());
}

function navigateToNews(data: any) {
  // store.dispatch(clearNews());
  // store.dispatch(addNewsItem(data as NewsItem));
  navigate('Home', { notification: data });
}
