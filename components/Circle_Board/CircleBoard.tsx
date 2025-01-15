import React, { useState, useEffect, FC } from 'react';
import { View, FlatList } from "react-native";
import { useQuery } from '@tanstack/react-query';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { useNavigation } from "@react-navigation/native";
import SBCircleBoardItem from './SBCircleBoardItem';
import { CircleBoardApi } from '@/Api';




const CircleBoardAbout = () => {
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
        </View>
    );
};



export default CircleBoardAbout;
