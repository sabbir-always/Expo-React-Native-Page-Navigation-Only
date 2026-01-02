import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        {/* <Stack.Screen name="(drawer)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Screen1" options={{ title: 'Screen1', headerShown: false }} />
        <Stack.Screen name="Screen2" options={{ title: 'Screen2', headerShown: false }} />
        <Stack.Screen name="Screen3" options={{ title: 'Screen3', headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
