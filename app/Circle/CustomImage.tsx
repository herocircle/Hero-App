import React from 'react'
import { Image } from 'react-native'


type props = {
    imageName: any
    styles: any
}

const CustomImage = ({ styles, imageName }: props) => {
    return (
        <Image style={styles} source={imageName} />
    )
}

export default CustomImage