import React, { FC } from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, Text, HStack, VStack,  } from "@gluestack-ui/themed";
import SBImagePartner from "./SBImagePartner";
type Props = {
    AllCircles: any,
    filteredPartners: any[],
    showAllPartners: boolean,
    setSelectedPartner: (partner: any) => void,
    tags: any[],
    handlePartnerSelect: (partner: any) => void;

};

const PartnersCarousel: FC<Props> = ({ AllCircles, handlePartnerSelect, filteredPartners, showAllPartners, setSelectedPartner, tags }) => {
    const navigation = useNavigation();
    const data = showAllPartners ? filteredPartners : (AllCircles?.length >= 10 ? AllCircles.slice(0, 10) : AllCircles);

    return (
        <View style={{ alignItems: "center", width: "100%" }}>
            {showAllPartners && data && data.length > 0 ? (
                data?.map((item: any) =>
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

                            onPress={() => handlePartnerSelect(item)}
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
                            source={{ uri: item.avatar }}
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
                                        {item._cares?.length > 0 ? (tags.find(type => type._id === item._cares[0])?.name.split(' ')[0] || 'Global') : 'Global'}
                                    </Text>
                                    <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                                        {item.country}
                                    </Text>
                                    <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                                        {item.role.charAt(0).toUpperCase() + item.role.slice(1)}
                                    </Text>
                                </HStack>
                            </VStack>
                        </Box>
                    </Box>
                )
            ) : (
                <FlatList
                    snapToAlignment={'start'}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    viewabilityConfig={{ itemVisiblePercentThreshold: 60, }}
                    style={{ padding: 10 }}
                    contentContainerStyle={{ paddingRight: 10 }}
                    decelerationRate={0.5}
                    keyExtractor={(_, index) => `id_${index}`}
                    data={AllCircles}
                    renderItem={({ item }) => <SBImagePartner navigation={navigation} item={item} onPress={() => handlePartnerSelect(item)} />}

                />
            )}


        </View>
    );
};

export default PartnersCarousel;
