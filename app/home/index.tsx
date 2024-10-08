import CirclesCarousel from '../../components/CirclesCarousel/CirclesCarousel'
import { AntDesign } from '@expo/vector-icons'
import { InputField } from '@gluestack-ui/themed'
import { Box, Button, HStack, Text, View, VStack, Image, ButtonGroup, ButtonText, RadioGroup, Radio, RadioIcon, RadioIndicator, CircleIcon, RadioLabel, Input } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import SubscribeBlock from '../../components/SubscribeBlock'
import SupportComponent from '@/components/Support_metter'
import SubscriptionBreakdown from '@/components/SubscriptionBreakdown'
import Footer from '@/components/footer'
import FAQ from '@/components/FAQ'
import OurImpact from '@/components/Impact'
import HeroPartners from '@/components/HeroPartners'
import { useAuth } from '@/contexts/AuthContext'
import CirclesView from '../CriclesHome'
import { getStatistics, getStories, getStudies } from '../static-generation-utils/HomeService'
interface Statistics {
  mobilizers: number;
  supporters: number;
  circles: number;
  subscriptions: number;
  countries: number;
  globalCommunity: number;
}

const Home = () => {
  const [statistics, setStatistics] = useState<Statistics | undefined>(undefined);

  const [loading, setLoading] = useState(true);

  const { userData } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes] = await Promise.all([

          getStatistics()
        ]);

        setStatistics(statsRes);

      } catch (err) {

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View w='100%' pt="$4" bg="$white" >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
      >


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
        <CirclesView />


        <VStack w='100%' gap={20} mt='$12' px="$4" mb="$4">
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







        <SubscribeBlock homepageStatistics={statistics} />
        <SupportComponent />
        <HeroPartners />
        <SubscriptionBreakdown />
        <OurImpact />
        <FAQ />
        <Footer />
      </ScrollView >
    </View >
  )
}

export default Home