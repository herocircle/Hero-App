import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import * as Notifications from 'expo-notifications';
import * as SplashScreen from 'expo-splash-screen';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Image, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, HStack, Pressable, Text } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Feeds from './Feeds';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '@/contexts/AuthContext';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ animation: "fade" }}>
      <Stack.Screen options={{ headerShown: false, animation: "fade" }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false, animation: "fade" }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false, animation: "fade" }} name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const queryClient = useQueryClient();

  const [fontsLoaded] = useFonts({
    'nova': require('../assets/fonts/ProximaNovaReg.otf'),
    'nova400': require("../assets/fonts/ProximaNovaSemibold.otf"),
    'nova600': require("../assets/fonts/ProximaNovaBold.otf"),
    'nova800': require("../assets/fonts/ProximaNovaExtrabold.otf"),
  });
  const { userData } = useAuth()



  useEffect(() => {
    const onLayoutRootView = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    onLayoutRootView();
  }, [fontsLoaded]);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(async () => {
      // queryClient.invalidateQueries(['newNotifications'])
    });
    return () => {
      subscription.remove();
    };
  }, [queryClient]);



  const isAndroid = Platform.OS === 'android';

  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation }) => ({
            headerLeft: () => (
              <Image source={require('@/assets/images/newLogo.png')} style={{ width: 150, height: 50, objectFit: "contain" }} />
            ),
            headerRight: () => (
              <HStack gap="$2" alignItems='center' >
                {!userData ? (
                  <Button
                    alignSelf='center'
                    onPress={() => navigation.navigate('Register')}
                    h={35}
                    rounded="$3xl"
                    backgroundColor="#0202CC"
                  >
                    <Text
                      fontWeight={600}
                      fontSize={12}
                      color="white">
                      Join HERO
                    </Text>
                  </Button>
                ) : (
                  <Button
                    alignSelf='center'
                    onPress={async () => {
                      await AsyncStorage.removeItem('UserSession');
                      navigation.navigate('Login');
                    }}
                    h={35}
                    rounded="$3xl"
                    backgroundColor="#0202CC"
                  >
                    <Text
                      fontWeight={600}
                      fontSize={12}
                      color="white">
                      Logout
                    </Text>
                  </Button>
                )}
                <Pressable onPress={() => navigation.openDrawer()}>
                  <Ionicons name='menu' size={30} color='black' style={{ marginRight: 15 }} />
                </Pressable>
              </HStack>
            ),
            drawerType: 'slide',
            title: "",
            headerStyle: {
              height: 115,
              borderBottomColor: "white",
              shadowColor: "#fff",
            },
            drawerLabelStyle: {
              fontSize: 16,
              color: 'black',
            },
            drawerPosition: "right"
          })}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              drawerLabel: 'Home',
            }}
          />
          <Drawer.Screen
            name="Feeds"
            component={Feeds}
            options={{
              drawerLabel: 'Feeds',
            }}
          />
          {!userData && (
            <>
              <Drawer.Screen
                name="Login"
                component={Login}
                options={{
                  drawerItemStyle: { display: 'none' },
                  headerShown: false
                }}
              />
              <Drawer.Screen
                name="Register"
                component={Register}
                options={{
                  drawerItemStyle: { display: 'none' },
                  headerShown: false
                }}
              />
            </>
          )}
        </Drawer.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
}
