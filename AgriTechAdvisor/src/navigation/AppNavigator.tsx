import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from '../screens/DashboardScreen';
import WeatherScreen from '../screens/WeatherScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CropDiagnosisScreen from '../screens/CropDiagnosisScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2e7d32',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ title: 'AgriTech Dashboard' }} 
        />
        <Stack.Screen 
          name="Weather" 
          component={WeatherScreen} 
          options={{ title: 'Weather Forecast' }} 
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'App Settings' }} 
        />
        <Stack.Screen 
          name="CropDiagnosis" 
          component={CropDiagnosisScreen} 
          options={{ title: 'Crop Diagnosis' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
