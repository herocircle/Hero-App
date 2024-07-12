import CirclesCarousel from '@/components/CirclesCarousel/CirclesCarousel'
import { Box, Button, HStack, Text, View, VStack, Image } from '@gluestack-ui/themed'
import React from 'react'
import { ScrollView } from 'react-native'

const home = ({ navigation }: any) => {
  return (
    <View w='100%' >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
      >

        <VStack w='100%' gap={20} px="$4">
          <Image
            source={require('@/assets/images/heroImage.png')}
            style={{ width: '100%', height: 300, backgroundColor: "#F2F2F2", objectFit: "contain" }}
            objectFit='contain'
            alt=""
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
            alt=""
          />
        </VStack>
        <VStack>
          <VStack
            px="$4"
            gap={10}
            mt='$12'
          >

            <Text
              fontWeight={700}
              fontSize={20}
              color='$black'
            >
              Subscribe to Specific Circles


            </Text>
            <Text
              color='$black'
            >
              By choosing to subscribe to specific circles, you directly support groups of mobilizers addressing region-specific climate challenges.
            </Text>
          </VStack>
          <CirclesCarousel
            AllCircles={[
              {
                title: "EU Viable World for All Circle",
                description: "Shape EU laws on Ocean Land and Renewable Energy",
                image: require('@/assets/images/HeroImage.webp')
              },
              {
                title: "Global HERO Circle",
                description: "Support all mobilizers on HERO equally",
                image: require('@/assets/images/HeroImage2.webp')
              }
            ]}
          />
        </VStack>








        <VStack w='100%' gap={20} px="$4" mt='$12'>
          <Image
            source={require('@/assets/images/secondbanner.webp')}
            style={{ width: '90%', height: 300, backgroundColor: "#F2F2F2", objectFit: "contain" }}
            objectFit='contain'
            alt=""
          />

          <Text
            fontWeight={700}
            fontSize={20}
            color='$black'
          >
            Empower the next million mobilizers worldwide with a stable monthly income.
          </Text>

          <Text
            color='$black'
          >
            Through your HERO subscription, you're powering a new kind of economy - one where passionate climate mobilizers are financially supported by the communities they serve, enhancing their ability to enact lasting, grassroots change worldwide.
          </Text>
          <Text
            color='$black'
          >
            Together, we support people-led solutions, from passing the EU Nature Restoration Law to protect 20% of the EU’s Natural Ecosystems to creating powerful campaigns that mobilize millions to accelerate the global transition to clean energy.          </Text>
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

      </ScrollView >
    </View >
  )
}

export default home