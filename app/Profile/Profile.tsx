import React, { useEffect, useState } from 'react'
import { Button, ChevronDownIcon, Heading, HStack, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, Text, VStack } from '@gluestack-ui/themed'
import ReusableInput from '@/components/ReusableInput'
import { Switch } from '@gluestack-ui/themed';
import axios, { AxiosError } from 'axios';
import countryList from 'react-select-country-list'
import {
    LinkedinApi,
    PublicUserProfile,
    UpdateUserProfileRequest,
    UserProfileApi
} from '@/Api';
import { useAuth } from '@/contexts/AuthContext';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AXIOS_CONFIG, BaseUrl } from '@/Api/wrapper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from '@gluestack-ui/themed';
import { SelectTrigger } from '@gluestack-ui/themed';
import { ActivityIndicator, Linking } from 'react-native';
import useCustomToast from '@/hooks/useCustomToast';

const Profile = () => {
    const { userData } = useAuth()
    const showToast = useCustomToast()
    const queryClient = useQueryClient()
    const [switches, setSwitches] = React.useState({
        instagramConnnet: true,
        facebookConnect: false,
        twitterConnect: false,
        tikTokConnect: false,
    })

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        heroId: '',
        description: '',
        country: '',
        updates: false,
        instagram: '',
        twitter: '',
        tiktok: '',
        facebook: ''
    })


    const options = countryList()
        .getData()
        .map((country) => ({
            label: country.label,
            value: country.label
        }));







    const { mutate, isSuccess, isPending, error } = useMutation<
        PublicUserProfile | undefined,
        AxiosError<any>,
        UpdateUserProfileRequest & {
            selectedCares: string[];
            selectedSkills: string[];
        },
        unknown
    >(


        {
            mutationKey: ['updateProfile'],
            mutationFn: async (values) => {
                if (!values.username) {
                    throw new Error('Hero ID is required');
                }
                const { skills, cares, ...rest } = values;
                const result = await new UserProfileApi(
                    AXIOS_CONFIG
                ).oneToRuleThemUpdates({
                    ...rest,
                    cares: values.selectedCares ?? [],
                    skills: values.selectedSkills ?? []
                });

                return result.data;
            },

            onSuccess: async () => {
                // sessionQuery.refetch().then(() => {
                //     enqueueSnackbar('Profile updated', {
                //         variant: 'success',
                //         preventDuplicate: true
                //     });
                // });
            },
            onError: async (err) => {
                // enqueueSnackbar(err.message, {
                //     variant: 'error',
                //     preventDuplicate: true
                // });
            }
        }
    );

    const { mutate: authorizeLinked } = useMutation({
        mutationKey: ['linkedIn'],
        mutationFn: async () => {
            const result = await new LinkedinApi(AXIOS_CONFIG).addCertification();
            return result.data;
        },
        onSuccess: (data) => {
            if (!data.url) return;
            Linking.openURL(data['url']);
        }
    });


    const [isSuccessMsg, setIsSuccessMsg] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleUpdateProfile = async () => {
        setIsLoading(true)
        try {
            const userId = userData?._id;
            const ParsedUser = await AsyncStorage.getItem("UserSession")
            const StringifiedUser = JSON.parse(ParsedUser || '')
            const token = StringifiedUser?.authToken
            if (!token) {
                throw new Error('Authentication token not found');
            }
            const existingUserData = userData || {};

            const modifiedFields: { [key: string]: any } = {};
            Object.keys(formData).forEach((key: any) => {
                // @ts-ignore
                if (formData?.[key] !== existingUserData[key]) {
                    // @ts-ignore
                    modifiedFields[key] = formData?.[key];
                }
            });

            // If no fields were modified, return
            if (Object.keys(modifiedFields).length === 0) {
                showToast({
                    title: 'No changes detected',
                    action: 'info'
                })
                return;
            }

            await axios.patch(`${BaseUrl}/user-profile/modify/${userId}`, modifiedFields, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            showToast({
                title: 'Profile updated',
            })
            queryClient.invalidateQueries({ queryKey: ['UserSession'] });
            setIsLoading(false)

        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || 'An error occurred';
            console.error('Error updating profile:', error?.response?.data?.message);
            showToast({
                title: errorMessage,
                action: 'error'
            })
            setIsLoading(false)

        }
        setIsLoading(false)
    };



    useEffect(() => {
        if (isSuccess) {
            setIsSuccessMsg(true);
            const timer = setTimeout(() => {
                setIsSuccessMsg(false);
            }, 2000); // 5 seconds
            return () => clearTimeout(timer);
        }
    }, [isSuccess]);


    useEffect(() => {
        setFormData({
            firstName: userData?.firstname || '',
            lastName: userData?.lastname || '',
            heroId: userData?.username || '',
            description: userData?.description || '',
            country: userData?.country || '',
            updates: userData?.updates || false,
            instagram: userData?.instagram || '',
            twitter: userData?.twitter || '',
            tiktok: userData?.tiktok || '',
            facebook: userData?.facebook || ''
        });
    }, [userData])


    useEffect(() => {
        if (userData?.instagram) {
            setSwitches({ ...switches, instagramConnnet: true })
        }

        if (userData?.twitter) {
            setSwitches({ ...switches, twitterConnect: true })
        }

        if (userData?.tiktok) {
            setSwitches({ ...switches, tikTokConnect: true })
        }

        if (userData?.facebook) {
            setSwitches({ ...switches, facebookConnect: true })
        }

    }, [])

    return (
        <VStack bg="$white" space="lg" >
            <Heading
                fontSize={26}
                mb={4}
                fontFamily='nova800'
            >
                Profile
            </Heading>

            <VStack gap="$4">
                <ReusableInput
                    label='First Name'
                    placeholder='John'
                    value={formData.firstName}
                    setState={(text) => setFormData({ ...formData, firstName: text })}
                />
                <ReusableInput
                    label='Last Name'
                    placeholder='Doe'
                    value={formData.lastName}
                    setState={(text) => setFormData({ ...formData, lastName: text })}
                />
                <ReusableInput
                    label='Hero ID'
                    placeholder='123456'
                    value={formData.heroId}
                    setState={(text) => setFormData({ ...formData, heroId: text })}
                />
                <ReusableInput
                    label='Bio'
                    placeholder='Tell us about yourself'
                    value={formData.description}
                    setState={(text) => setFormData({ ...formData, description: text })}
                />

                <VStack gap={5}>
                    <Text fontFamily='nova400' fontSize={18}>
                        Country
                    </Text>
                    <Select
                        width="100%"
                        flex={1}
                        defaultValue={formData.country}
                        selectedValue={formData.country}
                        onValueChange={(itemValue) => setFormData({ ...formData, country: itemValue })}
                    >
                        <SelectTrigger borderColor='#A9A8AC' width={'100%'} rounded={10} variant="outline" size="lg">
                            <SelectInput
                                style={{
                                    height: 50,
                                    flex: 1,
                                    color: '#525252',
                                    padding: 5,
                                }}
                                placeholder="Select option" />
                            <SelectIcon >
                                <Icon as={ChevronDownIcon} />
                            </SelectIcon>
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectBackdrop />
                            <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator />
                                </SelectDragIndicatorWrapper>
                                <SelectItem label="All" value="all" />
                                {options.map((option) => (
                                    <SelectItem
                                        key={option.value}
                                        value={option.value}
                                        label={option.label}
                                    />
                                ))}
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                </VStack>
                {userData?.role !== 'MOBILIZER' &&
                    <HStack space="md" alignItems='center'>
                        <Text size="sm">I want to receive email updates</Text>
                        <Switch
                            value={formData.updates}
                            onValueChange={(value) => setFormData({ ...formData, updates: value })}
                        />
                    </HStack>
                }
                <HStack space="md" alignItems='center' mt={8}>
                    <Text size="sm">Instagram connect</Text>
                    <Switch
                        value={switches.instagramConnnet}
                        onValueChange={(value) => setSwitches({ ...switches, instagramConnnet: value })}
                    />
                </HStack>
                {switches.instagramConnnet && (
                    <ReusableInput
                        label='Instagram Handle'
                        placeholder='@john_doe'
                        value={formData.instagram}
                        setState={(text) => setFormData({ ...formData, instagram: text })}
                    />
                )}
                <HStack space="md" alignItems='center' mt={8}>
                    <Text size="sm">Twitter connect</Text>
                    <Switch
                        value={switches.twitterConnect}
                        onValueChange={(value) => setSwitches({ ...switches, twitterConnect: value })}
                    />
                </HStack>
                {switches.twitterConnect && (
                    <ReusableInput
                        label='Twitter Handle'
                        placeholder='@john_doe'
                        value={formData?.twitter}
                        setState={(text) => setFormData({ ...formData, twitter: text })}
                    />
                )}
                <HStack space="md" alignItems='center' mt={8}>
                    <Text size="sm">TikTok connect</Text>
                    <Switch
                        value={switches.tikTokConnect}
                        onValueChange={(value) => setSwitches({ ...switches, tikTokConnect: value })}
                    />
                </HStack>
                {switches.tikTokConnect && (
                    <ReusableInput
                        label='TikTok Handle'
                        placeholder='@john_doe'
                        value={formData.tiktok}
                        setState={(text) => setFormData({ ...formData, tiktok: text })}
                    />
                )}
                <HStack space="md" alignItems='center' mt={8}>
                    <Text size="sm">Facebook connect</Text>
                    <Switch
                        value={switches.facebookConnect}
                        onValueChange={(value) => setSwitches({ ...switches, facebookConnect: value })}
                    />
                </HStack>
                {switches.facebookConnect && (
                    <ReusableInput
                        label='Facebook Handle'
                        placeholder='@john_doe'
                        value={formData.facebook}
                        setState={(text) => setFormData({ ...formData, facebook: text })}
                    />
                )}
                <Button
                    onPress={() => {
                        handleUpdateProfile()
                    }}

                    mt={16}
                    width="100%" alignSelf="center" h={45} rounded="$xl" backgroundColor="#0202CC">

                    {isLoading ?
                        <ActivityIndicator size="small" color="#fff" />
                        :
                        <Text fontWeight={600} color="white">
                            Save
                        </Text>
                    }
                </Button>
            </VStack>
        </VStack>
    )
}

export default Profile