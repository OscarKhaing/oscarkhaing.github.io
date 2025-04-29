import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { Vector3, Mesh } from 'three';
import * as THREE from 'three';
import { Branch, ProjectsData } from './types';

interface Tree3DProps {
  branches: Branch[];
  projects: ProjectsData;
  selectedBranch: string;
  onSelectBranch: (branchId: string) => void;
}

const CONE_HEIGHT = 10;
const CONE_RADIUS = 8;
const ROOT_POSITION = [0, CONE_HEIGHT, 0];

// Root node component
const RootNode: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={new Vector3(...ROOT_POSITION)}>
      <mesh
        ref={meshRef}
        onClick={() => onClick()}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={hovered ? '#FFCC00' : '#60FFFF'} 
          emissive={hovered ? '#FFCC00' : '#60FFFF'} 
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.8}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        Projects
      </Text>
    </group>
  );
};

// Branch component
const Branch3D: React.FC<{
  branch: Branch;
  projectCount: number;
  selected: boolean;
  onClick: () => void;
}> = ({ branch, projectCount, selected, onClick }) => {
  const [hovered, setHovered] = useState(false);
  
  // Calculate position based on angle
  const angleRad = (branch.angle * Math.PI) / 180;
  const x = Math.sin(angleRad) * CONE_RADIUS;
  const z = Math.cos(angleRad) * CONE_RADIUS;
  
  // Use projectCount to affect branch appearance
  const nodeSize = 0.3 + (projectCount * 0.05); // Node size grows with project count
  
  // Branch end position - bottom of the inverted cone
  const endPosition = new Vector3(x, 0, z);
  
  // Control point for curved line (halfway point with some randomization)
  const controlPosition = new Vector3(
    x * 0.6, 
    CONE_HEIGHT / 2 + (Math.random() * 2 - 1), 
    z * 0.6
  );

  // Interpolate points for the curved branch
  const points: Vector3[] = [];
  const segments = 20;
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    // Quadratic Bezier curve
    const pos = new Vector3(
      Math.pow(1-t, 2) * ROOT_POSITION[0] + 2 * (1-t) * t * controlPosition.x + Math.pow(t, 2) * endPosition.x,
      Math.pow(1-t, 2) * ROOT_POSITION[1] + 2 * (1-t) * t * controlPosition.y + Math.pow(t, 2) * endPosition.y,
      Math.pow(1-t, 2) * ROOT_POSITION[2] + 2 * (1-t) * t * controlPosition.z + Math.pow(t, 2) * endPosition.z
    );
    points.push(pos);
  }

  const handleClick = () => {
    onClick();
  };

  return (
    <group>
      <primitive object={new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        new THREE.LineBasicMaterial({ 
          color: selected ? '#ff003c' : (hovered ? '#FFCC00' : '#60FFFF'),
          linewidth: 2,
          opacity: selected ? 1 : (hovered ? 0.8 : 0.5),
          transparent: true
        })
      )} onClick={handleClick} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} />
      
      {/* Node at branch end */}
      <mesh 
        position={endPosition}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[nodeSize, 16, 16]} />
        <meshStandardMaterial 
          color={selected ? '#ff003c' : (hovered ? '#FFCC00' : '#60FFFF')}
          emissive={selected ? '#ff003c' : (hovered ? '#FFCC00' : '#60FFFF')}
          emissiveIntensity={selected ? 0.8 : (hovered ? 0.5 : 0.2)}
        />
      </mesh>

      {/* Branch Label */}
      <Text
        position={[x * 1.2, 0, z * 1.2]}
        fontSize={0.7}
        color={selected ? '#ff003c' : (hovered ? '#FFCC00' : '#FFFFFF')}
        anchorX="center"
        anchorY="middle"
        rotation={[0, -angleRad, 0]} // Rotate to face camera
      >
        {branch.name}
      </Text>
    </group>
  );
};

const Scene: React.FC<Tree3DProps> = ({ branches, projects, selectedBranch, onSelectBranch }) => {
  return (
    <>
      {/* Root Node */}
      <RootNode onClick={() => onSelectBranch('all')} />
      
      {/* Branches */}
      {branches.map((branch) => (
        <Branch3D
          key={branch.id}
          branch={branch}
          projectCount={projects[branch.id]?.length || 0}
          selected={selectedBranch === branch.id}
          onClick={() => onSelectBranch(branch.id)}
        />
      ))}
      
      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      
      {/* Directional light from above */}
      <directionalLight position={[0, 10, 5]} intensity={1} />
      
      {/* Subtle cone shape as a guide */}
      <mesh position={[0, CONE_HEIGHT/2, 0]} visible={false}>
        <coneGeometry args={[CONE_RADIUS, CONE_HEIGHT, 32, 1, true]} />
        <meshBasicMaterial color="#000033" wireframe transparent opacity={0.1} />
      </mesh>
    </>
  );
};

const Tree3D: React.FC<Tree3DProps> = (props) => {
  return (
    <div className="tree3d-container">
      <Canvas
        camera={{ position: [0, 5, 20], fov: 45 }}
        style={{ width: '600px', height: '600px' }}
      >
        <Scene {...props} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default Tree3D; 