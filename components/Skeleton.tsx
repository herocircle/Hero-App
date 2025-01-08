import React from 'react'
import { Skeleton } from 'moti/skeleton'
import { Box } from '@gluestack-ui/themed'

type props = {
    width?: any
    height?: any
    rounded?: any
}
const SkeletonComponent = ({ width, height, rounded }: props) => {
    return (
        <Box width={width || '100%'}>
            <Skeleton colorMode='light' backgroundColor='lightgray' radius={rounded || 0} width={'100%'} height={height || 50}  >
            </Skeleton>
        </Box>
    )
}

export default SkeletonComponent

