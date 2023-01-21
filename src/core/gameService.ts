import {
  CHOICES_RESULT_DICT,
  Choices,
  Results,
  MatchOptions,
} from '../globals/constants';

/* eslint-disable vue/max-len */
export const CalculateMatchResults = (opt1: Choices, opt2: Choices): Results => CHOICES_RESULT_DICT?.[opt1]?.[opt2];

/* eslint-disable consistent-return */
export const CalculateFinalResults = (
  ownVictories: number,
  foeVictories: number,
  matchType: number | MatchOptions,
): boolean | void => {
  const winCondition = Math.ceil(matchType / 2);
  const getMax = Math.max(ownVictories, foeVictories);
  const isOdd = matchType % 2;

  if (isOdd) {
    if (getMax >= winCondition) {
      return ownVictories === getMax;
    }
  } else if (getMax > winCondition) {
    return ownVictories === getMax;
  }
};
