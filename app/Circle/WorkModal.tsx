import React from 'react';
import { HStack, Text, VStack, Pressable, ScrollView } from '@gluestack-ui/themed';
import Modal from 'react-native-modal';
import { Box } from '@gluestack-ui/themed';
import Icon from 'react-native-vector-icons/Ionicons';


type WorkModalProps = {
  isOpen: boolean;
  selectedItem: any | null;
  closeModal: () => void;
};

const WorkModal = ({ isOpen, selectedItem, closeModal }: WorkModalProps) => {
  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={closeModal}
      backdropColor="black"
      style={{ justifyContent: 'center', alignItems: 'center', margin: 0 }}
    >
      <Box py={70} px={20} bg="$black" position='relative' opacity={0.75} minHeight="100%" flex={1} width="100%" alignItems="center">
        <ScrollView
        >

          <Box position='relative' minHeight="100%" flex={1} width="100%" alignItems="center">

            <Pressable onPress={() => closeModal()} style={{ position: 'absolute', right: 20, top: 6, zIndex: 100 }}>
              <Icon name="close-circle" size={30} color="white" />
            </Pressable>

            <Text fontWeight={700} fontSize={22} mt={50} mb={20} color="$white">
              {selectedItem?.title}
            </Text>

            <VStack gap="$4">
              <HStack flexWrap='wrap' gap="$4">
                {selectedItem?.tags?.map((tag: string, index: number) => (
                  <Box p="$2" key={index} bg="black" borderRadius={10} justifyContent='center' borderWidth="$2" borderBlockColor='white' borderColor='white' >
                    <Text color="white">{tag}</Text>
                  </Box>
                ))}
              </HStack>
              <HStack flexWrap='wrap' gap="$4">
                {selectedItem?.headlines?.map((headline: string, index: number) => (
                  <Box p="$2" key={index} bg="black" borderRadius={10} justifyContent='center' borderWidth="$2" borderBlockColor='white' borderColor='white'>
                    <Text color="white">{headline}</Text>
                  </Box>
                ))}
              </HStack>
            </VStack>

            <Box h={2} w={'100%'} bg="#fff" mt={24} />

            {/* 
                {selectedStory?.audio && (
              <p> {`${selectedStory?.title}'s Perspective `}</p>
            )}

            {selectedStory?.audio && (
              <audio
                src={selectedStory?.audio}
                controls
                className="mb-6 text-blue-400"
              >
                <source src="horse.ogg" type="audio/ogg" />
              </audio>
            )}
            <p className=" text-justify  text-sm  text-white xs:text-left">
              {selectedStory?.summary}
            </p> */}

            <Text fontSize={16} color="$white" mt={20}>
              {selectedItem.summary}
            </Text>
          </Box>
        </ScrollView>
      </Box>
    </Modal>
  );
};

export default WorkModal;

