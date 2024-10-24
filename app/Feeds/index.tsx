import React from 'react'
import { Avatar, AvatarFallbackText, AvatarImage, Box, Button, Heading, HStack, VStack } from '@gluestack-ui/themed'
import { View } from '@gluestack-ui/themed'
import { Text } from '@gluestack-ui/themed'
import { ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Footer from '@/components/footer'
import InviteFriendModal from './InviteFriendModal'
import { useAuth } from '@/contexts/AuthContext'

const Feeds = () => {
    const [showModal, setShowModal] = React.useState(false)
    const ref = React.useRef(null)
    const { userData } = useAuth()

    return (
        <View w='100%' pt="$4" bg="$white"  >

            <InviteFriendModal
                showModal={showModal}
                setShowModal={setShowModal}
                refC={ref}
            />

            <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
            >
                <VStack gap="$6" px="$4" mb="$8" pt="$5">

                    <HStack alignItems='center' gap="$4" >
                        <Avatar bgColor="$amber600" size="lg" borderRadius="$full">
                            <AvatarFallbackText>{userData?.firstname}</AvatarFallbackText>
                            <AvatarImage
                                alt=""
                                source={{
                                    uri: userData?.avatar,
                                }}
                            />
                        </Avatar>
                        <VStack>
                            <Heading color="$black" fontFamily='nova600' size="sm">Welcome{" "}
                                <Text color="$black" fontFamily='nova800'>
                                    {userData?.firstname}
                                </Text>
                            </Heading>
                            {userData?.country &&
                                <Text fontFamily='nova' color='$black' size="sm">
                                    {userData?.country}
                                </Text>
                            }
                            {userData?.description &&
                                <Text fontFamily='nova' color='$black' size="sm">
                                    {userData?.description}
                                </Text>
                            }
                        </VStack>
                    </HStack>
                    <VStack bg='#F9F9F9' borderRadius={20} px='$5' py="$7" gap="$8" >
                        <Heading color="$black" fontFamily='nova800' size="xl">Welcome
                            Your Impact
                        </Heading>
                        <HStack alignItems='center' justifyContent='space-between'>
                            <VStack alignItems='center' gap="$4">
                                <Box
                                    height={100}
                                    width={100}
                                    bg="$white"
                                    rounded={20}
                                    display='flex'
                                    flexDirection='row'
                                    alignItems='center'
                                    justifyContent='center'
                                >
                                    <Text color="#0202CC" fontSize={28} fontFamily='nova800'>
                                        9
                                    </Text>
                                </Box>
                                <Text textAlign='center' color="$black" fontFamily='nova400'>
                                    Mobilizer {'\n'} Supported
                                </Text>
                            </VStack>
                            <VStack alignItems='center' gap="$4">
                                <Box
                                    height={100}
                                    width={100}
                                    bg="$white"
                                    rounded={20}
                                    display='flex'
                                    flexDirection='row'
                                    alignItems='center'
                                    justifyContent='center'
                                >
                                    <Text color="#0202CC" fontSize={28} fontFamily='nova800'>
                                        9
                                    </Text>
                                </Box>
                                <Text textAlign='center' color="$black" fontFamily='nova400'>
                                    Climate {'\n'} Wins
                                </Text>
                            </VStack>
                            <VStack alignItems='center' gap="$4">
                                <Box
                                    height={100}
                                    width={100}
                                    bg="$white"
                                    rounded={20}
                                    display='flex'
                                    flexDirection='row'
                                    alignItems='center'
                                    justifyContent='center'
                                >
                                    <Text color="#0202CC" fontSize={28} fontFamily='nova800'>
                                        9
                                    </Text>
                                </Box>
                                <Text textAlign='center' color="$black" fontFamily='nova400'>
                                    Active {'\n'} Initiatives
                                </Text>
                            </VStack>
                        </HStack>
                    </VStack>

                    <VStack gap={'$12'} bg="#E5EEFF" py="$6" px="$4" borderRadius={20} >
                        <Text fontFamily={'nova600'} fontSize={22} color="$black">
                            <Text color="#0202CC" fontFamily={'nova600'} fontSize={22}>Remember to check your inbox</Text> to get your exclusive:
                        </Text>

                        <VStack gap={'$5'} mt={-20} mb="$2">
                            <HStack alignItems='center' gap={6}>
                                <AntDesign name="checkcircle" size={24} color="#0202CC" />
                                <HStack flexWrap='wrap'>
                                    <Text color="$black" >
                                        Updates from <Text color="$black" fontWeight={"$bold"}>{" "}frontlines</Text> of advocacy and {'\n'}
                                        climate news in our bi-monthly newsletter.
                                    </Text>
                                </HStack>
                            </HStack>

                            <HStack alignItems='center' gap={6}>
                                <AntDesign name="checkcircle" size={24} color="#0202CC" />
                                <Text color="$black">
                                    Insightful <Text color="$black" fontWeight={"$bold"}>opinion articles</Text> from climate {'\n'}mobilizers and experts in your inbox.
                                </Text>
                            </HStack>

                            <HStack alignItems='center' gap={6}>
                                <AntDesign name="checkcircle" size={24} color="#0202CC" />
                                <Text color="$black">
                                    Invitations to HERO <Text color="$black" fontWeight={"$bold"}>Events</Text> with mobilizers, experts, and innovators.
                                </Text>
                            </HStack>
                        </VStack>
                    </VStack>
                    <VStack bg='#F9F9F9' borderRadius={20} px='$5' py="$7" gap="$8" >
                        <Text textAlign='center' fontFamily='nova' color="$black">
                            Double your impact by inviting a friend to join
                        </Text>

                        <Button
                            alignSelf='center'
                            h={40}
                            rounded="$3xl"
                            backgroundColor="#0202CC"
                            onPress={() => setShowModal(true)}
                        >
                            <Text
                                fontWeight={600}
                                fontSize={14}
                                color="white">
                                Invite a friend
                            </Text>
                        </Button>
                    </VStack>
                </VStack>
                <Footer />
            </ScrollView>
        </View>
    )
}

export default Feeds