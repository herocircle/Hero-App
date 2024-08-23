import { Box, Image, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'

const OurImpact = () => {
    const chips = [
        {
            text1: 'Supporters',
            text2: 'WorldWide',
            number: 1202
        },
        {
            text1: 'Mobilizers',
            text2: 'Backed',
            number: 103
        },
        {
            text1: 'Countries',
            text2: 'impacted',
            number: 28
        },
        {
            text1: 'Active',
            text2: 'Campaigns',
            number: 42
        },
    ]

    console.log(chips?.length)
    return (
        <VStack gap="$5" py="$16" px="$4" bg='#FAFAFA'>
            <Text fontSize={32} fontFamily='nova800' color="$black" textAlign='center' >Our collective impact</Text>

            <Image
                source={require('../../assets/impact.webp')}
                width={600}
                height={300}
                style={{ objectFit: 'contain', alignSelf: "center" }}
                alt='Our collective impact'
            />
            <VStack gap="$8">
                {chips?.map((item) => (
                    <Chip
                        key={item.text1}
                        text1={item.text1}
                        text2={item.text2}
                        number={item.number}
                    />
                ))}
            </VStack>

        </VStack>
    )
}

export default OurImpact

type props = {
    text1: string,
    text2: string
    number: number
}

function Chip({ text1, text2, number }: props) {
    return (
        <VStack gap="$3" alignItems='center' alignSelf='center'>
            <Box
                display='flex'
                bg="#F1F1F1"
                alignItems='center'
                justifyContent='center'
                width={120}
                height={50}
                borderRadius={"$xl"}
            >
                <Text fontSize={18} color="$black" fontFamily='nova800'>
                    {number}
                </Text>
            </Box>
            <VStack gap={4} alignItems='center'>
                <Text color="$black" fontFamily='nova'>{text1}</Text>
                <Text color="$black" fontFamily='nova'>{text2}</Text>
            </VStack>
        </VStack>
    )
}