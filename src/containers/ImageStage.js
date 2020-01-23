import React, { useState } from 'react'
import { Stage, Layer, Image } from 'react-konva'
import useImage from 'use-image';
import Numbers from '../Numbers';
import Konva from 'konva';

const ImageStage = () => {
    const [sections, setSections] = useState([]);
    const stageRef = React.useRef();
    const layerRef = React.useRef();
    const [image] = useImage("https://st3.depositphotos.com/4447003/16898/i/1600/depositphotos_168986880-stock-photo-a-view-from-above-on.jpg")

    const handlePlacement = e => {
        const { clientX, clientY } = e.evt;
        setSections([...sections, {
            x: clientX, y: clientY
        }])
    }

    return (
        <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ border: '1px solid grey' }}
            ref={stageRef}
        >
            <Layer ref={layerRef} onClick={handlePlacement}>
                <Image image={image}>

                </Image>
            </Layer>
            <Layer >
                {sections.map(section => {
                    return <Numbers section={section} />
                })}
            </Layer>
        </Stage>
    )
}

export default ImageStage
