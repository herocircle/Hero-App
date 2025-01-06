import React, { useState } from 'react'
import { VStack, Text, View, Button, HStack } from '@gluestack-ui/themed'
import { Dimensions, FlatList, Platform } from 'react-native'
import { Pressable } from '@gluestack-ui/themed'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient';
import { Box } from '@gluestack-ui/themed'
import { Ambassador, Circle } from '@/Api'
import { SingleMobilizerModal } from './FeaturedMobilizers'

type props = {
    navigation: any,
    circles: Circle[]
}

const CircleAmbassadors = ({ navigation, circles }: props) => {


    const [mobilizersList, setMobilizers] = useState<any[]>([]);



    React.useEffect(() => {
        setMobilizers(circles?.flatMap(circle => circle.ambassadors));
    }, [])



    const [selectedMobilizer, setSelectedMobilizer] = useState<any | null>(null);

    const [isVisible, setIsVisible] = useState(false);

    function toggleModal() {
        setIsVisible(!isVisible);
    }

    function handleOpenModal(mobilizer: any) {
        setSelectedMobilizer(mobilizer);
        toggleModal();
    }


    return (
        <VStack w='100%' gap={20} mb="$6" >
            <SingleMobilizerModal
                selectedMobilizer={selectedMobilizer}
                isVisible={isVisible}
                onClose={toggleModal}
            />
            <VStack>
                <VStack gap={10} mt='$4' px="$4">
                    <Text fontWeight={700} fontSize={22} color='$black'>
                        Featured Circle Ambassadors
                    </Text>
                    <Text color='$black'>
                        HERO is a global community of forward thinkers and doers. Meet the Ambassadors contributing to making this movement bigger and stronger.                    </Text>
                </VStack>
                <View
                    style={{
                        alignItems: "center",
                        width: "100%"
                    }}
                >
                    <FlatList
                        snapToAlignment={'start'}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        viewabilityConfig={{ itemVisiblePercentThreshold: 60, }}
                        style={{ padding: 10 }}
                        contentContainerStyle={{ paddingRight: 10 }}
                        decelerationRate={0.5}
                        keyExtractor={(_, index) => `id_${index}`}
                        data={mobilizersList}
                        renderItem={({ item }) =>
                            <CircleAmbassadorCard
                                item={item}
                                navigation={navigation}
                                openModal={() => handleOpenModal(item)}
                            />
                        }
                    />
                </View>
            </VStack>
        </VStack>
    )
}

export default CircleAmbassadors

type props2 = {
    navigation: any,
    item: any,
    openModal: () => void
}
function CircleAmbassadorCard({ navigation, item ,openModal}: props2) {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const isAndroid = Platform.OS !== "ios";
    const screenHeight = Dimensions.get('window').height;
    const imageHeight = screenHeight * 0.5;

    return (
        <VStack
            width={330}
            mr={31}
            mt={15}
            gap="$5"
        >

            <Pressable
                maxHeight={280}
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
                    source={item?.avatar || { uri: 'https://assets-global.website-files.com/649ec43fcf25ca83c7cd72f3/653a610b56749aaa6b7ad5b5_Group%20631504.png' }}
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
            <HStack gap={4} flexWrap='wrap' >

                {item?.country &&
                    <Box borderRadius={9} borderWidth={1} borderColor='#0202CC' alignSelf='flex-start' p="$2" >
                        <Text color="#0202CC" fontFamily='nova600'>
                            {item?.country}
                        </Text>
                    </Box>
                }
                {item?.tags?.length !== 0 &&
                    item?.tags?.map((tag: any) =>
                        tag && <Box
                            key={tag}
                            borderRadius={9} borderWidth={1} borderColor='#0202CC' alignSelf='flex-start' p="$2"
                        >
                            <Text color="#0202CC" fontFamily='nova600'>
                                {tag}
                            </Text>
                        </Box>
                    )
                }
            </HStack>
            <Text h={50} color="$black" fontSize={20} fontFamily='nova600' >
                {item?.firstname} {item?.lastname}
            </Text>
            {/* 
            {mobilizer.tags?.length !== 0 &&
                      mobilizer?.tags?.map((item: any) =>
                        <div key={item} className="rounded-xl border border-indigo-800 px-3 py-2 text-xs">
                          {t(`tags.${item}`) || 'Global'}

                        </div>
                      )
                    } */}





            <Pressable onPress={openModal}>
                <Text fontSize="$md" fontWeight="$bold" color="#0202CC" textDecorationLine="underline" marginTop="$2">
                    Learn more
                </Text>
            </Pressable>
        </VStack>
    )
}