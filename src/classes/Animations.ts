import * as THREE from 'three';
import type { AnimationClip, AnimationAction, Group } from 'three';

class Animations {
  mixer: THREE.AnimationMixer;

  anims: Array<AnimationAction>;

  clock: THREE.Clock;

  constructor(
    group: Group,
    animations: Array<AnimationClip>,
    loop: boolean = true,
    autoPlay: boolean = true,
  ) {
    this.mixer = new THREE.AnimationMixer(group);
    this.clock = new THREE.Clock();
    this.anims = animations.map((anim: AnimationClip) => {
      const animation = this.mixer.clipAction(anim);
      if (autoPlay) animation.play();
      if (!loop) animation.setLoop(THREE.LoopOnce, 1);
      return animation;
    });
  }

  update() {
    if (this.mixer) this.mixer.update(this.clock.getDelta());
  }
}

export default Animations;
