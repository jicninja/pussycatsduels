<script setup lang="ts">
import { ref } from 'vue';
import Duel from './Duel.vue';
import useGameStore from '../../stores/game';
import { MatchOptions } from '../../globals/constants';

const GameData = useGameStore();
const visible = ref<boolean>(true);
const duel = ref<boolean>(false);

const props = withDefaults(
  defineProps<{
    play: Function
  }>(),
  { play: () => { } },
);

const start = (type: MatchOptions) => {
  visible.value = false;
  duel.value = true;
  setTimeout(() => {
    props.play();
    GameData.startPlay(type);
  }, 500);
  setTimeout(() => {
    duel.value = false;
  }, 2800);
};

</script>
<template>
  <Duel v-if="duel" />
  <div class="wrapper animate__animated" :class="{ animate__fadeOut: !visible }">
    <h1 class="title animate__animated animate__fadeInDown">pussycatsduels</h1>
    <nav class="nav-ui">
      <ul class="nav-options animate__animated animate__fadeInUp">
        <li class="nav-item"><button @click="start(MatchOptions.FULL_ROUND)" type="button">Play
          best of 5</button></li>
        <li class="nav-item"><button @click="start(MatchOptions.QUICK_ROUND)" type="button">Play
          best of 3</button></li>
        <li class="nav-item"><button @click="GameData.toggleResults" type="button">Win / Losses</button></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.title {
    display: inline-block;
    margin-top: 4rem;
    width: 1000px;
    height: 250px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(images/title.png);
    font-size: 0;
}

.nav-options {
    padding: 0;
    list-style: none;
}

.nav-item {
    margin-top: 1rem;
    transition: opacity 0.1s ease-in;
    text-align: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    min-width: 400px;
    background-image: url(images/inputBg.png);

    button {
        padding: 1rem;
        background-color: transparent;
        border: 0 solid transparent;
        font-family: 'Wellfleet', cursive;
        font-size: 1.75rem;
        line-height: 1;
        color: white;
        width: 100%;
    }

    &:nth-child(2n + 1) {
        background-image: url(images/oddInputBg.png);
    }

    &:active {
        opacity: 0.3;
    }

}

.wrapper {
    text-align: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
}

.options {
    list-style: none;
    padding: 0;
}

.nav-ui {
    position: fixed;
    width: 100%;
    bottom: 4rem;
    ;
}
</style>
