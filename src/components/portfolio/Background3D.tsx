
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const CinematicStars = () => {
  const ref = useRef<THREE.Points>(null);
  
  const [sphere] = useMemo(() => {
    const positions = new Float32Array(8000 * 3);
    const colors = new Float32Array(8000 * 3);
    
    for (let i = 0; i < 8000; i++) {
      const radius = Math.random() * 30 + 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Netflix-inspired color palette
      const colorChoice = Math.random();
      if (colorChoice < 0.6) {
        // Red tones
        colors[i * 3] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.1 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.1 + Math.random() * 0.2;
      } else if (colorChoice < 0.8) {
        // Blue tones
        colors[i * 3] = 0.1 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.3 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      } else {
        // White/silver tones
        const intensity = 0.7 + Math.random() * 0.3;
        colors[i * 3] = intensity;
        colors[i * 3 + 1] = intensity;
        colors[i * 3 + 2] = intensity;
      }
    }
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={sphere[0]} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const DramaticCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.8;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial 
        color="#dc2626" 
        wireframe 
        transparent
        opacity={0.6}
        emissive="#dc2626"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const FloatingRing = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.6;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.7) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[2, 0.3, 8, 32]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        wireframe 
        transparent
        opacity={0.4}
        emissive="#3b82f6"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <ambientLight intensity={0.2} color="#1e1e2e" />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#dc2626" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#3b82f6" />
        <spotLight 
          position={[0, 20, 10]} 
          angle={0.3} 
          penumbra={1} 
          intensity={0.5} 
          color="#ffffff"
        />
        
        <CinematicStars />
        <DramaticCube position={[-12, 3, -8]} />
        <DramaticCube position={[10, -4, -10]} />
        <DramaticCube position={[-6, -5, -12]} />
        <FloatingRing position={[8, 2, -15]} />
        <FloatingRing position={[-10, -3, -18]} />
      </Canvas>
    </div>
  );
};

export default Background3D;
