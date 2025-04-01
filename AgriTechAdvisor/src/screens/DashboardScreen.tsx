import React from 'react';
import { Box, Text, Button, VStack, HStack, Divider, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function DashboardScreen({ navigation }: Props) {
  return (
    <Box flex={1} p={4} bg="primary.50">
      <VStack space={4} flex={1}>
        <Text fontSize="2xl" fontWeight="bold" color="primary.800">
          AgriTech Dashboard
        </Text>
        
        <HStack space={4}>
          <Button 
            flex={1} 
            colorScheme="primary"
            leftIcon={<Icon as={MaterialIcons} name="wb-sunny" size="sm" />}
            onPress={() => navigation.navigate('Weather')}
          >
            Weather
          </Button>
          <Button 
            flex={1} 
            colorScheme="primary"
            leftIcon={<Icon as={MaterialIcons} name="grass" size="sm" />}
            onPress={() => navigation.navigate('CropDiagnosis')}
          >
            Crop Health
          </Button>
        </HStack>

        <Divider my={2} />

        <Box bg="white" borderRadius="md" p={4} shadow={2}>
          <Text fontSize="lg" fontWeight="semibold" mb={2}>
            Recent Activities
          </Text>
          <Text>Last soil test: 3 days ago</Text>
          <Text>Next irrigation: Tomorrow</Text>
        </Box>

        <Box bg="white" borderRadius="md" p={4} shadow={2}>
          <Text fontSize="lg" fontWeight="semibold" mb={2}>
            Quick Actions
          </Text>
          <Button 
            colorScheme="emerald"
            leftIcon={<Icon as={MaterialIcons} name="settings" size="sm" />}
            onPress={() => navigation.navigate('Settings')}
          >
            App Settings
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
