import React, { useState, useEffect, FC } from 'react';
import { Dimensions, View, Platform, FlatList, Image, TouchableOpacity } from "react-native";
import { useQuery } from '@tanstack/react-query';
import { TeamMember, TeamMemberApi } from '@/Api'; 
import { AXIOS_CONFIG } from '@/Api/wrapper';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import SBImageItemTeam from './SBImageItemTeam';
import { Box, HStack, VStack , Text} from '@gluestack-ui/themed';


const { width: PAGE_WIDTH } = Dimensions.get("window");
type Props = {
    showAllTeam: boolean,
};
const HeroTeamAbout: FC<Props> = ({   showAllTeam }) => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const navigation = useNavigation();
  const isAndroid = Platform.OS !== "ios";

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

  const progressValue = useSharedValue<number>(0);
  const baseOptions = {
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 0.75,
  };

  const teamDataLength = teamData?.length || 0;

  return (
    <>
        <View style={{ alignItems: "center", width: "100%" }}>
    
            {showAllTeam && teamData && teamData.length > 0 ? (
                <FlatList
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
                />
            ) : (
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
                        renderItem={({ item }) => <SBImageItemTeam item={item} navigation={navigation} />}
                    />
            )}

            {!isAndroid && !!progressValue && (
                <View style={{ flexDirection: "row", width: 100, alignSelf: "center", alignItems: "center", justifyContent: "center", marginTop: 5 }}>
                    {(teamDataLength >= 10 ? teamData?.slice(0, 10) : teamData)?.map((_: any, index: any) => (
                        <PaginationItem
                            backgroundColor={"#0202CC"}
                            animValue={progressValue}
                            index={index}
                            key={index}
                            length={teamDataLength}
                        />
                    ))}
                </View>
            )}
        </View>
    </>
);
};



export const PaginationItem: FC<{
  index: number,
  backgroundColor: string,
  length: number,
  animValue: Animated.SharedValue<number>,
}> = ({ index, length, animValue }) => {
  const width = 10;
  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);

  return (
    <View style={{ backgroundColor: "white", width: width, height: width, borderRadius: 50, overflow: "hidden", borderWidth: 1, borderColor: "#0202CC", marginHorizontal: 2 }}>
      <Animated.View style={[{ borderRadius: 50, backgroundColor: "#0202CC", flex: 1 }, animStyle]} />
    </View>
  );
};

export default HeroTeamAbout;
