import { NavigationContainer, NavigationContainerRef, createNavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export type NavigationParams = {
  Home: { notification?: any };
  Browser: { url: string; title: string };
  Menu: undefined;  
}
export const navigationRef = createNavigationContainerRef<NavigationContainerRef<NavigationParams>>();

export function navigate(name: string, params?: any) {
  navigationRef.navigate(name as any, params as any);
}
