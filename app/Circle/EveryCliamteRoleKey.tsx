import { HStack, Text, View, VStack } from '@gluestack-ui/themed'
import { Image } from 'expo-image'
import React from 'react'
const EveryCliamteRoleKey = () => {
    return (
        <VStack w='100%' gap={20} bg="#F9F9F9" py={25}>


            <VStack gap={20}>
                <VStack gap={10} mt='$4' px="$4">
                    <Text fontWeight={700} fontSize={22} color='$black'>
                        Every climate role is key.


                    </Text>
                    <Text color='$black'>
                        From research to advocacy, these are the different climate roles you are supporting to accelerate systemic change.
                    </Text>
                </VStack>

                <VStack gap="$3" alignItems='center' mt={8}>
                    <RoleKeyCard
                        title="Researcher"
                        description="Conducting research to understand the impacts of climate change and identify solutions."
                    />
                    <RoleKeyCard
                        title="Educators"
                        description="By sharing knowledge, teaching sustainable practices, and promoting environmental literacy, they empower individuals to make informed choices."
                    />
                    <RoleKeyCard
                        title="Campaigners"
                        description="Through strategic communication and targeted advocacy campaigns, they pressure decision-makers, shift public opinion, and drive momentum towards systemic change."
                    />
                    <RoleKeyCard
                        title="Negotiators"
                        description="They work within governmental bodies, think tanks, and advocacy groups to influence legislation, regulations, and policies related to climate change."
                    />
                </VStack>

            </VStack>
        </VStack>
    )
}

export default EveryCliamteRoleKey

type props = {
    title: string,
    description: string,
}
export const RoleKeyCard = ({ title, description }: props) => {
    return (
        <VStack alignItems='center' mt={8}>
            <VStack h={250} px={'$4'} py="$2" justifyContent='space-evenly' alignSelf='center' w='70%' bg="$white" rounded={15} p={2}>
                <Image
                    style={{ width: 80, height: 80, borderRadius: 100, zIndex: 5, objectFit: 'contain' }}
                    source={require('@/assets/images/heroic.webp')} alt="role1"
                />
                <Text fontWeight={700} fontSize={18} color='$black'>
                    {title}
                </Text>
                <Text fontSize={14} color='$black'>
                    {description}
                </Text>
            </VStack>
        </VStack>
    )
}
//             fontSize={22}