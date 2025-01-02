import { TestimonialsSectionApi } from '@/Api/apis/testimonials-section-api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { VStack } from '@gluestack-ui/themed';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';

const Testimonials = () => {
    const { data: testimonials, isLoading, isError } = useQuery({
        queryKey: ['getTestimonials'],
        queryFn: async () => {
            const response = await new TestimonialsSectionApi(AXIOS_CONFIG).getTestimonialsSections();
            return response.data;
        }
    });

    if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
    if (isError) return <Text>Error loading testimonials.</Text>;

    return (
        <VStack px="$6" mt="$4" >
            {testimonials?.map((testimonial) => (
                <View
                    key={testimonial._id}
                    style={{
                        marginBottom: 16,
                        paddingVertical: 20,
                        paddingHorizontal: 20,
                        backgroundColor: '#F6F6F6',
                        borderRadius: 12,
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={{ uri: testimonial.image || '/herologo.png' }}
                        style={{ width: 60, height: 60, borderRadius: 30, marginBottom: 8 }}
                    />
                    <Text style={{ fontStyle: 'italic', color: '#4A4A4A', marginBottom: 8 }}>
                        &ldquo;{testimonial.text}&rdquo;
                    </Text>
                    <Text style={{ fontWeight: 'bold', color: '#333', alignSelf: "flex-start" }}>{testimonial.name}</Text>
                </View>
            ))}
        </VStack>
    );
}

export default Testimonials;
