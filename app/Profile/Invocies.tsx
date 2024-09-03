import { Octicons } from '@expo/vector-icons'
import { Heading, Pressable, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'

const Invocies = () => {
  return (
    <VStack bg="$white" space="lg" >

      <Heading
        fontSize={26}
        mb={12}
        fontFamily='nova800'
      >
        Invoices
      </Heading>

      <SingleInvocies />
      <SingleInvocies />
      <SingleInvocies />

    </VStack>
  )
}

export default Invocies


const SingleInvocies = () => {
  return (
    <VStack borderBottomWidth={0.5} borderColor='$black' gap="$1"
      paddingRight={'$4'}
      paddingBottom={"$6"}
      position='relative'
    >
      <Text
        fontFamily='nova600'
      >
        Indigenous Rights Circle 51521515
      </Text>
      <Text
        fontFamily='nova'
      >
        March 9, 2024 at 12 PM
      </Text>



      <VStack
        alignItems='center'
        gap="$3"
        position='absolute'
        top={-5}
        right={8}
      >
        <Text
          fontFamily='nova600'
        >
          20€
        </Text>
        <Pressable>
          <Octicons name='download' size={24} color='black' />
        </Pressable>
      </VStack>
    </VStack>
  )
}