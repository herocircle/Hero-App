import React from 'react'
import { Input, InputField, VStack } from '@gluestack-ui/themed'
import { Text } from '@gluestack-ui/themed'


type props = {
    setState: (text: string) => void
    value: string,
    isLowerCase?: boolean
    label: string
    keyboardType?: string
    placeholder: string
    secureTextEntry?: boolean
}

const ReusableInput = ({ setState, value, isLowerCase, label, placeholder, keyboardType, secureTextEntry }: props) => {
    return (
        <VStack gap={5}>
            <Text fontFamily='nova400' fontSize={18}>
                {label}
            </Text>
            <Input
                variant="outline"
                h={45}
                w="100%"
                rounded="$xl"
                borderColor='#A4A3A8'
            >
                <InputField
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={(text) => setState(isLowerCase ? text?.toLocaleLowerCase() : text)}
                />
            </Input>
        </VStack>
    )
}

export default ReusableInput