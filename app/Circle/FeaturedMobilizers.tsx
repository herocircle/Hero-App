import { VStack, Text, View, SelectDragIndicatorWrapper, HStack, ScrollView } from '@gluestack-ui/themed'
import { Dimensions, FlatList, Linking, Platform } from 'react-native'
import { Box, Select, SelectTrigger, SelectInput, Icon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicator, SelectItem, SelectIcon } from '@gluestack-ui/themed';
import React, { useRef, useState } from 'react'
import { TagsApi, User } from '@/Api'
import { Pressable } from '@gluestack-ui/themed'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native';
import { ChevronDownIcon } from '@gluestack-ui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import { useQuery } from '@tanstack/react-query';
import { AXIOS_CONFIG, BaseUrl } from '@/Api/wrapper';
import axios from 'axios';


type props = {
    navigation: any
    circles?: any[]

}

const FeaturedMobilizers = ({ navigation, circles }: props) => {


    const [mobilizersList, setMobilizers] = useState<any[]>([]);


    const { data: tags } = useQuery({
        queryKey: ['tags'],
        queryFn: async () => {
            const { data } = await new TagsApi(AXIOS_CONFIG).getTags();
            return data
        }
    });

    const { data: circleMobilizersCount } = useQuery({
        queryKey: ['mobilizersList'],
        queryFn: async () => {
            const response = await axios.get(`${BaseUrl}/mobilizers/all`);
            return response.data;
        }
    });

    const [filterType, setFilterType] = useState('all');


    const handleFilterChange = async (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = event.target.value || 'all';

        setFilterType(value);

        if (value !== 'all' && tags && circles) {
            const selectedType = tags.find((tags) => tags.name === value);
            if (selectedType) {
                setMobilizers(
                    circles
                        ?.flatMap((circle) => circle?.mobilizers || [])
                        ?.filter((mobilizer) => mobilizer.tags?.includes(selectedType.name))
                );
            }
        } else {
            const mobilizers = circles?.flatMap((circle) => circle?.mobilizers || []);
            setMobilizers(mobilizers || []);
        }
    };


    React.useEffect(() => {
        if (circles) handleFilterChange({ target: { value: filterType } } as any);
    }, [circles]);


    const [showAllMobilizers, setShowAllMobilizers] = useState(false);

    const toggleView = () => {
        setShowAllMobilizers(!showAllMobilizers);
    };



    const [isVisible, setIsVisible] = useState(false);

    function toggleModal() {
        setIsVisible(!isVisible);
    }


    const [selectedMobilizer, setSelectedMobilizer] = useState<any | null>(null);

    function handleOpenModal(mobilizer: any) {
        setSelectedMobilizer(mobilizer);
        toggleModal();
    }








    const [selectedTag, setSelectedTag] = useState<string>('all');


    React.useEffect(() => {
        if (selectedTag === 'all') {
            if (circles) handleFilterChange({ target: { value: 'all' } } as any);
        } else {
            if (tags && circles) {
                const selectedType = tags.find((tag) => tag.name === selectedTag);
                if (selectedType) {
                    setMobilizers(
                        circles
                            ?.flatMap((circle) => circle?.mobilizers || [])
                            ?.filter((mobilizer) => mobilizer.tags?.includes(selectedType.name))
                    );
                }
            }
        }
    }, [selectedTag, circleMobilizersCount, tags]);

    return (
        <VStack w='100%' gap={20} mt="$4" >
            <SingleMobilizerModal
                selectedMobilizer={selectedMobilizer}
                isVisible={isVisible}
                onClose={toggleModal}
            />
            <VStack px="$3" >

                <Text fontSize="$2xl" color="$black" fontWeight="bold">
                    <Text fontSize="$3xl" fontWeight='$bold' color="#0202CC">{mobilizersList?.length}</Text> | Mobilizers in this circle
                </Text>
                <Text fontSize="$md" color="#333" marginVertical="$2">
                    From climate educators and campaigners to negotiators, these are the mobilizers driving grassroots change.
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
                                {tags?.map((tag: any) => (
                                    <SelectItem key={tag.name} label={tag.name} value={tag.name} />
                                ))}
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                </HStack>
            </VStack>
            <Box height={1} backgroundColor="#000" marginVertical="$4" />
            <TouchableOpacity
                style={{ alignSelf: "flex-end", paddingHorizontal: 10 }}
                onPress={toggleView}>
                <Text fontSize="$md" color="#0202CC" textAlign="center" marginVertical="$2" fontWeight="bold">
                    {showAllMobilizers ? 'See Featured Mobilizers' : 'See All Mobilizers in this Circle'}
                </Text>
            </TouchableOpacity>

            {mobilizersList?.length === 0 && (
                <Text fontSize="$md" color="#333" marginVertical="$2">
                    0 mobilizers.
                </Text>
            )}
            <Box
                alignSelf='center' w="$full">

                <FlatList
                    snapToAlignment={'start'}
                    horizontal={!showAllMobilizers}
                    showsHorizontalScrollIndicator={false}
                    viewabilityConfig={{ itemVisiblePercentThreshold: 60, }}
                    style={{ padding: 10 }}
                    contentContainerStyle={{ paddingRight: 10 }}
                    decelerationRate={0.5}
                    keyExtractor={(_, index) => `id_${index}`}
                    data={mobilizersList}
                    renderItem={({ item }) =>
                        showAllMobilizers ?
                            <HorizontalMobilizerCard
                                item={item}
                                handleOpenModal={handleOpenModal}
                                tags={tags}
                            />
                            :
                            <CircleMobilizerCard
                                item={item}
                                navigation={navigation}
                                handleOpenModal={handleOpenModal}
                            />
                    }
                />
            </Box>
        </VStack>
    )
}

