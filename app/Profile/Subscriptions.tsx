import { PaymentSubscriptionsApi } from '@/Api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import useCustomToast from '@/hooks/useCustomToast';
import useUserSubscriptions from '@/hooks/useUserSubscriptions';
import { Checkbox, CheckboxGroup, CheckboxIcon, CheckboxIndicator, CheckboxLabel, CloseIcon, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@gluestack-ui/themed';
import { Icon } from '@gluestack-ui/themed';
import { CheckIcon } from '@gluestack-ui/themed';
import { Button } from '@gluestack-ui/themed';
import { ModalCloseButton } from '@gluestack-ui/themed';
import { ButtonText, Heading, Menu, MenuItem, MenuItemLabel, Modal, ModalBackdrop, Pressable, Text, View, VStack } from '@gluestack-ui/themed'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native';

const Subscriptions = () => {


  const { userSubscriptions, isSubscriber, isLoading } = useUserSubscriptions();


  const [selectedSubscription, setSelectedSubscription] = useState<string | null>(null)

  const ref = React.useRef(null)

  const [showModal, setShowModal] = useState(false)

  function handleOpen(subscriptionId: string) {
    setSelectedSubscription(subscriptionId)
    setShowModal(true)
  }

  const queryClient = useQueryClient()

  React.useEffect(() => {
    if (!showModal) setSelectedSubscription(null)
  }, [showModal])

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

      <CancelSubscriptionModal
        subscriptionId={selectedSubscription}
        showModal={showModal}
        setShowModal={setShowModal}
        refC={ref}
        queryClient={queryClient}
      />

      {isSubscriber &&
        userSubscriptions?.map((subscription: any, index: number) => subscription?.circle?.name && subscription?.amount && (
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
          key="Cancel" textValue="Cancel">
          <MenuItemLabel size="sm">
            Cancel
          </MenuItemLabel>
        </MenuItem>

      </Menu>
    </VStack>
  )
}


type props2 = {
  showModal: boolean,
  setShowModal: (value: boolean) => void,
  subscriptionId: string | null,
  refC: any,
  queryClient: any
}
const CancelSubscriptionModal = ({ subscriptionId, showModal, setShowModal, refC, queryClient }: props2) => {

  const [isActiveStep, setIsActiveStep] = useState(1)
  const [values, setValues] = useState([])
  const showToast = useCustomToast()

  const choices = [
    "I didn't receive enough updates",
    "I didn't like the type of updates I was receiving",
    "I'm not satisfied with the HERO service in general",
    "I find it too expensive",
    "I decided to subscribe to another circle",
    "Another reason"
  ]


  const { mutate: CancelSubscription, isPending } = useMutation({
    mutationKey: ['CancelSubscription'],
    mutationFn: async () => {
      if (!subscriptionId) throw new Error('No subscriptionId provided')
      if (values.length === 0) throw new Error('No reason provided')

      await new PaymentSubscriptionsApi(AXIOS_CONFIG).cancelSubscription({
        answers: values,
        subscriptionId: subscriptionId || ''
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['subscriptions/me'])
      setIsActiveStep(3)
    },
    onError: (error: any) => {
      console.log('error', error?.response?.data?.message)
      showToast({ action: "error", title: error?.response?.data?.message })
    }
  })

  React.useEffect(() => {
    if (!showModal) {
      setIsActiveStep(1)
      setValues([])
    }
  }, [showModal])

  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false)
      }}
      finalFocusRef={refC}
    >
      <ModalBackdrop />
      <ModalContent
        bg="$white"
      >
        <ModalHeader>
          <Heading color={"$black"} size="lg" maxWidth={'90%'} lineHeight={22}>
            {isActiveStep === 3 ? "Your subscription was succesfully cancelled" : "Are you sure you want to cancel your subscription?"}
          </Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          {isActiveStep === 1 &&
            <Text>
              By cancelling you will no longer have access to your HERO Circle and features.
            </Text>
          }


          {isActiveStep === 2 &&
            <>
              <Text my="$4" color="$black" >
                Please let us know why you're cancelling your subscription
              </Text>

              {choices.map((choice) => (
                <CheckboxGroup
                  key={choice}
                  value={values}
                  aria-label='choices'
                  onChange={(keys) => {
                    setValues(keys)
                  }}
                >
                  <Checkbox
                    aria-label='choices'
                    px="$2"
                    mt="$2"
                    value={choice}
                    size="md" isInvalid={false} isDisabled={false}>
                    <CheckboxIndicator
                      mr="$2">
                      <CheckboxIcon color="$white" as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel fontSize={14} >
                      {choice}
                    </CheckboxLabel>
                  </Checkbox>
                </CheckboxGroup>
              ))
              }
            </>
          }

          {isActiveStep === 3 &&
            <Text
              textAlign='center'
              my="$4"
              color="$black"
            >
              Your card will no longer be charged
            </Text>
          }

        </ModalBody>
        {isActiveStep !== 3 ?
          <ModalFooter>
            <Button
              size="xs"
              rounded={20}
              action="positive"
              backgroundColor='#0000FF'
              mr={4}
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Nevermind</ButtonText>
            </Button>
            <Button
              variant="outline"
              size="xs"
              action="secondary"
              disabled={
                values.length === 0 && isActiveStep === 2
              }
              rounded={20}
              onPress={() => {
                if (isActiveStep === 1) setIsActiveStep(2)
                else CancelSubscription()
              }}
            >
              {isPending ?
                <ActivityIndicator />
                :
                <ButtonText>Continue cancellation</ButtonText>
              }
            </Button>
          </ModalFooter>
          :
          <ModalFooter
            marginTop={-10}
          >
            <VStack justifyContent='center' width='100%' alignItems='center' gap="$3">

              <Button
                size="xs"
                rounded={20}
                action="positive"
                backgroundColor='#0000FF'
                onPress={() => {
                  setShowModal(false)
                }}
              >
                <ButtonText>Explore Other Circles</ButtonText>
              </Button>
              <Pressable
                onPress={() => {
                  setShowModal(false)
                }}
              >
                <Text
                  underline={true}
                >Go back to profile</Text>
              </Pressable>
            </VStack>
          </ModalFooter>
        }
      </ModalContent>
    </Modal>
  )
}