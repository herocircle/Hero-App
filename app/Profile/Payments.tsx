import { Actionsheet, Box, Button, ButtonText, Heading, HStack, Menu, MenuItem, MenuItemLabel, Pressable, Text, View, VStack } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DefaultPaymentMethodRequestDTO, PaymentMethodsApi } from '@/Api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { AxiosError } from 'axios';
import { ActionsheetBackdrop } from '@gluestack-ui/themed';
import { ActionsheetContent } from '@gluestack-ui/themed';
import WebView from 'react-native-webview';
import { ActivityIndicator } from 'react-native';
import useCustomToast from '@/hooks/useCustomToast';

const Payments = () => {




  const queryClient = useQueryClient()
  const showToast = useCustomToast()

  const { data, isLoading } = useQuery({
    queryKey: ['paymentMethods'],
    queryFn: async ({ signal }) => {
      const result = await new PaymentMethodsApi(AXIOS_CONFIG).getPaymentMethods({
        signal
      });
      return result.data;
    }
  });


  const DeletePayment = useMutation({
    mutationFn: async (paymentMethodId: string) => {
      await new PaymentMethodsApi(AXIOS_CONFIG).detachPaymentMethod({
        paymentMethodId
      });
    },
    onSuccess: () => {
      showToast({ title: 'Payment Method Removed' })
      queryClient.invalidateQueries({ queryKey: ['paymentMethods'] });
    }
  });


  const setPaymentAsDefault = useMutation({
    mutationFn: async (paymentMethodId: string) => {
      const requestDTO: DefaultPaymentMethodRequestDTO = {
        paymentMethodId
      };
      await new PaymentMethodsApi(AXIOS_CONFIG).changeDefaultPayment(requestDTO);
    },
    onSuccess: () => {
      showToast({ title: 'Payment Method set as default' })
      queryClient.invalidateQueries({ queryKey: ['paymentMethods'] });
    }
  });


  const [SessionLink, setSessionLink] = useState('')
  const [isOpen, SetOpen] = useState(false)
  const handleOpen = () => SetOpen(true)
  const handleClose = () => SetOpen(false)
  const stripePopup = async () => {
    try {
      const result = await new PaymentMethodsApi(AXIOS_CONFIG).changePaymentMethod({});
      setSessionLink(result.data.url)
      result?.data?.url && handleOpen()
    } catch (error) {
      if (error instanceof AxiosError) throw error.response?.data;
    }
  };






  const [selectedPaymentId, setSelectedPaymentId] = React.useState<
    string | null
  >(null);




  return (
    <VStack bg="$white" space="lg" >

      <Actionsheet isOpen={isOpen} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent minHeight={"80%"} maxHeight="80%" w={'100%'} bg='white'  >
          <Box h={"100%"} w="100%" >
            <WebView
              javaScriptEnabled={true}
              style={{ height: "100%" }}
              onNavigationStateChange={(navState) => {
                if (navState.url.includes('payments?updated=true')) {
                  queryClient.invalidateQueries({ queryKey: ['paymentMethods'] });
                  handleClose()
                  showToast({ title: 'Payment Method Added Successfully' })
                }
              }}
              source={{ uri: SessionLink }}
            />
          </Box>
        </ActionsheetContent>
      </Actionsheet>

      <HStack alignItems='center' justifyContent='space-between'>

        <Heading
          fontSize={26}
          mb={12}
          fontFamily='nova800'
        >
          Payments
        </Heading>


        <Button
          onPress={stripePopup}
          bg="#0202CC"
          py={4}
          size="xs"
          px={12}
          rounded="$xl"
        >
          <Text
            fontSize={12}
            color="$white"
            fontFamily='nova600'
          >
            Add Payment Method
          </Text>
        </Button>
      </HStack>
      {isLoading && <ActivityIndicator style={{ marginTop: 30 }} size="large" color="#0000ff" />}


      {data?.paymentMethods?.length === 0 && !isLoading &&
        <Text
          textAlign='center'
          fontFamily='nova'
        >
          No Payment Methods found
        </Text>
      }

      {data?.paymentMethods?.map((paymentMethod: any, index: number) => (
        <SinglePayment
          paymentMethod={paymentMethod}
          key={`${paymentMethod.id}-${index}`}
          handleOpen={handleOpen}
          isDefault={data?.defaultPaymentMethod === paymentMethod?.id || false}
          DeletePayment={DeletePayment}
          setPaymentAsDefault={setPaymentAsDefault}
          setSelectedPaymentId={setSelectedPaymentId}
          selectedPaymentId={selectedPaymentId}
        />
      ))}
    </VStack>
  )
}

export default Payments

type props = {
  paymentMethod: any,
  handleOpen: () => void,
  DeletePayment: any,
  setPaymentAsDefault: any,
  setSelectedPaymentId: any,
  selectedPaymentId: any,
  isDefault: boolean
}
const SinglePayment = ({
  paymentMethod,
  handleOpen,
  DeletePayment,
  setPaymentAsDefault,
  setSelectedPaymentId,
  selectedPaymentId,
  isDefault
}: props) => {





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
          {paymentMethod?.brand} ●●●{paymentMethod?.last4}
        </Text>
      </HStack>
      {isDefault &&
        <Text fontFamily='nova' >
          This is your default payment method
        </Text>
      }

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

        {!isDefault &&
          <MenuItem
            onPress={() => {
              setSelectedPaymentId(paymentMethod.id)
              setPaymentAsDefault.mutate(paymentMethod.id)
            }}
            key="defaultRemove" textValue="default">
            <MenuItemLabel size="sm">
              Set as default
            </MenuItemLabel>
          </MenuItem>
        }

        <MenuItem
          onPress={() => {
            setSelectedPaymentId(paymentMethod.id)
            DeletePayment.mutate(paymentMethod.id)
          }}
          key="Remove" textValue="Remove">
          <MenuItemLabel size="sm">
            Remove
          </MenuItemLabel>
        </MenuItem>

      </Menu>
    </VStack >
  )
}