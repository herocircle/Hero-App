import { Box, Button, ButtonText, Heading, HStack, Menu, MenuItem, MenuItemLabel, Pressable, Text, View, VStack } from '@gluestack-ui/themed'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const Payments = () => {
  return (
    <VStack bg="$white" space="lg" >

      <Heading
        fontSize={26}
        mb={12}
        fontFamily='nova800'
      >
        Payments
      </Heading>
      <SinglePayment />
      <SinglePayment />
      <SinglePayment />
    </VStack>
  )
}

export default Payments


const SinglePayment = () => {
  return (
    <VStack borderBottomWidth={0.5} borderColor='$black' gap="$1"
      paddingRight={'$4'}
      paddingBottom={"$5"}
      position='relative'
    >
      <HStack gap="$2" alignItems='center'>
        <FontAwesome name="cc-visa" size={24} color="#0000FF" />

        <Text
          fontFamily='nova600'
          color="$black"
        >
          visa ●●●5556
        </Text>
      </HStack>
      <Text
        fontFamily='nova'
      >
        This is your default payment method
      </Text>




      <Menu
        placement="top"
        trigger={({ ...triggerProps }) => {
          return (
            <Pressable
              size="sm"
              position='absolute'
              top={-15}
              right={5}
              {...triggerProps}>
              <ButtonText
                fontSize={26}
                color="$black"
              >...</ButtonText>
            </Pressable>
          )
        }}
      >
        <MenuItem key="Change" textValue="Change">
          <MenuItemLabel size="sm">
            Change
          </MenuItemLabel>
        </MenuItem>

      </Menu>
    </VStack >
  )
}