export default FeaturedMobilizers






type props2 = {
    navigation: any,
    item: User,
    handleOpenModal: (mobilizer: User) => void
}

function CircleMobilizerCard({ navigation, item, handleOpenModal }: props2) {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M | azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj ? j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const isAndroid = Platform.OS !== "ios";
    const screenHeight = Dimensions.get('window').height;
    const imageHeight = screenHeight * 0.5;

    const capitalizeFirstLetter = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

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
                    source={item?.avatar || { uri: `https://staging.herocircle.app/_next/image?url=https%3A%2F%2Fassets-global.website-files.com%2F649ec43fcf25ca83c7cd72f3%2F653a610b56749aaa6b7ad5b5_Group%2520631504.png&w=3840&q=100` }}
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
            <VStack gap="$1" >
                <HStack gap={4} mb={8} flexWrap='wrap' >

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
                    {(item?.tags?.length === 0 || !item?.tags) &&
                        <Box
                            borderRadius={9} h={35} borderWidth={1} borderColor='#fff' alignSelf='flex-start' p="$2"
                        >
                            <Text color="#fff" fontFamily='nova600'>
                                Mobilizer
                            </Text>
                        </Box>
                    }
                </HStack>
                <Text h={50} color="$black" fontSize={20} fontFamily='nova600' >
                    {item?.firstname} {item?.lastname}
                </Text>
                <Text color="$black" fontSize={20} fontFamily='nova' >
                    {capitalizeFirstLetter(
                        item?.mobilizerType
                            ? item.mobilizerType
                            : item.role
                    )}
                </Text>
            </VStack>
            <Pressable onPress={() => {
                handleOpenModal(item)
            }}>
                <Text fontSize="$md" fontWeight="$bold" color="#0202CC" textDecorationLine="underline" marginTop="$2">
                    Learn more
                </Text>
            </Pressable>

        </VStack>
    )
}








