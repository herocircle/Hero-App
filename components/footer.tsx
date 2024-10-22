
import {
  AntDesign,
  Entypo,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Box, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { Image, Linking } from "react-native";

export const icons = [
  {
    icon: <AntDesign name="instagram" size={20} />,
    link: "https://www.instagram.com/herocircle.app",
  },
  {
    icon: <SimpleLineIcons name="social-spotify" size={20} />,
    link: "https://open.spotify.com/show/3OLdPSPIYXHR4wHGNAQG30?si=46ccc7acfde643d3&nd=1&dlsi=749b9052b0f74932",
  },
  {
    icon: <Entypo name="linkedin" size={20} />,
    link: "https://www.linkedin.com/company/herocircle/",
  },
  {
    icon: <AntDesign name="youtube" size={20} />,
    link: "https://www.linkedin.com/company/herocircle/",
  },
  {
    icon: <Ionicons name="logo-tiktok" size={20} />,
    link: "https://www.tiktok.com/@herocircle.app",
  },
];
const Footer = () => {
  return (
    <VStack bg="#0202CC" py="$10" gap="$6" px="$2">
      <Box width={160} height={80} mt={-20} mb={-20}>
        <Image
          source={require("@/assets/images/HERO Logo_White.png")}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt=""
        />
      </Box>

      <VStack gap={8}>
        <Pressable>
          <Text fontFamily="nova400" color="$white">
            About Us
          </Text>
        </Pressable>
        <Pressable>
          <Text fontFamily="nova400" color="$white">
            Contact Us
          </Text>
        </Pressable>
        <Pressable>
          <Text fontFamily="nova400" color="$white">
            Privacy Policy
          </Text>
        </Pressable>
      </VStack>
      <Box width="100%" h={1} bg="$white" />
      <HStack gap="$2">
        {icons?.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => Linking.openURL(item.link)}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            width="$8"
            h="$8"
            rounded="$full"
            bg="$white"
          >
            <Text color="#0202CC">{item?.icon}</Text>
          </Pressable>
        ))}
      </HStack>
      <VStack>
        <Text fontFamily="nova400" color="$white">
          © 2024 HERO Labs B.V. All rights reserved.
        </Text>
        <Text fontFamily="nova400" color="$white">
          Amsterdam, Netherlands.
        </Text>
      </VStack>
    </VStack>
  );
};

export default Footer