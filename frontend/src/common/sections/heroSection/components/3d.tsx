import { PerspectiveCamera, PresentationControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import { Vector3 } from 'three';

import { Iphone16Model } from '@/common/modules/models/iphone/Iphone16_v2';

import { Circle } from './cyrcle';

export const ThreeBanner = () => {
  const { position: lp, ...rest } = useControls('Directional light', {
    position: {
      x: 0,
      y: -1,
      z: -3.4,
    },
    angle: {
      value: 3,
      step: 1,
    },
    decay: {
      value: 3,
      step: 1,
    },
    distance: {
      value: 0,
      step: 1,
    },
    penumbra: {
      value: 0,
      step: 1,
    },
    intensity: {
      value: 300,
      step: 5,
    },
  });
  const { position: sp, ...sprest } = useControls('Spot 1', {
    position: {
      x: 0,
      y: -1,
      z: -3.4,
    },
    angle: {
      value: 3,
      step: 1,
    },
    decay: {
      value: 3,
      step: 1,
    },
    distance: {
      value: 0,
      step: 1,
    },
    penumbra: {
      value: 0,
      step: 1,
    },
    intensity: {
      value: 300,
      step: 5,
    },
  });

  return (
    <Canvas
      linear
      shadows
      // camera={{ position: [0, 0, -3], fov: 40 }}
    >
      {/* <Lights /> */}
      {/*
    <ambientLight intensity={1} />
    */}
      {/* <Environment map={envMap} /> */}
      <PerspectiveCamera
        makeDefault
        position={[0, 0, -3]}
        fov={60}
        // onUpdate={(self) => self.lookAt(0, 0, 0)}
      >
        <directionalLight
          position={new Vector3(lp.x, lp.y, lp.z)}
          castShadow
          // angle={2}
          // decay={1}
          // distance={6}
          // penumbra={11}
          // intensity={50}
          {...rest}
        />
        <spotLight
          position={new Vector3(sp.x, sp.y, sp.z)}
          // angle={0.35}
          // decay={1}
          // distance={185}
          // penumbra={0}
          // castShadow
          // intensity={100}
          {...sprest}
        />
      </PerspectiveCamera>
      {/* <OrbitControls /> */}
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0.1, -0.2, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Iphone16Model scale={1.3} position={[0, 0, -0.4]} />
      </PresentationControls>

      <group position={[0, 0, 1.2]}>
        <Circle />
      </group>
    </Canvas>
  );
};
