// StarBackground.jsx
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";
import * as THREE from 'three'; 

const StarBackground = () => {
  const texture = useLoader(TextureLoader, "/images/galaxy.png");

  return (
    <Sphere args={[100, 32, 32]} position={[0, 0, 0]} scale={[1, 1, 1]}>
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </Sphere>
  );
};

export default StarBackground;
