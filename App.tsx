/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import {
  Platform,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import messaging from '@react-native-firebase/messaging';

import { AppDispatch, store } from './src/store';
import HomeScreen from './src/Screens/HomeScreeen';
import { useEffect } from 'react';
import {
  requestNotificationPermissionAndroid,
  subscribeToAllDevices,
} from './src/services/notification/firebaseNotification';
import { navigationRef } from './src/services/NavigationService';
import {
  NotificationHandler,
  handleBackgroundMessage,
} from './src/services/notification/notificationHandler';
import BrowserScreen from './src/Screens/BrowserScreen';
import Info from './src/Components/Info';
import MenuScreen from './src/Screens/MenuScreen';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // Request notification permissions on app star
    async function initializeNotifications() {
      await BootSplash.hide({ fade: true });
      await requestNotificationPermissionAndroid();
      await subscribeToAllDevices();
    }
    initializeNotifications();
    NotificationHandler();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar animated={true} backgroundColor="#c5f4efff" />
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            handleBackgroundMessage();
          }}
        >
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Browser"
              options={{
                headerShown: true,
                headerLargeTitleShadowVisible: true,
                headerStyle: {
                  backgroundColor: '#49cade',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
              component={BrowserScreen}
            />
            <Stack.Screen
              name="Info"
              component={Info}
              options={{
                headerShown: true,
                headerLargeTitleShadowVisible: true,
                headerStyle: {
                  backgroundColor: '#49cade',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen name="Menu" component={MenuScreen} />
            {/* Add more screens here */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
