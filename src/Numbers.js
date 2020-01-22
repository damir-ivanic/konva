import React from 'react'
import { Rect } from 'react-konva'

const Numbers = ({ section }) => {
    console.log(section, "OVO JE SEKCIJA")
    return (
        <Rect x={section.x} y={section.y} style={{ width: 5, height: 5, color: "red", border: "1px solid black", borderRadius: 50 }}>

        </Rect>
    )
}

export default Numbers
