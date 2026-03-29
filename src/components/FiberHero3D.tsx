import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Trail, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Cable() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(t / 4) / 4
    meshRef.current.rotation.y = Math.sin(t / 2) / 2
  })

  return (
    <group>
      <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
        <mesh ref={meshRef}>
          <cylinderGeometry args={[0.05, 0.05, 10, 8, 1, true]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#2563eb"
            emissiveIntensity={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Glowing "pulses" moving through the cable */}
        <MovingPulse />
      </Float>
    </group>
  )
}

function MovingPulse() {
  const pulseRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    pulseRef.current.position.y = ((t * 2) % 10) - 5
  })

  return (
    <Sphere ref={pulseRef} args={[0.1, 8, 8]}>
      <meshBasicMaterial color="#ffffff" />
      <Trail
        width={1.5}
        length={4}
        color={new THREE.Color('#60a5fa')}
        attenuation={(t) => t * t}
      />
    </Sphere>
  )
}

export function FiberHero3D() {
  return (
    <div className="h-[400px] w-full relative overflow-hidden bg-slate-950/20 rounded-xl">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <Stars radius={100} depth={50} count={500} factor={4} saturation={0} fade speed={0.5} />
        <Cable />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
    </div>
  )
}
