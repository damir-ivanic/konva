import React from 'react'
import { Rect, Text, Circle } from 'react-konva'

const Numbers = ({ section }) => {
    return (
        <Circle x={section.x} y={section.y} radius={50}fill="black" >
            
        </Circle >
    )
}

export default Numbers
