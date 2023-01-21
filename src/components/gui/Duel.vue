<script setup lang="ts">
import { ref } from 'vue';
import { playSound } from '../../core/soundManager';
import { Sounds } from '../../globals/constants';

playSound(Sounds.duel);
const intro = ref<boolean>(true);
const siliding = ref<boolean>(true);

setTimeout(() => {
  siliding.value = false;
}, 2000);

setTimeout(() => {
  intro.value = false;
}, 2000);

</script>

<template>
  <div class="wrapper">
    <div class="duel-wrapper">
      <div class="duel animate__animated animate__faster" :class="{ animate__fadeInDown: intro, animate__fadeOutDown: !intro }" />
    </div>
    <div class="slide left animate__animated animate__faster" :class="{ animate__slideInLeft: siliding, animate__slideOutLeft: !siliding }" />
    <div class="slide right animate__animated animate__faster" :class="{ animate__slideInRight: siliding, animate__slideOutRight: !siliding }" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
}

.duel-wrapper {
    z-index: 1000;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.duel {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(images/duel.png);
    width: 540px;
    height: 205px;
}

.slide {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;

    &.left {
        background-position: left center;
        background-image: url(images/p1.png);

    }

    &.right {
        background-position: right center;
        background-image: url(images/p2.png);

    }
}
</style>
