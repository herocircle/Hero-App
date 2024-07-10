import { Box, Button, HStack, Image, Input, InputField, Pressable, Text, View, VStack } from '@gluestack-ui/themed'
import React from 'react'

const Login = () => {
  return (
    <Box bg="$white" minHeight={"100%"} minWidth={'100%'} >
      <VStack
        w='100%'
        mb="$8"
      >
        <Image
          source={require('@/assets/images/HERO_Payment-Funnel 3.png')}
          style={{ width: '100%', height: 300, backgroundColor: "#F2F2F2", objectFit: "contain" }}
          objectFit='contain'
          alt=""
        />
      </VStack>

      <VStack
        width={"80%"}
        alignSelf='center'
        alignItems='center' gap={16}>
        <Text
          alignSelf='center'
          textAlign='center'
          fontWeight={700}
          fontSize={20}
          color='$black'
        >
          Log in your HERO Account
        </Text>

        <Button
          display="flex"
          width={"100%"}
          flexDirection="row"
          alignItems={"center"}
          bg="#F2F2F2"
          h={45}
          rounded="$xl"
          justifyContent={"center"}
        >
          <Image size={'2xs'} source={require('@/assets/images/GoogleIcon.png')} mr="$1" alt="googleIcon" />
          <Text color="#191919B2" fontSize={16} fontFamily={"Visby-Semibold"}>Login with google </Text>
        </Button>

        <HStack alignItems='center' gap={6} alignSelf='center' >
          <Box flex={1} h={1} bg='$black' />
          <Text>OR</Text>
          <Box flex={1} h={1} bg='$black' />
        </HStack>
        <VStack w='100%' gap={15} mb='$2'>

          <VStack gap={5}>
            <Text
              fontWeight={700}
              fontSize={18}
            >Email</Text>
            <Input
              variant="outline"
              h={45}
              w='100%'
              rounded="$xl"
              borderColor='#A4A3A8'
            >
              <InputField placeholder="Enter Text here" />
            </Input>
          </VStack>
          <VStack gap={5}>
            <Text
              fontWeight={700}
              fontSize={18}
            >Password</Text>
            <Input
              variant="outline"
              h={45}
              w='100%'
              rounded="$xl"
              borderColor='#A4A3A8'
            >
              <InputField placeholder="Enter Text here" />
            </Input>
          </VStack>
        </VStack>

        <Pressable mb='$2'>
          <Text
            fontWeight={700}
            fontSize={14}
            color="$black"
          >
            Forgot my password
          </Text>
        </Pressable>

        <Button
          width={"100%"}
          alignSelf='center'
          h={45}
          rounded="$xl"
          backgroundColor="#0202CC"
        >
          <Text
            fontWeight={600}
            color="white">
            Log In
          </Text>
        </Button>

        <HStack
          mt="$2"
          gap={4} alignItems='center'>

          <Text
            fontSize={14}
            color="$black"
          >
            Dont't have an account yet?

          </Text>
          <Text
            fontWeight={600}
            fontSize={14}
            color="#0202CC"
          >
            Subscribe Here
          </Text>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Login