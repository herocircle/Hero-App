import { Text, Pressable, Box, VStack } from '@gluestack-ui/themed';
import React from "react";
import { Platform, Dimensions } from "react-native";
import { Image } from 'expo-image';

type props = {
    item: any,
    navigation: any,
    onLearnMore: () => void
}

function SBImageItemTeam({ item, onLearnMore }: props) {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const isAndroid = Platform.OS !== "ios";
    const screenHeight = Dimensions.get('window').height;
    const imageHeight = screenHeight * 0.5;
    return (
        <Pressable
            width={isAndroid ? 250 : 330}
            mr={isAndroid ? 20 : 31}
            mt={15}
            gap="$5"
        >
            <Pressable
                maxHeight={isAndroid ? 280 : 350}
                position='relative'
                overflow='hidden'
                rounded={15}
            >
                <Image
                    cachePolicy="disk"
                    priority="high"
                    transition={1000}
                    alt=""
                    placeholder={isAndroid ? null : blurhash}
                    style={{ borderRadius: 15, width: "100%", height: imageHeight }}
                    source={item?.image || { uri: `https://picsum.photos/id/24/400/300` }}
                />
            </Pressable>
            <VStack
                position='relative'
                gap="$2"
            >
                <Box
                    px={6}
                    py={2}
                    alignSelf='flex-start'
                    bg="transparent"
                    borderColor="#0202CC"
                    borderWidth={1}
                    borderRadius={8}
                    zIndex={6}
                >
                    <Text
                        fontFamily='nova600'
                        color="#0202CC"
                    >
                        {item?.country || 'Global'}
                    </Text>
                </Box>

                <Text
                    color='black'
                    fontWeight="$bold"
                    fontSize={20}
                    width={300}
                    numberOfLines={2}
                >
                    {item?.name || 'Name not available'}
                </Text>
                <Text
                    color='black'
                    fontWeight={450}
                    fontSize={14}
                    numberOfLines={3}
                    width={300}
                    ellipsizeMode='tail'
                >
                    {item?.description || 'Goal not available'}
                </Text>

                <Pressable
                    onPress={onLearnMore}
                >
                    <Text
                        fontSize={20}
                        fontFamily='nova800'
                        textDecorationLine='underline'
                        style={{
                            color: '#0202CC',

                        }}
                    >
                        Learn more
                    </Text>
                </Pressable>
            </VStack>
        </Pressable>
    );
}

export default SBImageItemTeam;
