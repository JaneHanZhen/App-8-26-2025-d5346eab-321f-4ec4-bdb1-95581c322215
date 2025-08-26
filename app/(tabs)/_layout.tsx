import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none' // Hide the tab bar completely for this app
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Math is FUN!',
        }}
      />
    </Tabs>
  );
}