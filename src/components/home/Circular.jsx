// src/components/home/Circular.jsx
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import * as THREE from "three"
import Cyl from './Cyl';


const Circular = () => {
    return (
        <div className='w-full h-[40vh] pb-20  '>
            
                <Canvas  camera={{fov:40}}>
                <OrbitControls ></OrbitControls>
                <ambientLight></ambientLight>
               <Cyl></Cyl>
        </Canvas>
        <h1 className='text-center text-2xl font-bold text-blue-500'>Boost your skill</h1>
      <p>{import.meta.env.VITE_name}</p>

            </div>
       
    );
};

export default Circular;