 import { Platform, PermissionsAndroid } from 'react-native';
 import messaging from '@react-native-firebase/messaging';
 
 
 export const requestNotificationPermissionAndroid = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('✅ Notification permission granted on Android 13+');
        } else {
          console.log('❌ Notification permission denied');
        }
      } catch (err) {
        console.warn('Permission request error:', err);
      }
    }
  };



export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}


export const subscribeToAllDevices = async () => {
  try {
    await messaging().subscribeToTopic('all');
    console.log('✅ Subscribed to topic: allDevice');
  } catch (error) {
    console.error('❌ Failed to subscribe to topic allDevice:', error);
  }
};