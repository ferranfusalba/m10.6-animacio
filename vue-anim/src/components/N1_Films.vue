<template>
  <div class="container-fluid">
    <div class="card m-3 text-center">
      <div class="container">
        <br>
        <Cerca></Cerca>
        <div class="mt-4"></div>
        <Films></Films>
        <div class="mb-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Cerca from "./Cerca.vue";
import Films from "./Films.vue";

export default {
  name: "App",
  components: {
    Cerca,
    Films
  },
};
</script>