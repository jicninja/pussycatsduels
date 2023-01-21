import { ref } from 'vue';
import { defineStore } from 'pinia';
import { saveResult } from '../globals/utils';
import { Results, MatchOptions } from '../globals/constants';
import { CalculateFinalResults } from '../core/gameService';

const useGameStore = defineStore('game', () => {
  const wins = ref<number>(0);
  const losses = ref<number>(0);
  const playing = ref<boolean>(false);
  const menu = ref<boolean>(true);
  const results = ref<boolean>(false);
  const matchResult = ref<Results | undefined>();
  const matchType = ref<MatchOptions>(MatchOptions.FULL_ROUND);

  const setMatch = (result: Results): void => {
    if (result === Results.WIN) wins.value += 1;
    if (result === Results.LOSE) losses.value += 1;
    const res = CalculateFinalResults(wins.value, losses.value, matchType.value);
    if (res === true || res === false) {
      playing.value = false;
      matchResult.value = res ? Results.WIN : Results.LOSE;
      saveResult(matchResult.value);
    }
  };

  const toggleResults = (force?: boolean): void => {
    const forceValue = force === true || force === false;
    results.value = forceValue ? force : !results.value;
  };

  const startPlay = (amount: MatchOptions): void => {
    if (amount) matchType.value = amount;
    setTimeout(
      () => {
        menu.value = false;
      },
      2000,
    );
    playing.value = true;
  };

  const restart = (): void => {
    results.value = false;
    menu.value = true;
    wins.value = 0;
    losses.value = 0;
    matchResult.value = undefined;
    playing.value = false;
  };

  return {
    wins,
    losses,
    playing,
    menu,
    results,
    toggleResults,
    matchResult,
    matchType,
    setMatch,
    startPlay,
    restart,
  };
});

export default useGameStore;
