import React from 'react';
import { Box, Button, Text, VStack, Divider } from '@gluestack-ui/themed';

const SupportComponent = () => {
    return (
        <VStack space="md" padding="$1">
            <VStack space="md"  alignItems="flex-start" padding="$2">
                <Text fontSize="$2xl" fontWeight="bold" color='black'>
                    Why Your Support Matters
                </Text>
                <Text fontSize="$md" textAlign='justify' lineHeight="$xl" mb='$4'>
                    Every climate role demands time and energy to advance solutions. With
                    your HERO Subscription, you support verified mobilizers by providing
                    a stable monthly income, enabling them to dedicate more hours to
                    critical climate initiatives worldwide that lead to systemic change.
                </Text>

                <Button           
                marginTop='$8'
                alignSelf='center'
                h={'$12'}
                mt={-10}
                rounded="$3xl"
                backgroundColor="#0202CC">
                    <Text color="white">
                    Join HERO
                    </Text>
                </Button>
            </VStack>

            <Box flex={1} alignItems="center" padding="$1">
            <Divider bgColor="black" w="95%" />
        </Box>            
            <VStack space="md" alignItems="flex-start" padding="$2">
                <Text fontSize="$2xl" fontWeight="bold" color='black'>
                    How Mobilizers Work
                </Text>
                <VStack space="sm">
                    <VStack space="xs">
                        <Text fontSize="$md" color='black' fontWeight="bold">
                            Community Organizing
                        </Text>
                        <Text textAlign='justify' fontSize="$md" lineHeight="$xl">
                            They mobilize people to show citizen support to decision makers on
                            climate policies.
                        </Text>
                    </VStack>
                    <VStack space="xs">
                        <Text fontSize="$md" color='black' fontWeight="bold">
                            Meeting Decision Makers
                        </Text>
                        <Text textAlign='justify' fontSize="$md"  lineHeight="$xl">
                            They coordinate meetings with MPs to discuss proposed policies.
                        </Text>
                    </VStack>
                    <VStack space="xs">
                        <Text fontSize="$md" color='black' fontWeight="bold">
                            Campaign Strategy
                        </Text>
                        <Text textAlign='justify' fontSize="$md" lineHeight="$xl">
                            They create campaigns to raise awareness about policies and
                            solutions of public interest.
                        </Text>
                    </VStack>
                    <VStack space="xs">
                        <Text fontSize="$md" color='black'fontWeight="bold">
                            Participate in Key Events
                        </Text>
                        <Text textAlign='justify' fontSize="$md" lineHeight="$xl">
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
