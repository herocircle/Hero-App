import { AntDesign } from "@expo/vector-icons";
import { VStack, Button, HStack, ButtonGroup, Text, ButtonText, Input, InputField, Actionsheet, ActionsheetBackdrop, Box, Pressable } from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "@/app/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAuth } from "@/contexts/AuthContext";
import { PaymentSubscriptionsApi, SubscriptionRequestDtoBillingPeriodEnum } from "@/Api";
import { useMutation } from "@tanstack/react-query";
import { AXIOS_CONFIG } from "@/Api/wrapper";
import { ActionsheetContent } from "@gluestack-ui/themed";
import WebView from 'react-native-webview';
import PlantLogo from "@/public/plantLogo.svg";
import TreeLogo from "@/public/TreeLogo.svg";
import EarthLogo from "@/public/earthLogo.svg";
import Testimonials from "./Testmonials";

type RegisterV2ScreenProp = NativeStackNavigationProp<RootStackParamList, 'RegisterV2'>;

const SubscribeBlock = ({ homepageStatistics }: any) => {
    const [isMonthly, setIsMonthly] = useState(true);
    const [amount, setAmount] = useState<string>("20");
    const [error, setError] = useState('');
    const { userData } = useAuth()
    const pricing = {
        monthly: { starter: 6, advocate: 20, changer: 50 },
        annually: { starter: 50, advocate: 100, changer: 500 }
    };

    const currentPricing = isMonthly ? pricing.monthly : pricing.annually;

    const handleAmountChange = (text: string) => {
        const cleanedText = text.replace(/[^0-9.]/g, '');
        setAmount(cleanedText);
        const value = parseFloat(cleanedText);

        if (isNaN(value) || value < currentPricing.starter) {
            setError(`Please enter an amount greater than ${currentPricing.starter}`);
        } else {
            setError('');
        }
    };

    useEffect(() => {
        setError('');
    }, [isMonthly]);

    const navigation = useNavigation<RegisterV2ScreenProp>();

    const [SessionLink, setSessionLink] = useState('')
    const [isOpen, SetOpen] = useState(false)
    const handleOpen = () => SetOpen(true)
    const handleClose = () => SetOpen(false)



    const {
        mutate: createSession,
        isPending: sessionIsLoading,
        error: netWorkError,
        isError: hasError
    } = useMutation({
        mutationFn: async () => {
            console.log(amount)
            const result = await new PaymentSubscriptionsApi(AXIOS_CONFIG).createCheckout({
                billingPeriod: isMonthly ? SubscriptionRequestDtoBillingPeriodEnum.Month : SubscriptionRequestDtoBillingPeriodEnum.Year,
                circleId: '6397b2c07650f57cfc229e8a',
                subscriptionAmount: parseInt(amount) * 100,
                isNewLandingTrial: false
            }, `en-US/success`, `en-US/success`);
            return result.data;
        },
        onSuccess: (data) => {
            if (!data.url) return;
            setSessionLink(data?.url)
            data?.url && handleOpen()
        },
        onError: (error: any) => {

            console.log(error?.response?.data?.message, 'error');
        }
    }
    );


    function handleRedirect() {
        !userData ?
            // @ts-ignore
            navigation.navigate('Login', { amount: amount, slug: '6397b2c07650f57cfc229e8a', isMonthly: isMonthly }) :
            createSession();
    }

    const disabled = (parseInt(amount) * 100) < (isMonthly ? 600 : 5000);

    return (
        <VStack gap={'$12'} bg="#E5EEFF" py="$12" px="$2">
            <Text fontWeight={"$bold"} fontSize={22} color="$black">
                Join <Text color="#0202CC" fontWeight={"$bold"} fontSize={22}>{homepageStatistics?.globalCommunity || '1000+'}</Text> Global Supporters and get exclusive access to:
            </Text>
      
            <Actionsheet isOpen={isOpen} onClose={handleClose}>
                <ActionsheetBackdrop />
                <ActionsheetContent minHeight={"80%"} maxHeight="80%" w={'100%'} bg='white'  >
                    <Box h={"100%"} w="100%" >
                        <WebView
                            javaScriptEnabled={true}
                            style={{ height: "100%" }}
                            onNavigationStateChange={(navState) => {
                                if (navState.url.includes('success')) {
                                    handleClose()
                                    navigation.navigate('Home')
                                }
                            }}
                            source={{ uri: SessionLink }}
                        />
                    </Box>
                </ActionsheetContent>
            </Actionsheet>
            <VStack gap={'$5'} mt={-20} mb="$2">
                <HStack alignItems='center' gap={6}>
                    <AntDesign name="checkcircle" size={24} color="#0202CC" />
                    <Text color="$black">
                        Updates from <Text color="$black" fontWeight={"$bold"}>frontlines</Text> of advocacy and climate news in our bi-monthly newsletter.
                    </Text>
                </HStack>

                <HStack alignItems='center' gap={6}>
                    <AntDesign name="checkcircle" size={24} color="#0202CC" />
                    <Text color="$black">
                        Insightful <Text color="$black" fontWeight={"$bold"}>opinion articles</Text> from climate mobilizers and experts in your inbox.
                    </Text>
                </HStack>

                <HStack alignItems='center' gap={6}>
                    <AntDesign name="checkcircle" size={24} color="#0202CC" />
                    <Text color="$black">
                        Invitations to HERO <Text color="$black" fontWeight={"$bold"}>Events</Text> with mobilizers, experts, and innovators.
                    </Text>
                </HStack>
                <Testimonials />
            </VStack>

            <Text textAlign='center' fontWeight={"$extrabold"} color="$black" fontSize={22}>
                Choose your HERO subscription
            </Text>

            <ButtonGroup bg="$white" borderRadius={"$2xl"} alignSelf='center' mt={-20}>
                <Button
                    bg={isMonthly ? "#0202CC" : "$white"}
                    onPress={() => setIsMonthly(true)}
                    w={150}
                    borderRightWidth="$0"
                    borderRadius={"$2xl"}
                >
                    <ButtonText color={!isMonthly ? "#0202CC" : "$white"}>
                        Pay Monthly
                    </ButtonText>
                </Button>
                <VStack>
                    <Button
                        position='relative'
                        bg={!isMonthly ? "#0202CC" : "$white"}
                        onPress={() => setIsMonthly(false)}
                        borderRadius={"$2xl"}
                        w={150}
                    >
                        <ButtonText color={isMonthly ? "#0202CC" : "$white"}>
                            Pay Annually
                        </ButtonText>
                    </Button>
                    <Text position='absolute' bottom={-20} alignSelf='center' fontSize={14} color="#0202CC">
                        Save up to 30%
                    </Text>
                </VStack>
            </ButtonGroup>

            <HStack space="sm" w='100%' alignItems='center' justifyContent='space-evenly'>
                <Pressable
                    flex={1}
                    onPress={() => {
                        setAmount(isMonthly ? '6' : '50');
                    }}
                >
                    <VStack
                        borderWidth={1}
                        flex={1}
                        px={2}
                        bg="#F6F6F6"
                        h={230}
                        rounded="$2xl"
                        borderColor={parseInt(amount) === (isMonthly ? 6 : 50) ? "#0202CC" : "#F6F6F6"}
                        gap={5} alignSelf='center' justifyContent="center" alignItems='center'>
                        <PlantLogo width={120} height={50} />
                        <Text fontWeight={"$semibold"} fontSize={20} color="$black">
                            ${currentPricing.starter}
                        </Text>
                        <Text
                            underline
                            fontWeight={600}
                            fontSize={18} color="$black">
                            Starter
                        </Text>
                        <Text
                            textAlign="center"
                            fontSize={14} color="$black">
                            "Enable a mobilizer to travel to meet a city or government representative."
                        </Text>
                    </VStack>
                </Pressable>


                <Pressable flex={1}
                    onPress={() => {
                        setAmount(isMonthly ? '20' : '100');
                    }}
                >
                    <VStack
                        borderWidth={1}
                        bg="#F6F6F6"
                        flex={1} px={1}
                        h={230}
                        rounded="$2xl"
                        borderColor={parseInt(amount) === (isMonthly ? 20 : 100) ? "#0202CC" : "#F6F6F6"}
                        gap={5} alignSelf='center' justifyContent="center" alignItems='center'>
                        <TreeLogo width={120} height={50} />
                        <Text fontWeight={"$semibold"} fontSize={20} color="$black">
                            ${currentPricing.advocate}
                        </Text>
                        <Text
                            underline
                            fontWeight={600}
                            fontSize={18} color="$black">
                            Advocate
                        </Text>
                        <Text
                            textAlign="center"
                            fontSize={14} color="$black">
                            "Support a mobilizer in hosting a community climate event."
                        </Text>
                    </VStack>
                </Pressable>

                <Pressable flex={1}
                    onPress={() => {
                        setAmount(isMonthly ? '50' : '500');
                    }}
                >
                    <VStack
                        borderWidth={1}
                        bg="#F6F6F6"
                        flex={1} px={2}
                        h={230}
                        rounded="$2xl"
                        borderColor={parseInt(amount) === (isMonthly ? 50 : 500) ? "#0202CC" : "#F6F6F6"}
                        gap={5} alignSelf='center' justifyContent="center" alignItems='center'>
                        <EarthLogo width={120} height={50} />
                        <Text fontWeight={"$semibold"} fontSize={20} color="$black">
                            ${currentPricing.changer}
                        </Text>
                        <Text
                            underline
                            fontWeight={600}
                            fontSize={18} color="$black">
                            Changer
                        </Text>
                        <Text
                            textAlign="center"
                            fontSize={14} color="$black">
                            "Back a mobilizer's attendance to an international climate summit."
                        </Text>
                    </VStack>
                </Pressable>
            </HStack>

            <View style={{ backgroundColor: '#D9D9D9', height: 50, borderRadius: 30 }}>
                <Input bg="#D9D9D9" h="$12" rounded="$2xl">
                    <InputField
                        placeholderTextColor={"$black"}
                        value={amount === '6' || amount === '20' || amount === '50' || amount === '500' || amount === '100' ? '' : amount}
                        placeholder="Enter a custom amount"
                        onChangeText={handleAmountChange}
                        keyboardType="numeric"
                    />
                </Input>
            </View>

            {error && <Text color="$red500" my={-22}>{error}</Text>}
            {hasError && <Text color="$red500" my={-22}>{netWorkError?.response?.data?.message}</Text>}

            <Button
                width={"100%"}
                alignSelf='center'
                h={'$12'}
                mt={-10}
                disabled={disabled ? true : false}
                rounded="$3xl"
                backgroundColor="#0202CC"
                onPress={() => {
                    handleRedirect()
                }}
            >
                {sessionIsLoading &&
                    <ActivityIndicator style={{ marginRight: 5 }} color="white" />
                }
                <Text fontWeight={600} color="white">
                    Proceed to payment
                </Text>
            </Button>
        </VStack>
    );
};

export default SubscribeBlock;

