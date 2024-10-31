import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, Image, Input, InputField, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AppleAuthentication from 'expo-apple-authentication';
import { ActivityIndicator, Platform } from 'react-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FrontendLoginResponseDTO, UserAuthApi } from '@/Api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import * as Google from "expo-auth-session/providers/google";
import { googleAuthConfig } from './GoogleFunctions';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const queryClient = useQueryClient()

  async function onSuccess(data: FrontendLoginResponseDTO) {
    const { token, user } = data;
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('userInfo', JSON.stringify(user));
    await AsyncStorage.setItem('UserSession', JSON.stringify({ userData: user, authToken: token }))
    queryClient.invalidateQueries({ queryKey: ['UserSession'] })
    navigation.navigate('Home');
  }


  const { mutate: formLogin, isPending, error, isError } = useMutation({
    mutationKey: ['login'],
    mutationFn: async () => {
      const restul = await new UserAuthApi(AXIOS_CONFIG).login({ email, password })
      return restul.data
    },
    onSuccess,
    onError: (error: any) => {
      console.log('error', error)
    },
  })

  const { mutate: googleLogin, isPending: logingIngWithGoogle, error: googleError, isError: isGoogleError } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (token: string) => {
      const restul = await new UserAuthApi(AXIOS_CONFIG).googleV2(token)
      return restul.data
    },
    onSuccess,
    onError: (error: any) => {
      console.log('error', error)
    },
  })


  const [request, response, promptAsync] = Google.useAuthRequest(googleAuthConfig, {
    useProxy: false
  });

  useEffect(() => {
    if (response?.type === "success") {
      response?.authentication?.accessToken &&
        googleLogin(response?.authentication?.accessToken)
    }
  }, [response]);


  return (
    <Box bg="$white" flex={1} >
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }} keyboardShouldPersistTaps="handled">
        <VStack w="100%" bg="#F2F2F2" mb="$8" maxHeight={400} overflow='hidden' flex={1}>
          <Pressable
            position='absolute'
            zIndex={100}
            top={15}
            left={15}
            onPress={() => {
                navigation.navigate('Home');
            }}
          >
            <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
          </Pressable>
          <Image
            source={require('@/assets/images/HERO_Payment-Funnel 3.png')}
            style={{ width: '100%', objectFit: "contain", height: 450, backgroundColor: '#F2F2F2' }}
            alt="Hero Image"
          />
        </VStack>

        <VStack width="80%" alignSelf="center" alignItems="center" gap={16}>
          <Text alignSelf="center" textAlign="center" fontWeight={700} fontSize={20} color="$black">
            Log in to your HERO Account
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
            onPress={() => promptAsync({ useProxy: false })}
            disabled={!request}
          >
            <Image size="2xs" source={require('@/assets/images/GoogleIcon.png')} mr="$1" alt="Google Icon" />
            <Text color="#191919B2" fontSize={16} fontFamily="nova600">
              Login with Google
            </Text>
          </Button>

          <HStack alignItems="center" gap={6} alignSelf="center">
            <Box flex={1} h={1} bg="$black" />
            <Text>OR</Text>
            <Box flex={1} h={1} bg="$black" />
          </HStack>
          {Platform.OS === "ios" &&
            <AppleAuthentication.AppleAuthenticationButton
              buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
              buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
              cornerRadius={7}
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


          <VStack w="100%" gap={15} mb="$2">
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
                  onChangeText={(text) => setEmail(text?.toLocaleLowerCase())}
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
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry
                />
              </Input>
            </VStack>
          </VStack>

          <Pressable mb="$2">
            <Text fontWeight={700} fontSize={14} color="$black">
              Forgot my password
            </Text>
          </Pressable>

          {isError ? (
            <Text color="red" fontWeight={700} >
              {error?.response?.data?.message || 'An error occurred during login'}
            </Text>
          ) : null}

          {isGoogleError ? (
            <Text color="red" fontWeight={700} >
              {googleError?.response?.data?.message || 'An error occurred during login'}
            </Text>
          ) : null}

          <Button
            width="100%" alignSelf="center" onPress={() => {
              if (!email || !password) {
                return;
              }
              formLogin()
            }} h={45} rounded="$xl" backgroundColor="#0202CC">
            {isPending || logingIngWithGoogle ?
              <ActivityIndicator />
              :
              <Text fontWeight={600} color="white">
                Log In
              </Text>
            }
          </Button>

          <HStack mt="$2" gap={4} alignItems="center">
            <Text fontSize={14} color="$black">
              Don't have an account yet?
            </Text>
            <Text fontWeight={600} fontSize={14} color="#0202CC" onPress={() => navigation.navigate('Register')}>
              Subscribe Here
            </Text>
          </HStack>
        </VStack>
      </ScrollView>
    </Box >
  );
};

export default Login;
