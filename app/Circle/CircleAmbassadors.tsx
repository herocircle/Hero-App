import { VStack, Text, View, Button } from "@gluestack-ui/themed";
import { Dimensions, FlatList, Platform } from "react-native";
import { Pressable } from "@gluestack-ui/themed";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Box } from "@gluestack-ui/themed";
import { Ambassador } from "@/Api";
import WorkModal from "./WorkModal";
import React, { useState } from "react";

type props = {
  navigation: any;
  ambassadors: Ambassador[];
};

type props2 = {
  navigation: any;
  item: Ambassador;
};

const CircleAmbassadors = ({ navigation, ambassadors }: props) => {
  return (
    <VStack w="100%" gap={20}>
      <VStack>
        <VStack gap={10} mt="$4" px="$4">
          <Text fontWeight={700} fontSize={22} color="$black">
            Featured Circle Ambassadors
          </Text>
          <Text color="$black">
            HERO is a global community of forward thinkers and doers. Meet the
            Ambassadors contributing to making this movement bigger and
            stronger.
          </Text>
        </VStack>
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <FlatList
            snapToAlignment="start"
            horizontal
            showsHorizontalScrollIndicator={false}
            viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
            style={{ padding: 10 }}
            contentContainerStyle={{ paddingRight: 10 }}
            decelerationRate={0.5}
            keyExtractor={(_, index) => `id_${index}`}
            data={ambassadors}
            renderItem={({ item }) => (
              <CircleAmbassadorCard item={item} navigation={navigation} />
            )}
          />
        </View>
      </VStack>
    </VStack>
  );
};

export default CircleAmbassadors;
function CircleAmbassadorCard({ navigation, item }: props2) {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const isAndroid = Platform.OS !== "ios";
  const screenHeight = Dimensions.get("window").height;
  const imageHeight = screenHeight * 0.5;

  return (
    <VStack width={330} mr={31} mt={15} gap="$5">
      <Pressable
        maxHeight={280}
        position="relative"
        overflow="hidden"
        rounded={15}
      >
        <Image
          cachePolicy="disk"
          priority="high"
          transition={1000}
          alt=""
          placeholder={isAndroid ? null : blurhash}
          style={{ borderRadius: 15, width: "100%", height: imageHeight }}
          source={item?.image || { uri: `https://picsum.photos/id/24/400/300` }}
        />
        <LinearGradient
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: -2,
            height: imageHeight,
            borderRadius: 15,
            zIndex: 5,
          }}
          start={[0, 1]}
          end={[1, 0]}
          colors={[
            "rgba(0, 0, 0, .6)",
            "rgba(0, 0, 0, .4)",
            "rgba(0, 0, 0, .2)",
            "rgba(0, 0, 0, .0)",
          ]}
        />
      </Pressable>
      <Text h={50} color="$black" fontSize={20} fontFamily="nova600">
        {item?.firstName} {item?.lastName}
      </Text>
      <Pressable onPress={() => openModal(item)}>
        <Text
          fontSize="$md"
          fontWeight="$bold"
          color="#0202CC"
          textDecorationLine="underline"
        >
          Learn more
        </Text>
      </Pressable>
      {selectedItem && (
        <WorkModal
          isOpen={isModalOpen}
          selectedItem={selectedItem}
          closeModal={closeModal}
        />
      )}
    </VStack>
  );
}
