import { AntDesign } from "@expo/vector-icons";
import { VStack, Button, HStack, ButtonGroup, Text, RadioGroup, Radio, RadioIndicator, RadioIcon, CircleIcon, RadioLabel, ButtonText, Input, InputField } from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";
import { View } from 'react-native';

const SubscribeBlock = () => {
    const [isMonthly, setIsMonthly] = useState(true);
    const [values, setValues] = useState("Starter");
    const [amount, setAmount] = useState<string>(""); 
    const [error, setError] = useState('');

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
        setAmount('');
        setError('');
    }, [isMonthly]);

    return (
        <VStack gap={'$12'} bg="#E5EEFF" py="$6" px="$4">
            <Text fontWeight={"$bold"} fontSize={22} color="$black">
                Join <Text color="#0202CC" fontWeight={"$bold"} fontSize={22}>1000+</Text> Global Supporters and get exclusive access to:
            </Text>

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

            <HStack>
                <RadioGroup value={values} onChange={setValues}>
                    <HStack space="sm" w='100%' alignItems='center' justifyContent='space-between'>
                        <VStack gap={5} alignSelf='center' alignItems='center'>
                            <AntDesign name="checkcircle" size={45} color="#0202CC" />
                            <Text fontWeight={"$semibold"} fontSize={20} color="$black">
                                ${currentPricing.starter}
                            </Text>
                            <Radio value="Starter">
                                <RadioIndicator mr="$2">
                                    <RadioIcon as={CircleIcon} />
                                </RadioIndicator>
                                <RadioLabel fontSize={18} color="$black">Starter</RadioLabel>
                            </Radio>
                        </VStack>

                        <VStack gap={5} alignSelf='center' alignItems='center'>
                            <AntDesign name="checkcircle" size={45} color="#0202CC" />
                            <Text fontWeight={"$semibold"} fontSize={20} color="$black">
                                ${currentPricing.advocate}
                            </Text>
                            <Radio value="Advocate">
                                <RadioIndicator mr="$2">
                                    <RadioIcon as={CircleIcon} />
                                </RadioIndicator>
                                <RadioLabel fontSize={18} color="$black">Advocate</RadioLabel>
                            </Radio>
                        </VStack>

                        <VStack gap={5} alignSelf='center' alignItems='center'>
                            <AntDesign name="checkcircle" size={45} color="#0202CC" />
                            <Text fontWeight={"$semibold"} fontSize={20} color="$black">
                                ${currentPricing.changer}
                            </Text>
                            <Radio value="Changer">
                                <RadioIndicator mr="$2">
                                    <RadioIcon as={CircleIcon} />
                                </RadioIndicator>
                                <RadioLabel fontSize={18} color="$black">Changer</RadioLabel>
                            </Radio>
                        </VStack>
                    </HStack>
                </RadioGroup>
            </HStack>

            <View style={{ backgroundColor: '#D9D9D9', height: 50, borderRadius: 30 }}>
                <Input bg="#D9D9D9" h="$12" rounded="$2xl">
                    <InputField
                        placeholderTextColor={"$black"}
                        placeholder="Enter a custom amount"
                        value={amount}
                        onChangeText={handleAmountChange}
                        keyboardType="numeric"
                    />
                </Input>
            </View>

            {error && <Text color="red.500" mt={2}>{error}</Text>}

            <Button
                width={"100%"}
                alignSelf='center'
                h={'$12'}
                mt={-10}
                rounded="$3xl"
                backgroundColor="#0202CC"
            >
                <Text fontWeight={600} color="white">
                    Proceed to payment
                </Text>
            </Button>
        </VStack>
    );
}

export default SubscribeBlock;
