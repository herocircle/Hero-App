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
import { Platform, SafeAreaView } from 'react-native';
import Login from './home';
import home from './Login';

const Stack = createNativeStackNavigator();
SplashScreennn.preventAutoHideAsync();

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName={"Login"} screenOptions={{ animation: "fade" }} >
            <Stack.Screen options={{ headerShown: false, animation: "fade" }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false, animation: "fade" }} name="Home" component={home} />
        </Stack.Navigator>
    );
}


export default function Navigation() {

    const queryClient = useQueryClient()
    const netInfo = useNetInfo();




    const onLayoutRootView = async () => {
        await SplashScreennn.hideAsync();
    }

    useEffect(() => { onLayoutRootView() }, [])


    React.useEffect(() => {
        const subscription = Notifications.addNotificationReceivedListener(async () => {
            // queryClient.invalidateQueries(['newNotifications'])
        });
        return () => {
            subscription.remove();
        };
    }, []);
    const isAndroid = Platform.OS === 'android';


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
                        <AuthStack />
                    </SafeAreaView>
                </BottomSheetModalProvider>
            </NavigationContainer>
        </>
    );
}

