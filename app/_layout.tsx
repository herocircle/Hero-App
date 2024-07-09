import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GluestackUIProvider, Text, Box, SafeAreaView } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Platform } from 'react-native';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const isAndroid = Platform.OS === 'android';

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider config={config}>
      <Box style={{
        paddingTop: isAndroid ? 10 : 70,
        paddingBottom: 0,
        backgroundColor: "#F2F2F2",
        width: "100%",
        position: "relative",
        height: "100%",
        maxWidth: 650,
        alignSelf: "center",
      }} >
        <Stack  >
          <Stack.Screen name="(tabs)"
            options={{
              headerShown: false,

            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </Box>
    </GluestackUIProvider>
  );
}
