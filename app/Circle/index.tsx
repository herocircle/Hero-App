import { Circle, CircleHomeLandingApi, CirclesApi, CircleWorkApi } from '@/Api'
import { AXIOS_CONFIG } from '@/Api/wrapper'
import { Text } from '@gluestack-ui/themed'
import { View } from '@gluestack-ui/themed'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { ScrollView } from 'react-native'
type props = {
    navigation: any,
    route: any
}
const CircleHomePage = ({ route, navigation }: props) => {
    const circleId = route?.params.circleId
    const circleName = route?.params.circleName

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
            console.log("circleId:", circleId, "lang:");
            const response = await new CircleWorkApi(AXIOS_CONFIG).getLatestWins(circleId, 'en-US');
            return response.data;
        }
    });

    const { data: CircleHome, isLoading, isError } = useQuery({
        queryKey: ['circle-home-landing', circleName],
        queryFn: async () => {
            const response = await new CircleHomeLandingApi(AXIOS_CONFIG).getCircleByName(circleName, 'en-US');
            return response?.data?.[0];
        },
        enabled: true,
    });

    const singleCircle = data?.filter((item) => item.id === circleId)[0];

    return (
        <View w='100%' pt="$4" bg="$white" >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
            >

                <Text>
                    CircleHomePage
                </Text>
            </ScrollView  >
        </View>
    )
}

export default CircleHomePage