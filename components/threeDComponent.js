import * as THREE from 'three';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Reflector, Stars, Text, useTexture, useAspect } from '@react-three/drei';
import { Flex, Box, useReflow } from '@react-three/flex';

function VideoText({ clicked, ...props }) {
    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect(size.width, size.height);

    const [video] = useState(() =>
        Object.assign(document.createElement('video'), {
            src: '/drei.mp4',
            crossOrigin: 'Anonymous',
            loop: true,
            muted: 'muted',
        }),
    );
    useEffect(() => void (clicked && video.play()), [video, clicked]);
    return (
        <>
            <group position={[0, 1.5, 0]}>
                <Text
                    font="/BungeeInline-Regular.ttf"
                    fontSize={1}
                    maxWidth={vpWidth}
                    letterSpacing={-0.01}
                    textAlign="center"
                    {...props}
                >
                    I'm Danish
                    <meshBasicMaterial toneMapped={false}>
                        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                    </meshBasicMaterial>
                </Text>
            </group>
            <group position={[0, -2, 0]}>
                <Text
                    font="/Inter-Bold.woff"
                    fontSize={1}
                    letterSpacing={-0.06}
                    textAlign="center"
                    maxWidth={4}
                    {...props}
                >
                    Welcome to my website!
                    <meshBasicMaterial toneMapped={false}>
                        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                    </meshBasicMaterial>
                </Text>
            </group>
        </>
    );
}

function Ground() {
    const [floor, normal] = useTexture([
        '/SurfaceImperfections003_1K_var1.jpg',
        '/SurfaceImperfections003_1K_Normal.jpg',
    ]);
    return (
        <Reflector
            resolution={512}
            args={[10, 10]}
            mirror={0.4}
            mixBlur={8}
            mixStrength={1}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            blur={[400, 100]}
        >
            {(Material, props) => (
                <Material
                    color="#a0a0a0"
                    metalness={0.4}
                    roughnessMap={floor}
                    normalMap={normal}
                    normalScale={[1, 1]}
                    {...props}
                />
            )}
        </Reflector>
    );
}

function Intro({ start, set }) {
    const [vec] = useState(() => new THREE.Vector3());
    useEffect(() => setTimeout(() => set(true), 500), []);
    return useFrame((state) => {
        if (start) {
            state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.02);
            state.camera.lookAt(0, 0, 0);
        }
    });
}

export default function ThreeDComponent({ dark }) {
    const [clicked, setClicked] = useState(false);
    const [ready, setReady] = useState(false);
    const store = { clicked, setClicked, ready, setReady };

    const [backgroundColor, setBackgroundColor] = useState('#384259');

    useEffect(() => {
        setClicked(true);
        const texture = new THREE.TextureLoader().load('/space.jpg');
    }, []);

    useEffect(() => {
        dark ? setBackgroundColor('#384259') : setBackgroundColor('#ffffff');
    }, [dark]);

    return (
        <>
            <div className="h-screen z-20">
                <Canvas
                    concurrent
                    gl={{ alpha: false }}
                    pixelRatio={[1, 1.5]}
                    camera={{ position: [0, 0, 0], fov: 35 }}
                >
                    <color attach="background" args={[backgroundColor]} />
                    <Suspense fallback={null}>
                        <VideoText {...store} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[-20, 0, -10]} intensity={0.7} />
                        <Intro start={true} set={setReady} />
                    </Suspense>
                    <Stars radius={50} depth={50} count={5000} factor={4} saturation={1} fade />
                </Canvas>
            </div>
        </>
    );
}
