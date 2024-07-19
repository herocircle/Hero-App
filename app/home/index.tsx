import CirclesCarousel from '@/components/CirclesCarousel/CirclesCarousel'
import { AntDesign } from '@expo/vector-icons'
import { InputField } from '@gluestack-ui/themed'
import { Box, Button, HStack, Text, View, VStack, Image, ButtonGroup, ButtonText, RadioGroup, Radio, RadioIcon, RadioIndicator, CircleIcon, RadioLabel, Input } from '@gluestack-ui/themed'
import React from 'react'
import { ScrollView } from 'react-native'

const home = () => {
  const [isMonthly, setIsMonthly] = React.useState(true)
  const [values, setValues] = React.useState("6")

  return (
    <View w='100%' bg="$white" >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
      >


        <VStack gap={'$12'} bg="#E5EEFF" py="$6" px="$4" >
          <Text fontWeight={"$bold"} fontSize={22} color="$black">
            Join <Text color="#0202CC" fontWeight={"$bold"} fontSize={22} >1000+</Text> Global Supporters and get exclusive access to:
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


          <Text textAlign='center' fontWeight={"$extrabold"} color="$black" fontSize={22} >
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
                  Pay Anunually
                </ButtonText>
              </Button>
              <Text position='absolute' bottom={-20} alignSelf='center' fontSize={14} color="#0202CC" >
                Save up to 30%
              </Text>
            </VStack>
          </ButtonGroup>


          <HStack>



            <RadioGroup value={values} onChange={setValues}        >
              <HStack space="sm" w='100%' alignItems='center' justifyContent='space-between' >
                <VStack gap={5} alignSelf='center' alignItems='center' >
                  <AntDesign name="checkcircle" size={45} color="#0202CC" />
                  <Text fontWeight={"$semibold"} fontSize={20} color="$black" >
                    $6
                  </Text>
                  <Radio value="Eng">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel fontSize={18} color="$black">Starter</RadioLabel>
                  </Radio>
                </VStack>

                <VStack gap={5} alignSelf='center' alignItems='center' >
                  <AntDesign name="checkcircle" size={45} color="#0202CC" />
                  <Text fontWeight={"$semibold"} fontSize={20} color="$black" >
                    $20
                  </Text>
                  <Radio value="Eng">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel fontSize={18} color="$black">Advocate</RadioLabel>
                  </Radio>
                </VStack>

                <VStack gap={5} alignSelf='center' alignItems='center' >
                  <AntDesign name="checkcircle" size={45} color="#0202CC" />
                  <Text fontWeight={"$semibold"} fontSize={20} color="$black" >
                    $50
                  </Text>
                  <Radio value="Eng">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel fontSize={18} color="$black">Changer</RadioLabel>
                  </Radio>
                </VStack>
              </HStack>
            </RadioGroup>



          </HStack>


          <Input
            bg="#D9D9D9"
            h="$12"
            rounded="$2xl"
          >
            <InputField
              placeholderTextColor={"$black"}
              placeholder="Enter a custom amount"
            />
          </Input>

          <Button
            width={"100%"}
            alignSelf='center'
            h={'$12'}
            mt={-10}
            rounded="$3xl"
            backgroundColor="#0202CC"
          >
            <Text
              fontWeight={600}
              color="white">
              Proceed to payment
            </Text>
          </Button>


        </VStack>





        <VStack w='100%' gap={20} px="$4">
          <Image
            source={require('@/assets/images/heroImage.png')}
            style={{ width: '100%', height: 300, objectFit: "contain" }}
            objectFit='contain'
            alt=""
          />

          <Text
            fontWeight={700}
            fontSize={22}
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
            gap={10}
            mt='$12'
            px="$4"
          >

            <Text
              fontWeight={700}
              fontSize={22}
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








        <VStack w='100%' gap={20} mt='$12' px="$4">
          <Image
            source={require('@/assets/images/secondbanner.webp')}
            style={{ width: '90%', height: 300, objectFit: "contain" }}
            objectFit='contain'
            alt=""
          />

          <Text
            fontWeight={700}
            fontSize={22}
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