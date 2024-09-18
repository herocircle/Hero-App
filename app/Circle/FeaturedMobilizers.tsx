import { VStack, Text, View, SelectDragIndicatorWrapper, HStack } from '@gluestack-ui/themed'
import { Dimensions, FlatList, Platform } from 'react-native'
import { Box, Select, SelectTrigger, SelectInput, Icon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicator, SelectItem, SelectIcon } from '@gluestack-ui/themed';
import React, { useState } from 'react'
import { User } from '@/Api'
import { Pressable } from '@gluestack-ui/themed'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native';
import { ChevronDownIcon } from '@gluestack-ui/themed';


type props = {
    navigation: any
    mobilizers: any[]

}

const FeaturedMobilizers = ({ navigation, mobilizers }: props) => {

    const [selectedTag, setSelectedTag] = useState<string>('all');
    const [filteredPartners, setFilteredPartners] = useState<any[]>([]);
    const [showAllPartners, setShowAllPartners] = useState(false);
console.log(mobilizers)

    const toggleView = () => {
        setShowAllPartners(!showAllPartners);
    };

    return (
        <VStack w='100%' gap={20} >


            <Text fontSize="$2xl" color="$black" fontWeight="bold">
                <Text fontSize="$3xl" fontWeight='$bold' color="#0202CC">{filteredPartners.length}</Text> | HERO partners
            </Text>
            <Text fontSize="$md" color="#333" marginVertical="$2">
                We partner with the world’s most recognized organizations to increase our collective support to mobilizers worldwide.
            </Text>
            <HStack space="xs" alignItems="center" marginTop="$2">
                <Text fontSize="$md" marginRight="$2" fontWeight="bold" color="#0202CC">
                    Filter by:
                </Text>

                <Select
                    selectedValue={selectedTag}
                    onValueChange={(itemValue) => setSelectedTag(itemValue)}
                >
                    <SelectTrigger borderColor='#0202CC' width={200} rounded={10} variant="outline" size="md">
                        <SelectInput
                            style={{
                                height: 40,
                                width: 150,
                                color: '#0202CC',
                                padding: 5,
                            }}
                            placeholder="Select option" />
                        <SelectIcon >
                            <Icon as={ChevronDownIcon} />
                        </SelectIcon>
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                            <SelectDragIndicatorWrapper>
                                <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem label="All" value="all" />
                            <SelectItem key={'tag.name'} label={'tag.name'} value={'tag.name'} />
                        </SelectContent>
                    </SelectPortal>
                </Select>
            </HStack>
            <Box height="$1" backgroundColor="#000" marginVertical="$4" />
            <TouchableOpacity
                style={{ alignSelf: "flex-end" }}
                onPress={toggleView}>
                <Text fontSize="$md" color="#0202CC" textAlign="center" marginVertical="$2" fontWeight="bold">
                    {showAllPartners ? 'Show Less Partners' : 'See All Partners'}
                </Text>
            </TouchableOpacity>


            <VStack>
                <VStack gap={10} mt='$4' px="$4">
                    <Text fontWeight={700} fontSize={22} color='$black'>
                        Mobilizers in this circle
                    </Text>
                    <Text color='$black'>
                        From climate educators and campaigners to negotiators, these are the mobilizers driving grassroots change.                    </Text>
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
                        data={mobilizers}
                        renderItem={({ item }) =>
                            <CircleMobilizerCard
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

export default FeaturedMobilizers






type props2 = {
    navigation: any,
    item: User
}

function CircleMobilizerCard({ navigation, item }: props2) {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M | azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj ? j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

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
            <Text h={50} color="$black" fontSize={20} fontFamily='nova600' >
                {item?.firstname} {item?.lastname}
            </Text>
            <Pressable onPress={() => { }}>
                <Text fontSize="$md" fontWeight="$bold" color="#0202CC" textDecorationLine="underline" marginTop="$2">
                    Learn more
                </Text>
            </Pressable>
        </VStack>
    )
}