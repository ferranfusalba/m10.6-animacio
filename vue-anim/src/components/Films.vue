<template>
  <div>
    <div
      class="row"
      v-if="getInput.length >= 3 || getInput.length == 0"
      key="key"
    >
      <div class="col-12">
        <div class="border mb-2" v-for="item in getFilms" :key="item.id">
          <SlideInLeft>
            <div
              v-if="item.available == true"
              class="card-header bg-white alert mb-0 mt-0 pb-0 pt-0"
            >
              <div class="row">
                <div class="col-9 alert alert-secondary border-0">
                  {{ item.title }}
                  <br>
                  Available: {{ item.available }}
                </div>
                <div class="col-3 alert alert-success border-0"></div>
              </div>
            </div>
            <div v-else class="card-header bg-white alert mb-0 mt-0 pb-0 pt-0">
              <div class="row">
                <div class="col-9 alert alert-secondary border-0">
                  {{ item.title }}
                  <br>
                  Available: {{ item.available }}
                </div>
                <div class="col-3 alert alert-danger border-0"></div>
              </div>
            </div>
          </SlideInLeft>
          <div class="card-body">
              {{ item.description }}
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