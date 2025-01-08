import { GradientTexture } from '@react-three/drei';
// import { Mes } from '@react-three/fiber';
import { useControls } from 'leva';
import * as THREE from 'three';
// MeshProps &
type TCircle = {
  material?: THREE.MeshStandardMaterial;
  geometry?: THREE.CircleGeometry;
};

export function Circle({ ...props }: TCircle) {
  const { startColor, stopColor } = useControls('Circle', {
    startColor: {
      value: '#100404',
    },
    stopColor: {
      value: '#5c0505',
    },
  });
  return (
    <mesh {...props} receiveShadow>
      <circleGeometry args={[2.2, 128]} />
      <meshStandardMaterial side={THREE.BackSide} roughness={0.7} flatShading>
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={[startColor, stopColor]} // Colors need to match the number of stops
          size={1024} // Size is optional
        />
      </meshStandardMaterial>
    </mesh>
  );
}
