<script setup lang="ts">

import { Choices } from '../../globals/constants';

const { PAPER, ROCK, SCISSOR } = Choices;

const props = withDefaults(
  defineProps<{
    play: Function;
    init: Function;
    transparent: boolean;
  }>(),
  { play: () => { }, init: () => { }, transparent: false },
);

props.init();

</script>

<template>

  <div class="wrapper animate__animated animate__fadeIn animate__delay-2s" :class="{ transparent: transparent }">
    <div class="container">
      <button @click="() => play(ROCK)" class="btn rock" type="button">rock</button>
      <button @click="() => play(PAPER)" class="btn paper" type="button">paper</button>
      <button @click="() => play(SCISSOR)" class="btn scissor" type="button">scissor</button>
    </div>
  </div>

</template>

<style scoped lang="scss">
.container {
  display: inline-block;
  transition: opacity 0.3s ease-in;
}

.transparent {
  opacity: 0.5;
}

.wrapper {
  text-align: center;
  z-index: 10000;
  width: 100%;
  bottom: 4rem;
  position: fixed;
}

.btn {
  border: 2.5px solid white;
  background-color: transparent;
  border-radius: 50%;
  transition: opacity 0.2s ease-in;
  width: 98px;
  height: 98px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 0;
  margin-right: -20px;
  box-shadow: 0px 0px 0px 2px black;

  &:active {
    opacity: 0.3;
  }
}

.rock {
  background-image: url(images/rock.png);
}

.paper {
  position: relative;
  top: -98px;
  background-image: url(images/paper.png);
}

.scissor {
  background-image: url(images/scissor.png);
}
</style>
