import React from 'react'
import { Button, Heading, HStack, Text, VStack } from '@gluestack-ui/themed'
import ReusableInput from '@/components/ReusableInput'
import { Switch } from '@gluestack-ui/themed';


const Profile = () => {

    const [switches, setSwitches] = React.useState({
        recieveUpdates: false,
        instagramConnnet: true,
        facebookConnect: false,
        twitterConnect: false,
        tikTokConnect: false,
    })

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        heroId: '',
        bio: '',
        country: '',
        recieveUpdates: false,
        instaId: '',
        twitterId: '',
        tiktokId: '',
        facebookId: ''
    })

    return (
        <VStack bg="$white" space="lg" >
            <Heading
                fontSize={26}
                mb={4}
                fontFamily='nova800'
            >Profile</Heading>

            <VStack gap="$4">
                <ReusableInput
                    label='First Name'
                    placeholder='John'
                    value={formData.firstName}
                    setState={(text) => setFormData({ ...formData, firstName: text })}
                />
                <ReusableInput
                    label='Last Name'
                    placeholder='Doe'
                    value={formData.lastName}
                    setState={(text) => setFormData({ ...formData, lastName: text })}
                />
                <ReusableInput
                    label='Hero ID'
                    placeholder='123456'
                    value={formData.heroId}
                    setState={(text) => setFormData({ ...formData, heroId: text })}
                />
                <ReusableInput
                    label='Bio'
                    placeholder='Tell us about yourself'
                    value={formData.bio}
                    setState={(text) => setFormData({ ...formData, bio: text })}
                />
                <ReusableInput
                    label='Country'
                    placeholder='Nigeria'
                    value={formData.country}
                    setState={(text) => setFormData({ ...formData, country: text })}
                />
                <HStack space="md" alignItems='center'>
                    <Text size="sm">I want to receive email updates</Text>
                    <Switch
                        value={switches.recieveUpdates}
                        onValueChange={(value) => setSwitches({ ...switches, recieveUpdates: value })}
                    />
                </HStack>
                { }
                <HStack space="md" alignItems='center'>
                    <Text size="sm">Instagram connect</Text>
                    <Switch
                        value={switches.instagramConnnet}
                        onValueChange={(value) => setSwitches({ ...switches, instagramConnnet: value })}
                    />
                </HStack>
                {switches.instagramConnnet && (
                    <ReusableInput
                        label='Instagram Handle'
                        placeholder='@john_doe'
                        value={formData.heroId}
                        setState={(text) => setFormData({ ...formData, heroId: text })}
                    />
                )}
                <HStack space="md" alignItems='center'>
                    <Text size="sm">Twitter connect</Text>
                    <Switch
                        value={switches.twitterConnect}
                        onValueChange={(value) => setSwitches({ ...switches, twitterConnect: value })}
                    />
                </HStack>
                {switches.twitterConnect && (
                    <ReusableInput
                        label='Twitter Handle'
                        placeholder='@john_doe'
                        value={formData.heroId}
                        setState={(text) => setFormData({ ...formData, heroId: text })}
                    />
                )}
                <HStack space="md" alignItems='center'>
                    <Text size="sm">TikTok connect</Text>
                    <Switch
                        value={switches.tikTokConnect}
                        onValueChange={(value) => setSwitches({ ...switches, tikTokConnect: value })}
                    />
                </HStack>
                {switches.tikTokConnect && (
                    <ReusableInput
                        label='TikTok Handle'
                        placeholder='@john_doe'
                        value={formData.heroId}
                        setState={(text) => setFormData({ ...formData, heroId: text })}
                    />
                )}
                <HStack space="md" alignItems='center'>
                    <Text size="sm">Facebook connect</Text>
                    <Switch
                        value={switches.facebookConnect}
                        onValueChange={(value) => setSwitches({ ...switches, facebookConnect: value })}
                    />
                </HStack>
                {switches.facebookConnect && (
                    <ReusableInput
                        label='Facebook Handle'
                        placeholder='@john_doe'
                        value={formData.heroId}
                        setState={(text) => setFormData({ ...formData, heroId: text })}
                    />
                )}
                <Button
                mt={16}
                    width="100%" alignSelf="center" h={45} rounded="$xl" backgroundColor="#0202CC">
                    <Text fontWeight={600} color="white">
                        Save
                    </Text>
                </Button>
            </VStack>
        </VStack>
    )
}

export default Profile