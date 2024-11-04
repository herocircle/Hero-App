import React, { useState, useEffect, FC } from 'react';
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { useQuery } from '@tanstack/react-query';
import { TeamMember, TeamMemberApi } from '@/Api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { useNavigation } from "@react-navigation/native";
import SBImageItemTeam from './SBImageItemTeam';
import { Box, HStack, VStack, Text } from '@gluestack-ui/themed';
import TeamMemberModal from './TeamMemberModal';
import { Pressable } from '@gluestack-ui/themed';



type Props = {
  showAllTeam: boolean,
};
const HeroTeamAbout: FC<Props> = ({ showAllTeam }) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const navigation = useNavigation();


  const fetchTeamMembers = async () => {
    const response = await new TeamMemberApi(AXIOS_CONFIG).getTeamMembers(undefined);
    setTeamMembers(response.data);
    return response.data;
  };

  const { data: teamData } = useQuery({
    queryKey: ['getHeroTeam'],
    queryFn: fetchTeamMembers,
  });

  useEffect(() => {
    if (teamData) {
      setTeamMembers(teamData);
    }
  }, [teamData]);



  const teamDataLength = teamData?.length || 0;

  const [selectedPartner, setSelectedPartner] = useState<TeamMember | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const handlePartnerSelect = (partner: TeamMember) => {
    setSelectedPartner(partner);
    setIsVisible(true);
  };


  return (
    <>

      {selectedPartner &&
        <TeamMemberModal
          teamMember={selectedPartner}
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        />
      }

      <View style={{ alignItems: "center", width: "100%" }}>

        {showAllTeam && teamData && teamData.length > 0 ? (
          teamData?.map((item: any) =>
            <Box
              width="$full"
              key={item?.id+item?.name}
              backgroundColor="#fff"
              borderRadius="$md"
              borderWidth="$1"
              borderColor="#ddd"
              flexDirection="row"
              position="relative"
              marginBottom="$3"
              padding={"$3"}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 12,
                  marginRight: 16,
                }}
              />
              <Box style={{ alignItems: "flex-start" }}>
                <HStack marginBottom="$2">
                  <Text fontSize="$lg" textAlign="center" fontWeight="bold">
                    {item.name} {item.lastname}
                  </Text>
                </HStack>
                <VStack space="xs" flexWrap="wrap">
                  <HStack space="xs" flexWrap="wrap">
                    <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                      {item.country}
                    </Text>
                    {item?.role &&
                      <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                        {item?.role}
                      </Text>
                    }
                  </HStack>


                </VStack>
              </Box>
              <Pressable
                onPress={() => handlePartnerSelect(item)}
                style={{ alignSelf: "flex-end" }}
                position='absolute'
                bottom={15}
                right={15}
              >
                <Text
                  fontSize={16}
                  fontFamily='nova800'
                  textDecorationLine='underline'
                  style={{
                    color: '#0202CC',

                  }}
                >
                  Learn more
                </Text>
              </Pressable>
            </Box>
          )) : (
          <FlatList
            key={'list'}
            data={teamDataLength >= 10 ? teamMembers.slice(0, 10) : teamMembers}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToAlignment={'center'}
            pagingEnabled={true}
            style={{ padding: 10 }}
            contentContainerStyle={{ paddingRight: 10 }}
            decelerationRate={0.5}
            renderItem={({ item }) => <SBImageItemTeam onLearnMore={() => handlePartnerSelect(item)} item={item} navigation={navigation} />}
          />
        )}


      </View>
    </>
  );
};



export default HeroTeamAbout;






{/* <FlatList
key={`list-${teamData.length}`}
data={teamData}
keyExtractor={(item) => item.id}
numColumns={1}
renderItem={({ item }) => (
  <Box
    width="100%"
    backgroundColor="#fff"
    borderRadius="$md"
    borderWidth="$1"
    borderColor="#ddd"
    flexDirection="row"
    marginBottom="$4"
    justifyContent='center'
  >
    <Image
      source={{ uri: item.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 12,
        marginRight: 16,
      }}
    />
    <Box style={{ width: 190, alignItems: "flex-start" }}>
      <HStack marginBottom="$2">
        <Text fontSize="$lg" fontWeight="bold" color='black'>
          {item.name}
        </Text>
        <TouchableOpacity
          style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
        >
          <View style={{
            borderRadius: 9,
            borderWidth: 1,
            borderColor: '#0202CC',
            width: 18,
            height: 18,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text fontSize={11} color="#0202CC">+</Text>
          </View>
        </TouchableOpacity>
      </HStack>
      <VStack space="xs" flexWrap="wrap">
        <HStack space="xs" flexWrap="wrap">

          <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
            {item.country}
          </Text>
          <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
            {item.position.charAt(0).toUpperCase() + item.position.slice(1)}
          </Text>
        </HStack>
      </VStack>
    </Box>
  </Box>
)}
contentContainerStyle={{ paddingBottom: 20 }}
showsHorizontalScrollIndicator={false}
/> */}