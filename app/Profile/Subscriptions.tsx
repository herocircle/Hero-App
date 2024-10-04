import useUserSubscriptions from '@/hooks/useUserSubscriptions';
import { ButtonText, Heading, Menu, MenuItem, MenuItemLabel, Pressable, Text, View, VStack } from '@gluestack-ui/themed'
import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native';

const Subscriptions = () => {


  const { userSubscriptions, isSubscriber, isLoading } = useUserSubscriptions();


  const [selectedSubscription, setSelectedSubscription] = useState<string | null>(null)

  function handleOpen(subscriptionId: string) {
    setSelectedSubscription(subscriptionId)
  }


  return (
    <VStack bg="$white" space="lg" >

      <Heading
        fontSize={26}
        mb={12}
        fontFamily='nova800'
      >
        Subscriptions
      </Heading>

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

      {userSubscriptions?.length === 0 && !isLoading &&
        <Text
          textAlign='center'
          fontFamily='nova'
        >
          No Subscriptions found
        </Text>
      }

      {isSubscriber &&
        userSubscriptions?.map((subscription: any, index:number) => subscription?.circle?.name && subscription?.amount && (
          <SingleSubscription
            subscription={subscription}
            key={`${subscription.circle.name}-${index}`}
            handleOpen={handleOpen}

          />
        ))}
    </VStack>
  )
}

export default Subscriptions

type propss = {
  subscription: any,
  handleOpen: (subscriptionId: string) => void
}
const SingleSubscription = ({ subscription, handleOpen }: propss) => {
  return (
    <VStack borderBottomWidth={0.5} borderColor='$black' gap="$3"
      paddingRight={'$4'}
      paddingBottom={"$5"}
      position='relative'
    >
      <Text
        fontFamily='nova600'
      >
        {subscription?.circle?.name}
      </Text>
      <Text
        fontFamily='nova'
      >
        {`${subscription.amount}€`}
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
        <MenuItem
          onPress={() => handleOpen(subscription._id)}
          key="Change" textValue="Change">
          <MenuItemLabel size="sm">
            Change
          </MenuItemLabel>
        </MenuItem>

      </Menu>
    </VStack>
  )
}