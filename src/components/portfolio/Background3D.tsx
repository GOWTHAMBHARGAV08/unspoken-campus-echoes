import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const CinematicStars = () => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(12000 * 3);
    const colors = new Float32Array(12000 * 3);
    
    for (let i = 0; i < 12000; i++) {
      const radius = Math.random() * 40 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Netflix-inspired dramatic color palette
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        // Deep red tones (Money Heist inspired)
        colors[i * 3] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 1] = 0.05 + Math.random() * 0.15;
        colors[i * 3 + 2] = 0.05 + Math.random() * 0.15;
      } else if (colorChoice < 0.6) {
        // Dark blue tones (Dark/Stranger Things inspired)
        colors[i * 3] = 0.05 + Math.random() * 0.15;
        colors[i * 3 + 1] = 0.2 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      } else if (colorChoice < 0.8) {
        // Purple/pink tones (Squid Game inspired)
        colors[i * 3] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.1 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.6 + Math.random() * 0.4;
      } else {
        // Golden/orange tones (The Witcher inspired)
        colors[i * 3] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 1] = 0.6 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.1 + Math.random() * 0.2;
      }
    }
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
      
      // Add cinematic camera movement
      ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2;
      ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.15) * 1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.12}
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
      <Canvas camera={{ position: [0, 0, 1], fov: 85 }}>
        <ambientLight intensity={0.15} color="#0f0f23" />
        <pointLight position={[15, 15, 15]} intensity={1.2} color="#dc2626" />
        <pointLight position={[-15, -15, -15]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[0, 20, -10]} intensity={0.6} color="#8b5cf6" />
        <spotLight 
          position={[0, 25, 15]} 
          angle={0.4} 
          penumbra={1} 
          intensity={0.8} 
          color="#f59e0b"
        />
        
        <CinematicStars />
        <DramaticCube position={[-15, 4, -12]} />
        <DramaticCube position={[12, -5, -15]} />
        <DramaticCube position={[-8, -6, -18]} />
        <DramaticCube position={[6, 8, -10]} />
        <FloatingRing position={[10, 3, -20]} />
        <FloatingRing position={[-12, -4, -25]} />
        <FloatingRing position={[0, -8, -22]} />
      </Canvas>
    </div>
  );
};

export default Background3D;
