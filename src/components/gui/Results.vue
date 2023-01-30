<script setup lang="ts">
import { Results, Sounds } from '../../globals/constants';
import { playSound } from '../../core/soundManager';
import { endMultiplayer } from '../../core/multiplayerService';

const { WIN, LOSE } = Results;
const props = withDefaults(
  defineProps<{
    result?: Results;
    restart: Function | any;
  }>(),
  { result: undefined, restart: () => {} },
);

endMultiplayer();
playSound(props.result === WIN ? Sounds.win : Sounds.lose);

</script>

<template>
  <div class="wrapper">
    <!-- eslint-disable vuejs-accessibility/click-events-have-key-events-->
    <div @click="restart" class="copy animate__animated animate__fadeIn" :class="{ win: result === WIN, lose: result === LOSE }" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
    z-index: 10000000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
}

.copy {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
}

.win {
    width: 500px;
    background-image: url(images/win.png);
}

.lose {
    width: 300px;
    background-image: url(images/lose.png);
}
</style>
