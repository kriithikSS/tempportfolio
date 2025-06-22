'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useRef, Suspense } from 'react'
import * as THREE from 'three'

function Phone() {
  const { scene } = useGLTF('/models/phone/phone.glb')
  const screenTexture = useTexture('/models/phone/textures/screenshot.png')
  const groupRef = useRef<THREE.Group>(null)
  const mainGroupRef = useRef<THREE.Group>(null)

  // Continuous spinning animation
  useFrame((state, delta) => {
    if (mainGroupRef.current) {
      // Smooth continuous rotation around Y-axis
      mainGroupRef.current.rotation.y += delta * 0.5
      
      // Subtle floating motion
      mainGroupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15 + 0
      
      // Center the phone better
      mainGroupRef.current.position.x = 0.2
    }
  })

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.clear()
      groupRef.current.add(scene)

      // Configure texture for better quality
      screenTexture.generateMipmaps = false
      screenTexture.minFilter = THREE.LinearFilter
      screenTexture.magFilter = THREE.LinearFilter
      screenTexture.wrapS = THREE.ClampToEdgeWrapping
      screenTexture.wrapT = THREE.ClampToEdgeWrapping
      screenTexture.flipY = false

      // iPhone 16 actual screen dimensions in model units
      const screenWidth = 6.45
      const screenHeight = 14.3
      
      // Custom shader material for rounded corners
      const screenMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: screenTexture },
          uCornerRadius: { value: 1.2 },
          uResolution: { value: new THREE.Vector2(screenWidth, screenHeight) }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D uTexture;
          uniform float uCornerRadius;
          uniform vec2 uResolution;
          varying vec2 vUv;
          
          void main() {
            vec2 uv = vUv;
            
            // Convert UV to screen space coordinates
            vec2 pos = (uv - 0.5) * uResolution;
            
            // Calculate distance from corners for rounded rectangle
            vec2 d = abs(pos) - uResolution * 0.5 + uCornerRadius;
            float dist = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - uCornerRadius;
            
            // Create smooth alpha mask for rounded corners
            float alpha = 1.0 - smoothstep(-0.1, 0.1, dist);
            
            // Sample the texture
            vec4 texColor = texture2D(uTexture, uv);
            
            gl_FragColor = vec4(texColor.rgb, texColor.a * alpha);
          }
        `,
        transparent: true,
        side: THREE.FrontSide,
      })
      
      const screen = new THREE.Mesh(
        new THREE.PlaneGeometry(screenWidth, screenHeight),
        screenMaterial
      )

      // Fine-tune screen position
      screen.position.set(0, 0, 0.40)
      screen.rotation.x = 0

      groupRef.current.add(screen)
    }
  }, [scene, screenTexture])

  return (
    <group ref={mainGroupRef}>
      <group ref={groupRef} scale={0.38} />
    </group>
  )
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[3, 6, 0.5]} />
      <meshStandardMaterial color="#333" />
    </mesh>
  )
}

export default function PhoneModel() {
  const handleDoubleClick = () => {
    window.open(
      'https://play.google.com/store/apps/details?id=com.kriithikss.campuslink&pcampaignid=web_share',
      '_blank'
    )
  }

  return (
    <div className="w-full h-[700px]" onDoubleClick={handleDoubleClick}>
      <Canvas 
        camera={{ 
          position: [0, 0, 12], 
          fov: 40
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
      >
        {/* Lighting from pasted code */}
        <ambientLight intensity={0.6} color="#4080ff" />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" castShadow />
        <directionalLight position={[-3, -2, 3]} intensity={0.8} color="#ff6b9d" />
        <pointLight position={[0, 0, 8]} intensity={0.5} color="#80ff80" />
        <directionalLight position={[0, 0, -5]} intensity={0.3} color="#4080ff" />

        <Suspense fallback={<LoadingFallback />}>
          <OrbitControls 
            enableZoom={false} 
            enablePan={true} 
            enableRotate={true}
          />
          <Phone />
        </Suspense>
      </Canvas>
      <p className="text-center text-sm text-gray-400 mt-2 select-none">
      Double click to launch
      </p>


     
    </div>
  )
}