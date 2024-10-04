import { InvoiceListItemResponseDto, PaymentInvoiceApi } from '@/Api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { Octicons } from '@expo/vector-icons'
import { Heading, Pressable, Text, VStack } from '@gluestack-ui/themed'
import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react'
import { ActivityIndicator } from 'react-native';

const Invocies = () => {

  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ['invoices'],
    queryFn: async () => {
      const response = await new PaymentInvoiceApi(AXIOS_CONFIG).getMyInvoices();
      return response.data;
    }
  }
  );

  return (
    <VStack bg="$white" space="lg" >

      <Heading
        fontSize={26}
        mb={12}
        fontFamily='nova800'
      >
        Invoices
      </Heading>

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

      {data?.data?.length === 0 &&
        <Text
          textAlign='center'
          fontFamily='nova'
        >
          No invoices found
        </Text>
      }

      {data?.data?.map((invoice: InvoiceListItemResponseDto, i) =>
        <SingleInvocie
          invoice={invoice}
          lang={'en-US'}
          key={`${invoice.circleId}.${i}`}
        />
      )}

    </VStack>
  )
}

export default Invocies


const SingleInvocie = ({
  invoice,
  lang,
}: {
  invoice: InvoiceListItemResponseDto;
  lang: string;
}) => {

  function downloadInvoiceFromLink(link: string) {
    const a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  const { isPending, mutate: handleClick } = useMutation({
    mutationKey: ['download-invoice', invoice.stripeInvoiceId],
    mutationFn: async () => {
      const result = await new PaymentInvoiceApi(AXIOS_CONFIG).getInvoiceInfo({
        invoiceId: invoice.stripeInvoiceId
      });
      return result.data;
    },
    onSuccess: async (data) => {
      await downloadInvoiceFromLink(data.downloadUrl);
    },
    onError: (error) => {
      console.log('Failed to download invoice !');
      console.log(error);
    }
  }
  );




  return (
    <VStack borderBottomWidth={0.5} borderColor='$black' gap="$1"
      paddingRight={'$4'}
      paddingBottom={"$6"}
      position='relative'
    >
      <Text
        fontFamily='nova600'
      >
        {invoice?.circleName}
      </Text>
      <Text
        fontFamily='nova'
      >
        {new Date(invoice.invoiceCreatedAt).toLocaleDateString(lang)}
      </Text>



      <VStack
        alignItems='flex-end'
        gap="$3"
        position='absolute'
        top={-5}
        right={8}
      >
        <Text
          fontFamily='nova600'
        >
          €{invoice.invoiceAmount / 100}
        </Text>
        {isPending ?
          <ActivityIndicator size="small" color="#0000ff" /> :
          <Pressable
            onPress={() => handleClick()}
          >
            <Octicons name='download' size={24} color='black' />
          </Pressable>
        }
      </VStack>
    </VStack>
  )
}