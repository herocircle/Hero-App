import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DrawerNavigationState,
  NavigationContainer,
  ParamListBase,
} from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";
import * as Notifications from "expo-notifications";
import * as SplashScreen from "expo-splash-screen";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Image, Platform } from "react-native";
import { useFonts } from "expo-font";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Button, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Feeds from "./Feeds";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/contexts/AuthContext";
import Profile from "./Profile";
import HeroTeam from "./HeroTeam";
import { icons } from "@/components/footer";

import AboutUs from "./About_Us";
import CircleHomePage from "./Circle";
import {
  DrawerNavigationHelpers,
  DrawerDescriptorMap,
} from "@react-navigation/drawer/lib/typescript/src/types";

// Initialize stack and drawer navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Prevent SplashScreen from auto-hiding until fonts are loaded
SplashScreen.preventAutoHideAsync();

/**
 * Custom Drawer content, which displays various drawer options, logo, and social media icons.
 */
function CustomDrawerContent(
  props: React.JSX.IntrinsicAttributes & {
    state: DrawerNavigationState<ParamListBase>;
    navigation: DrawerNavigationHelpers;
    descriptors: DrawerDescriptorMap;
  }
) {
  return (
    <VStack h="100%" py="$16" justifyContent="space-between">
      {/* Logo */}
      <VStack>
        <Image
          source={require("@/assets/images/newLogo.png")}
          style={{ width: 150, height: 50, objectFit: "contain" }}
        />
        <VStack mt="$6" gap="$1">
          {/* Drawer items */}
          <DrawerItemList {...props} />
        </VStack>
      </VStack>

      {/* Additional drawer options */}
      <VStack gap="$3" pl="$4">
        <Pressable onPress={() => props.navigation.navigate("HeroTeam")}>
          <Text fontFamily="nova">HERO Team</Text>
        </Pressable>
        <Pressable onPress={() => props.navigation.navigate("Profile")}>
          <Text fontFamily="nova">Help Center</Text>
        </Pressable>
        <Pressable onPress={() => props.navigation.navigate("Profile")}>
          <Text fontFamily="nova">Terms of Service</Text>
        </Pressable>
        <Pressable onPress={() => props.navigation.navigate("Profile")}>
          <Text fontFamily="nova">Data & Privacy</Text>
        </Pressable>
      </VStack>

      {/* Footer with company info and social media icons */}
      <VStack gap="$1" pl="$3">
        <Text fontFamily="nova">© 2024 HERO Labs B.V.</Text>
        <Text fontFamily="nova">All rights reserved.</Text>
        <Text fontFamily="nova">Amsterdam, Netherlands.</Text>

        {/* Social media icons */}
        <HStack pl="$2" gap="$1" mt="$4">
          {icons?.map((item, index) => (
            <Pressable
              key={index}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              width="$9"
              h="$9"
              rounded="$full"
              bg="$black"
            >
              <Text color="$white">{item?.icon}</Text>
            </Pressable>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
}

/**
 * Drawer Navigator, which contains the main application screens (e.g., Home, Profile).
 * Header customization for each screen is handled here.
 */
function DrawerNavigator() {
  const { userData } = useAuth();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("@/assets/images/newLogo.png")}
              style={{ width: 150, height: 50, objectFit: "contain" }}
            />
          </Pressable>
        ),
        headerRight: () => (
          <HStack gap="$2" alignItems="center">
            {!userData ? (
              <Button
                alignSelf="center"
                onPress={() => navigation.navigate("Register")}
                h={35}
                rounded="$3xl"
                backgroundColor="#0202CC"
              >
                <Text fontWeight={600} fontSize={12} color="white">
                  Join HERO
                </Text>
              </Button>
            ) : (
              <Button
                alignSelf="center"
                onPress={async () => {
                  await AsyncStorage.removeItem("UserSession");
                  navigation.navigate("Login");
                }}
                h={35}
                rounded="$3xl"
                backgroundColor="#0202CC"
              >
                <Text fontWeight={600} fontSize={12} color="white">
                  Logout
                </Text>
              </Button>
            )}
            <Pressable onPress={() => navigation.openDrawer()}>
              <Ionicons
                name="menu"
                size={30}
                color="black"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          </HStack>
        ),
        drawerType: "slide",
        drawerContentStyle: {
          backgroundColor: "white",
        },
        title: "",
        headerStyle: {
          height: 115,
          borderBottomColor: "white",
          shadowColor: "#fff",
        },
        drawerLabelStyle: {
          fontSize: 16,
          color: "black",
        },
        drawerPosition: "right",
      })}
    >
      {/* Define screens within the drawer */}
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: "Profile" }}
      />
      <Drawer.Screen
        name="CircleHomePage"
        component={CircleHomePage}
        options={{ drawerLabel: "CircleHomePage" }}
      />
      <Drawer.Screen
        name="Feeds"
        component={Feeds}
        options={{ drawerLabel: "Feeds" }}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutUs}
        options={{ drawerLabel: "About Us" }}
      />
      <Drawer.Screen
        name="HeroTeam"
        component={HeroTeam}
        options={{
          drawerLabel: "Hero Team",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer.Navigator>
  );
}

/**
 * Main Navigation component which wraps the entire navigation logic.
 * This uses a Stack Navigator to handle both drawer-based screens and authentication screens.
 */
export default function Navigation() {
  const queryClient = useQueryClient();
  const [fontsLoaded] = useFonts({
    nova: require("../assets/fonts/ProximaNovaReg.otf"),
    nova400: require("../assets/fonts/ProximaNovaSemibold.otf"),
    nova600: require("../assets/fonts/ProximaNovaBold.otf"),
    nova800: require("../assets/fonts/ProximaNovaExtrabold.otf"),
  });
  const { userData } = useAuth();

  // Hide splash screen when fonts are loaded
  useEffect(() => {
    const onLayoutRootView = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    onLayoutRootView();
  }, [fontsLoaded]);

  // Set up notification listener
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async () => {
        // queryClient.invalidateQueries(['newNotifications']) - logic to handle notifications if needed
      }
    );
    return () => {
      subscription.remove();
    };
  }, [queryClient]);

  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <Stack.Navigator
          initialRouteName={userData ? "DrawerNavigator" : "Home"}
          screenOptions={{
            headerShown: false,
            gestureEnabled: true, // Enable swipe-back gesture
          }}
        >
          {/* Stack Navigator wraps Drawer Navigator and handles Login/Register */}
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
}
