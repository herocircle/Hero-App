import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import SinglePartnerModal from '../Modals/partnerModal';
import { Box, HStack, VStack, Text } from '@gluestack-ui/themed';
import PartnersCarousel from './HeroCarousel';

type Partner = { /* define your partner type here */ };
type Tag = { _id: string; name: string };

const AXIOS_CONFIG = {
  baseURL: 'https://api.herocircle.app',
};

const fetchCirclesPartners = async (signal: AbortSignal): Promise<Partner[]> => {
  try {
    const response = await axios.get('/circles', { signal, ...AXIOS_CONFIG });
    const partners = response.data.flatMap((circle: { partners: Partner[] }) => circle.partners);
    return partners;
  } catch (error) {
    console.error('Error fetching circles partners:', error);
    throw error;
  }
};

const fetchTags = async (signal: AbortSignal): Promise<Tag[]> => {
  try {
    const response = await axios.get('/tags', { signal, ...AXIOS_CONFIG });
    return response.data;
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
};

const PartnerHeader = () => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [filteredPartners, setFilteredPartners] = useState<Partner[]>([]);
  const [showAllPartners, setShowAllPartners] = useState(false);

  const { data: partnersData = [], isLoading: partnersLoading } = useQuery({
    queryKey: ['getCirclesPartners'],
    queryFn: fetchCirclesPartners,
  });

  const { data: tagsData = [], isLoading: tagsLoading } = useQuery({
    queryKey: ['getTags'],
    queryFn: fetchTags,
  });

  useEffect(() => {
    setTags(tagsData);
  }, [tagsData]);

  useEffect(() => {
    if (selectedTag === 'all') {
      setFilteredPartners(partnersData);
    } else {
      setFilteredPartners(partnersData.filter((partner: { tags: string | string[]; }) => partner.tags.includes(selectedTag)));
    }
  }, [selectedTag, partnersData]);

  if (partnersLoading || tagsLoading) {
    return <Text>Loading...</Text>;
  }

  const toggleView = () => {
    setShowAllPartners(!showAllPartners);
  };

  const handlePartnerSelect = (partner: Partner) => {
    setSelectedPartner(partner);
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
          <PartnersCarousel
            handlePartnerSelect={handlePartnerSelect}
            AllCircles={partnersData}
            filteredPartners={filteredPartners}
            showAllPartners={showAllPartners}
            setSelectedPartner={setSelectedPartner}
            tags={tags}
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
