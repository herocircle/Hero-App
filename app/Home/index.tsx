import CirclesCarousel from '../../components/CirclesCarousel/CirclesCarousel'
import { AntDesign } from '@expo/vector-icons'
import { InputField, styled } from '@gluestack-ui/themed'
import { Box, Button, HStack, Text, View, VStack, Image, ButtonGroup, ButtonText, RadioGroup, Radio, RadioIcon, RadioIndicator, CircleIcon, RadioLabel, Input } from '@gluestack-ui/themed'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, ScrollView } from 'react-native'
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
import VideoComponent from './VideoComponent'
import DynamicImageSlider from './DynamicImageSlider'
import { useQuery } from '@tanstack/react-query'
import { SlidersApi } from '@/Api'
import { AXIOS_CONFIG } from '@/Api/wrapper'
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
  const scrollViewRef = useRef<ScrollView>(null);
  const [subscribeBlockY, setSubscribeBlockY] = useState(0);
  const [partnerY, setSubscribePartnerY] = useState(0);

  const scrollToSubscribeBlock = () => {
    scrollViewRef.current?.scrollTo({ y: subscribeBlockY, animated: true });
  };
  const scrollToPartnerY = () => {
    scrollViewRef.current?.scrollTo({ y: partnerY, animated: true });
  };


  const { data: sliders2 } = useQuery({
    queryKey: ["slider-2"],
    queryFn: async () => {
      const res = await new SlidersApi(AXIOS_CONFIG).findAll();
      const filtredData = res.data.filter(slider => slider.displayLocation === "home");
      return filtredData;
    },
    staleTime: 3000
  });



  const { data: sliders } = useQuery({
    queryKey: ["slider-1"],
    queryFn: async () => {
      const res = await new SlidersApi(AXIOS_CONFIG).findAll();
      const filtredData = res.data.filter(slider => slider.displayLocation === "home 1");
      return filtredData;
    },
    staleTime: 3000
  });


  return (
    <View w="100%" pt="$4" bg="$white">
      <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1 }}>
        <VStack gap="$8" >

          <VStack w="100%" gap={20} px="$4">
            <Image
              source={require("@/assets/images/heroImage.png")}
              style={{ width: "100%", height: 300, objectFit: "contain" }}
              objectFit="contain"
              alt=""
            />

            <Text fontWeight={700} fontSize={22} color="$black">
              Your platform to directly fund the people accelerating climate
              solutions worldwide.
            </Text>

            <Text color="$black">
              Subscribe to HERO to back verified mobilizers - researchers,
              campaigners, and negotiators globally - leading systemic change from
              the grassroots
            </Text>
            <HStack gap={8} alignItems="center">
              <Button
                alignSelf="center"
                h={40}
                rounded="$3xl"
                backgroundColor="#0202CC"
                onPress={scrollToSubscribeBlock}

              >
                <Text fontWeight={600} fontSize={14} color="white">
                  Join HERO
                </Text>
              </Button>
              <Text fontSize={14} color="$black">
                Starting at €6 / month
              </Text>
            </HStack>
            <Image
              mt={-20}
              source={require("@/assets/images/featuredIn.png")}
              style={{ width: "100%", objectFit: "contain" }}
              objectFit="contain"
              alt=""
            />
          </VStack>
          <CirclesView />

          <VideoComponent />

          <DynamicImageSlider
            imagesArray={sliders2?.[0]?.entries || []}
          />


          <OurImpact />
          <Box onLayout={(event) => {
            const { y } = event.nativeEvent.layout;
            setSubscribeBlockY(y);
          }}>
            <SubscribeBlock homepageStatistics={statistics} />
          </Box>

          <SupportComponent
            scrollToSubscribeBlock={scrollToSubscribeBlock}
          />
          <VStack>
            <SubscriptionBreakdown />
            <DynamicImageSlider
            imagesArray={sliders?.[0]?.entries || []}
          />
            <Box onLayout={(event) => {
              const { y } = event.nativeEvent.layout;
              setSubscribePartnerY(y);
            }}>
              <HeroPartners />
            </Box>


          </VStack>
          <FAQ />
          <Footer />
        </VStack>
      </ScrollView>
    </View>
  );
}

export default Home