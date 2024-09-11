import React, { useState, useEffect, FC } from 'react';
import { Dimensions, View, Platform, FlatList, Image, TouchableOpacity } from "react-native";
import { useQuery } from '@tanstack/react-query';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import SBCircleBoardItem from './SBCircleBoardItem';
import { Box, HStack, VStack, Text } from '@gluestack-ui/themed';
import { CircleBoardApi } from '@/Api';

const { width: PAGE_WIDTH } = Dimensions.get("window");

type Props = {
    showAllMembers: boolean,
};

const CircleBoardAbout: FC<Props> = ({ showAllMembers }) => {
    const [members, setMembers] = useState<any[]>([]);
    const navigation = useNavigation();
    const isAndroid = Platform.OS !== "ios";

    const fetchCircleBoardMembers = async () => {
        const response = await new CircleBoardApi(AXIOS_CONFIG).findAll(undefined);
        console.log("data:",response.data)
        setMembers(response.data);
        return response.data;
    };

    const { data: memberData } = useQuery({
        queryKey: ['getCircleBoardMembers'],
        queryFn: fetchCircleBoardMembers,
    });

    useEffect(() => {
        if (memberData) {
            setMembers(memberData);
        }
    }, [memberData]);

    const progressValue = useSharedValue<number>(0);
    const baseOptions = {
        width: PAGE_WIDTH,
        height: PAGE_WIDTH * 0.75,
    };

    const memberDataLength = memberData?.length || 0;
    return (
        <>
            <View style={{ alignItems: "center", width: "100%" }}>
                {showAllMembers && memberData && memberData.length > 0 ? (
                    <FlatList
                        key={`list-${memberData.length}`}
                        data={memberData}
                        keyExtractor={(item) => item.id}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <Box
                                width="100%"
                                backgroundColor="#fff"
                                borderRadius="$md"
                                borderWidth="$1"
                                borderColor="#ddd"
                                flexDirection="row"
                                marginBottom="$4"
                                justifyContent='center'
                            >
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 12,
                                        marginRight: 16,
                                    }}
                                />
                                <Box style={{ width: 190, alignItems: "flex-start" }}>
                                    <HStack marginBottom="$2">
                                        <Text fontSize="$lg" fontWeight="bold" color='black'>
                                            {item.firstName}  {item.lastName} 
                                        </Text>
                                        <TouchableOpacity 
                                            style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
                                        >
                                            <View style={{
                                                borderRadius: 9, 
                                                borderWidth: 1, 
                                                borderColor: '#0202CC', 
                                                width: 18, 
                                                height: 18, 
                                                justifyContent: 'center', 
                                                alignItems: 'center', 
                                            }}>
                                                <Text fontSize={11} color="#0202CC">+</Text> 
                                            </View>
                                        </TouchableOpacity>
                                    </HStack>
                                    <VStack space="xs" flexWrap="wrap">
                                        <HStack space="xs" flexWrap="wrap">
                                            <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                                                {item.country}
                                            </Text>
                                            <Text fontSize="$xs" color="black" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                                                {item.role}
                                            </Text>
                                        </HStack>
                                    </VStack>
                                </Box>
                            </Box>
                        )}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        showsHorizontalScrollIndicator={false}
                    />
                ) : (
                    <FlatList
                        key={'list'}
                        data={memberDataLength >= 10 ? members.slice(0, 10) : members}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment={'center'}
                        pagingEnabled={true}
                        style={{ padding: 10 }}
                        contentContainerStyle={{ paddingRight: 10 }}
                        decelerationRate={0.5}
                        renderItem={({ item }) => <SBCircleBoardItem item={item} navigation={navigation} />}
                    />
                )}

                {!isAndroid && !!progressValue && (
                    <View style={{ flexDirection: "row", width: 100, alignSelf: "center", alignItems: "center", justifyContent: "center", marginTop: 5 }}>
                        {(memberDataLength >= 10 ? memberData?.slice(0, 10) : memberData)?.map((_: any, index: any) => (
                            <PaginationItem
                                backgroundColor={"#0202CC"}
                                animValue={progressValue}
                                index={index}
                                key={index}
                                length={memberDataLength}
                            />
                        ))}
                    </View>
                )}
            </View>
        </>
    );
};

export const PaginationItem: FC<{
    index: number,
    backgroundColor: string,
    length: number,
    animValue: Animated.SharedValue<number>,
}> = ({ index, length, animValue }) => {
    const width = 10;
    const animStyle = useAnimatedStyle(() => {
        let inputRange = [index - 1, index, index + 1];
        let outputRange = [-width, 0, width];

        if (index === 0 && animValue?.value > length - 1) {
            inputRange = [length - 1, length, length + 1];
            outputRange = [-width, 0, width];
        }

        return {
            transform: [
                {
                    translateX: interpolate(
                        animValue?.value,
                        inputRange,
                        outputRange,
                        Extrapolate.CLAMP,
                    ),
                },
            ],
        };
    }, [animValue, index, length]);

    return (
        <View style={{ backgroundColor: "white", width: width, height: width, borderRadius: 50, overflow: "hidden", borderWidth: 1, borderColor: "#0202CC", marginHorizontal: 2 }}>
            <Animated.View style={[{ borderRadius: 50, backgroundColor: "#0202CC", flex: 1 }, animStyle]} />
        </View>
    );
};

export default CircleBoardAbout;
