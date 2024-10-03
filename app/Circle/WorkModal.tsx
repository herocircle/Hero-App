import React from 'react';
import { Modal, HStack, Text, Button, VStack, Pressable , Button as GluestackButton} from '@gluestack-ui/themed';
import { Image } from 'expo-image';

type WorkItem = {
  imageUrl: string;
  title: string;
  description: string;
};

type WorkModalProps = {
  isOpen: boolean;
  selectedItem: WorkItem | null;
  closeModal: () => void;
};

const WorkModal = ({ isOpen, selectedItem, closeModal }: WorkModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <VStack
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        p={4}
        bg="white"
        rounded="$lg"
      >
        <Pressable onPress={closeModal} style={{ position: 'absolute', top: 20, right: 20 }}>
          <Text fontWeight={700} fontSize={24} color="black">
            X
          </Text>
        </Pressable>
        
        {selectedItem && (
          <>
            <Image
              source={{ uri: selectedItem.imageUrl }}
              style={{ width: '100%', height: 300, borderRadius: 20 }}
              alt={selectedItem.title}
            />
            <Text fontWeight={700} fontSize={22} mt={4} color="$black">
              {selectedItem.title}
            </Text>
            <Text fontSize={16} color="$black" mt={2}>
              {selectedItem.description}
            </Text>
            {/* <GluestackButton onPress={closeModal} mt={4}    style={{ backgroundColor: '#0202CC' }}>
              Close
            </GluestackButton> */}
          </>
        )}
      </VStack>
    </Modal>
  );
};

export default WorkModal;
