import { View, Text, Pressable } from 'react-native'
import React from 'react'
import WelcomeCarousel from './WelcomeCarousel'
import { Box, Button, HStack, VStack } from '@gluestack-ui/themed'
import { Image } from '@gluestack-ui/themed'
import { AntDesign } from '@expo/vector-icons'
import { useQuery } from '@tanstack/react-query'
import { PinsApi } from '@/Api/apis/pins-api'
import { AXIOS_CONFIG } from '@/Api/wrapper'

type props = {
    navigation: any
}
const Welcome = ({ navigation }: props) => {

    const { data: wins, error, isLoading } = useQuery({
        queryKey: ['pin'],
        queryFn: async () => {
            const response = await new PinsApi(AXIOS_CONFIG).getAll();
            return response.data;
        }
    });



    return (
        <Box
            style={{
                flex: 1,
                paddingTop: 75,
                backgroundColor: "#fff",
                paddingBottom: 50
            }}
        >
            <Box
                style={{
                    padding: 12,
                    height: "100%",
                    gap: 16,
                }}
            >

                <VStack gap="$2" mb="$4">
                    <Text
                        style={{
                            color: "#0302AC",
                            fontWeight: "700",
                            fontSize: 22,
                        }}
                    >
                        Welcome to
                    </Text>
                    <Image
                        source={require("@/assets/images/newLogo.png")}
                        style={{ width: 200, height: 50, marginLeft: -10 }}
                        alt="asd"
                    />
                    <Text
                        style={{
                            color: "#0302AC",
                            paddingLeft: 4,
                            fontSize: 16,
                        }}
                    >
                        {"Your platform to directly fund\nthe people accelerating climate\nsolutions worldwide."}
                    </Text>
                </VStack>

                <WelcomeCarousel
                    wins={wins || []}
                />

                <VStack
                    style={{
                        gap: 4,
                    }}
                >
                    <View >
                        <Button
                            size="xl"
                            onPress={() => {
                                navigation.navigate("Home")
                            }}
                            style={{
                                width: "100%",
                                marginTop: "auto",
                                backgroundColor: "#0302AC",
                                borderRadius: 12,
                                height: 56,
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: 5
                            }}
                        >
                            <HStack
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 16,
                                }}
                            >
                                <Text
                                    style={{
                                        color: "white",
                                        fontWeight: "600",
                                    }}
                                >
                                    Get Started
                                </Text>
                                <AntDesign
                                    name="arrowright"
                                    style={{
                                        marginTop: 4,
                                    }}
                                    size={18}
                                    color="white"
                                />
                            </HStack>
                        </Button>
                    </View>
                    <HStack

                    >
                        <Text
                            style={{
                                color: "black",
                                fontSize: 18,
                            }}
                        >
                            Already have an account?{" "}
                        </Text>
                        <Pressable
                            onPress={() => {
                                navigation.navigate("Login")
                            }}
                        >

                            <Text
                                style={{
                                    fontWeight: "600",
                                    textDecorationLine: "underline",
                                    color: "#0302AC",
                                    fontSize: 18
                                }}
                            >
                                Login
                            </Text>
                        </Pressable>
                    </HStack>
                </VStack>
            </Box>
        </Box>
    )
}

export default Welcome