<script setup lang="ts">
import * as THREE from 'three';
import WinLosses from './gui/WinLosses.vue';
import Wins from './gui/Wins.vue';
import Menu from './gui/Menu.vue';
import Results from './gui/Results.vue';
import WaitingPlayer from './gui/WaitingPlayer.vue';
import ChoiceButtons from './gui/ChoiceButtons.vue';

import LoadAll3DAssets from '../core/assetMananger';
import { loadSounds, playSound } from '../core/soundManager';
import {
  initRenderer,
  initPostprocessing,
  updatePostprocessing,
} from '../core/rendererService';
import Animations from '../classes/Animations';
import {
  CatType, Choices, Alignment, PlayerType, Sounds,
} from '../globals/constants';
import { CPURandomChoice } from '../globals/utils';
import { CalculateMatchResults } from '../core/gameService';
import Player from '../classes/Player';
import useGameStore from '../stores/game';
import { ref } from 'vue';
import { playTurn, waitTurn, resolveGame } from '../core/multiplayerService';

const GameData = useGameStore();

const currentSelectedChoice = ref<Choices>();
const secondPlayerChoice = ref<Choices>();
const waitingPlayer = ref<boolean>(false);

const { ROCK } = Choices;
const scene = new THREE.Scene();
const Assets = await LoadAll3DAssets(scene);
loadSounds();

const { mainScene } = Assets;
const AmbientAnims = new Animations(mainScene.scene, mainScene.animations);
const camera = Assets.mainScene.cameras[0];

const PlayerOne = new Player(CatType.BLACK);
const PlayerTwo = new Player(CatType.ORANGE);

const renderer = initRenderer();
const { composer, bokeh } = initPostprocessing(scene, camera, renderer);

const loop = (time: number): void => {
  AmbientAnims.update();
  PlayerOne.update();
  PlayerTwo.update();
  updatePostprocessing(time, bokeh);
  composer.render();
};

const play = (choice: Choices): void => {
  if (!GameData.multiplayer) {
    PlayerOne.play(choice);
    PlayerTwo.play(CPURandomChoice());
  } else {
    if (waitingPlayer.value) return;
    waitingPlayer.value = true;
    currentSelectedChoice.value = choice;
    playTurn(currentSelectedChoice.value);
  }
};


const watchMultiplayer = () => {
  if (!GameData.multiplayer) return;
  waitTurn((beChoice: Choices) => {
    console.log('broadcast', beChoice);
    secondPlayerChoice.value = beChoice;
  });

  resolveGame(() => {
    waitingPlayer.value = false;
    if (secondPlayerChoice.value) {
      PlayerOne.play(currentSelectedChoice.value as Choices);
      PlayerTwo.play(secondPlayerChoice.value as Choices);
      currentSelectedChoice.value = undefined; 
      secondPlayerChoice.value = undefined;
    }
  });
};

const onFinish = () => {
  const result = CalculateMatchResults(PlayerOne.choice as Choices, PlayerTwo.choice as Choices);
  let sound: any = result > 0 ? Sounds.hit : Sounds.miss;
  if (!result) sound = undefined;
  playSound(sound);
  GameData.setMatch(result);
};

const start = (): void => {
  PlayerOne.showChoice(ROCK);
  PlayerTwo.showChoice(ROCK);
};

const restart = (): void => {
  PlayerOne.reset();
  PlayerTwo.reset();
  GameData.restart();
};

PlayerOne.init(Assets);
PlayerTwo.init(Assets);

PlayerOne.onFinish = onFinish;

renderer.setAnimationLoop(loop);
document.body.appendChild(renderer.domElement);

</script>

<template>
  <Menu v-if="GameData.menu" :play="start" />
  <div v-if="GameData.playing">
    <Wins :align="Alignment.LEFT" :type="PlayerType.YOU" :amount="GameData.wins" />
    <Wins :align="Alignment.RIGHT" :type="PlayerType.FOE" :amount="GameData.losses" />
    <WaitingPlayer v-if="waitingPlayer" />
    <ChoiceButtons :init="watchMultiplayer" :transparent="waitingPlayer" :play="play" />
  </div>
  <Results :restart="restart" v-if="GameData.matchResult" :result="GameData.matchResult" />
  <WinLosses v-if="GameData.results" />
</template>

<style scoped>
.actions {
  position: fixed;
  left: 50%;
  bottom: 20px;
  z-index: 100;
}

.map-container {
  display: block;
}

.map-wrapper {
  position: relative;

  overflow: auto;
  width: 100vw;
  height: calc(100vh - 63px);
  position: relative;
  top: 63px;
}

.is-editing {
  padding-right: 230px;
}
</style>
