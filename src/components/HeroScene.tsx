"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Environment, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Gentle floating rotation
    sphereRef.current.rotation.x = t * 0.4;
    sphereRef.current.rotation.y = t * 0.2;
  });

  return (
    <Float speed={4} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.5} ref={sphereRef}>
        <MeshDistortMaterial
          color="#D81B26" // The Salaam/Coke Red
          attach="material"
          distort={0.5} // Liquid wobbly effect
          speed={2}
          roughness={0.2}
          metalness={0.8} // Shiny reflection
        />
      </Sphere>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="white" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="red" />
        
        <AnimatedSphere />
        
        {/* Floating particles for luxury feel */}
        <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#fff" />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}