import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Planet({ fileName, scale=1, position = [0,0,0],  ...props}) {
  const gltf = useLoader(GLTFLoader, `./models/${fileName}/${fileName}.glb`);
  const groupRef = useRef();

  return (
    <group ref={groupRef} {...props} scale={[scale,scale,scale]} position={position} dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  );
}
