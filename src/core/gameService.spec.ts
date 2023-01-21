import { describe, test, expect } from 'vitest';

import { CalculateMatchResults, CalculateFinalResults } from './gameService';
import { Results, Choices, MatchOptions } from '../globals/constants';

import { CPURandom } from '../globals/utils';

describe('CORE GAME LOGIC', () => {
  test('Win Cases', () => {
    const { PAPER, ROCK, SCISSOR } = Choices;
    const { WIN } = Results;
    expect(CalculateMatchResults(PAPER, ROCK)).toEqual(WIN);
    expect(CalculateMatchResults(SCISSOR, PAPER)).toEqual(WIN);
    expect(CalculateMatchResults(ROCK, SCISSOR)).toEqual(WIN);
  });
  test('Lose Cases', () => {
    const { PAPER, ROCK, SCISSOR } = Choices;
    const { LOSE } = Results;
    expect(CalculateMatchResults(ROCK, PAPER)).toEqual(LOSE);
    expect(CalculateMatchResults(PAPER, SCISSOR)).toEqual(LOSE);
    expect(CalculateMatchResults(SCISSOR, ROCK)).toEqual(LOSE);
  });
  test('Tie Cases', () => {
    const { PAPER, ROCK, SCISSOR } = Choices;
    const { TIE } = Results;
    expect(CalculateMatchResults(ROCK, ROCK)).toEqual(TIE);
    expect(CalculateMatchResults(PAPER, PAPER)).toEqual(TIE);
    expect(CalculateMatchResults(SCISSOR, SCISSOR)).toEqual(TIE);
  });
});

describe('MATCH CASES', () => {
  test('Win Cases', () => {
    expect(CalculateFinalResults(3, 2, MatchOptions.FULL_ROUND)).toBe(true);
    expect(CalculateFinalResults(2, 1, MatchOptions.QUICK_ROUND)).toBe(true);
    expect(CalculateFinalResults(6, 5, 10)).toBe(true);
  });

  test('Lose Cases', () => {
    expect(CalculateFinalResults(2, 3, MatchOptions.FULL_ROUND)).toBe(false);
    expect(CalculateFinalResults(0, 2, MatchOptions.QUICK_ROUND)).toBe(false);
    expect(CalculateFinalResults(5, 6, 10)).toBe(false);
  });

  test('Game not finished', () => {
    expect(
      CalculateFinalResults(2, 2, MatchOptions.FULL_ROUND),
    ).toBeUndefined();
    expect(
      CalculateFinalResults(1, 1, MatchOptions.QUICK_ROUND),
    ).toBeUndefined();
    expect(CalculateFinalResults(0, 5, 10)).toBeUndefined();
  });
});

test('CPU MOVE', () => {
  const random = CPURandom();
  expect(random).toBeGreaterThanOrEqual(0);
  expect(random).toBeLessThanOrEqual(2);
});
