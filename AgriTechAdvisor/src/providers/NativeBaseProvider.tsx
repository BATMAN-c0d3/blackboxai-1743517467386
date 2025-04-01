import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { theme } from '../theme';

interface Props {
  children: React.ReactNode;
}

export default function NativeBaseProviderWrapper({ children }: Props) {
  return (
    <NativeBaseProvider
      theme={theme}
      config={{
        dependencies: {
          'linear-gradient': require('expo-linear-gradient').LinearGradient,
        },
      }}
    >
      {children}
    </NativeBaseProvider>
  );
}