export const SingleMobilizerModal = ({ selectedMobilizer, onClose, isVisible }: any) => {
    const soundRef = useRef<any | null>(null);

    const closeModal = () => {
        pauseAudio();
        onClose();
    };

    const pauseAudio = () => {
        if (soundRef.current) {
            soundRef.current.pause();
        }
    };

    const capitalizeFirstLetter = (text: string) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

    const NEXT_LOCALE = 'en';
    const biography = selectedMobilizer?.bio?.find((bio: { lang: any; }) => bio.lang === NEXT_LOCALE);
    const displayText = biography?.text ? biography?.text : selectedMobilizer?.description;
    const climateWinsText = selectedMobilizer?.climateWins?.find((climate: { lang: any; }) => climate.lang === NEXT_LOCALE);
    const displayClimateWinsText = climateWinsText?.text ? climateWinsText?.text : '';

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={closeModal}
            backdropColor="black"
            style={{ justifyContent: 'center', alignItems: 'center', margin: 0 }}
        >
            <VStack gap="$5" py={70} px={20} bg="$black" position='relative' opacity={0.75} minHeight="100%" flex={1} width="100%" alignItems="flex-start">

                <Pressable onPress={() => closeModal()} style={{ position: 'absolute', right: 20, top: 70, zIndex: 100 }}>
                    <Ionicons name="close-circle" size={30} color="white" />
                </Pressable>

                <Box alignSelf='center' borderRadius={75} borderWidth={1} borderColor="white" overflow="hidden" mb={4}>
                    <Image
                        source={{
                            uri: selectedMobilizer?.avatar ||
                                'https://staging.herocircle.app/_next/image?url=https%3A%2F%2Fassets-global.website-files.com%2F649ec43fcf25ca83c7cd72f3%2F653a610b56749aaa6b7ad5b5_Group%2520631504.png&w=3840&q=100'
                        }}
                        style={{ width: 150, height: 150, borderRadius: 75 }}
                        alt="Avatar"
                    />
                </Box>
                <Text color="white" fontSize={24} fontWeight="bold" mb={2} alignSelf='center'>
                    {selectedMobilizer?.firstname} {selectedMobilizer?.lastname}
                </Text>
                <HStack space={"lg"} mb={4} alignSelf='center'>
                    {selectedMobilizer?.country && (
                        <Box bg="black" borderRadius={10} justifyContent='center' borderWidth="$2" borderBlockColor='white' borderColor='white' p={3}>
                            <Text color="white">{selectedMobilizer?.country}</Text>
                        </Box>
                    )}
                    {selectedMobilizer?.role && (
                        <Box bg="black" borderRadius={10} justifyContent='center' borderWidth="$2" borderBlockColor='white' borderColor='white' p={3}>
                            <Text color="white">{capitalizeFirstLetter(selectedMobilizer?.role)}</Text>
                        </Box>
                    )}
                </HStack>
                <HStack space={"xs"} mb={4} alignSelf='center'>
                    {selectedMobilizer?.linkedin && (
                        <Pressable rounded={"$full"} bg="#fff" p="$2" onPress={() => Linking.openURL(selectedMobilizer?.linkedin)}>
                            <Ionicons name="logo-linkedin" size={24} color="#0202CC" />
                        </Pressable>
                    )}
                    {selectedMobilizer?.website && (
                        <Pressable rounded={"$full"} bg="#fff" p="$2" onPress={() => Linking.openURL(selectedMobilizer?.website)}>
                            <Ionicons name="earth" size={24} color="#0202CC" />
                        </Pressable>
                    )}
                    {selectedMobilizer?.instagram && (
                        <Pressable rounded={"$full"} bg="#fff" p="$2" onPress={() => Linking.openURL(selectedMobilizer?.instagram)}>
                            <Ionicons name="logo-instagram" size={24} color="#0202CC" />
                        </Pressable>
                    )}
                    {selectedMobilizer?.twitter && (
                        <Pressable rounded={"$full"} bg="#fff" p="$2" onPress={() => Linking.openURL(`https://www.twitter.com/${selectedMobilizer?.twitter}`)}>
                            <Ionicons name="logo-twitter" size={24} color="#0202CC" />
                        </Pressable>
                    )}
                    {selectedMobilizer?.tiktok && (
                        <Pressable rounded={"$full"} bg="#fff" p="$2" onPress={() => Linking.openURL(`https://www.tiktok.com/${selectedMobilizer?.tiktok}`)}>
                            <Ionicons name="logo-tiktok" size={24} color="#0202CC" />
                        </Pressable>
                    )}
                </HStack>
                {selectedMobilizer?.audio && (
                    <Box mb={4} alignSelf='center'>
                        <Text color="white">Audio available</Text>
                    </Box>
                )}
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                    <Text color="white" fontSize={20} fontWeight="bold" mt="$4" mb={2}>
                        Bio
                    </Text>
                    <Text color="white" fontSize={16} textAlign="justify">
                        {displayText}
                    </Text>
                    {selectedMobilizer?.climateWins?.length > 0 && (
                        <Box mt="$4">
                            <Text color="white" fontSize={20} fontWeight="bold" mb={2}>
                                Climate wins
                            </Text>
                            <Text color="white" fontSize={16} textAlign="justify">
                                {displayClimateWinsText}
                            </Text>
                        </Box>
                    )}
                </ScrollView>
            </VStack>
        </Modal>
    );
};










const HorizontalMobilizerCard = ({ item, handleOpenModal, tags }: any) => {
    return (

        <Box
            width="$full"
            key={item?.firstname}
            backgroundColor="#fff"
            borderRadius="$md"
            borderWidth="$1"
            borderColor="#ddd"
            flexDirection="row"
            position="relative"
            marginBottom="$3"
            padding={"$3"}
        >
            <TouchableOpacity

                onPress={() => handleOpenModal(item)}
                style={{
                    position: 'absolute',
                    flex: 1,
                    alignItems: 'flex-end', justifyContent: 'center',
                    top: 10, right: 10
                }}
            >
                <View style={{
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: '#0202CC',
                    width: 28,
                    height: 28,
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex'
                }}>
                    <Text fontSize={16} color="#0202CC">+</Text>
                </View>
            </TouchableOpacity>
            <Image
                source={{ uri: item?.avatar || 'https://staging.herocircle.app/_next/image?url=https%3A%2F%2Fassets-global.website-files.com%2F649ec43fcf25ca83c7cd72f3%2F653a610b56749aaa6b7ad5b5_Group%2520631504.png&w=3840&q=100' }}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 12,
                    marginRight: 16,
                }}
            />
            <Box style={{ width: 190, alignItems: "flex-start" }}>
                <HStack marginBottom="$2">
                    <Text fontSize="$lg" textAlign="center" fontWeight="bold">
                        {item.firstname} {item.lastname}
                    </Text>
                </HStack>
                <VStack space="xs" flexWrap="wrap">
                    <HStack space="xs" flexWrap="wrap">
                        <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                            {item._cares?.length > 0 ? (tags.find((type: any) => type._id === item._cares[0])?.name.split(' ')[0] || 'Global') : 'Global'}
                        </Text>
                        {item?.country &&
                            <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                                {item?.country}
                            </Text>}
                        <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                            {item.role.charAt(0).toUpperCase() + item.role.slice(1)}
                        </Text>
                    </HStack>
                </VStack>
            </Box>
        </Box>
    );
}
