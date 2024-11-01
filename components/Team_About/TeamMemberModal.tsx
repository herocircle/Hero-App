import React from 'react';
import { Box, HStack, Image, Pressable, ScrollView, Text } from '@gluestack-ui/themed';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';
import { TeamMember } from '@/Api';


type props = {
  teamMember: any,
  isVisible: boolean,
  onClose: () => void
}


const TeamMemberModal = ({ isVisible, onClose, teamMember }: props) => {


  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const biography = teamMember?.description
  const displayText = biography


  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropColor="black"

      style={{ justifyContent: 'center', alignItems: 'center', margin: 0 }}
    >
      <Box py={70} px={20} bg="$black" position='relative' opacity={0.75} minHeight="100%" flex={1} width="100%" alignItems="center">

        <Pressable onPress={() => onClose()} style={{ position: 'absolute', right: 20, top: 70, zIndex: 100 }}>
          <Icon name="close-circle" size={30} color="white" />
        </Pressable>

        <Box borderRadius={75} borderWidth={2} borderColor="white" overflow="hidden" mb={4}>
          <Image
            source={{ uri: teamMember?.image || 'https://via.placeholder.com/150' }}
            style={{ width: 150, height: 150, borderRadius: 75 }}
            alt="Avatar"
          />
        </Box>
        <Text color="white" fontSize={24} fontWeight="bold" my={8}>
          {teamMember?.name}
        </Text>
        <HStack space={"xs"} mb={4}>
          {teamMember?.country && (
            <Box bg="black" borderRadius={10} justifyContent='center' borderWidth="$2" borderBlockColor='white' borderColor='white' py={3} px={6}>
              <Text color="white">{teamMember?.country}</Text>
            </Box>
          )}
          {teamMember?.role && (
            <Box bg="black" borderRadius={10} justifyContent='center' borderWidth="$2" borderBlockColor='white' borderColor='white' py={3} px={6}>
              <Text color="white">{capitalizeFirstLetter(teamMember?.role)}</Text>
            </Box>
          )}
        </HStack>
        <HStack space={"xs"} my={8}>
          {teamMember?.linkedin && (
            <Pressable onPress={() => Linking.openURL(teamMember?.linkedin)}>
              <Icon name="logo-linkedin" size={30} color="#fff" />
            </Pressable>
          )}
          {teamMember?.website && (
            <Pressable onPress={() => Linking.openURL(teamMember?.website)}>
              <Icon name="earth" size={30} color="#fff" />
            </Pressable>
          )}
          {teamMember?.instagram && (
            <Pressable onPress={() => Linking.openURL(teamMember?.instagram)}>
              <Icon name="logo-instagram" size={30} color="#fff" />
            </Pressable>
          )}
          {teamMember?.twitter && (
            <Pressable onPress={() => Linking.openURL(`https://www.twitter.com/${teamMember?.twitter}`)}>
              <Icon name="logo-twitter" size={30} color="#fff" />
            </Pressable>
          )}
          {teamMember?.tiktok && (
            <Pressable onPress={() => Linking.openURL(`https://www.tiktok.com/${teamMember?.tiktok}`)}>
              <Icon name="logo-tiktok" size={30} color="#fff" />
            </Pressable>
          )}
        </HStack>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <Text color="white" fontSize={20} fontWeight="bold" mb={2}>
            Bio
          </Text>
          <Text color="white" fontSize={16} textAlign="justify">
            {displayText}
          </Text>
        </ScrollView>
      </Box>
    </Modal>
  );
};

export default TeamMemberModal;
