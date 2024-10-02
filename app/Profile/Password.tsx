import React from 'react'
import { Button, Heading, HStack, Text, VStack } from '@gluestack-ui/themed'
import ReusableInput from '@/components/ReusableInput'
import { Switch } from '@gluestack-ui/themed';
import { useMutation } from '@tanstack/react-query';
import { PublicUserProfile, UpdateUserProfileRequest, UserProfileApi } from '@/Api';
import { AxiosError } from 'axios';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { ActivityIndicator } from 'react-native';


const Password = () => {

    const [formData, setFormData] = React.useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    })


    const {
        mutate: handleSubmit,
        isPending,
        error,
        isSuccess,
        isError
    } = useMutation<
        PublicUserProfile,
        AxiosError<any>,
        Pick<UpdateUserProfileRequest, 'password' | 'oldPassword'>,
        unknown
    >({
        mutationKey: ['change-password'],
        onMutate: async (body) => {
            return ChangePw(body);
        },
    });

    async function ChangePw(
        body: Pick<UpdateUserProfileRequest, 'password' | 'oldPassword'>
    ) {
        if (body.password !== formData.confirmPassword) {
            return Promise.reject('Password does not match')
        }
        if (body.password === formData.oldPassword) {
            return Promise.reject('New password cannot be the same as the old password')
        }

        if (body.password.length < 8) {
            return Promise.reject('Password must be at least 8 characters')
        }

        if (body.password.length > 20) {
            return Promise.reject('Password must be at most 20 characters')
        }

        if (body.password.match(/[a-z]/g) === null) {
            return Promise.reject('Password must contain at least one lowercase letter')
        }

        const result = await new UserProfileApi(AXIOS_CONFIG).oneToRuleThemUpdates(
            body
        );
        return result.data;
    }



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

                {isSuccess &&
                    <Text color="green">
                        Password Updated Successfully
                    </Text>
                }


                {isError && <Text color="red">{error?.response?.data?.message ||
                    'Error Updating the password !'}</Text>}

                <Button
                    mt={16}
                    onPress={() => handleSubmit({ password: formData.newPassword, oldPassword: formData.oldPassword })}
                    width="100%" alignSelf="center" h={45} rounded="$xl" backgroundColor="#0202CC">
                    {isPending ?
                        <ActivityIndicator size="small" color="#fff" /> :
                        <Text fontWeight={600} color="white">
                            Save
                        </Text>
                    }
                </Button>
            </VStack>
        </VStack>
    )
}

export default Password