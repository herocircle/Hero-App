import { Text, Pressable, Box } from '@gluestack-ui/themed';
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
        <Pressable
            style={{ flex: 1 }}
            minWidth={isAndroid ? 340 : 12}
            mr={isAndroid ? 2 : 0}
            minHeight={isAndroid ? 200 : 12}
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
                    top:-2,
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
              
            <Box
                position='relative'
                bottom={0}
                left={0}
                right={0}
                bg="#f9f9f9"
                zIndex={6}
                height={190}
            >
                
                <Box
                    style={{
                        marginTop:"-10%",
                        height: '100%',
                        justifyContent: 'center',
                        paddingHorizontal: 6,
                     
                    }}
                >
                    <Text
                        fontWeight="$bold"
                        fontSize={20}
                        width={300}
                        numberOfLines={2}
                        style={{ lineHeight: 20 }}
                        textAlign='center'
                    >
                       {item.firstname} {item.lastname}
                    </Text>
                    <Pressable onPress={onPress}>
            <Text marginLeft='-6%' fontSize="$md" fontWeight="$bold" color="#0202CC" textDecorationLine="underline" textAlign="center" marginTop="$2">
              Learn more
            </Text>
          </Pressable>
                </Box>
               
            </Box>
        </Pressable>
    );
}

export default SBImagePartner;
