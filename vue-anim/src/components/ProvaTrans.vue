<template>
  <div>
    <div id="example-1">
      <div class="d-flex justify-content-center">
        <div id="rectangle"></div>
      </div>
      <br />

      <!-- <button @click="show = !show">Mostrar/Ocultar</button>
      <transition name="slide-fade">
        <p v-if="show">hola</p>
      </transition> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProvaTrans",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
#rectangle {
  width: 200px;
  height: 100px;
  background-color: orange;
}

.slide-fade-enter-active {
  transition: all 1s ease;
  background-color: orange;
}
.slide-fade-leave-active {
  transition: all 1s ease;
  background-color: orange;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  background-color: orange;
}
</style>