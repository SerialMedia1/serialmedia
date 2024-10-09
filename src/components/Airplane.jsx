import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Airplane(props) {
  const gltf = useLoader(GLTFLoader, "./models/airplane/black_jet.glb");
  const groupRef = useRef();

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  );
}
