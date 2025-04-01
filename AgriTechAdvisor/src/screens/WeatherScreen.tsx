import React from 'react';
import { Box, Text, VStack, HStack, Divider, Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Weather'>;

const weatherData = [
  { day: 'Today', icon: 'weather-sunny', temp: '28°C', rain: '10%' },
  { day: 'Tomorrow', icon: 'weather-partly-cloudy', temp: '26°C', rain: '30%' },
  { day: 'Wed', icon: 'weather-rainy', temp: '22°C', rain: '80%' },
  { day: 'Thu', icon: 'weather-cloudy', temp: '24°C', rain: '40%' },
  { day: 'Fri', icon: 'weather-sunny', temp: '27°C', rain: '0%' },
];

export default function WeatherScreen({ navigation }: Props) {
  return (
    <Box flex={1} p={4} bg="blue.50">
      <VStack space={4}>
        <Text fontSize="2xl" fontWeight="bold" color="blue.800">
          7-Day Weather Forecast
        </Text>
        
        {weatherData.map((item, index) => (
          <Box key={index} bg="white" borderRadius="md" p={4} shadow={1}>
            <HStack justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" fontWeight="medium">{item.day}</Text>
              <HStack space={4} alignItems="center">
                <Icon 
                  as={MaterialCommunityIcons} 
                  name={item.icon} 
                  size="lg" 
                  color="blue.500" 
                />
                <Text>{item.temp}</Text>
                <HStack alignItems="center">
                  <Icon 
                    as={MaterialCommunityIcons} 
                    name="weather-pouring" 
                    size="sm" 
                    color="blue.300" 
                  />
                  <Text ml={1}>{item.rain}</Text>
                </HStack>
              </HStack>
            </HStack>
            {index < weatherData.length - 1 && <Divider mt={2} />}
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
