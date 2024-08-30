import { Text, Pressable, Box } from '@gluestack-ui/themed';
import React from "react";
import { Platform, Dimensions } from "react-native";
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

type props = {
    item: any,
    navigation: any
}

function SBImageItem({ item }: props) {
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
                bg="#fff"
                zIndex={6}
                marginTop={20}
                height={190}
            >
                <Box
                    position="absolute"
                    top={0}
                    left={10}
                    px={3}
                    py={2}
                    bg="transparent"
                    borderColor="#0202CC"
                    borderWidth={2}
                    borderRadius={8}
                    zIndex={6}
                >
                    <Text
                        fontWeight="$bold"
                        color="#0202CC"
                        fontSize={16}
                    >
                        {item?.tags || 'Global'}
                    </Text>
                </Box>    
                <Box
                    style={{
                        height: '100%',
                        justifyContent: 'center',
                        paddingHorizontal: 10,
                        marginTop:"1%",
                    }}
                >
                    <Text
                        color="#1A2433"
                        fontWeight="$bold"
                        fontSize={20}
                        width={300}
                        numberOfLines={2}
                        ellipsizeMode='tail'
                        style={{ lineHeight: 20 }}
                    >
                        {item?.name || 'Name not available'}
                    </Text>
                    <Text
                        color="#1A2433"
                        marginTop={10}
                        fontSize={20}
                        numberOfLines={2}
                        width={300}
                        ellipsizeMode='tail'
                        style={{ lineHeight: 20 }}
                    >
                        {item?.goal || 'Goal not available'}
                    </Text>
                </Box>
                <Pressable
                    onPress={() => {
                        // handle the press event here
                    }}
                    style={{
                        position: 'absolute',
                        backgroundColor: '#0202CC', 
                        borderRadius: 20,
                        paddingVertical: 10, 
                        paddingHorizontal: 20, 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        bottom:0,
                        marginHorizontal: 10,
                    }}
                >
                    <Text
                        fontWeight={600}
                        fontSize={14}
                        style={{
                            color: '#FFFFFF', 
                        
                        }}
                    >
                        Join this Circle
                    </Text>
                </Pressable>
            </Box>
        </Pressable>
    );
}

export default SBImageItem;
