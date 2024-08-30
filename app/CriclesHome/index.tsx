// src/components/Circles.tsx

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Button, HStack, Text, VStack, Image } from '@gluestack-ui/themed'
import CirclesCarousel from '@/components/CirclesCarousel/CirclesCarousel';
import { CirclesApi } from '@/Api/apis/circles-api';
import { AXIOS_CONFIG } from '@/Api/wrapper';

const CirclesView: React.FC = () => {
    const { data: circlesData, isLoading, error } = useQuery({
        queryKey: ['circles-with-types'], 
        queryFn: async ({ signal }) => {
          const response = await new CirclesApi(AXIOS_CONFIG).getCircles(
            undefined,
            undefined,
            undefined,
            { signal }
          );
          return response.data; 
        }
      });
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching data</Text>;

  return (
    <VStack w='100%' gap={20} >
  
   
      <VStack>
        <VStack gap={10} mt='$4' px="$4">
          <Text fontWeight={700} fontSize={22} color='$black'>
            Subscribe to Specific Circles
          </Text>
          <Text color='$black'>
            By choosing to subscribe to specific circles, you directly support groups of mobilizers addressing region-specific climate challenges.
          </Text>
        </VStack>

        <CirclesCarousel AllCircles={circlesData} />
      </VStack>
    </VStack>
  );
};

export default CirclesView;
