<template>
  <transition
    appear enter-active-class="animate__animated animate__fadeInUp my-element"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.my-element {
  --animate-duration: 10s;
}
</style>