import React, { useEffect, useRef, useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { interpolate } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import { Box, HStack, VStack, Text } from "@gluestack-ui/themed";
import { Pin } from "@/Api";


type props = {
    wins: Pin[]
}

const WelcomeCarousel = ({ wins }: props) => {
    const screenDimensions = Dimensions.get("screen");
    const scale = 0.7;
    const PAGE_WIDTH = screenDimensions.width * scale;

    const carouselRef: any = useRef(null); // Reference for the Carousel

    const animationStyle = React.useCallback((value: number) => {
        "worklet";
        const rotateZ = `${interpolate(value, [-1, 0, 1], [-30, 0, 30])}deg`;
        const translateX = interpolate(
            value,
            [-1, 0, 1],
            [-screenDimensions.width - 80, 0, screenDimensions.width + 80]
        );
        return {
            transform: [{ rotateZ }, { translateX }],
        };
    }, []);




    return (
        <VStack
            alignItems="center"
            justifyContent="center"
            flex={1}
        >
            <Carousel
                ref={carouselRef}
                style={{
                    width: screenDimensions.width,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                width={PAGE_WIDTH}
                height={screenDimensions.height * 0.57}
                data={wins}
                renderItem={({ index, item }) => (
                    <SBItem
                        key={index}
                        item={item}
                        index={index}
                        carouselRef={carouselRef}
                    />
                )}
                loop={true}
                pagingEnabled={true}
                // @ts-ignore
                customAnimation={animationStyle}
            />

        </VStack>
    );
};

export default WelcomeCarousel;

type Props = {
    index?: number;
    item?: any;
    carouselRef?: any;
}

export const SBItem: React.FC<Props> = (props) => {
    const screenDimensions = Dimensions.get("screen");
    const scale = 0.7;
    const PAGE_WIDTH = screenDimensions.width * scale;

    const { index, item, carouselRef, ...animatedViewProps } = props;
    return (
        <Animated.View
            style={{
                flex: 1,
                width: PAGE_WIDTH + 60,
                alignSelf: "center",
                marginBottom: 60,
            }}
            {...animatedViewProps}
        >
            <Animated.View style={{}} {...animatedViewProps}>
                <Animated.Image
                    style={{
                        borderRadius: 25,
                        width: "100%",
                        height: "100%",
                    }}
                    source={{ uri: item?.image }}
                    resizeMode="cover"
                />
                <Box
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.16)", borderRadius: 25 }}
                    zIndex={20}
                    p={16}
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"

                >
                    <VStack
                        w={"100%"}
                        h={"100%"}
                        justifyContent="space-between"

                    >
                        <Text
                            fontSize={28}
                            color={"white"}
                            fontWeight={"extrabold"}
                        >
                            {item.name}
                        </Text>
                        <HStack gap="$1">
                            <TouchableOpacity
                                onPress={() => {
                                    carouselRef.current?.next();
                                }}
                                style={{
                                    backgroundColor: "#fff",
                                    borderRadius: 20,
                                    width: 40,
                                    height: 40,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <AntDesign name="arrowleft" size={20} color="black" />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    carouselRef.current?.prev();
                                }}
                                style={{
                                    backgroundColor: "#fff",
                                    borderRadius: 20,
                                    width: 40,
                                    height: 40,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <AntDesign name="arrowright" size={20} color="black" />
                            </TouchableOpacity>
                        </HStack>
                    </VStack>
                </Box>
            </Animated.View>
        </Animated.View>
    );
};
