<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        play: Function
    }>(),
    { play: () => { } },
);

props.play();

</script>

<template>
    <h5 class="wait animate__animated animate__fadeInDown">
        Waiting for players...
    </h5>
</template>

<style scoped lang="scss">
.wait {
    left: 0;
    z-index: 100;
    text-align: center;
    width: 100%;
    position: fixed;
    top: 0px;
    color: white;
    font-family: 'Wellfleet', cursive;
    font-size: 1.75rem;
    line-height: 1;
    text-shadow: 3px 0 0 black, -3px 0 0 black, 0 3px 0 black, 0 -3px 0 black;
}
</style>