import React from 'react';
import { VStack, Box, Text } from '@gluestack-ui/themed';

interface CircleProps {
  size: '$24'; 
  backgroundColor: string;
  borderColor: string;
  justifyContent: 'center'; 
  alignItems: 'center'; 
  children: React.ReactNode;
}

const Circle: React.FC<CircleProps> = ({ size, backgroundColor, borderColor, justifyContent, alignItems, children }) => {
  return (
    <Box
      width={size}
      height={size}
      borderRadius={50}
      backgroundColor={backgroundColor}
      borderWidth={1}
      borderColor={borderColor} 
      borderStyle="solid" 
      justifyContent={justifyContent}
      alignItems={alignItems}
      display="flex"
    >
      {children}
    </Box>
  );
};

const SubscriptionBreakdown = () => {
  return (
    <VStack space="md" alignItems="center" backgroundColor="#0202CC" paddingHorizontal="$5" paddingVertical={"$12"} gap="$8">
      <Text fontSize="$2xl" fontFamily='nova800'  color="white" textAlign="center" mb="$4">
        This is how the money of your subscription is used.
      </Text>

      <VStack space="md" alignItems="center">  
        <Circle size="$24" backgroundColor="#0202CC" borderColor="white" justifyContent="center" alignItems="center">
          <Text fontSize="$2xl" fontWeight="bold" color="white">
            90%
          </Text>
        </Circle>
        <Box padding="$3">
          <Text fontSize="$md" color="white" lineHeight={18} textAlign="center" fontFamily='nova400'>
            Of your subscription provides a stable monthly income for mobilizers,
            helping cover essential expenses for their climate initiatives,
            including transportation, materials, and project time.
          </Text>
        </Box>
      </VStack>

      <VStack space="md" alignItems="center">
        <Circle size="$24" backgroundColor="#0202CC" borderColor="white" justifyContent="center" alignItems="center">
          <Text fontSize="$2xl" fontWeight="bold" color="white">
            10%
          </Text>
        </Circle>
        <Box padding="$3">
          <Text fontSize="$md" color="white" lineHeight={18} textAlign="center" fontFamily='nova400'>
            Supports HERO in platform expansion, community events, impactful
            mobilizer storytelling, and mentor partnerships, empowering
            mobilizers to effectively tackle climate challenges.
          </Text>
        </Box>
      </VStack>
    </VStack>
  );
};

export default SubscriptionBreakdown;
