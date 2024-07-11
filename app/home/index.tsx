import CirclesCarousel from '@/components/CirclesCarousel/CirclesCarousel'
import { Box, Button, HStack, Text, View, VStack, Image } from '@gluestack-ui/themed'
import React from 'react'

const home = ({ navigation }: any) => {
  return (
    <View w='100%' px="$4">

      <VStack w='100%' gap={20} >
        <Image
          source={require('@/assets/images/heroImage.png')}
          style={{ width: '100%', height: 300, backgroundColor: "#F2F2F2", objectFit: "contain" }}
          objectFit='contain'
        />

        <Text
          fontWeight={700}
          fontSize={20}
          color='$black'
        >
          Your platform to directly fund the people accelerating climate solutions worldwide.
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
        />
      </VStack>

      <CirclesCarousel
        navigation={navigation}
        AllCircles={[
          {
            title: "TEST",
            description: "TEST",
            image: require('@/assets/images/heroImage.png')
          }
        ]}
      />
    </View>
  )
}

export default home