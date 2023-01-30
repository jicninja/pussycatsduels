import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type ResultChoiceType = {
  paper: Results;
  scissor: Results;
  rock: Results;
};

type ChoiceResultsType = {
  rock: ResultChoiceType;
  scissor: ResultChoiceType;
  paper: ResultChoiceType;
};

export enum Alignment {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right',
}

export enum PlayerType {
  YOU = 'You',
  FOE = 'Foe',
}

export enum CatType {
  ORANGE = 'Orange',
  BLACK = 'Black',
}

export enum MatchOptions {
  FULL_ROUND = 5,
  QUICK_ROUND = 3,
}

export enum Results {
  LOSE = -1,
  TIE = 0,
  WIN = 1,
}

export enum Choices {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSOR = 'scissor',
}

export enum Sounds {
  duel = 'duel',
  hit = 'hit',
  miss = 'miss',
  win = 'win',
  lose = 'lose',
}

export enum MultiplayerEvent {
  play = 'play',
  roomChange = 'roomChange',
  roundPlayed = 'roundPlayed',
}

export type SoundAssets = {
  [key in Sounds]?: any
};

export type AssetKeyType = `${Choices}${CatType}` | 'mainScene';

export type AssetArrayListType = {
  name: AssetKeyType;
  path: string;
};

export type AssetObjectType = {
  [key in AssetKeyType]: GLTF;
};

export const CHOICES_ASSETS: Array<Choices> = [
  Choices.ROCK,
  Choices.PAPER,
  Choices.SCISSOR,
];

export const CHOICES_RESULT_DICT: ChoiceResultsType = {
  rock: {
    paper: Results.LOSE,
    scissor: Results.WIN,
    rock: Results.TIE,
  },
  paper: {
    paper: Results.TIE,
    scissor: Results.LOSE,
    rock: Results.WIN,
  },
  scissor: {
    paper: Results.WIN,
    scissor: Results.TIE,
    rock: Results.LOSE,
  },
};

export const DOF_DEFAULT = {
  focus: 2.6,
  aperture: 0.026,
  maxblur: 0.012,
};

export const OFFSET_TIME_RESULT : number = 600;
const ENV_PATH: string = import.meta.env.prod ? '/pussycatsduels' : '';
export const ASSETS_PATH: string = `${ENV_PATH}/assets/models/`;
export const MODEL_EXTENSION: string = '.glb';

export const SOUNDS_ASSETS_LIST : SoundAssets = {
  duel: `${ENV_PATH}/sounds/duel.mp3`,
  hit: `${ENV_PATH}/sounds/hit.mp3`,
  miss: `${ENV_PATH}/sounds/miss.mp3`,
  win: `${ENV_PATH}/sounds/win.mp3`,
  lose: `${ENV_PATH}/sounds/lose.mp3`,
};
