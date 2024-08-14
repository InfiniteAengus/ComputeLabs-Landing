import { CameraShake, Cloud, Reflector, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

import hasCharAnim from "@/lib/utils/animation/hasCharAnim";
import hasTextRevealAnim from "@/lib/utils/animation/hasTextRevealAnim";

interface GltfModelProps {
  modelPath: string;
  scale?: number;
  position?: Array<number>;
  set?: any;
}

function CustomCameraShake() {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 30), 0));
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.3}
      pitchFrequency={0.3}
      rollFrequency={0.3}
    />
  );
}

const Rig = ({ children }: any) => {
  const ref = useRef<any>();
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / 6,
      0.1
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      (-1 * (state.mouse.y * Math.PI)) / 12,
      0.1
    );
  });
  return <group ref={ref}>{children}</group>;
};

const GltfModel = ({ modelPath, scale = 40, position = [0, 0, 0] }: GltfModelProps) => {
  const ref = useRef<any>();

  const gltf = useLoader(GLTFLoader, modelPath);

  const [lightIntensity, setLightIntensity] = useState(0);

  useEffect(() => {
    let intensity = 0;
    const interval = setInterval(() => {
      intensity = THREE.MathUtils.lerp(intensity, 1, 0.05);
      setLightIntensity(intensity);
      if (intensity >= 0.99) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <mesh
        position={new THREE.Vector3(position[0], position[1], position[2])}
        scale={scale}
        rotation={[0, -90, 0]}
      >
        <primitive ref={ref} object={gltf.scene} position={[0, 0, 0]} scale={0.03}></primitive>
      </mesh>
      <ambientLight intensity={lightIntensity * 0.7} />
      <spotLight position={[2, -3, 5]} intensity={lightIntensity * 30} />
      <spotLight position={[0, -3.8, 0]} color={"#f40"} intensity={lightIntensity * 10} />
      <directionalLight
        position={[3, 3, 5]}
        color={"#010424"}
        castShadow
        intensity={lightIntensity * 0.2}
      />
      <rectAreaLight position={[1, 3, 5]} intensity={lightIntensity * 0.5} />
    </>
  );
};

const Ground = () => {
  const [floor, normal] = useTexture([
    "/model/textures/SurfaceImperfections003_1K_var1.jpg",
    "/model/textures/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <Reflector
      blur={[40, 10]}
      resolution={1024}
      args={[10, 10]}
      mirror={0.9}
      mixBlur={2}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      position={[0, -5, 0]}
      scale={100}
    >
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
};

const HeroSection = () => {
  const textRevealAnim = useRef<any>();
  const titlePosition = useRef<any>();

  useEffect(() => {
    hasTextRevealAnim(textRevealAnim.current);
    hasCharAnim(titlePosition.current);
  }, []);

  return (
    <section className="relative">
      <div className="h-screen">
        <Canvas
          shadows
          gl={{ alpha: false }}
          camera={{ position: [0, 20, 100], fov: 10 }}
          dpr={[1, 2]}
        >
          <Suspense fallback={<></>}>
            <group position={[0, 0, 0]}>
              <Cloud
                fade={50}
                speed={0.2}
                growth={4}
                segments={30}
                volume={40}
                opacity={0.01}
                bounds={[8, -2, 8]}
              />
              <Rig>
                <GltfModel modelPath="./model/gpu.glb" scale={1} position={[0, 0, 0]} />
              </Rig>
              <CustomCameraShake />
              <Ground />
            </group>
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-radialGradient">
        <div className="container flex items-center py-10 h-full w-full">
          <div className="max-w-[800px] text-center mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-gray-500" ref={textRevealAnim}>
              Welcome to Compute Labs: Your Gateway to AI Investments
            </p>
            <h1
              className="text-xl sm:text-2xl md:text-6xl font-semibold tracking-wider mt-10"
              ref={titlePosition}
            >
              <Typewriter
                options={{
                  strings: ["The AI-Fi ecosystem", "Financialize AI"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
