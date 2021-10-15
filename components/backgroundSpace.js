import React from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Reflector, Stars, Text, useTexture, useAspect } from '@react-three/drei';

const BackgroundSpace = () => {
    return (
        <div className="fixed bottom-0 left-0 h-full w-full z-10">
            <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 0], fov: 35 }}>
                <Stars radius={50} depth={50} count={5000} factor={4} saturation={1} fade />
            </Canvas>
        </div>
    );
};

export default BackgroundSpace;
