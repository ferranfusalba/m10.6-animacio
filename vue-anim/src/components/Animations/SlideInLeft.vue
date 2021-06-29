<template>
  <transition
    appear enter-active-class="animate__animated animate__slideInLeft rectangle"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.rectangle {
    animation-duration: 2.5s;
    width: 100%;
}
</style>