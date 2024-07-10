import { Dimensions, View, Platform, FlatList } from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import SBImageItem from "./SBImageItem";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FC } from "react";

const { width: PAGE_WIDTH } = Dimensions.get("window");

type props = {
    AllCircles: any,
    navigation: any
}

function CirclesCarousel({ AllCircles, navigation }: props) {


    const isAndroid = Platform.OS !== "ios"


    const progressValue = useSharedValue<number>(0);
    const baseOptions = ({
        width: PAGE_WIDTH,
        height: PAGE_WIDTH * 0.6,
    } as const);


    return (
        <View
            style={{
                alignItems: "center",
            }}
        >
            {!isAndroid ?
                <GestureHandlerRootView>
                    <Carousel
                        {...baseOptions}
                        style={{
                            width: PAGE_WIDTH,
                        }}
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
                        data={AllCircles?.length >= 10 ? AllCircles.slice(0, 10) : AllCircles}
                        renderItem={({ item }) => <SBImageItem item={item} navigation={navigation} />}
                    />
                </GestureHandlerRootView>

                :
                <FlatList
                    snapToAlignment={'center'}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
                    pagingEnabled={true}
                    style={{ padding: 10 }}
                    contentContainerStyle={{ paddingRight: 10 }}
                    decelerationRate={0.5}
                    keyExtractor={(_, index) => `id_${index}`}
                    data={AllCircles?.length >= 10 ? AllCircles.slice(0, 10) : AllCircles}
                    renderItem={({ item }) => <SBImageItem item={item} navigation={navigation} />}
                />
            }

            {!!progressValue && !isAndroid && (
                <View
                    style={
                        {
                            flexDirection: "row",
                            width: 100,
                            alignSelf: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 5,
                        }
                    }
                >
                    {(AllCircles?.length >= 10 ? AllCircles.slice(0, 10) : AllCircles).map((backgroundColor: string, index: number) => {
                        return (
                            <PaginationItem
                                backgroundColor={backgroundColor}
                                animValue={progressValue}
                                index={index}
                                key={index}
                                length={AllCircles.length}
                            />
                        );
                    })}
                </View>
            )}



        </View>
    );
}

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
                borderColor: "#009EB5",
                marginHorizontal: 2
            }}
        >
            <Animated.View
                style={[
                    {
                        borderRadius: 50,
                        backgroundColor: "#009EB5",
                        flex: 1,
                    },
                    animStyle,
                ]}
            />
        </View>
    );
};

export default CirclesCarousel;