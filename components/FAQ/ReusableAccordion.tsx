import { Accordion, AccordionContent, AccordionContentText, AccordionHeader, AccordionIcon, AccordionItem, AccordionTitleText, AccordionTrigger, ChevronDownIcon, ChevronUpIcon } from '@gluestack-ui/themed';
import React from 'react'

type props = {
    questions: Array<{
        question: string,
        answer: string
    }>
}

const ReusableAccordion = ({ questions }: props) => {
    return (

        <Accordion bg='$white' size="md" w='100%' shadowColor='#fff' type="single" isCollapsible={true} isDisabled={false} >
            {questions.map((item, index) => (
                <AccordionItem bg='$white' key={index} value={item.question}>
                    <AccordionHeader>
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText fontFamily='nova400'>
                                            {item.question}
                                        </AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                        )}
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        <AccordionContentText>
                            {item.answer}
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default ReusableAccordion