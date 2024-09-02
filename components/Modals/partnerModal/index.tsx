import React, { useRef } from 'react';
import { Box, Button, HStack, Image, Pressable, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';

const SinglePartnerModal = ({ isVisible, onClose, selectedPartner }: any) => {
  const soundRef = useRef<any | null>(null);

  const closeModal = () => {
    pauseAudio();
    onClose();
  };

  const pauseAudio = () => {
    if (soundRef.current) {
      soundRef.current.pause();
    }
  };

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const NEXT_LOCALE = 'en';
  const biography = selectedPartner?.bio?.find((bio: { lang: any; }) => bio.lang === NEXT_LOCALE);
  const displayText = biography?.text ? biography?.text : selectedPartner?.description;
  const climateWinsText = selectedPartner?.climateWins?.find((climate: { lang: any; }) => climate.lang === NEXT_LOCALE);
  const displayClimateWinsText = climateWinsText?.text ? climateWinsText?.text : '';

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      backdropColor="black"
      
      style={{ justifyContent: 'center', alignItems: 'center', margin: 0 }}
    >
      <Box paddingTop={40} bg="$black" p={20} opacity={0.75} minHeight="100%" flex={1} width="100%" alignItems="center">
        <Pressable onPress={closeModal} style={{ position: 'absolute', right: 10, top: 10 }}>
          <Icon name="close-circle" size={30} color="white" />
        </Pressable>
        <Box borderRadius={75} borderWidth={2} borderColor="white" overflow="hidden" mb={4}>
          <Image
            source={{ uri: selectedPartner?.avatar || selectedPartner?.image || 'https://via.placeholder.com/150' }}
            style={{ width: 150, height: 150, borderRadius: 75 }}
            alt="Avatar"
          />
        </Box>
        <Text color="white" fontSize={24} fontWeight="bold" mb={2}>
          {selectedPartner?.firstname} {selectedPartner?.lastname}
        </Text>
        <HStack space={"xs"} mb={4}>
          {selectedPartner?.country && (
            <Box bg="black" borderRadius={10} justifyContent='center'     borderWidth="$2"   borderBlockColor='white' borderColor='white' p={3}>
              <Text color="white">{selectedPartner?.country}</Text>
            </Box>
          )}
          {selectedPartner?.role && (
            <Box bg="black" borderRadius={10} justifyContent='center'     borderWidth="$2"   borderBlockColor='white' borderColor='white' p={3}>
              <Text color="white">{capitalizeFirstLetter(selectedPartner?.role)}</Text>
            </Box>
          )}
        </HStack>
        <HStack space={"xs"} mb={4}>
          {selectedPartner?.linkedin && (
            <Pressable onPress={() => Linking.openURL(selectedPartner?.linkedin)}>
          <Icon name="logo-linkedin" size={30} color="#0202CC" />
          </Pressable>
          )}
          {selectedPartner?.website && (
            <Pressable onPress={() => Linking.openURL(selectedPartner?.website)}>
          <Icon name="earth" size={30} color="#0202CC" />
          </Pressable>
          )}
          {selectedPartner?.instagram && (
            <Pressable onPress={() => Linking.openURL(selectedPartner?.instagram)}>
        <Icon name="logo-instagram" size={30} color="#0202CC" />
        </Pressable>
          )}
          {selectedPartner?.twitter && (
            <Pressable onPress={() => Linking.openURL(`https://www.twitter.com/${selectedPartner?.twitter}`)}>
              <Icon name="logo-twitter" size={30} color="#0202CC" />
            </Pressable>
          )}
          {selectedPartner?.tiktok && (
            <Pressable onPress={() => Linking.openURL(`https://www.tiktok.com/${selectedPartner?.tiktok}`)}>
              <Icon name="logo-tiktok" size={30} color="#0202CC" />
            </Pressable>
          )}
        </HStack>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          {selectedPartner?.audio && (
            <Box mb={4}>
              <Text color="white">Audio available</Text>
            </Box>
          )}
          <Text color="white" fontSize={20} fontWeight="bold" mb={2}>
            Bio
          </Text>
          <Text color="white" fontSize={16} textAlign="justify">
            {displayText}
          </Text>
          {selectedPartner?.climateWins?.length > 0 && (
            <Box mt={4}>
              <Text color="white" fontSize={20} fontWeight="bold" mb={2}>
                Climate wins
              </Text>
              <Text color="white" fontSize={16} textAlign="justify">
                {displayClimateWinsText}
              </Text>
            </Box>
          )}
        </ScrollView>
      </Box>
    </Modal>
  );
};

export default SinglePartnerModal;
