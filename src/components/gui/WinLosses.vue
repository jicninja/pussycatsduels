<script setup lang="ts">
import { ref } from 'vue';
import useGameStore from '../../stores/game';
import { getResults } from '../../globals/utils';

const GameData = useGameStore();
const { wins, losses } = getResults();
const closed = ref<boolean>(false);

const close = (): void => {
  closed.value = true;
  setTimeout(() => {
    GameData.toggleResults(false);
  }, 500);
};

</script>

<template>
  <!-- eslint-disable vuejs-accessibility/click-events-have-key-events-->
  <div class="wrapper" @click="close">
    <div class="results animate__animated animate__fadeInUp" :class="{ animate__fadeOutUp: closed }">
      <div class="total">
        <h3>Wins:</h3>
        <strong>{{wins}}</strong>
      </div>
      <div class="total">
        <h3>Losses:</h3>
        <strong>{{losses}}</strong>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.results {
    width: 600px;
    height: 700px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    background-size: contain;
    background-image: url(images/results.png);
    background-position: center;
    background-repeat: no-repeat;
}
.total {
    padding-left: 200px;
    width: 350px;
    margin-bottom: 20px;
    h3 {
        display: inline-block;
        font-family: 'Wellfleet', cursive;
        font-size: 1.75rem;
        line-height: 1;
        margin-bottom: 5px;
        width: 150px;
        font-size: 30px;
    }

    strong {
        font-family: 'Wellfleet', cursive;
        font-size: 1.75rem;
        line-height: 1;
        text-shadow: 0 0px 15px white, 0 0px 15px white, 0 0px 15px white;
    }
}
</style>
