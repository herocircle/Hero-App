import { icons } from "@/components/footer";
import { useAuth } from "@/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { Button, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import * as Notifications from "expo-notifications";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Image, Platform, Linking } from "react-native";
import Feeds from "./Feeds";
import HelpCenter from "./Help_Center";
import HeroTeam from "./HeroTeam";
import Home from "./Home";
import Login from "./Login";
import PrivacyPolicy from "./Privacy";
import Profile from "./Profile";
import Register from "./Register";
import TermsAndConditions from "./Terms";
import AboutUs from "./About_Us";
import CircleHomePage from "./Circle";
import Welcome from "./welcome/Welcome";

SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();



export default function Navigation() {
  const queryClient = useQueryClient();

  const [fontsLoaded] = useFonts({
    'nova': require("../assets/fonts/ProximaNovaReg.otf"),
    'nova400': require("../assets/fonts/ProximaNovaSemibold.otf"),
    'nova600': require("../assets/fonts/ProximaNovaBold.otf"),
    'nova800': require("../assets/fonts/ProximaNovaExtrabold.otf"),
  });
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    const onLayoutRootView = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    onLayoutRootView();
  }, [fontsLoaded]);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async () => {
        // queryClient.invalidateQueries(['newNotifications'])
      }
    );
    return () => {
      subscription.remove();
    };
  }, [queryClient]);

  const isAndroid = Platform.OS === "android";
  const { userData, isLoading } = useAuth()


  return (
    fontsLoaded && !isLoading ? <NavigationContainer>
      <BottomSheetModalProvider>
        <Drawer.Navigator
          initialRouteName={userData ? "Home" : "welcome"}
          drawerContent={(props) => {
            return (
              <VStack h="100%" py={isAndroid ? "$8" : "$16"} justifyContent="space-between">
                <VStack>
                  <Image
                    source={require("@/assets/images/newLogo.png")}
                    style={{ width: 150, height: 50, objectFit: "contain" }}
                  />
                  <VStack mt="$6" gap="$1">
                    <DrawerItemList {...props} />
                  </VStack>
                </VStack>

                <VStack gap="$3" pl="$4">
                  <Pressable
                    onPress={() => props.navigation.navigate("HeroTeam")}
                  >
                    <Text fontFamily="nova">HERO Team</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => props.navigation.navigate("HelpCenter")}
                  >
                    <Text fontFamily="nova">Help Center</Text>
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      props.navigation.navigate("TermsAndConditions")
                    }
                  >
                    <Text fontFamily="nova">Terms of Service</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => props.navigation.navigate("PrivacyPolicy")}
                  >
                    <Text fontFamily="nova">Data & Privacy</Text>
                  </Pressable>
                </VStack>

                <VStack gap="$1" pl="$3">
                  <Text fontFamily="nova">© 2024 HERO Labs B.V.</Text>
                  <Text fontFamily="nova">All rights reserved.</Text>
                  <Text fontFamily="nova">Amsterdam, Netherlands.</Text>

                  <HStack pl="$2" gap="$1" mt="$4">
                    {icons?.map((item, index) => (
                      <Pressable
                        key={index}
                        onPress={() => Linking.openURL(item.link)}
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
          }}
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
                {!isLoggedIn ? (
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
                      logout()
                      navigation.navigate("Home");
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
              height: isAndroid ? 65 : 115,
              borderBottomColor: "white",
              shadowColor: "#fff"
            },
            drawerLabelStyle: {
              fontSize: 16,
              color: "black",
            },
            drawerPosition: "right",
          })}
        >
          {isLoggedIn &&
            <Drawer.Screen
              name="Profile"
              component={Profile}
              options={{
                drawerLabel: "Profile",
              }}
            />
          }
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              drawerLabel: "Home",
            }}
          />
          {isLoggedIn &&
            <Drawer.Screen
              name="Feeds"
              component={Feeds}
              options={{
                drawerLabel: "Feeds",
              }}
            />
          }

          <Drawer.Screen
            name="About Us"
            component={AboutUs}
            options={{
              drawerLabel: "About Us",
            }}
          />
          <Drawer.Screen
            name="HeroTeam"
            component={HeroTeam}
            options={{
              drawerLabel: "Hero Team",
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen
            name="welcome"
            component={Welcome}
            options={{
              drawerLabel: "Hero Team",
              drawerItemStyle: { display: "none" },
              headerShown: false,
            }}
          />

          <Drawer.Screen
            name="CircleHomePage"
            component={CircleHomePage}
            options={{
              drawerLabel: "Circle Home Page",
              drawerItemStyle: { display: "none" },
            }}
          />

          <Drawer.Screen
            name="HelpCenter"
            component={HelpCenter}
            options={{
              drawerLabel: "Help Center",
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen
            name="TermsAndConditions"
            component={TermsAndConditions}
            options={{
              drawerLabel: "Terms of Service",
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{
              drawerLabel: "Data & Privacy",
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{
              drawerItemStyle: { display: "none" },
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Register"
            component={Register}
            options={{
              drawerItemStyle: { display: "none" },
              headerShown: false,
            }}
          />
        </Drawer.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer> :
      <FakeSplashScreen />
  );
}



const FakeSplashScreen = () => {
  return (
    <VStack
      h="100%"
      w="100%"
      justifyContent="center"
      alignItems="center"
      bg="$white"
    >
      <Image
        source={require("@/assets/images/newLogo.png")}
        style={{ width: 350, height: 150, objectFit: "contain" }}
      />
    </VStack>
  );
}