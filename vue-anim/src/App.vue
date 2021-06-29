<template>
  <div>
    <br />
    <div class="d-flex justify-content-center">
      <div @click="selectedComponent = 'One'" class="p-2 m-2 btn btn-success">
        Films
      </div>
      <div @click="selectedComponent = 'Two'" class="p-2 m-2 btn btn-success">
        Slot
      </div>
      <div @click="selectedComponent = 'Three'" class="p-2 m-2 btn btn-success">
        Form
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import One from "./components/N1_Films.vue";
import Two from "./components/N2_Slot.vue";
import Three from "./components/N3_Formulari.vue";

export default {
  components: { One, Two, Three },

  data() {
    return {
      selectedComponent: "One",
    };
  },
};
</script>