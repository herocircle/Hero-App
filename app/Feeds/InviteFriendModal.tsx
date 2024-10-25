import React from 'react'
import { Button, ButtonText, Heading, HStack, Icon, Modal, ModalBackdrop, ModalCloseButton, ModalContent, ModalHeader, Pressable, Text, View, VStack } from '@gluestack-ui/themed'
import { CloseIcon } from '@gluestack-ui/themed'
import { ModalBody } from '@gluestack-ui/themed'
import { Box } from '@gluestack-ui/themed'
import { UserProfileApi } from '@/Api'
import { AXIOS_CONFIG } from '@/Api/wrapper'
import useCustomToast from '@/hooks/useCustomToast'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Linking } from 'react-native'
import * as Clipboard from 'expo-clipboard';

type props = {
    showModal: boolean,
    setShowModal: (show: boolean) => void,
    refC: any,
}

const InviteFriendModal = ({ showModal, setShowModal, refC }: props) => {
    const showToast = useCustomToast()

    const shareUrl = 'https://herocircle.app';
    const domain = new URL(shareUrl).hostname;
    const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
        shareUrl
    )}`;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
    )}`;
    const instagramShareUrl = `https://www.instagram.com/${encodeURIComponent(
        domain
    )}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
    )}`;

    const copyToClipboard = async (text: string) => {
        try {
            await Clipboard.setStringAsync(text);
            showToast({
                action: 'success',
                title: "'Referral link copied',"
            });
        } catch (error) {
            showToast({
                action: 'error',
                title: 'Referral link not found.'
            });
        }
    };

    const icons = [
        {
            icon: <Ionicons name="logo-whatsapp" size={20} />,
            link: whatsappShareUrl
        },
        {
            icon: <Ionicons name="logo-facebook" size={20} />,
            link: facebookShareUrl
        },
        {
            icon: <AntDesign name="instagram" size={20} />,
            link: instagramShareUrl
        },
        {
            icon: <AntDesign name="twitter" size={20} />,
            link: twitterShareUrl
        },
    ]


    const handleReferralCopy = async () => {
        try {
            const response = await new UserProfileApi(AXIOS_CONFIG).getUser();

            const referralLink = response.data as any
            if (referralLink.referralLink) {
                copyToClipboard(referralLink.referralLink)
            }
        } catch (error: any) {
            showToast({
                action: 'error',
                title: error?.response?.data?.message
            });
            console.log(error)
        }
    };


    return (
        <Modal
            isOpen={showModal}
            onClose={() => {
                setShowModal(false)
            }}
            finalFocusRef={refC}
        >
            <ModalBackdrop />
            <ModalContent
                bg="$white"
            >
                <ModalHeader>
                    <Heading color={"$black"} size="lg" maxWidth={'90%'} lineHeight={22}>
                    </Heading>
                    <ModalCloseButton
                        bg="#000"
                        rounded="$full"
                    >
                        <Icon color="#fff" as={CloseIcon} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <VStack gap="$4" mt={5}>

                        <Text
                            fontFamily='nova800'
                            fontSize={28}
                            color="#000"
                            textAlign='center'
                        >
                            Share HERO with your friends
                        </Text>
                        <Text
                            fontFamily='nova400'
                            fontSize={14}
                            color="#000"
                            textAlign='center'
                        >
                            Increase your impact, share HERO with your friends
                        </Text>
                        <Button
                            rounded={30}
                            size="sm"
                            h={55}
                            onPress={handleReferralCopy}
                            alignSelf='center'
                            action="positive"
                            backgroundColor='#0000FF'
                            w={'70%'}
                            mr={4}
                        >
                            <ButtonText
                                textAlign='center'
                            >Copy your referral{"\n"} link by clicking here</ButtonText>
                        </Button>

                        <HStack alignItems="center" gap={6} alignSelf="center">
                            <Box flex={1} h={1} bg="$black" />
                            <Text color="#000">OR</Text>
                            <Box flex={1} h={1} bg="$black" />
                        </HStack>


                        <VStack gap="$2" pb="$6" pl="$3" alignItems='center' >
                            <Text fontFamily='nova'
                                textAlign='center'
                            >Share on your social media</Text>

                            <HStack pl="$2" gap="$1" mt="$4">
                                {icons?.map((item, index) =>
                                    <Pressable
                                        key={index}
                                        display='flex'
                                        flexDirection='row'
                                        onPress={() =>
                                            Linking.openURL(item.link)
                                        }
                                        alignItems='center'
                                        justifyContent='center'
                                        width="$9"
                                        h="$9"
                                        rounded="$full" bg="$black" >
                                        <Text color="$white">
                                            {item?.icon}
                                        </Text>
                                    </Pressable>
                                )}
                            </HStack>

                        </VStack>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal >
    )
}

export default InviteFriendModal