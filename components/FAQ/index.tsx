import { Text } from '@gluestack-ui/themed'
import { View, VStack } from '@gluestack-ui/themed'
import React from 'react'
import Accordion from "./ReusableAccordion"
const FAQ = () => {

    const questions = [
        {
            question: "Who are the mobilizers  you will be supporting?",
            answer: "We support the most effective climate mobilizers with a track record of non violent climate advocacy.",
        },
        {
            question: "How do mobilizers work?",
            answer: "They create campaigns from the ground up, articulating communities’ needs and working with decision makers to push for climate policies and solutions that lead to decisive moments to keep the world’s temperature under the 1.5 degree threshold.",
        },
        {
            question: "What are HERO Circles?",
            answer: "HERO supports groups of mobilizers working together, termed Circles. Circles specialize in a policy topic and geographical region.",
        },
        {
            question: "How are mobilizers verified?",
            answer: "Mobilizers apply to HERO and an independent board of experts in the climate space reviews their applications and verifies that all mobilizers have a track record of non-violent advocacy. Each campaigner is endorsed by renowned NGOs, organizations and top mobilizers in the climate space.",
        },
        {
            question: "Why a monthly subscription?",
            answer: "It ensures a stable income for mobilizers, enabling them to focus on climate solutions and accelerate their impact.",
        },
        {
            question: "Where does my subscription go?",
            answer: "90% of your subscription provides a stable monthly income to the mobilizers of your circle of choice.  10% goes to HERO to build partnerships with mentors, policy experts and climate think tanks that help them navigate politics, so that they can be more effective at a global stage.",
        },
    ]
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

            <Accordion questions={questions} />
        </View>
    )
}

export default FAQ