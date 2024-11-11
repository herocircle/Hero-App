import { Button, Image, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'
import CustomImage from './CustomImage'

// circleHasNoMobilizers={singleCircle?.mobilizers.length === 0}
// isGlobalCircle={circleId === '6397b2c07650f57cfc229e8a'}
// circleName={CircleHome?.circleName}
// text1={CircleHome?.secondBanner.text1}
// text2={CircleHome?.secondBanner.text2}
// text3={CircleHome?.secondBanner.text3}
// image={CircleHome?.secondBanner.image}
// hasCurrentWork={currentWork?.length !== 0}


type props = {
    circleHasNoMobilizers: boolean,
    isGlobalCircle: boolean,
    circleName: string,
    text1: string,
    text2: string,
    text3: string,
    image: string,
    hasCurrentWork: boolean
}

const SecondHeroBanner = ({ text1, circleHasNoMobilizers, circleName, hasCurrentWork, image, isGlobalCircle,
    text2, text3,
}: props) => {
    return (
        <VStack w='100%' gap={20} mt='$12' px="$4" mb="$4">
            {image &&
                <Image
                    source={{ uri: image?.includes('herofiles') ? image : `https://herocircle.app` + image }}
                    style={{ width: '90%', height: 300, objectFit: "contain" }}
                    objectFit='contain'
                    alt=""
                />}

            {/* <CustomImage
                imageName={require(`../../assets/images` + image)}
                styles={{ width: '90%', height: 300, objectFit: "contain" }}
            /> */}

            <Text
                fontWeight={700}
                fontSize={22}
                color='$black'
            >
                {circleName === "Global HERO Circle" ? (
                    circleName
                ) : (
                    'Empower the next 1 million mobilizers worldwide with a stable monthly income'
                )}
            </Text>




            <Text
                color='$black'
            >
                {text1}
            </Text>
            <Text
                color='$black'
            >
                {text2}
            </Text>
            {text3 &&
                <Text
                    color='$black'
                >
                    {text3}
                </Text>}
            <Button
                alignSelf='flex-start'
                bg="$transparent"
                marginLeft={-20}
                marginTop={-10}
            >
                <Text
                    fontWeight={800}
                    color="#0202CC"
                    underline

                    fontSize={14}
                >
                    Learn more
                </Text>
            </Button>

        </VStack>

    )
}

export default SecondHeroBanner