import { View, FlatList } from "react-native";

import SBImageItem from "./SBImageItem";
import { useNavigation } from "@react-navigation/native";


type props = {
    AllCircles: any,

}

function CirclesCarousel({ AllCircles }: props) {

    const navigation = useNavigation()

    return (
        <View
            style={{
                alignItems: "center",
                width: "100%"
            }}
        >
            <FlatList
                snapToAlignment={'start'}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                viewabilityConfig={{ itemVisiblePercentThreshold: 60, }}
                style={{ padding: 10 }}
                contentContainerStyle={{ paddingRight: 10 }}
                decelerationRate={0.5}
                keyExtractor={(_, index) => `id_${index}`}
                data={AllCircles}
                renderItem={({ item }) => <SBImageItem item={item} navigation={navigation} />}
            />
        </View>
    );
}


export default CirclesCarousel;