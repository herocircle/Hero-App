import { Text, Pressable, Box, VStack } from '@gluestack-ui/themed';
import React from "react";
import { Platform, Dimensions, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

type props = {
    item: any,
    navigation: any,
    onPress: () => void;

}

const SBImagePartner = ({ item, onPress }: props) => {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const isAndroid = Platform.OS !== "ios";
    const screenHeight = Dimensions.get('window').height;
    const imageHeight = screenHeight * 0.5;

    return (
        <VStack
            width={isAndroid ? 250 : 330}
            mr={isAndroid ? 20 : 31}
            mt={15}
            gap="$5"
        >

            <Pressable
                maxHeight={isAndroid ? 200 : 280}
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
                    source={item?.avatar || { uri: `https://picsum.photos/id/24/400/300` }}
                />
                <LinearGradient
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -2,
                        height: imageHeight,
                        borderRadius: 15,
                        zIndex: 5
                    }}
                    start={[0, 1]}
                    end={[1, 0]}
                    colors={[
                        'rgba(0, 0, 0, .6)',
                        'rgba(0, 0, 0, .4)',
                        'rgba(0, 0, 0, .2)',
                        'rgba(0, 0, 0, .0)',
                    ]}
                />


            </Pressable>
            <Text color="$black" fontSize={20} fontFamily='nova600' >
                {item.firstname} {item.lastname}
            </Text>

            <Pressable onPress={onPress}>
                <Text fontSize="$md" fontWeight="$bold" color="#0202CC" textDecorationLine="underline" marginTop="$2">
                    Learn more
                </Text>
            </Pressable>
        </VStack>
    );
}

export default SBImagePartner;
