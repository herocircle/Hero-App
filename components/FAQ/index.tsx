import { Text } from '@gluestack-ui/themed'
import { View, VStack } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react'
import Accordion from "./ReusableAccordion"
import { Faq } from '@/Api'
import axios from 'axios'
import { BaseUrl } from '@/Api/wrapper'
const FAQ = () => {
    const [faqs, setFaqs] = useState<Faq[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/faq`);
                const allFaqs = response.data;
                const filteredFaqs = allFaqs.filter((faq: any) => faq.lang === ('en'));
                const sortedFaqs = filteredFaqs.sort((a: any, b: any) => a.index - b.index);
                setFaqs(sortedFaqs);
            } catch (err) {
                setError('Failed to fetch FAQs');
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    return (
        <View gap="$5" py="$5" px="$4">
            <VStack
                gap={10}
            >

                <Text
                    fontFamily='nova800'
                    fontSize={22}
                    color='$black'
                >
                    Frequently Asked Questions

                </Text>
                <Text
                    color='$black'
                    fontFamily='nova'
                    lineHeight={18}
                >
                    Everything you need to know about HERO and how it works. Do you have additional questions? Feel free to reach out to us at hi@herocircle.app                </Text>
            </VStack>
            {loading && <Text>Loading...</Text>}
            <Accordion questions={faqs} />
        </View>
    )
}

export default FAQ