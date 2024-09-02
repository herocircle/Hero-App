import React, { FC } from "react";
import { Dimensions, View, Platform, FlatList, Image, TouchableOpacity } from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Box, Text, HStack, VStack } from "@gluestack-ui/themed"; 
import SBImagePartner from "./SBImagePartner";
const { width: PAGE_WIDTH } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome';
type Props = {
    AllCircles: any,
    filteredPartners: any[],
    showAllPartners: boolean,
    setSelectedPartner: (partner: any) => void,
    tags: any[],
    handlePartnerSelect: (partner: any) => void;

};

const PartnersCarousel: FC<Props> = ({ AllCircles,handlePartnerSelect, filteredPartners, showAllPartners, setSelectedPartner, tags }) => {
    const navigation = useNavigation();
    const isAndroid = Platform.OS !== "ios";

    const progressValue = useSharedValue<number>(0);
    const baseOptions = {
        width: PAGE_WIDTH,
        height: PAGE_WIDTH * 0.75,
    } as const;
    const data = showAllPartners ? filteredPartners : (AllCircles?.length >= 10 ? AllCircles.slice(0, 10) : AllCircles);

    return (
        <View style={{ alignItems: "center", width: "100%" }}>
             {showAllPartners && data && data.length > 0 ? (
                <FlatList
                    key={`list-${data.length}`}
                    data={data}
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
                                source={{ uri: item.avatar }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 12,
                                    marginRight: 16,
                                }}
                            />
                            <Box style={{ width: 190, alignItems: "flex-start" }}>
                                <HStack marginBottom="$2">
                                    <Text fontSize="$lg" textAlign="center" fontWeight="bold">
                                        {item.firstname} {item.lastname}
                                    </Text>
                                    <TouchableOpacity 
                                onPress={() => handlePartnerSelect(item)}
                                style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
                                >
                                <View style={{
                                    borderRadius: 9, 
                                    borderWidth: 1, 
                                    borderColor: '#0202CC', 
                                    width:18, 
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
                                {item._cares?.length > 0 ? (tags.find(type => type._id === item._cares[0])?.name.split(' ')[0] || 'Global') : 'Global'}
                                    </Text>
                                        <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                                            {item.country}
                                        </Text>
                                        <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                                            {item.role.charAt(0).toUpperCase() + item.role.slice(1)}
                                        </Text>
                                        {/* <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                                            {item.tag}
                                        </Text> */}
                                    </HStack>
                                    
                                </VStack>
                            </Box>
                        </Box>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsHorizontalScrollIndicator={false}
                />
            ) : (
                !isAndroid ? (
                    <GestureHandlerRootView>
                        <Carousel
                            {...baseOptions}
                            style={{ width: PAGE_WIDTH }}
                            loop
                            pagingEnabled={true}
                            snapEnabled={true}
                            autoPlay={false}
                            autoPlayInterval={1500}
                            onProgressChange={(_, absoluteProgress) =>
                                (progressValue.value = absoluteProgress)
                            }
                            mode="parallax"
                            modeConfig={{
                                parallaxScrollingScale: 0.9,
                                parallaxScrollingOffset: 50,
                            }}
                            data={data}
                            renderItem={({ item }) => <SBImagePartner navigation={navigation} item={item} onPress={() => handlePartnerSelect(item)} />}

                        />
                    </GestureHandlerRootView>
                ) : (
                    <FlatList
                        key={'list'}
                        data={data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment={'center'}
                        pagingEnabled={true}
                        style={{ padding: 10 }}
                        contentContainerStyle={{ paddingRight: 10 }}
                        decelerationRate={0.5}
                        renderItem={({ item }) => <SBImagePartner navigation={navigation} item={item} onPress={() => handlePartnerSelect(item)} />}

                    />
                )
            )}

            {!!progressValue && !isAndroid && !showAllPartners && (
                <View style={{
                    flexDirection: "row",
                    width: 100,
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 5,
                }}>
                    {data.map((_: any, index: number) => (
                        <PaginationItem
                            backgroundColor="#ddd"
                            animValue={progressValue}
                            index={index}
                            key={index}
                            length={data.length}
                        />
                    ))}
                </View>
            )}
        </View>
    );
};
export const PaginationItem: FC<{
    index: number
    backgroundColor: string
    length: number
    animValue: Animated.SharedValue<number>
}> = (props) => {
    const { animValue, index, length, } = props;
    const width = 10;

    // @ts-ignore
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
        <View
            style={{
                backgroundColor: "white",
                width: width,
                height: width,
                borderRadius: 50,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#0202CC",
                marginHorizontal: 2
            }}
        >
            <Animated.View
                style={[
                    {
                        borderRadius: 50,
                        backgroundColor: "#0202CC",
                        flex: 1,
                    },
                    animStyle,
                ]}
            />
        </View>
    );
};
export default PartnersCarousel;
