import React from 'react'
import { Button, Heading, HStack, Text, VStack } from '@gluestack-ui/themed'
import ReusableInput from '@/components/ReusableInput'
import { Switch } from '@gluestack-ui/themed';


const Password = () => {

    const [formData, setFormData] = React.useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    })

    return (
        <VStack bg="$white" space="lg" >
            <Heading
                fontSize={26}
                mb={4}
                fontFamily='nova800'
            >
                Password
            </Heading>

            <VStack gap="$4">
                <ReusableInput
                    label='Current Password'
                    placeholder='*******'
                    secureTextEntry={true}
                    value={formData.oldPassword}
                    setState={(text) => setFormData({ ...formData, oldPassword: text })}
                />
                <ReusableInput
                    label='New Password'
                    placeholder='*******'
                    secureTextEntry={true}
                    value={formData.newPassword}
                    setState={(text) => setFormData({ ...formData, newPassword: text })}
                />
                <ReusableInput
                    label='Confirm Password'
                    placeholder='*******'
                    secureTextEntry={true}
                    value={formData.confirmPassword}
                    setState={(text) => setFormData({ ...formData, confirmPassword: text })}
                />

                <Button
                    mt={16}
                    width="100%" alignSelf="center" h={45} rounded="$xl" backgroundColor="#0202CC">
                    <Text fontWeight={600} color="white">
                        Save
                    </Text>
                </Button>
            </VStack>
        </VStack>
    )
}

export default Password