import React, { useEffect, useState } from 'react';
import { Box, Text, View, VStack } from '@gluestack-ui/themed';
import { Button, Image, Pressable, ScrollView } from 'react-native';
import { TeamMember, TeamMemberApi } from '@/Api';
import { useQuery } from '@tanstack/react-query';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { useNavigation } from "@react-navigation/native";
import TeamMemberModal from '@/components/Team_About/TeamMemberModal';

const HeroTeam = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const navigation = useNavigation();

    const fetchTeamMembers = async () => {
        try {
            const response = await new TeamMemberApi(AXIOS_CONFIG).getTeamMembers();
            console.log("API response:", response.data);
            return response.data || [];
        } catch (error) {
            console.error("Error fetching team members:", error);
            return [];
        }
    };

    const { data: teamData, error } = useQuery({
        queryKey: ['getHeroTeam'],
        queryFn: fetchTeamMembers,
    });

    useEffect(() => {
        if (teamData) {
            setTeamMembers(teamData);
        }
    }, [teamData]);

    if (error) {
        return (
            <View>
                <Text>Error loading team data.</Text>
            </View>
        );
    }

    return (
        <View w='100%' pt="$8" bg="$white" px="$4">
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
            >
                <VStack gap='$4'>
                    <VStack mb="$5" alignItems='center' gap="$3">
                        <Text textAlign='center' color="$black" fontFamily='nova800' fontSize={35}>
                            Meet the HERO team
                        </Text>
                        <Text textAlign='center' color="$black" fontFamily='nova400'>
                            We are on a mission to empower people to accelerate change in the world
                        </Text>
                    </VStack>

                    {teamMembers.map(member => (
                     <HeroMember
                     key={member.id}
                     item={member}
                     navigation={navigation}
                 />
                    ))}
                </VStack>
            </ScrollView>
        </View>
    );
};

export default HeroTeam;


type HeroMemberProps = {
    item: TeamMember;
    navigation: any;
};

const HeroMember = ({ item, navigation }: HeroMemberProps) => {
    const [selectedPartner, setSelectedPartner] = useState<TeamMember | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const handlePartnerSelect = (partner: TeamMember) => {
        setSelectedPartner(partner);
        setIsVisible(true);
    };

    const { name, position, image, description } = item;

    return (
        <>
            {selectedPartner && (
                <TeamMemberModal
                    teamMember={selectedPartner}
                    isVisible={isVisible}
                    onClose={() => setIsVisible(false)}
                />
            )}
            <VStack w="100%" bg="$white">
                <Image
                    source={image ? { uri: image } : require('../../assets/images/HeroPlaceholder.webp')}
                    style={{ width: '100%', height: 300 }}
                />
                <VStack gap="$2" p="$4" justifyContent="center" h={100} bg="$black">
                    <Text fontSize={18} fontFamily="nova600" color="$white">
                        {name}
                    </Text>
                    <Text fontFamily="nova" color="$white">
                        {position}
                    </Text>
                  
                    <Pressable
                        onPress={() => {
                            if (showMore) {
                                setShowMore(false);
                            } else {
                                handlePartnerSelect(item);
                                setShowMore(true); 
                            }
                        }}
                        style={{ alignSelf: 'flex-end' }}
                    >
                        <Text
                            fontSize={16}
                            fontFamily="nova800"
                            textDecorationLine="underline"
                            style={{ color: '#0202CC' }}
                        >
                            Learn more
                        </Text>
                    </Pressable>
                </VStack>
            </VStack>
        </>
    );
};

