import { Pressable, Text, View } from '@gluestack-ui/themed';
import React, { useRef } from 'react'
import WebView from 'react-native-webview';
import WorkModal from '../Circle/WorkModal';

const VideoComponent = () => {
    const webViewRef = useRef<any>(null); // Ref for the WebView
    const videoUrl = "https://www.youtube.com/embed/_JoTH4Kqhyc";
    const [workModalState, setWorkModalState] = React.useState(false);

    return (
        <>

            <WorkModal
                isOpen={workModalState}
                selectedItem={{
                    title: "Our Community Manifesto",
                    audioUrl: "https://herocircle.app/HERO_Manifesto Audio.mp3",
                    description: "Welcome to HERO! You are joining a community of forward thinkers, storytellers and doers. We believe in creating new narratives of radical hope combined with meaningful action. We are solution driven, science-based and inclusive. We are learning as we go, we don’t have all the answers, and most likely, we are going to make some mistakes along the way, there is no playbook for this, but our purpose is clear: democratize climate action by empowering citizens from all backgrounds to contribute and back passionate mobilizers with the resources they need to advance climate solutions faster. Every step we take together pushes us all forward. We're grateful to have you here, and it's an honor to stand with you on the right side of history as we shape the future for generations to come.",
                }}
                closeModal={() => setWorkModalState(false)}
            />

            <View style={{ flex: 1, padding: 16, marginBottom: 15 }}>
                <View style={{ height: 300, marginBottom: 24 }}>
                    <WebView
                        ref={webViewRef}
                        source={{
                            uri: videoUrl,
                        }}
                        javaScriptEnabled={true}
                        injectedJavaScript={`
                        var tag = document.createElement('script');
                        tag.src = "https://www.youtube.com/embed/_JoTH4Kqhyc";
                        var firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                        `}
                        style={{ flex: 1 }}
                    />
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            marginBottom: 16,
                            color: "black",
                        }}
                    >
                        Empower the next 1 million mobilizers worldwide with a stable
                        monthly income
                    </Text>
                    <Text style={{ fontSize: 16, marginBottom: 24, color: "black" }}>
                        Through your HERO subscription, you're powering a new kind of
                        economy - one where passionate climate advocates are financially
                        supported by the communities they serve, enhancing their ability to
                        enact lasting, grassroots change worldwide.
                    </Text>
                    <Text style={{ fontSize: 16, marginBottom: 24, color: "black" }}>
                        Together, we support people-led solutions, from passing the EU
                        Nature Restoration Law to protect 20% of the EU's Natural Ecosystems
                        to creating powerful campaigns that mobilize millions to accelerate
                        the global transition to clean energy.
                    </Text>


                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Pressable
                            onPress={() => {
                                setWorkModalState(true);
                            }}
                            style={{ alignSelf: "flex-start" }}
                        >
                            <Text
                                style={{
                                    color: "#0202CC",
                                    fontWeight: "700",
                                    textDecorationLine: "underline",
                                    marginBottom: 16,
                                }}
                            >
                                Learn more
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </>
    )
}

export default VideoComponent