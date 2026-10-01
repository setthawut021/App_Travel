import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import PlacesScreen from './screens/PlacesScreen';
import PlaceDetailScreen from './screens/PlaceDetailScreen';
import VideoScreen from './screens/VideoScreen';
import SettingScreen from './screens/SettingScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function PlacesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PlacesList" component={PlacesScreen} options={{ title: 'สถานที่ทั้งหมด' }} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} options={{ title: 'รายละเอียด' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Places') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Video') {
              iconName = focused ? 'videocam' : 'videocam-outline';
            } else if (route.name === 'Author') {
              
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'หน้าแรก' }} />
        <Tab.Screen name="Places" component={PlacesStack} options={{ headerShown: false, title: 'สถานที่' }} />
        <Tab.Screen name="Video" component={VideoScreen} options={{ title: 'วิดีโอ' }} />
        
        <Tab.Screen name="Author" component={SettingScreen} options={{ title: 'ผู้จัดทำ' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}