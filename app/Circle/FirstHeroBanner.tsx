import React from 'react'
import { Button, HStack, Image, VStack } from '@gluestack-ui/themed'
import { Text } from '@gluestack-ui/themed'


// <FirstHeroBanner
// title={CircleHome?.firstBanner.title}
// circleName={CircleHome?.circleName}
// image={CircleHome?.firstBanner.image as string}
// />

type props = {
    title: string,
    circleName: string,
    image: string
}
const FirstHeroBanner = ({ title, circleName, image }: props) => {


    return (
        <VStack w='100%' gap={20} px="$4">
            <Image
                source={{ uri: image }}
                style={{ width: '100%', height: 300, objectFit: "contain" }}
                objectFit='contain'
                alt=""
            />

            {circleName === "Empower the next 1 million mobilizers worldwide with a stable monthly income" && (
                <Text
                    fontWeight={700}
                    fontSize={22}
                    color='#0202CC'
                >
                    Global HERO Circle
                </Text>)}
            {circleName !== "Empower the next 1 million mobilizers worldwide with a stable monthly income" && (
                <Text
                    fontWeight={700}
                    fontSize={22}
                    color='#0202CC'
                >
                    {circleName}
                </Text>
            )}



            <Text
                fontWeight={700}
                fontSize={22}
                color='$black'
            >
                {title}
            </Text>

            <Text
                color='$black'
            >
                Subscribe to HERO to back verified mobilizers - researchers, campaigners, and negotiators globally - leading systemic change from the grassroots
            </Text>
            <HStack gap={8} alignItems='center'>
                <Button
                    alignSelf='center'
                    h={40}
                    rounded="$3xl"
                    backgroundColor="#0202CC"
                >
                    <Text
                        fontWeight={600}
                        fontSize={14}
                        color="white">
                        Join HERO
                    </Text>
                </Button>
                <Text
                    fontSize={14}
                    color='$black'
                >
                    Starting at €6 / month
                </Text>
            </HStack>
            <Image
                mt={-20}
                source={require('@/assets/images/featuredIn.png')}
                style={{ width: "100%", objectFit: "contain" }}
                objectFit='contain'
                alt=""
            />
        </VStack >
    )
}

export default FirstHeroBanner