import { VStack, Text, Pressable, HStack, Box } from '@gluestack-ui/themed'
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialCommunityIcons from "@expo/vector-icons//MaterialCommunityIcons"
import { formatDistanceToNow } from 'date-fns'
import { Platform } from "react-native"
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';


type props = {
    item: any,
    navigation: any
}

function SBImageItem({ item }: props) {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const isAndroid = Platform.OS !== "ios"

    return (
        <Pressable
            // onPress={() => navigation.navigate("singleCircle", {
            //     circleId: item?._id,
            // })}
            style={{ flex: 1 }}
            minWidth={isAndroid ? 340 : 12}
            mr={isAndroid ? 2 : 0}
            minHeight={isAndroid ? 200 : 12}
            position='relative'
        >

            <LinearGradient style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 5,
                height: "100%",
                borderRadius: 12,
            }}
                start={[0, 1]} end={[1, 0]}
                colors={
                    [
                        'rgba(0, 0, 0, .6)',
                        'rgba(0, 0, 0, .4)',
                        'rgba(0, 0, 0, .2)',
                        'rgba(0, 0, 0, .0)',
                    ]
                }
            />
            <Image
                cachePolicy="disk"
                priority="high"
                transition={1000}
                alt=""
                placeholder={isAndroid ? null : blurhash}
                style={{ borderRadius: 10, width: "100%", height: "100%" }}
                source={item?.image || { uri: `https://picsum.photos/id/24/400/300` }} />
            <Box flex={1} rounded={"$lg"} bg="#fff" zIndex={6} >
                <Box w='100%' rounded={"$lg"} h='100%' bg="#1A2433" opacity={40} position={"absolute"} />
                <HStack p="$3" position={"absolute"} w='100%' justifyContent={"space-between"} bottom={0} alignItems={"flex-end"} >
                    <Text fontFamily={"Visby-Bold"} color="white" fontSize={20} maxWidth='75%' >
                        {item?.title}
                    </Text>
                </HStack>
            </Box>
        </Pressable>
    );
};

export default SBImageItem