import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black', tabBarLabelStyle: { fontSize: 12 } }}>
      <Tabs.Screen name="TabScreen1" options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<MaterialIcons name="home" size={22} color={color} />) }} />
      <Tabs.Screen name="TabScreen2" options={{ tabBarLabel: 'About', tabBarIcon: ({ color, size }) => (<MaterialIcons name="info" size={22} color={color} />) }} />
      <Tabs.Screen name="TabScreen3" options={{ tabBarLabel: 'Service', tabBarIcon: ({ color, size }) => (<MaterialIcons name="build-circle" size={22} color={color} />) }} />
      <Tabs.Screen name="TabScreen4" options={{ tabBarLabel: 'Product', tabBarIcon: ({ color, size }) => (<MaterialIcons name="shopping-cart" size={22} color={color} />) }} />
      <Tabs.Screen name="TabScreen5" options={{ tabBarLabel: 'Contact', tabBarIcon: ({ color, size }) => (<MaterialIcons name="contact-page" size={22} color={color} />) }} />
    </Tabs>
  )
}
