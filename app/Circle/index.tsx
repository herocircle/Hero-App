import { Circle, CircleHomeLandingApi, CirclesApi, CircleWorkApi } from '@/Api'
import { AXIOS_CONFIG } from '@/Api/wrapper'
import { Text } from '@gluestack-ui/themed'
import { View } from '@gluestack-ui/themed'
import { useQuery } from '@tanstack/react-query'
import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native'
import FirstHeroBanner from './FirstHeroBanner'
import SubscribeBlock from '@/components/SubscribeBlock';
import SecondHeroBanner from './SecondHeroBanner'
import Footer from '@/components/footer'
import SupportComponent from '@/components/Support_metter'
import FeaturedMobilizers from './FeaturedMobilizers'
import ClimateWins from './ClimateWins'
import CircleAmbassadors from './CircleAmbassadors'
import EveryCliamteRoleKey from './EveryCliamteRoleKey'
import CircleMobilizers from './Mobilizers'
import { Box } from '@gluestack-ui/themed'
import OurWork from './OurWork'

type props = {
    navigation: any,
    route: any
}
const CircleHomePage = ({ route, navigation }: props) => {
    const circleId = route?.params?.circleId || "6397b2c07650f57cfc229e8a";
    const circleUrlName = route?.params?.circleName || "globalcircle";
    const { data } = useQuery({
        queryKey: ['circles-with-types'],
        queryFn: async () => {
            const response = await new CirclesApi(AXIOS_CONFIG).getCircles(
                undefined,
                undefined,
                undefined,
            );
            return response.data;
        }
    });

    const { data: currentWork } = useQuery({
        queryKey: ['circle-work', circleId],
        queryFn: async () => {
            const response = await new CircleWorkApi(AXIOS_CONFIG).getLatestWins(circleId, 'en');
            return response.data;
        }
    });

    const { data: circleData } = useQuery({
        queryKey: ['circle-url-name', circleUrlName],
        queryFn: async () => {
            if (!circleUrlName) {
                return null;
            }
            try {
                const response = await new CirclesApi(AXIOS_CONFIG).getCircleIdByUrlName(circleUrlName as string);
                const { _id, circleName } = response.data as any;
                return { _id, circleName };
            } catch (error) {
                throw new Error('Failed to fetch circleId');
            }
        },
    })


    const { data: CircleHome, isLoading, isError } = useQuery({
        queryKey: ['circle-home-landing', circleData?.circleName],
        queryFn: async () => {
            const response = await new CircleHomeLandingApi(AXIOS_CONFIG).getCircleByName(circleData?.circleName || '', 'en');
            return response?.data?.[0]
        },
    });

    const singleCircle = data?.filter((item: any) => item?._id?.toString() === circleId)[0];

    const isGlobalCircle = (singleCircle as any)?._id?.toString() === '6397b2c07650f57cfc229e8a';




    const scrollViewRef = useRef<ScrollView>(null);
    const [subscribeBlockY, setSubscribeBlockY] = useState(0);

    const scrollToOurWorkBlock = () => {
        scrollViewRef.current?.scrollTo({ y: subscribeBlockY, animated: true });
    };


    return (
        <View w='100%' h='100%' pt="$4" bg="$white" >
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
            >

                <FirstHeroBanner
                    title={CircleHome?.firstBanner.title || ''}
                    circleName={CircleHome?.circleName || ''}
                    image={CircleHome?.firstBanner.image as string}
                />

                {!isGlobalCircle && <CircleMobilizers
                    mobilizers={singleCircle?.mobilizers || []}
                />
                }


                {isGlobalCircle &&
                    <FeaturedMobilizers navigation={navigation} mobilizers={singleCircle?.mobilizers || []} />
                }


                {CircleHome?.secondBanner.image &&
                    <SecondHeroBanner
                        circleHasNoMobilizers={singleCircle?.mobilizers.length === 0}
                        isGlobalCircle={circleId === '6397b2c07650f57cfc229e8a'}
                        circleName={CircleHome?.circleName || ''}
                        text1={CircleHome?.secondBanner.text1}
                        text2={CircleHome?.secondBanner.text2}
                        text3={CircleHome?.secondBanner.text3}
                        image={CircleHome?.secondBanner.image}
                        hasCurrentWork={currentWork?.length !== 0}
                        onPress={() => scrollToOurWorkBlock()}
                    />}

                {
                    singleCircle?.ambassadors?.length !== 0 &&
                    <CircleAmbassadors circles={data || []} navigation={navigation} />
                }
                {currentWork && isGlobalCircle &&
                    <ClimateWins navigation={navigation} currentWork={currentWork} />
                }
                <SubscribeBlock />

                {!isGlobalCircle && !(currentWork?.length === 0) && (
                    <Box onLayout={(event) => {
                        const { y } = event.nativeEvent.layout;
                        setSubscribeBlockY(y);
                    }}>
                        <OurWork currentWork={currentWork}
                            circleHasNoMobilizers={singleCircle?.mobilizers.length === 0}
                        />
                    </Box>
                )}

                {isGlobalCircle &&
                    <EveryCliamteRoleKey />}
                <SupportComponent />
                <Box h={30} />
                <Footer />

            </ScrollView  >
        </View>
    )
}

export default CircleHomePage