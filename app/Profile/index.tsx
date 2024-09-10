import { ScrollView } from 'react-native'
import React, { useState } from 'react'
import PagerView from 'react-native-pager-view';
import PagerViewSinglePageLayout from './PagerViewSinglePageLayout';
import { Avatar, AvatarFallbackText, AvatarImage, Box, Button, ButtonText, Text } from '@gluestack-ui/themed';
import Profile from './Profile';
import { HStack } from '@gluestack-ui/themed';
import { VStack } from '@gluestack-ui/themed';
import { Heading } from '@gluestack-ui/themed';
import Password from './Password';
import Subscriptions from './Subscriptions';
import Invocies from './Invocies';
import Payments from './Payments';
const MainProfile = () => {
    const [activePage, setActivePage] = useState(0);
    const refPagerView = React.useRef<PagerView>(null);

    const handlePageChange = (page: number) => {
        requestAnimationFrame(() => refPagerView.current?.setPage(page));
        setActivePage(page);
    };
    const pages = [
        {
            title: "Profile",
        },
        {
            title: "Password",
        },
        {
            title: "Subscriptions",
        },
        {
            title: "Payments",
        },
        {
            title: "Invocies",
        },
    ]



    return (
        <Box w="100%" h="100%" bg="white" pt="$2" position='relative'>
            <HStack alignItems='center' gap="$4" p="$4" >
                <Avatar bgColor="$amber600" size="xl" borderRadius="$full">
                    <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
                    <AvatarImage
                        alt=""
                        source={{
                            uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                        }}
                    />
                </Avatar>
                <VStack>
                    <Heading color="$black" fontFamily='nova600' size="sm">Welcome{" "}
                        <Text color="$black" fontFamily='nova800'>
                            Richard
                        </Text>
                    </Heading>
                    <Text fontFamily='nova' color='$black' size="sm">This is supposed to be the bio of the user
                    </Text>
                </VStack>
            </HStack>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                    maxHeight: 50,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.05,
                    shadowRadius: 5.30,
                    backgroundColor: 'white',
                    overflow: "visible",
                    marginVertical: 10
                }}
                contentContainerStyle={{ paddingHorizontal: 10, display: "flex", flexDirection: "row", paddingBottom: 15 }}

            >
                {pages?.map((item: any, index: number) => (
                    <Button
                        key={item?.title}
                        onPress={() => handlePageChange(index)}
                        bg={'transparent'}
                        borderBottomWidth={1}
                        borderBlockColor={activePage === index ? '#0202CC' : 'transparent'}
                        px="$4"
                        size='sm'
                        mx="$1"
                    >
                        <ButtonText
                            fontFamily='nova400'
                            color={activePage === index ? '#0202CC' : '#000'}>{item?.title}</ButtonText>
                    </Button>
                ))}
            </ScrollView>

            <PagerView
                onPageSelected={(e) => {
                    setActivePage(e?.nativeEvent?.position);
                }}
                ref={refPagerView} style={{ flex: 1 }} initialPage={0}>

                <PagerViewSinglePageLayout >
                    <Profile />
                </PagerViewSinglePageLayout>



                <PagerViewSinglePageLayout >
                    <Password />
                </PagerViewSinglePageLayout>



                <PagerViewSinglePageLayout >
                    <Subscriptions />
                </PagerViewSinglePageLayout>




                <PagerViewSinglePageLayout >
                    <Payments />
                </PagerViewSinglePageLayout>



                <PagerViewSinglePageLayout >
                    <Invocies />
                </PagerViewSinglePageLayout>



            </PagerView>

        </Box>
    )
}

export default MainProfile