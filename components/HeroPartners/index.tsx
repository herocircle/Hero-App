import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import SinglePartnerModal from '../Modals/partnerModal';
import { Box, HStack, VStack, Text } from '@gluestack-ui/themed';

const PartnerHeader = () => {
  const [partnersData, setPartnersData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedPartner, setSelectedPartner] = useState<any | null>(null);
  const [tags, setTags] = useState<any[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [filteredPartners, setFilteredPartners] = useState<any[]>([]);
  const [showAllPartners, setShowAllPartners] = useState(false);

  const AXIOS_CONFIG = {
    baseURL: 'https://api.herocircle.app',
  };

  const fetchCirclesPartners = async (signal: AbortSignal) => {
    try {
      const response = await axios.get('/circles', { signal, ...AXIOS_CONFIG });
      const partners = response.data.flatMap((circle: { partners: any }) => circle.partners);
      setPartnersData(partners);
      return response.data;
    } catch (error) {
      console.error('Error fetching circles partners:', error);
      throw error;
    }
  };

  const fetchTags = async (signal: AbortSignal) => {
    try {
      const response = await axios.get('/tags', { signal, ...AXIOS_CONFIG });
      setTags(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching tags:', error);
      throw error;
    }
  };

  const { data: circles, isLoading } = useQuery({
    queryKey: ['getCirclesPartners'],
    queryFn: ({ signal }) => fetchCirclesPartners(signal),
  });

  const { isLoading: tagsLoading } = useQuery({
    queryKey: ['getTags'],
    queryFn: ({ signal }) => fetchTags(signal),
  });

  useEffect(() => {
    if (selectedTag === 'all') {
      setFilteredPartners(partnersData);
    } else {
      setFilteredPartners(partnersData.filter(partner => partner.tags.includes(selectedTag)));
    }
  }, [selectedTag, partnersData]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const toggleView = () => {
    setShowAllPartners(!showAllPartners);
  };

  return (
    <Box padding="$4" backgroundColor="#f9f9f9">
      <VStack space="xs" marginBottom="$4">
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
          <Picker
            selectedValue={selectedTag}
            onValueChange={(itemValue) => setSelectedTag(itemValue)}
            style={{
              height: 40,
              width: 150,
              borderColor: '#0202CC',
              borderWidth: 1,
              borderRadius: 10,
              color: '#0202CC',
              padding: 5,
            }}
          >
            <Picker.Item label="All" value="all" />
            {tags.map(tag => (
              <Picker.Item key={tag._id} label={tag.name} value={tag.name} />
            ))}
          </Picker>
        </HStack>
        <Box height="$1" backgroundColor="#000" marginVertical="$4" />
        <TouchableOpacity onPress={toggleView}>
          <Text fontSize="$md" color="#0202CC" textAlign="center" marginVertical="$2" fontWeight="bold">
            {showAllPartners ? 'Show Less Partners' : 'See All Partners'}
          </Text>
        </TouchableOpacity>
        <ScrollView>
          <FlatList
            key={showAllPartners ? 'grid' : 'list'}
            data={filteredPartners}
            keyExtractor={(item) => item.id}
            horizontal={!showAllPartners}
            renderItem={({ item }) => (
              <Box
              width={showAllPartners ? '$full' : '25%'}  
              backgroundColor={showAllPartners ? "#fff" : ""}
              borderRadius="$md"
              borderWidth={showAllPartners ? "$1" : "$0"}
              borderColor="#ddd"
              flexDirection={showAllPartners ? 'row' : 'column'}
              marginBottom="$4"
              marginRight={!showAllPartners ? '10%' : '$0'} 
              justifyContent='center'
            >
                <Image
                  source={{ uri: item.avatar }}
                  style={{
                    width: showAllPartners ? 100 : 250,
                    height: showAllPartners ? 100 : 250,
                    borderRadius: 12,
                    marginRight: showAllPartners ? 16 : 8,
                  }}
                />
                <Box 
                style={{
                  width : showAllPartners ? 190 : 250,
                  alignItems: showAllPartners ? "flex-start": "center",
                }}
              >
                  <HStack  marginBottom="$2">
                    <Text fontSize="$lg" textAlign="center" fontWeight="bold">
                      {item.firstname} {item.lastname}
                    </Text>
                    {showAllPartners && (
                      <TouchableOpacity onPress={() => setSelectedPartner(item)}>
                        <Text fontSize="$xl" ml={6} color="#0202CC">+</Text>
                      </TouchableOpacity>
                    )}
                  </HStack>
                  {!showAllPartners && (
                    <TouchableOpacity onPress={() => setSelectedPartner(item)}>
                      <Text fontSize="$sm" color="#0202CC" textDecorationLine="underline" textAlign="center">
                        Learn more
                      </Text>
                    </TouchableOpacity>
                  )}
                  {showAllPartners && (
                    <VStack space="xs">
                      <Text fontSize="$sm" color="#666">
                        {item._cares?.length > 0 ? (tags.find(type => type._id === item._cares[0])?.name.split(' ')[0] || 'Global') : 'Global'}
                      </Text>
                      <HStack space="xs" flexWrap="wrap">
                        <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                          {item.country}
                        </Text>
                        <Text fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                          {capitalizeFirstLetter(item.role)}
                        </Text>
                        {item.tags?.map((tag: string, index: number) => (
                          <Text key={index} fontSize="$xs" color="#0202CC" borderColor="#0202CC" borderWidth="$1" borderRadius="$md" paddingVertical="$1" paddingHorizontal="$2" marginRight="$2" marginBottom="$2">
                            {tag}
                          </Text>
                        ))}
                      </HStack>
                    </VStack>
                  )}
                </Box>
              </Box>
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
          />
          {selectedPartner && (
            <SinglePartnerModal
              selectedPartner={selectedPartner}
              onClose={() => setSelectedPartner(null)}
              isVisible={!!selectedPartner}
            />
          )}
        </ScrollView>
      </VStack>
    </Box>
  );
};

const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export default PartnerHeader;
