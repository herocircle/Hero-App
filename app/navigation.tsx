import React, { useEffect, } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';
import * as Notifications from 'expo-notifications';
import { useNetInfo } from "@react-native-community/netinfo";
import * as SplashScreennn from 'expo-splash-screen';
import {
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { Image, Platform, SafeAreaView } from 'react-native';
import Home from './Home';
import Login from './Login';
import { useFonts } from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HeroBlueIcon from '../assets/images/HERO Icon blue.svg';
import { HStack, Pressable } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
SplashScreennn.preventAutoHideAsync();

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName={"Login"} screenOptions={{ animation: "fade" }} >
            <Stack.Screen options={{ headerShown: false, animation: "fade" }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false, animation: "fade" }} name="Home" component={Home} />
        </Stack.Navigator>
    );
}


export default function Navigation() {

    const queryClient = useQueryClient()
    const netInfo = useNetInfo();

    const [fontsLoaded] = useFonts({
        'nova': require('../assets/fonts/ProximaNovaReg.otf'),
        'nova400': require("../assets/fonts/ProximaNovaSemibold.otf"),
        'nova600': require("../assets/fonts/ProximaNovaBold.otf"),
        'nova800': require("../assets/fonts/ProximaNovaExtrabold.otf"),
    });

    const onLayoutRootView = async () => {
        if (fontsLoaded) {
            await SplashScreennn.hideAsync();
        }
    }
    useEffect(() => { onLayoutRootView() }, [fontsLoaded])

    React.useEffect(() => {
        const subscription = Notifications.addNotificationReceivedListener(async () => {
            // queryClient.invalidateQueries(['newNotifications'])
        });
        return () => {
            subscription.remove();
        };
    }, []);
    const isAndroid = Platform.OS === 'android';

    const Drawer = createDrawerNavigator();

    return (
        <>
            <NavigationContainer>
                <BottomSheetModalProvider>

                    <SafeAreaView style={{
                        paddingTop: isAndroid ? 10 : 40,
                        paddingBottom: 14,
                        backgroundColor: "white",
                        width: "100%",
                        position: "relative",
                        height: "100%",
                        maxWidth: 650,
                        alignSelf: "center"
                    }} >
                        <Drawer.Navigator
                            screenOptions={{
                                headerLeft: () => (
                                    <Image source={require('@/assets/images/newLogo.png')} style={{ width: 150, height: 50, objectFit: "contain" }} />
                                ),
                                headerRight: () => (
                                    <Pressable
                                        onPress={() => console.log('pressed')}
                                    >
                                        <Ionicons name='menu' size={30} color='black' style={{ marginRight: 15, }} />
                                    </Pressable>
                                ),
                                title: "",
                                headerStyle: {
                                    height: 60
                                }
                            }}
                            initialRouteName="Login">
                            <Drawer.Screen name="Login" component={Login} />
                            <Drawer.Screen name="Home" component={Home} />
                        </Drawer.Navigator>
                    </SafeAreaView>
                </BottomSheetModalProvider>
            </NavigationContainer>
        </>
    );
}

