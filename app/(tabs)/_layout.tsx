import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

// Custom triangle icon component
function TriangleIcon({ color }: { color: string }) {
  return (
    <View style={{ alignItems: 'center', marginTop: 3 }}>
      <View 
        style={{
          width: 0,
          height: 0,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderLeftWidth: 8,
          borderRightWidth: 8,
          borderBottomWidth: 12,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: color,
          transform: [{ rotate: '0deg' }]
        }}
      />
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#2196F3',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TriangleIcon color={color} />,
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      />
    </Tabs>
  );
}