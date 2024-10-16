import React, { useEffect, useState } from 'react';
import { Box, Button, VStack, Image, Text } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserAuthApi } from '@/Api'; // Assuming you're using a custom API service
import { AXIOS_CONFIG } from '@/Api/wrapper';

WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }: any) => {
  const queryClient = useQueryClient();
  
  // State for email/password login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Google login
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_ANDROID_CLIENT_ID , 
    redirectUri: 'https://auth.expo.io/@hammouda997/heroApp',
  });

  // React Query mutation for form login
  const { mutate: formLogin, isPending, isError, error } = useMutation({
    mutationKey: ['login'],
    mutationFn: async () => {
      const result = await new UserAuthApi(AXIOS_CONFIG).login({ email, password });
      return result.data;
    },
    onSuccess: async (data) => {
      const { token, user } = data;
      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userInfo', JSON.stringify(user));
      navigation.navigate('Home');
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  // Handle Google login response
  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      // Store Google tokens (e.g., accessToken) if needed
      AsyncStorage.setItem('googleAuthToken', authentication.accessToken);
      navigation.navigate('Home');
      console.log('Google Login Successful', authentication);
    }
  }, [response]);

  return (
    <Box flex={1} bg="$white">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }} keyboardShouldPersistTaps="handled">
        <VStack w="100%" bg="#F2F2F2" mb="$8" maxHeight={400} overflow='hidden' flex={1}>
          <Image
            source={require('@/assets/images/HERO_Payment-Funnel 3.png')}
            style={{ width: '100%', objectFit: 'contain', height: 450, backgroundColor: '#F2F2F2' }}
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
            onPress={() => promptAsync()}
            disabled={!request}
          >
            <Image size="2xs" source={require('@/assets/images/GoogleIcon.png')} mr="$1" alt="Google Icon" />
            <Text color="#191919B2" fontSize={16} fontFamily="Visby-Semibold">
              Login with Google
            </Text>
          </Button>

          {/* Email/Password Login and Other UI elements */}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Login;
