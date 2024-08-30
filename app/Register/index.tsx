import React, { useState } from 'react';
import { Box, Button, HStack, Image, Input, InputField, Text, VStack } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../types';
import { AxiosError } from 'axios';
import * as AppleAuthentication from 'expo-apple-authentication';
import { ActivityIndicator, Platform } from 'react-native';
import { FrontendLoginResponseDTO, User, UserAuthApi } from '@/Api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const API_URL = 'https://staging-api.herocircle.app';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const navigation = useNavigation<NavigationProps>();

  const queryClient = useQueryClient()

  const { mutate: formLogin, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: async ({ email, password }: { email: string, password: string }) => {
      const restul = await new UserAuthApi(AXIOS_CONFIG).login({ email, password })
      return restul.data
    },
    onSuccess: async (data: FrontendLoginResponseDTO) => {
      const { token, user } = data;
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      )
      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userInfo', JSON.stringify(user));
      await AsyncStorage.setItem('UserSession', JSON.stringify({ userData: user, authToken: token }))
      queryClient.invalidateQueries({ queryKey: ['UserSession'] })
      navigation.navigate('Home');
    },
    onError: (error: any) => {
      console.log('error', error)
    },
  })


  const { mutate: formRegister, isPending: isRegsitereing, error: registerErrors, isError } = useMutation({
    mutationKey: ['formRegister'],
    mutationFn: async () => {
      const userData = {
        firstname: firstName,
        lastname: lastName,
        email,
        password,
        agreeToTOS: true,
      };
      const restul = await new UserAuthApi(AXIOS_CONFIG).register(userData)
      return restul.data
    },
    onSuccess: async (data: User) => {
      await formLogin({ email: data.email, password: data.password })
    },
    onError: (error: any) => {
      console.log('error', error)
    },
  })


  // const registerMutation = useMutation({
  //   mutationFn: async (userData: any) => {
  //     const response = await axios.post(`${API_URL}/auth/register`, userData);
  //     return response.data;
  //   },
  //   onSuccess: () => {
  //     navigation.navigate('Home');
  //   },
  //   onError: (error: unknown) => {
  //     if (error instanceof AxiosError) {
  //       console.error('Error during registration:', error);

  //       if (error.response) {
  //         const { data } = error.response;

  //         if (data.message === 'Email already exists') {
  //           setError('This email is already registered. Please use a different email or log in.');
  //         } else if (data.errors && data.errors.issues) {
  //           console.error('Validation issues:', data.errors.issues);
  //           const errorMessages = data.errors.issues.map((issue: any) => issue.message).join(', ');
  //           setError(`Validation failed: ${errorMessages}`);
  //         } else {
  //           console.error('Error response data:', data);
  //           setError('An error occurred during registration.');
  //         }
  //       } else if (error.request) {
  //         console.error('Error request data:', error.request);
  //         setError('No response received from the server.');
  //       } else {
  //         console.error('Error message:', error.message);
  //         setError('An unexpected error occurred.');
  //       }
  //     } else {
  //       console.error('An unexpected error occurred:', error);
  //       setError('An unexpected error occurred.');
  //     }
  //   }

  // });


  // const handleRegister = () => {
  //   if (!firstName || !lastName || !email || !password) {
  //     setError('Please fill in all fields');
  //     return;
  //   }
  //   const userData = {
  //     firstname: firstName,
  //     lastname: lastName,
  //     email,
  //     password,
  //     agreeToTOS: true,
  //   };
  //   registerMutation.mutate(userData);
  // };

  return (
    <Box bg="$white" flex={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }} keyboardShouldPersistTaps="handled">
        <VStack w="100%" bg="#F2F2F2" mb="$8" maxHeight={400} overflow='hidden' flex={1}>
          <Image
            source={require('@/assets/images/HERO_Payment-Funnel 3.png')}
            style={{ width: '100%', objectFit: "contain", height: 450, backgroundColor: '#F2F2F2' }}
            alt="Hero Image"
          />
        </VStack>

        <VStack width="80%" alignSelf="center" alignItems="center" gap={16}>
          <Text alignSelf="center" textAlign="center" fontWeight={700} fontSize={20} color="$black">
            Create your HERO Account
          </Text>

          <Button
            display="flex"
            width="100%"
            flexDirection="row"
            alignItems="center"
            bg="#F2F2F2"
            h={45}
            rounded="$xl"
            justifyContent="center"
            mb={4}
          >
            <Image size="2xs" source={require('@/assets/images/GoogleIcon.png')} mr="$1" alt="Google Icon" />
            <Text color="#191919B2" fontSize={16} fontFamily="Visby-Semibold">
              Register with Google
            </Text>
          </Button>

          <HStack alignItems="center" gap={6} mb={4}>
            <Box flex={1} h={1} bg="$black" />
            <Text>OR</Text>
            <Box flex={1} h={1} bg="$black" />
          </HStack>

          {Platform.OS === "ios" &&
            <AppleAuthentication.AppleAuthenticationButton
              buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_UP}
              buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
              cornerRadius={9}
              style={{ width: '100%', height: 44, }}
              onPress={async () => {
                try {
                  const credential = await AppleAuthentication.signInAsync({
                    requestedScopes: [
                      AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                      AppleAuthentication.AppleAuthenticationScope.EMAIL,
                    ],
                  })
                  // await appleMutate({ user: credential?.user })
                } catch (e: any) {
                  if (e?.code === 'ERR_REQUEST_CANCELED') {
                    // handle that the user canceled the sign-in flow
                  } else {
                    // handle other errors
                  }
                }
              }}
            />}

          <HStack alignItems="center" gap={6} mb={4}>
            <Box flex={1} h={1} bg="$black" />
            <Text>OR</Text>
            <Box flex={1} h={1} bg="$black" />
          </HStack>

          {isError ? (
            <Text color="red" fontWeight={700} mb={4}>
              {registerErrors?.response?.data?.message}
            </Text>
          ) : null}

          <VStack w="100%" gap={15} mb="$2">
            <VStack gap={5}>
              <Text fontWeight={700} fontSize={18}>
                First Name
              </Text>
              <Input
                variant="outline"
                h={45}
                w="100%"
                rounded="$xl"
                borderColor='#A4A3A8'
              >
                <InputField
                  placeholder="Enter your first name"
                  value={firstName}
                  onChangeText={(text: React.SetStateAction<string>) => setFirstName(text)}
                />
              </Input>
            </VStack>
            <VStack gap={5}>
              <Text fontWeight={700} fontSize={18}>
                Last Name
              </Text>
              <Input
                variant="outline"
                h={45}
                w="100%"
                rounded="$xl"
                borderColor='#A4A3A8'
              >
                <InputField
                  placeholder="Enter your last name"
                  value={lastName}
                  onChangeText={(text: React.SetStateAction<string>) => setLastName(text)}
                />
              </Input>
            </VStack>
            <VStack gap={5}>
              <Text fontWeight={700} fontSize={18}>
                Email
              </Text>
              <Input
                variant="outline"
                h={45}
                w="100%"
                rounded="$xl"
                borderColor='#A4A3A8'
              >
                <InputField
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
                />
              </Input>
            </VStack>
            <VStack gap={5}>
              <Text fontWeight={700} fontSize={18}>
                Password
              </Text>
              <Input
                variant="outline"
                h={45}
                w="100%"
                rounded="$xl"
                borderColor='#A4A3A8'
              >
                <InputField
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
                  secureTextEntry
                />
              </Input>
            </VStack>
          </VStack>

          <Text textAlign="center" fontFamily='nova' fontSize={12} color="#191919B2" mb={4}>
            By signing up, you are creating a HERO account and agree to HERO’s{' '}
            <Text color="#0202CC" fontSize={14}>Terms and Conditions</Text> and <Text fontSize={14} color="#0202CC">Privacy Policy</Text>
          </Text>

          <Button width="100%" onPress={() => {
            if (!firstName || !lastName || !email || !password) {
              return;
            }
            formRegister()
          }} h={45} rounded="$xl" backgroundColor="#0202CC">
            {isPending || isRegsitereing ?
              <ActivityIndicator />
              :
              <Text fontWeight={600} color="white">
                Join HERO
              </Text>
            }
          </Button>

          <HStack mt={4} gap={4} alignItems="center">
            <Text fontSize={14} color="$black">
              Already have an account?
            </Text>
            <Text fontWeight={600} fontSize={14} color="#0202CC" onPress={() => navigation.navigate('Login')}>
              Log in here
            </Text>
          </HStack>

          <HStack justifyContent="center" alignItems="center" mt={10}>
            <VStack alignItems="center">
              <HStack gap={0} alignItems="center">
                <Box h={26} w={26} borderWidth={2} borderColor="#0202CC" rounded="$full" justifyContent="center" alignItems="center">
                  <Text color="#0202CC" fontWeight="bold" fontSize={12}>1</Text>
                </Box>
                <Box h={1} w={140} bg="#D9D9D9" />
                <Box h={26} w={26} borderWidth={2} borderColor="#D9D9D9" rounded="$full" justifyContent="center" alignItems="center">
                  <Text color="#D9D9D9" fontWeight="bold" fontSize={12}>2</Text>
                </Box>
              </HStack>
              <HStack mt={1} gap={60} alignItems="center">
                <Text fontSize={16} color="#0202CC">Account Creation</Text>
                <Text fontSize={16} color="#D9D9D9">Payment</Text>
              </HStack>
            </VStack>
          </HStack>

        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Register;
