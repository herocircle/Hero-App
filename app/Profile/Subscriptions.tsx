import { Box, Button, ButtonText, Heading, Menu, MenuItem, MenuItemLabel, Pressable, Text, View, VStack } from '@gluestack-ui/themed'
import React from 'react'

const Subscriptions = () => {
  return (
    <VStack bg="$white" space="lg" >

      <Heading
        fontSize={26}
        mb={12}
        fontFamily='nova800'
      >
        Subscriptions
      </Heading>
      <SingleSubscription />
      <SingleSubscription />
      <SingleSubscription />
    </VStack>
  )
}

export default Subscriptions


const SingleSubscription = () => {
  return (
    <VStack borderBottomWidth={0.5} borderColor='$black' gap="$3"
      paddingRight={'$4'}
      paddingBottom={"$5"}
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
        20€
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
    </VStack>
  )
}