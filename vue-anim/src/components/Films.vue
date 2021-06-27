<template>
  <div>
    <div
      class="row"
      v-if="getInput.length >= 3 || getInput.length == 0"
      key="key"
    >
      <div class="col-12">
        <div class="card mb-2" v-for="item in getFilms" :key="item.id">
          <SlideInLeft>
            <div
              v-if="item.available == true"
              class="card-header alert alert-success"
            >
              {{ item.title }}
              <p>Available: {{ item.available }}</p>
            </div>
            <div v-else class="card-header alert alert-danger">
              {{ item.title }}
              <p>Available: {{ item.available }}</p>
            </div>
          </SlideInLeft>
          <div class="card-body">
            <p class="card-text">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="getFilms.length == 0"
      class="alert alert-danger animate__animated animate__bounceInUp"
    >
      Ho sentim, no s'han trobat pel·lícules disponibles.
    </div>
    <div v-else-if="getInput.length >= 3 || getInput.length == 0"></div>
    <div v-else class="alert alert-info animate__animated animate__zoomIn">
      Has de fer una cerca de mínim 3 caràcters.
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SlideInLeft from "./Animations/SlideInLeft.vue";

export default {
  name: "Films",
  computed: {
    ...mapGetters(["getFilms", "getInput"]),
  },
  components: {
    SlideInLeft,
  },
};
</script>