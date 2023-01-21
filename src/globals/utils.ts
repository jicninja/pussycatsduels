import { Random } from 'random-js';
import {
  CHOICES_ASSETS,
  type AssetKeyType,
  type Choices,
  type CatType,
  type AssetObjectType,
  Results,
} from './constants';

export const CPURandom: Function = (): number => new Random().integer(0, 2);
export const CPURandomChoice: Function = (): Choices => CHOICES_ASSETS[CPURandom()];

export const filterPlayerAssets = (
  assets: AssetObjectType,
  catType: CatType,
): AssetObjectType => {
  const mappedObjNames = CHOICES_ASSETS.map((choice) => `${choice}${catType}`);
  return Object.keys(assets)
    .filter((key) => mappedObjNames.includes(key))
    .reduce(
      (obj, key) => Object.assign(obj, { [key]: assets[key as AssetKeyType] }),
      {},
    ) as AssetObjectType;
};

export const saveResult = (result: Results) => {
  if (result === Results.TIE) return;
  const key = result === Results.WIN ? 'totalWins' : 'totallosses';
  const prevTotal = Number(localStorage.getItem(key)) + 1;
  localStorage.setItem(key, String(prevTotal));
};

export const getResults = () => {
  const wins = Number(localStorage.getItem('totalWins')) || 0;
  const losses = Number(localStorage.getItem('totallosses')) || 0;
  return { wins, losses };
};
