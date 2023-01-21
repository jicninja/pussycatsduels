import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass';
import type { Camera, Scene } from 'three';
import { DOF_DEFAULT } from '../globals/constants';

export const initRenderer = (): THREE.WebGLRenderer => {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 2;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
};

export const initPostprocessing = (
  scene: Scene,
  camera: Camera,
  renderer: THREE.WebGLRenderer,
): { composer: EffectComposer; bokeh: BokehPass } => {
  const renderPass = new RenderPass(scene, camera);

  const bokeh = new BokehPass(scene, camera, DOF_DEFAULT);
  const composer = new EffectComposer(renderer);

  const light = new THREE.AmbientLight(0x404040, 2);
  scene.add(light);

  composer.addPass(renderPass);
  composer.addPass(bokeh);

  return { composer, bokeh };
};

export const updatePostprocessing = (time: number, Bokeh: any): void => {
  /* eslint-disable no-param-reassign */
  Bokeh.uniforms.maxblur.value = (Math.abs(Math.cos(time * 0.001)) + 0.5) * 0.008;
};
