import React from 'react'
import { VStack } from '@gluestack-ui/themed';
import { ScrollView, View } from 'react-native';

function PagerViewSinglePageLayout({ children }: { children: React.ReactNode }) {
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <ScrollView
                keyboardShouldPersistTaps='always'
                contentContainerStyle={{ paddingBottom: 60 }}
                showsVerticalScrollIndicator={false}
            >
                <VStack p='$4' space="lg" >
                    {children}
                </VStack>
            </ScrollView>
        </View>
    )
}

export default PagerViewSinglePageLayout