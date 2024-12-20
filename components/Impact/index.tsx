import { Box, Image, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'
import { Platform, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';

const OurImpact = () => {
    const chips = [
        {
            text1: 'Supporters',
            text2: 'WorldWide',
            number: 1202
        },
        {
            text1: 'Mobilizers',
            text2: 'Backed',
            number: 103
        },
        {
            text1: 'Countries',
            text2: 'impacted',
            number: 28
        },
        {
            text1: 'Active',
            text2: 'Campaigns',
            number: 42
        },
    ]
    const pins = [
        { id: 1, latitude: 31.2357, longitude: 30.0444, title: 'Pin 1', description: 'Description 1' },
        { id: 2, latitude: 21.3891, longitude: 39.8579, title: 'Pin 2', description: 'Description 2' },
    ];
    const isAndriod = Platform.OS === 'android';

    return (




        <VStack gap="$5" py="$16" mb={-32} px="$4" bg='#FAFAFA'>
            <Text fontSize={32} fontFamily='nova800' color="$black" textAlign='center' >Our collective impact</Text>

            <Image
                source={require('../../assets/impact.webp')}
                width={600}
                height={300}
                style={{ objectFit: 'contain', alignSelf: "center" }}
                alt='Our collective impact'
            />
            <VStack gap="$8">
                {chips?.map((item) => (
                    <Chip
                        key={item.text1}
                        text1={item.text1}
                        text2={item.text2}
                        number={item.number}
                    />
                ))}
            </VStack>



            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    customMapStyle={mapStyle}
                    initialRegion={{
                        latitude: 20, // Centralized latitude for zoomed-out view
                        longitude: 30, // Centralized longitude for zoomed-out view
                        latitudeDelta: 50, // Adjust for zoom-out
                        longitudeDelta: 50,
                    }}
                >
                    {pins.map((pin) => (
                        <Marker
                            key={pin.id}
                            coordinate={{ latitude: pin.latitude, longitude: pin.longitude }}
                            title={pin.title}
                            description={pin.description}
                        // image={require('./path/to/custom-pin-icon.png')}
                        />
                    ))}
                </MapView>
            </View>
        </VStack>
    )
}

export default OurImpact

type props = {
    text1: string,
    text2: string
    number: number
}

function Chip({ text1, text2, number }: props) {
    return (
        <VStack gap="$3" alignItems='center' alignSelf='center'>
            <Box
                display='flex'
                bg="#F1F1F1"
                alignItems='center'
                justifyContent='center'
                width={120}
                height={50}
                borderRadius={"$xl"}
            >
                <Text fontSize={18} color="$black" fontFamily='nova800'>
                    {number}
                </Text>
            </Box>
            <VStack gap={4} alignItems='center'>
                <Text color="$black" fontFamily='nova'>{text1}</Text>
                <Text color="$black" fontFamily='nova'>{text2}</Text>
            </VStack>
        </VStack>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 250,
        flex: 1,
    },
    map: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});


const mapStyle = [
    {
        "elementType": "geometry",
        "stylers": [{ "color": "#f5f5f5" }]
    },
    {
        "elementType": "labels.icon",
        "stylers": [{ "visibility": "off" }]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#616161" }]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [{ "color": "#f5f5f5" }]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#bdbdbd" }]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{ "color": "#eeeeee" }]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#757575" }]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{ "color": "#e5e5e5" }]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#9e9e9e" }]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{ "color": "#ffffff" }]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#757575" }]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{ "color": "#dadada" }]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#616161" }]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#9e9e9e" }]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{ "color": "#e5e5e5" }]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{ "color": "#eeeeee" }]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{ "color": "#c9c9c9" }]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#9e9e9e" }]
    }]