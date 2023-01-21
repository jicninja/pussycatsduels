import { SOUNDS_ASSETS_LIST, type Sounds, type SoundAssets } from '../globals/constants';

const sonundList: SoundAssets = {};

export const loadSounds = (): void => {
  sonundList.duel = new Audio(SOUNDS_ASSETS_LIST.duel);
  sonundList.hit = new Audio(SOUNDS_ASSETS_LIST.hit);
  sonundList.miss = new Audio(SOUNDS_ASSETS_LIST.miss);
  sonundList.win = new Audio(SOUNDS_ASSETS_LIST.win);
  sonundList.lose = new Audio(SOUNDS_ASSETS_LIST.lose);
};

export const playSound = (sound: Sounds): void => {
  if (!sound) return;
  sonundList[sound].play();
};
