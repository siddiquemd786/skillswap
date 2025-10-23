// src/components/home/Cyl.jsx
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import React, { useRef } from 'react';
import skimage from '../../assets/skimage.png'; 
import { useFrame } from '@react-three/fiber';

const Cyl = () => {
  const tex = useTexture(skimage);

  let cyl=useRef(null)
  useFrame((state, delta) => {
  cyl.current.rotation.y += delta; // rotate continuously
});

  return (
  <group rotation={[0,1.0,.09]}>
      <mesh ref={cyl} >
      <cylinderGeometry args={[2.5, 2.5, 2.5, 30, 30, true]} />
      <meshStandardMaterial map={tex} transparent    
        alphaTest={0.01}        
        depthWrite={false}  side={THREE.DoubleSide} />
    </mesh>
  </group>
  );
};

export default Cyl;
