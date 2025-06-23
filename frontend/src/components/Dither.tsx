/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

// Optimized shader imports (pure wave)
import waveVertexShader from "../shaders/wave.vert.glsl";
import waveFragmentShader from "../shaders/wave.frag.glsl";


interface SimpleWaveBackgroundProps {
  waveSpeed?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
  waveColor?: [number, number, number];
  disableAnimation?: boolean;
}

function Dither({
  waveSpeed = 0.05,
  waveFrequency = 3,
  waveAmplitude = 0.3,
  waveColor = [0.5, 0.5, 0.5],
  disableAnimation = false,
}: SimpleWaveBackgroundProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size, gl, viewport } = useThree();

  const uniformsRef = useRef<{ [uniform: string]: THREE.IUniform<any> }>({
    time: new THREE.Uniform(0),
    resolution: new THREE.Uniform(new THREE.Vector2()),
    waveSpeed: new THREE.Uniform(waveSpeed),
    waveFrequency: new THREE.Uniform(waveFrequency),
    waveAmplitude: new THREE.Uniform(waveAmplitude),
    waveColor: new THREE.Uniform(new THREE.Color(...waveColor)),
  });

  useEffect(() => {
    const dpr = gl.getPixelRatio();
    uniformsRef.current.resolution.value.set(
      size.width * dpr,
      size.height * dpr
    );
  }, [size, gl]);

  useFrame(({ clock }) => {
    if (!disableAnimation) {
      uniformsRef.current.time.value = clock.getElapsedTime();
    }
    uniformsRef.current.waveSpeed.value = waveSpeed;
    uniformsRef.current.waveFrequency.value = waveFrequency;
    uniformsRef.current.waveAmplitude.value = waveAmplitude;
    uniformsRef.current.waveColor.value.set(...waveColor);
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={waveVertexShader}
        fragmentShader={waveFragmentShader}
        uniforms={uniformsRef.current}
      />
    </mesh>
  );
}

export default function SimpleWaveBackground(props: SimpleWaveBackgroundProps) {
  return (
    <Canvas
      className="w-full h-full absolute z-0"
      camera={{ position: [0, 0, 5] }}
      gl={{ antialias: true }}
      dpr={window.devicePixelRatio}
    >
      <Dither {...props} />
    </Canvas>
  );
}

export { Dither };
