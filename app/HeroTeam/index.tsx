import React from 'react'
import { Box, Text, View, VStack } from '@gluestack-ui/themed'
import { Image, ScrollView } from 'react-native'

const HeroTeam = () => {
    return (
        <View w='100%' pt="$8" bg="$white" px="$4" >
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
            >
                < VStack gap={'$4'} >
                    <VStack mb="$5" alignItems='center' gap="$3">

                        <Text textAlign='center' color="$black" fontFamily='nova800' fontSize={35}>
                            Meet the HERO team
                        </Text>
                        <Text textAlign='center' color="$black" fontFamily='nova400'>
                            We are on a mission to empower people to
                            accelerate change in the world
                        </Text>
                    </VStack>
                    <HeroMember
                        name="Moataz Brayekk"
                        role="Dev Team Lead"
                    />

                    <HeroMember
                        name="Moataz Brayekk"
                        role="Dev Team Lead"
                    />

                    <HeroMember
                        name="Moataz Brayekk"
                        role="Dev Team Lead"
                    />

                    <HeroMember
                        name="Moataz Brayekk"
                        role="Dev Team Lead"
                    />
                </VStack>
            </ScrollView>

        </View>
    )
}

export default HeroTeam

type props = {
    name: string,
    role: string
}
const HeroMember = ({ name, role }: props) => {
    return (
        <VStack w='100%' bg="$white" >
            <Image
                source={require('../../assets/images/HeroPlaceholder.webp')}
                style={{ width: '100%', height: 300 }}
            />
            <VStack
                gap='$2'
                p="$4"
                justifyContent='center'
                h={80} bg='$black'>
                <Text fontSize={18} fontFamily='nova600' color="$white">
                    {name}
                </Text>
                <Text fontFamily='nova' color="$white">
                    {role}
                </Text>
            </VStack>
        </VStack>
    )
}