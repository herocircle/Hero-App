import { VStack, Text, View, Pressable } from '@gluestack-ui/themed'
import { Dimensions, FlatList, Platform } from 'react-native'
import React, { useState } from 'react'
import { CircleWork } from '@/Api'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import WorkModal from './WorkModal'

type props = {
    navigation: any
    currentWork: CircleWork[]
}

const ClimateWins = ({ navigation, currentWork }: props) => {
    return (
        <VStack w='100%' gap={20} >


            <VStack>
                <VStack gap={10} mt='$4' >
                    <Text fontWeight={700} fontSize={22} color='$black'>
                        These are the people-powered climate wins that we are creating together.
                    </Text>
                    <Text color='$black'>
                        From initiatives like the Green Deal that impact millions of citizens to the adoption of green public transportation at the city level, mobilizers contribute to creating systemic change.                    </Text>
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
                        data={currentWork}
                        renderItem={({ item }) =>
                            <CircleWinCard
                                item={item}
                                navigation={navigation}
                            />
                        }
                    />
                </View>
            </VStack>
        </VStack>
    )
}

export default ClimateWins





type props2 = {
    navigation: any,
    item: CircleWork
}

function CircleWinCard({ navigation, item }: props2) {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const isAndroid = Platform.OS !== "ios";
    const screenHeight = Dimensions.get('window').height;
    const imageHeight = screenHeight * 0.5;
    const [selectedItem, setSelectedItem] = useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (item: any) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setIsModalOpen(false);
    };
    return (
        <VStack
            width={isAndroid ? 250 : 330}
            mr={isAndroid ? 20: 31}
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
                    source={item?.imageUrl || { uri: `https://picsum.photos/id/24/400/300` }}
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
                {item?.title}
            </Text>
            <Pressable onPress={() => openModal(item)}
            >
                <Text fontSize="$md" fontWeight="$bold" color="#0202CC" textDecorationLine="underline" marginTop="$2">
                    Learn more
                </Text>
            </Pressable>
            {selectedItem && (
                <WorkModal
                    isOpen={isModalOpen}
                    selectedItem={selectedItem}
                    closeModal={closeModal}
                />
            )}
        </VStack>
    )
}