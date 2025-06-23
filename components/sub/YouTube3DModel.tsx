'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface YouTube3DModelProps {
  modelPath?: string;
  className?: string;
}

const YouTube3DModel: React.FC<YouTube3DModelProps> = ({
  modelPath = '/models/Ytube/youtube-logo.glb',
  className = ''
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mouseRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const targetRotationRef = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.2;
   
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040, 1.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3.0);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    scene.add(directionalLight);

    const redSpotLight1 = new THREE.SpotLight(0xff0000, 3.0);
    redSpotLight1.position.set(-6, 6, 6);
    redSpotLight1.angle = Math.PI / 3;
    redSpotLight1.penumbra = 0.2;
    redSpotLight1.distance = 20;
    scene.add(redSpotLight1);

    const redSpotLight2 = new THREE.SpotLight(0xff2222, 2.5);
    redSpotLight2.position.set(6, -3, 6);
    redSpotLight2.angle = Math.PI / 4;
    redSpotLight2.penumbra = 0.3;
    redSpotLight2.distance = 18;
    scene.add(redSpotLight2);

    const redAccentLight = new THREE.SpotLight(0xff4444, 2.0);
    redAccentLight.position.set(0, -6, 4);
    redAccentLight.angle = Math.PI / 6;
    redAccentLight.penumbra = 0.4;
    scene.add(redAccentLight);

    const whiteSpotLight1 = new THREE.SpotLight(0xffffff, 2.5);
    whiteSpotLight1.position.set(0, 8, 4);
    whiteSpotLight1.angle = Math.PI / 5;
    whiteSpotLight1.penumbra = 0.1;
    scene.add(whiteSpotLight1);

    const whiteSpotLight2 = new THREE.SpotLight(0xffffff, 2.0);
    whiteSpotLight2.position.set(-8, 0, 3);
    whiteSpotLight2.angle = Math.PI / 6;
    whiteSpotLight2.penumbra = 0.2;
    scene.add(whiteSpotLight2);

    const rimLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    rimLight1.position.set(-8, 0, -8);
    scene.add(rimLight1);

    const rimLight2 = new THREE.DirectionalLight(0xff6666, 1.5);
    rimLight2.position.set(8, 0, -8);
    scene.add(rimLight2);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const loadModel = async () => {
      try {
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
        const loader = new GLTFLoader();

        loader.load(
          modelPath,
          (gltf) => {
            const model = gltf.scene;

            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetSize = 4.5;
            const scale = targetSize / maxDim;
            model.scale.setScalar(scale);
            const center = box.getCenter(new THREE.Vector3());
            model.position.x = -center.x * scale;
            model.position.y = -center.y * scale;
            model.position.z = -center.z * scale;

            model.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;

                const processMaterial = (mat: THREE.MeshStandardMaterial) => {
                  mat.roughness = 0.05;
                  mat.metalness = 0.7;
                  mat.envMapIntensity = 3.0;

                  if (mat.color && (mat.color.r > 0.3 || mat.name?.toLowerCase().includes('red'))) {
                    mat.color.setHex(0xff0000);
                    mat.emissive.setHex(0x660000);
                    mat.emissiveIntensity = 0.4;
                    mat.roughness = 0.02;
                    mat.metalness = 0.8;
                  }

                  if (mat.color && mat.color.r > 0.7 && mat.color.g > 0.7 && mat.color.b > 0.7) {
                    mat.color.setHex(0xffffff);
                    mat.emissive.setHex(0x222222);
                    mat.emissiveIntensity = 0.3;
                    mat.roughness = 0.03;
                    mat.metalness = 0.6;
                  }

                  if (mat.color && mat.color.r < 0.3 && mat.color.g < 0.3 && mat.color.b < 0.3) {
                    mat.emissive.setHex(0x111111);
                    mat.emissiveIntensity = 0.2;
                    mat.roughness = 0.1;
                    mat.metalness = 0.9;
                  }
                };

                if (Array.isArray(child.material)) {
                  child.material.forEach((mat) => {
                    if (mat instanceof THREE.MeshStandardMaterial) {
                      processMaterial(mat);
                    }
                  });
                } else if (child.material instanceof THREE.MeshStandardMaterial) {
                  processMaterial(child.material);
                }
              }
            });

            modelRef.current = model;
            scene.add(model);
            setIsLoading(false);
          },
          (progress) => {
            console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
          },
          (error) => {
            console.error('Error loading 3D model:', error);
            setError('Failed to load 3D model');
            setIsLoading(false);
          }
        );
      } catch (err) {
        console.error('Error importing GLTFLoader:', err);
        setError('Failed to initialize 3D loader');
        setIsLoading(false);
      }
    };

    loadModel();

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (modelRef.current) {
        targetRotationRef.current.y += 0.02;

        if (isHoveringRef.current) {
          modelRef.current.rotation.x = THREE.MathUtils.lerp(
            modelRef.current.rotation.x,
            targetRotationRef.current.x + mouseRef.current.y * 0.3,
            0.1
          );
          modelRef.current.rotation.z = THREE.MathUtils.lerp(
            modelRef.current.rotation.z,
            targetRotationRef.current.z + mouseRef.current.x * 0.2,
            0.1
          );
        } else {
          modelRef.current.rotation.x = THREE.MathUtils.lerp(
            modelRef.current.rotation.x,
            targetRotationRef.current.x,
            0.05
          );
          modelRef.current.rotation.z = THREE.MathUtils.lerp(
            modelRef.current.rotation.z,
            targetRotationRef.current.z,
            0.05
          );
        }

        modelRef.current.rotation.y = targetRotationRef.current.y;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current || !renderer) return;
      const { clientWidth, clientHeight } = mountRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!mountRef.current || !modelRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current = { x, y };
    };

    const onMouseEnter = () => {
      isHoveringRef.current = true;
    };

    const onMouseLeave = () => {
      isHoveringRef.current = false;
    };

    // 👇 Double-click handler
    const onDoubleClick = () => {
      window.open('https://github.com/kriithikSS/StreamXtract.git', '_blank');
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    if (mountRef.current) {
      mountRef.current.addEventListener('mousemove', onMouseMove);
      mountRef.current.addEventListener('mouseenter', onMouseEnter);
      mountRef.current.addEventListener('mouseleave', onMouseLeave);
      mountRef.current.addEventListener('dblclick', onDoubleClick);
    }

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', onMouseMove);
        mountRef.current.removeEventListener('mouseenter', onMouseEnter);
        mountRef.current.removeEventListener('mouseleave', onMouseLeave);
        mountRef.current.removeEventListener('dblclick', onDoubleClick);
        if (rendererRef.current) {
          mountRef.current.removeChild(rendererRef.current.domElement);
        }
      }
      window.removeEventListener('resize', handleResize);
      rendererRef.current?.dispose();
      sceneRef.current?.clear();
    };
  }, [modelPath]);

  return (
    <div className={`relative w-full max-w-md aspect-square mx-auto ${className}`}>
      <div
        ref={mountRef}
        className="w-full h-full cursor-pointer"
        style={{ background: 'transparent' }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-red-500/40 border-t-red-500 rounded-full animate-spin mx-auto shadow-lg shadow-red-500/30"></div>
            <p className="text-red-400 text-lg font-bold tracking-wide drop-shadow-lg">Loading YouTube Model...</p>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-6">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-red-500/50 transform rotate-3">
              <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-red-400 text-lg font-bold tracking-wide drop-shadow-lg">YouTube 3D Model</p>
              <p className="text-gray-300 text-sm mt-2 font-medium">{error}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTube3DModel;
