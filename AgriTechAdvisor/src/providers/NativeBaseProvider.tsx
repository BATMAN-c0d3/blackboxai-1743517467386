import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { theme } from '../theme';

interface Props {
  children: React.ReactNode;
}

export default function AppNativeBaseProvider({ children }: Props) {
  return (
    <NativeBaseProvider theme={theme}>
      {children}
    </NativeBaseProvider>
  );
}