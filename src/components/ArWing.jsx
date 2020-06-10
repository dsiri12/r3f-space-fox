import React, { Suspense, useRef } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ArWing = () => {
  const group = useRef();
  const { nodes } = useLoader(GLTFLoader, 'models/arwing.glb');
  return (
    <group ref={group}>
      <mesh visible geometry={nodes.Default.geometry}>
        <meshStandardMaterial
          attach='material'
          color='white'
          roughness={0.3}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
};

export default ArWing;
