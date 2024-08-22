import React, { useState } from 'react';
import { Box, Button, HStack, Image, Input, InputField, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native-gesture-handler';

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const testCredentials = {
    email: 'test@example.com',
    password: '123456',
  };

  const handleLogin = () => {
    navigation.navigate('Home');
    
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }
    if (email === testCredentials.email && password === testCredentials.password) {
      console.log("ok");
      navigation.navigate('Home');
      // TO DO : link the login API 
    } else {
      setError('Invalid email or password');
    }
  };

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
          >
            <Image size="2xs" source={require('@/assets/images/GoogleIcon.png')} mr="$1" alt="Google Icon" />
            <Text color="#191919B2" fontSize={16} fontFamily="Visby-Semibold">
              Login with Google
            </Text>
          </Button>

          <HStack alignItems="center" gap={6} alignSelf="center">
            <Box flex={1} h={1} bg="$black" />
            <Text>OR</Text>
            <Box flex={1} h={1} bg="$black" />
          </HStack>


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
                  onChangeText={(text) => setEmail(text)}
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

          {error ? (
            <Text color="red" fontWeight={700} >
              {error}
            </Text>
          ) : null}

          <Button width="100%" alignSelf="center" onPress={handleLogin} h={45} rounded="$xl" backgroundColor="#0202CC">
            <Text fontWeight={600} color="white">
              Log In
            </Text>
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
    </Box>
  );
};

export default Login;
