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
    <Box flex={1} safeArea p={5} bg={{
      linearGradient: {
        colors: ['blue.50', 'indigo.50'],
        start: [0, 0],
        end: [1, 1]
      }
    }}>
      <VStack space={5} w="100%" maxW="800px" alignSelf="center">
        <Text fontSize="2xl" fontWeight="bold" color="coolGray.800" mb={4}>
          7-Day Weather Forecast
        </Text>
        
        {weatherData.map((item, index) => (
          <Box 
            key={index} 
            bg="white" 
            borderRadius="lg" 
            p={5} 
            shadow={3}
            w="100%"
            mb={index < weatherData.length - 1 ? 3 : 0}
          >
            <HStack justifyContent="space-between" alignItems="center" space={4}>
              <Text fontSize="lg" fontWeight="semibold" color="coolGray.800" flex={1}>
                {item.day}
              </Text>
              
              <HStack space={4} alignItems="center">
                <Icon 
                  as={MaterialCommunityIcons} 
                  name={item.icon} 
                  size="lg" 
                  color="blue.500" 
                />
                <Text fontSize="lg" color="emerald.600" fontWeight="medium" minW={16} textAlign="right">
                  {item.temp}
                </Text>
                <HStack alignItems="center" space={1}>
                  <Icon 
                    as={MaterialCommunityIcons} 
                    name="weather-pouring" 
                    size="sm" 
                    color="blue.400" 
                  />
                  <Text fontSize="sm" color="coolGray.600">
                    {item.rain}
                  </Text>
                </HStack>
              </HStack>
            </HStack>
            {index < weatherData.length - 1 && <Divider my={2} />}
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
