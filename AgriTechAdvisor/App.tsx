import React from 'react';
import AppNativeBaseProvider from './src/providers/NativeBaseProvider';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AppNativeBaseProvider>
      <AppNavigator />
    </AppNativeBaseProvider>
  );
}
