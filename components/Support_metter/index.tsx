import React from 'react';
import { Box, Button, Text, VStack, Divider, View } from '@gluestack-ui/themed';

const SupportComponent = () => {
    return (
        <VStack gap="$5" px="$5">
            <VStack space="md" alignItems="flex-start"  py="$5">
            <View style={{ width: '100%', padding: 10 }}>
                <Text 
                    fontSize="$2xl" 
                    fontFamily="nova800" 
                    color="black" 
                    style={{ flexWrap: 'wrap', textAlign: 'left' }} 
                >
                    Why Your Support Matters
                </Text>
            </View>

                <Text fontFamily='nova' lineHeight={"$md"} textAlign='justify' mb='$4'>
                    Every climate role demands time and energy to advance solutions. With
                    your HERO Subscription, you support verified mobilizers by providing
                    a stable monthly income, enabling them to dedicate more hours to
                    critical climate initiatives worldwide that lead to systemic change.
                </Text>

                <Button
                    marginTop='$8'
                    alignSelf='flex-start'
                    h={'$12'}
                    mt={-10}
                    rounded="$3xl"
                    backgroundColor="#0202CC">
                    <Text color="white">
                        Join HERO
                    </Text>
                </Button>
            </VStack>

            <Box flex={1} alignItems="center">
                <Divider bgColor="black" w="95%" />
            </Box>
            <VStack space="md" alignItems="flex-start" gap='$5' py="$5" >
                
                <View style={{ width: '100%', padding: 10 }}>
    <Text 
        fontSize="$2xl" 
        fontFamily="nova800" 
        color="black" 
        style={{ flexWrap: 'wrap', textAlign: 'left' }} 
    >
                    How Mobilizers Work
                    </Text>
</View>
                <VStack gap="$5">
                    <VStack space="xs">
                        <Text fontSize="$lg" fontFamily="nova600" color='black' >
                            Community Organizing
                        </Text>
                        <Text textAlign='justify' fontSize="$sm" lineHeight="$lg">
                            They mobilize people to show citizen support to decision makers on
                            climate policies.
                        </Text>
                    </VStack>
                    <VStack space="xs">
                        <Text fontSize="$lg" fontFamily="nova600" color='black' >
                            Meeting Decision Makers
                        </Text>
                        <Text textAlign='justify' fontSize="$sm" lineHeight="$lg">
                            They coordinate meetings with MPs to discuss proposed policies.
                        </Text>
                    </VStack>
                    <VStack space="xs">
                        <Text fontSize="$lg" fontFamily="nova600" color='black' >
                            Campaign Strategy
                        </Text>
                        <Text textAlign='justify' fontSize="$sm" lineHeight="$lg">
                            They create campaigns to raise awareness about policies and
                            solutions of public interest.
                        </Text>
                    </VStack>
                    <VStack space="xs">
                        <Text fontSize="$lg" fontFamily="nova600" color='black'>
                            Participate in Key Events
                        </Text>
                        <Text textAlign='justify' fontSize="$sm" lineHeight="$lg">
                            They attend events and spaces where decisions are being made to
                            represent citizens’ interests.
                        </Text>
                    </VStack>
                </VStack>
            </VStack>
        </VStack>
    );
};

export default SupportComponent;
