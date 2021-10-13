import React from 'react';
import { Canvas } from '@react-three/fiber';

const ThreeDComponent = () => {
    return (
        <div>
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    );
};

export default ThreeDComponent;
