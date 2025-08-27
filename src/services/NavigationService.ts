import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export type NavigationParams = {
  Home: { notification?: any };
  Browser: { url: string; title: string };
  Menu: undefined;  
}
export const navigationRef = React.createRef<NavigationContainerRef<NavigationParams>>();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name as any, params as any);
}
