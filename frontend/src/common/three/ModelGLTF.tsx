import { Gltf, useTexture } from '@react-three/drei';
import { PrimitiveProps } from '@react-three/fiber';
import { FC } from 'react';

type ModelGLTF = {
  url: string;
  metalnessMap: string;
  map: string;
  material: string;
} & Partial<PrimitiveProps>;

export const ModelGLTF: FC<ModelGLTF> = ({
  url,
  metalnessMap,
  map,
  material,
  ...props
}) => {
  // const model = useGLTF(url);

  const textures = useTexture({
    metalnessMap,
    map,
    material,
  });

  // return (
  //   <Center top>
  //     <primitive {...props} {...textures} object={model} />
  //   </Center>
  // );
  return <Gltf src={url} {...textures} {...props} />;
};
