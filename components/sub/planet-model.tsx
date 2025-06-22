'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function Planet() {
  const { scene } = useGLTF('/models/planet/scene.gltf')
  return <primitive object={scene} scale={2.8} /> // ⬅ smaller scale
}

export default function PlanetModel() {
  return (
    <div className="w-full h-[600px] md:h-[450px]">

      <Canvas camera={{ position: [0, 0, 7], fov: 40 }}> {/* ⬅ moved camera back */}
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={10}
          />
          <Planet />
        </Suspense>
      </Canvas>
    </div>
  )
}
