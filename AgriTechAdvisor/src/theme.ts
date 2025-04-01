import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
    },
    blue: {
      50: '#EFF6FF',
      500: '#3B82F6',
      800: '#1E40AF',
    },
    coolGray: {
      600: '#4A5568',
      800: '#2D3748',
    },
    emerald: {
      600: '#2563EB',
    },
  },
  space: {
    '0': 0,
    '1': 4,
    '2': 8,
    '3': 12,
    '4': 16,
    '5': 20,
    '6': 24,
    '8': 32,
    '10': 40,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
});
