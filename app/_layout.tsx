import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { LogBox } from 'react-native';

// Suppress specific warnings if needed for third-party libraries
LogBox.ignoreLogs(['Warning: ...']); // Ignore specific warnings

export default function RootLayout() {
  // Ensure we have necessary dependencies
  useEffect(() => {
    // Initialize any app-wide configurations here
  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" /> {/* Light status bar for dark backgrounds */}
    </>
  );
}