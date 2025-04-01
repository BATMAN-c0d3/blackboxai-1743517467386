import React from 'react';
import { Box, Text, VStack, Switch, HStack, Divider } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export default function SettingsScreen({ navigation }: Props) {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [locationAccess, setLocationAccess] = React.useState(true);

  return (
    <Box flex={1} p={4} bg="gray.50">
      <VStack space={4}>
        <Text fontSize="2xl" fontWeight="bold" color="gray.800">
          App Settings
        </Text>

        <Box bg="white" borderRadius="md" p={4} shadow={1}>
          <VStack space={4}>
            <HStack justifyContent="space-between" alignItems="center">
              <Text fontSize="md">Notifications</Text>
              <Switch
                isChecked={notifications}
                onToggle={() => setNotifications(!notifications)}
                colorScheme="primary"
              />
            </HStack>
            <Divider />
            <HStack justifyContent="space-between" alignItems="center">
              <Text fontSize="md">Dark Mode</Text>
              <Switch
                isChecked={darkMode}
                onToggle={() => setDarkMode(!darkMode)}
                colorScheme="primary"
              />
            </HStack>
            <Divider />
            <HStack justifyContent="space-between" alignItems="center">
              <Text fontSize="md">Location Access</Text>
              <Switch
                isChecked={locationAccess}
                onToggle={() => setLocationAccess(!locationAccess)}
                colorScheme="primary"
              />
            </HStack>
          </VStack>
        </Box>

        <Box bg="white" borderRadius="md" p={4} shadow={1}>
          <VStack space={4}>
            <HStack alignItems="center" space={2}>
              <MaterialIcons name="info" size={20} color="#3b82f6" />
              <Text fontSize="md">App Version: 1.0.0</Text>
            </HStack>
            <Divider />
            <HStack alignItems="center" space={2}>
              <MaterialIcons name="privacy-tip" size={20} color="#3b82f6" />
              <Text fontSize="md">Privacy Policy</Text>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
