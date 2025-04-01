import React from 'react';
import { Box, Text, VStack, HStack, Button, Icon, Divider } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'CropDiagnosis'>;

const crops = [
  { name: 'Corn', icon: 'corn' },
  { name: 'Wheat', icon: 'wheat' },
  { name: 'Rice', icon: 'rice' },
  { name: 'Soybean', icon: 'soy-sauce' },
];

const commonIssues = [
  'Nutrient Deficiency',
  'Pest Infestation',
  'Disease',
  'Water Stress'
];

export default function CropDiagnosisScreen({ navigation }: Props) {
  return (
    <Box flex={1} p={4} bg="green.50">
      <VStack space={4}>
        <Text fontSize="2xl" fontWeight="bold" color="green.800">
          Crop Health Analysis
        </Text>

        <Box bg="white" borderRadius="md" p={4} shadow={1}>
          <Text fontSize="lg" fontWeight="medium" mb={3}>
            Select Crop Type
          </Text>
          <HStack space={2} flexWrap="wrap">
            {crops.map((crop, index) => (
              <Button 
                key={index}
                variant="outline"
                colorScheme="green"
                leftIcon={<Icon as={MaterialCommunityIcons} name={crop.icon} />}
                size="sm"
                m={1}
              >
                {crop.name}
              </Button>
            ))}
          </HStack>
        </Box>

        <Box bg="white" borderRadius="md" p={4} shadow={1}>
          <Text fontSize="lg" fontWeight="medium" mb={3}>
            Common Issues
          </Text>
          <VStack space={2}>
            {commonIssues.map((issue, index) => (
              <Box key={index}>
                <HStack alignItems="center" space={2}>
                  <Icon as={MaterialCommunityIcons} name="alert-circle" color="red.500" />
                  <Text>{issue}</Text>
                </HStack>
                {index < commonIssues.length - 1 && <Divider my={2} />}
              </Box>
            ))}
          </VStack>
        </Box>

        <Button 
          colorScheme="green" 
          leftIcon={<Icon as={MaterialCommunityIcons} name="camera" />}
          mt={4}
        >
          Upload Crop Photo
        </Button>
      </VStack>
    </Box>
  );
}
