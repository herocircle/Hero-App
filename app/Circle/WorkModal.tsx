import React from 'react';
import { HStack, Text, VStack, Pressable, ScrollView, Box } from '@gluestack-ui/themed';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, Linking } from 'react-native';
import { Audio } from 'expo-av';

type WorkModalProps = {
  isOpen: boolean;
  selectedItem: any | null;
  closeModal: () => void;
  insideCircle?: boolean;
};

const WorkModal = ({ isOpen, selectedItem, closeModal, insideCircle }: WorkModalProps) => {
  const [sound, setSound] = React.useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const playAudio = async (audioUrl: string) => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: true }
      );
      setSound(sound);
      setIsPlaying(true);
    } catch (error) {
      console.error('Error loading audio:', error);
    }
  };

  const stopAudio = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={() => {
        closeModal()
        stopAudio()
      }}
      backdropColor="black"
      backdropOpacity={0.4}
      style={{ justifyContent: 'center', alignItems: 'center', margin: 0 }}
    >
      <Box py={70} px={20} bg="$black" minHeight="100%" flex={1} minWidth="100%" alignItems="center">
        <ScrollView contentContainerStyle={{ alignItems: 'center', flex: 1 }}>
          <VStack position='relative' minHeight="100%" flex={1} minWidth="100%" alignItems="center">
            <Pressable onPress={() => {
              closeModal()
              stopAudio()
            }}
              style={{ position: 'absolute', right: 20, top: 6, zIndex: 100 }}>
              <Icon name="close-circle" size={30} color="white" />
            </Pressable>

            {selectedItem?.imageUrl && (
              <Box
                style={{
                  width: 128,
                  height: 128,
                  borderRadius: 64,
                  overflow: 'hidden',
                  borderWidth: 2,
                  borderColor: 'white',
                }}
              >
                <Image
                  source={{ uri: selectedItem?.imageUrl || '/maxresdefault.jpg' }}
                  style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                />
              </Box>
            )}

            {selectedItem?.title && (
              <Text fontWeight={700} fontSize={22} mt={50} mb={20} color="white">
                {selectedItem.title}
              </Text>
            )}
            <VStack
              gap="$2"
            >

              {selectedItem?.tags?.length !== 0 && (
                <HStack gap="$2" alignSelf='flex-start' flexWrap='wrap'>
                  {selectedItem?.tags?.map((tag: any) => (
                    tag && (
                      <Box
                        key={tag}
                        borderRadius={9}
                        borderWidth={1}
                        borderColor='#fff'
                        alignSelf='flex-start'
                        p="$2"
                      >
                        <Text color="#fff" fontFamily='nova600'>
                          {tag}
                        </Text>
                      </Box>
                    )
                  ))}
                </HStack>
              )}
              {selectedItem?.headlines?.length !== 0 && (
                <HStack gap="$2" alignSelf='flex-start' flexWrap='wrap'>
                  {selectedItem?.headlines?.map((headline: any) => (
                    headline && (
                      <Box
                        key={headline}
                        borderRadius={9}
                        borderWidth={1}
                        borderColor='#fff'
                        alignSelf='flex-start'
                        p="$2"
                      >
                        <Text color="#fff" fontFamily='nova600'>
                          {headline}
                        </Text>
                      </Box>
                    )
                  ))}
                </HStack>
              )}
            </VStack>
            {selectedItem?.audioUrl && insideCircle && (
              <Box mt={6} mb="$4" alignItems="center">
                <Pressable onPress={() => isPlaying ? stopAudio() : playAudio(selectedItem.audioUrl)}>
                  <Text color="white" fontSize={16}>
                    {isPlaying ? 'Stop Audio' : 'Play Audio'}
                  </Text>
                </Pressable>
              </Box>
            )}
            <Box h={2} minWidth="100%" bg="#fff" mt={24} />
            {insideCircle && (
              <Text textAlign='left' alignSelf='flex-start' fontWeight={700} fontSize={22} mt={25} color="white">
                About
              </Text>
            )}

            {selectedItem?.summary && (
              <Text fontSize={16} color="white" mt={20} textAlign="justify">
                {selectedItem.summary}
              </Text>
            )}
            {selectedItem?.description && (
              <Text fontSize={16} color="white" mt={20} textAlign="justify">
                {selectedItem.description}
              </Text>
            )}
          </VStack>
        </ScrollView>
      </Box>
    </Modal>
  );
};

export default WorkModal;
