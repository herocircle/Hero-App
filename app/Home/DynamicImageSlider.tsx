import React, { useRef, useState } from 'react';
import { View, Text, Image, FlatList, Pressable, HStack, VStack } from '@gluestack-ui/themed';
import { Dimensions, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type Props = {
    imagesArray: {
        imageUrl: string;
        body: string;
        quoteeName: string;
        quoteeOrganization: string;
        quoteePosition: string;
    }[];
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const DynamicImageSlider = ({ imagesArray }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<any>(null);


    const goToNextSlide = () => {
        if (currentIndex < imagesArray.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPreviousSlide = () => {
        if (currentIndex > 0) {
            flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
            setCurrentIndex(currentIndex - 1);
        }
    };

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    });

    return (
        <View position="relative" alignItems="center">
            <FlatList
                data={imagesArray}
                keyExtractor={(item, index) => index.toString()}
                ref={flatListRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged.current}
                renderItem={({ item }: any) => (
                    <View
                        justifyContent="center"
                        alignItems="center"
                        w={SCREEN_WIDTH}
                        h={450}
                    >
                        <Image
                            source={{ uri: item.imageUrl }}
                            alt="Slide Image"
                            style={{
                                width: "100%",
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            position='absolute'
                        />
                        <View
                        bg='rgba(0,0,0,0.5)'
                        w='100%'
                        h='100%'
                        position='absolute'
                        />
                        <Text fontSize="$lg" alignSelf='flex-end' maxWidth={"90%"} fontWeight="bold" color="$white"  mr="$3">
                            {item.body}
                        </Text>
                        <VStack gap="$1" alignItems='flex-end' alignSelf='flex-end' mr="$3" mt="$5">
                            <Text textAlign="right" color="$white" fontWeight="bold" >
                                {item.quoteeName}
                            </Text>
                            <Text textAlign="right" color="$white" fontWeight="bold" >
                                {item.quoteeOrganization}
                            </Text>
                            <Text textAlign="right" color="$white" fontWeight="bold" >
                                {item.quoteePosition}
                            </Text>
                        </VStack>
                    </View>
                )}
            />

            <HStack
                bottom="5%"
                position='absolute'
                gap="$8"
            >


                {(
                    <Pressable
                        onPress={goToPreviousSlide}
                        bg="$white"
                        rounded="$full"
                        w={40}
                        h={40}
                        disabled={currentIndex === 0}
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Text fontSize="$xl" fontWeight="bold" color="$gray700">
                        <AntDesign name="left" size={22} color="black" />
                        </Text>
                    </Pressable>
                )}

                {(
                    <Pressable
                        onPress={goToNextSlide}
                        bg="$white"
                        rounded="$full"
                        w={40}
                        disabled={currentIndex === imagesArray.length - 1}
                        h={40}
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Text fontSize="$2xl" fontWeight="bold" color="$black">
                            <AntDesign name="right" size={22} color="black" />
                        </Text>
                    </Pressable>
                )}
            </HStack>
        </View>
    );
};

export default DynamicImageSlider;
