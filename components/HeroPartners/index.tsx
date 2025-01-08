import React, { useState, useEffect } from 'react';
import { TouchableOpacity, } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ScrollView } from 'react-native';
import SinglePartnerModal from '../Modals/partnerModal';
import { Box, HStack, VStack, Text, Select, SelectTrigger, SelectInput, Icon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicator, SelectItem, SelectIcon } from '@gluestack-ui/themed';
import PartnersCarousel from './HeroCarousel';
import { ChevronDownIcon } from '@gluestack-ui/themed';
import { SelectDragIndicatorWrapper } from '@gluestack-ui/themed';
import SkeletonComponent from '../Skeleton';

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

  if (isLoading) return <SkeletonComponent height={340} />;

  if (error) {
    return <Text>{error}</Text>;
  }

  const toggleView = () => {
    setShowAllPartners(!showAllPartners);
  };
  const handlePartnerSelect = (partner: any) => {
    setSelectedPartner(partner);
  };

  return (
    <Box px="$4" py="$12" backgroundColor="#f9f9f9">
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
                {tags.map(tag => (
                  <SelectItem key={tag.name} label={tag.name} value={tag.name} />
                ))}
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
        <ScrollView>
          < PartnersCarousel
            handlePartnerSelect={handlePartnerSelect}
            AllCircles={partnersData} filteredPartners={filteredPartners} showAllPartners={showAllPartners} setSelectedPartner={selectedPartner} tags={tags} />
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


export default PartnerHeader;
