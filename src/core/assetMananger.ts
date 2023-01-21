import type { Scene, Object3D } from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import {
  ASSETS_PATH,
  MODEL_EXTENSION,
  CatType,
  CHOICES_ASSETS,
  type AssetArrayListType,
  type AssetObjectType,
} from '../globals/constants';

const loader = new GLTFLoader();

export const LoadScene = async (path: string) => new Promise<any>((resolve, reject) => {
  loader.load(
    path,
    (gltf: GLTF) => resolve(gltf),
    undefined,
    (err: ErrorEvent) => reject(err),
  );
});

const ObjAssetHelper = (catType: CatType) => CHOICES_ASSETS.map(
  (el) => ({
    name: `${el}${catType}`,
    path: `${ASSETS_PATH}${el}${catType}${MODEL_EXTENSION}`,
  } as AssetArrayListType),
);

const AssetPathCreator = (): Array<AssetArrayListType> => {
  const PlayerOneAssets = ObjAssetHelper(CatType.BLACK);
  const PlayerTwoAassets = ObjAssetHelper(CatType.ORANGE);
  return [
    {
      name: 'mainScene',
      path: `${ASSETS_PATH}Scene.glb`,
    } as AssetArrayListType,
    ...PlayerOneAssets,
    ...PlayerTwoAassets,
  ];
};

const LoadAll3DAssets = async (scene: Scene): Promise<AssetObjectType> => {
  const Assets = AssetPathCreator();
  const Promises = Assets.map((asset) => LoadScene(asset.path));
  const data = await Promise.all(Promises);

  /* eslint-disable no-param-reassign */
  data[0].scene.traverse((n: Object3D | any) => {
    if (n.isLight) {
      n.castShadow = true;
    }
    if (n.isMesh) {
      n.receiveShadow = true;
      n.material.roughness = n.name === 'Floor' ? 0.4 : 1;
      if (n.name === 'Sky') {
        n.material.color.r = 2;
        n.material.color.g = 2;
        n.material.color.b = 2;
      }
    }
  });

  return data.reduce((acc, current, currentIndex) => {
    scene.add(current.scene);
    return { ...acc, [`${Assets[currentIndex].name}`]: current };
  }, {});
};

export default LoadAll3DAssets;
