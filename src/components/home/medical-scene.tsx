"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "next-themes"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { theme } = useTheme()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.2
    meshRef.current.rotation.y = time * 0.3
  })

  // Dynamic colors based on theme
  const sphereColor = theme === "dark" ? "#0080ff" : "#0066ff"
  const sphereOpacity = theme === "dark" ? 0.4 : 0.15

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color={sphereColor}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          opacity={sphereOpacity}
          transparent
        />
      </Sphere>
    </Float>
  )
}

export function MedicalScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#0080ff" intensity={0.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}
