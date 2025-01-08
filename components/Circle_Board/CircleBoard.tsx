import React, { useState, useEffect, FC } from 'react';
import { View, Platform, FlatList, Image, TouchableOpacity } from "react-native";
import { useQuery } from '@tanstack/react-query';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { useNavigation } from "@react-navigation/native";
import SBCircleBoardItem from './SBCircleBoardItem';
import { Box, HStack, VStack, Text } from '@gluestack-ui/themed';
import { CircleBoardApi } from '@/Api';
import { AntDesign } from '@expo/vector-icons';


type Props = {
    showAllMembers: boolean,
};

const CircleBoardAbout: FC<Props> = ({ showAllMembers }) => {
    const [members, setMembers] = useState<any[]>([]);
    const navigation = useNavigation();

    const fetchCircleBoardMembers = async () => {
        const response = await new CircleBoardApi(AXIOS_CONFIG).findAll(undefined);
        setMembers(response.data);
        return response.data;
    };

    const { data: memberData } = useQuery({
        queryKey: ['getCircleBoardMembers'],
        queryFn: fetchCircleBoardMembers,
    });

    useEffect(() => {
        if (memberData) {
            setMembers(memberData);
        }
    }, [memberData]);


    const memberDataLength = memberData?.length || 0;
    return (
        <View style={{ alignItems: "center", width: "100%" }}>
            {showAllMembers && memberData && memberData.length > 0 ? (
                <FlatList
                    key={`list-${memberData.length}`}
                    data={memberData}
                    // @ts-ignore
                    keyExtractor={(item) => item?._id?.toString()}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <HStack
                            borderRadius="$md"
                            borderWidth="$1"
                            borderColor="#ddd"
                            marginBottom="$4"
                            alignContent='space-between'
                            alignItems='flex-start'
                            p={8}
                            w="100%"
                            minWidth={'100%'}
                        >
                            <HStack>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 12,
                                        marginRight: 16,
                                    }}
                                />
                                <VStack gap="$1" marginBottom="$2">
                                    <Text fontSize="$md" fontWeight="bold" color='black'>
                                        {item.firstName}  {item.lastName}
                                    </Text>
                                    <Text fontSize="$xs" color="black">
                                        {item.role}
                                    </Text>
                                    <Text alignSelf='flex-start' fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2">
                                        {item.country}
                                    </Text>
                                </VStack>
                            </HStack>
                            <TouchableOpacity
                                style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
                            >
                                <View style={{
                                    borderRadius: 100,
                                    borderWidth: 1,
                                    borderColor: '#0202CC',
                                    width: 25,
                                    height: 25,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <AntDesign name="plus" size={15} color="#0202CC" />
                                </View>
                            </TouchableOpacity>
                        </HStack>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsHorizontalScrollIndicator={false}
                />
            ) : (
                <FlatList
                    key={'list'}
                    data={memberDataLength >= 10 ? members.slice(0, 10) : members}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment={'center'}
                    pagingEnabled={true}
                    style={{ padding: 10 }}
                    contentContainerStyle={{ paddingRight: 10 }}
                    decelerationRate={0.5}
                    renderItem={({ item }) => <SBCircleBoardItem item={item} navigation={navigation} />}
                />
            )}
        </View>
    );
};



export default CircleBoardAbout;
