<script setup lang="ts">
import { Alignment, PlayerType } from '../../globals/constants';

const { RIGHT, LEFT } = Alignment;
const props = withDefaults(
  defineProps<{
    type: PlayerType,
    amount: number;
    align: Alignment;
  }>(),
  { amount: 0 },
);
</script>

<template>
  <div class="wrapper" :class="{ right: props.align === RIGHT, left: props.align === LEFT }">
    <h4
      class="title animate__animated"
      :class="{
        you: props.type === PlayerType.YOU,
        foe: props.type === PlayerType.FOE,
        animate__slideInLeft: props.align === LEFT,
        animate__slideInRight: props.align === RIGHT,
      }">{{ props.type }}</h4>
    <ul class="wins">
      <li v-for="(star, index) in new Array(props.amount)" v-bind:key="`${type}${index}`" :style="{ right: `${index * 64}px` }" class="star animate__animated animate__zoomIn animate__faster">{{star}}</li>
    </ul>
  </div>

</template>

<style scoped lang="scss">

.wrapper {
    position: fixed;
    top: 3rem;
    z-index: 10000;
}

.left {
    text-align: left;
    left: 3rem;

    .title {
        background-position: left center;
    }

    .star {
        position: initial;
    }

    &.wins {
        position: initial;
    }
}

.right {
    text-align: right;
    right: 3rem;
    .title {
        background-position: right center;
    }

    .star {
        position: absolute;
        top: 60px;
    }

    &.wins {
        position: relative;
    }
}

.title {
    font-size: 0;
    height: 45px;
    width: 120px;
    background-repeat: no-repeat;
    margin-bottom: 1rem;
}

.you {
    background-image: url(/images/you.png);
}

.foe {
    background-image: url(/images/foe.png);
}

.wins {
    padding: 0;
    list-style: none;
}
.star {
    display: inline-block;
    font-size: 0;
    width: 64px;
    height: 64px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(/images/star.png);
}

</style>
