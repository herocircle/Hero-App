import React, { useState } from 'react';
import { Box, Button, ButtonText, Image, Text, VStack } from '@gluestack-ui/themed';


function OurWork({ currentWork, circleHasNoMobilizers }: any) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <VStack id="ourWork"
      gap="$1"
      bg={circleHasNoMobilizers ? '#fff' : '#F9F9F9'}
      py={"$8"}
      px="$4"
      >

      {/* <WorkModal selectedItem={selectedItem} closeModal={closeModal} /> */}

      <Text
        textAlign='left'
        fontFamily='nova800'
        fontSize='$3xl'
        color='$black'
        mb="$12"
        mt="$8"
      >
        Our Work
      </Text>

      <VStack
        alignItems='center'
        justifyContent='center'
        gap="$6"
        px={24}
      >
        {currentWork?.map((item: any, index: any) => (
          <VStack
            gap="$2"
            key={index}
            w={"100%"}
          >

            <Box
              h={200}
              w="56%"
              alignSelf='center'
              rounded='$2xl'
              mb={3}
            >
              <Image
                src={item?.imageUrl}
                source={{ uri: item?.imageUrl }}
                h="100%"
                w="100%"
                objectFit='contain'
                alt=""
              />
            </Box>

            <Text
              mb={4}
              fontSize={20}
              fontFamily='nova800'
              color='$black'
            >
              {item?.title}
            </Text>


            <Text
              h={32}
              fontFamily='nova'
              fontSize={16}
              color='$black'
              alignSelf='flex-start'
            >
              {item?.description?.length > 150 ? item.description.substring(0, 150) + '...' : item.description}
            </Text>


            <Button
              onPress={() => openModal(item)}
              bg="$transparent"
              alignSelf='flex-start'
              px="$0"
            >
              <ButtonText color="#0202CC" underline>
                Learn more
              </ButtonText>
            </Button>

          </VStack>
        ))}
      </VStack>
    </VStack>
  );
}

export default OurWork;

