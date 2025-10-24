// src/components/home/Cyl.jsx

import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import React, { useRef, useEffect, useState } from 'react';
import skimage from '../../assets/skimage.png';
import { useFrame } from '@react-three/fiber';

const Cyl = () => {
  const tex = useTexture(skimage);
  const cyl = useRef(null);

  
  const [scale, setScale] = useState([1, 1, 1]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        setScale([0.6, 0.6, 0.6]); 
      } else {
        setScale([1, 1, 1]); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta;
    }
  });

  return (
    <group rotation={[0, 1.0, 0.09]}>
      <mesh ref={cyl} scale={scale}>
        <cylinderGeometry args={[2.5, 2.5, 2.5, 30, 30, true]} />
        <meshStandardMaterial
          map={tex}
          transparent
          alphaTest={0.01}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default Cyl;
