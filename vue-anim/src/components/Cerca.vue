<template>
  <form>
    <div class="form-group">
      <RotateInDownLeft>
      <input
        type="text"
        class="form-control"
        id="search"
        placeholder="Cerca"
        v-model="input"
        @input="checkInput(input)"
      />
      </RotateInDownLeft>
    </div>
    <HeartBeat>
      <div>
        <input
        type="radio"
        class="form-check-input"
        id="available"
        value="available"
        v-model="seleccionat"
        @input="changeAv(seleccionat)"
      />
      <label class="form-check-label" for="available">Disponible</label>
      <br />
      <input
        type="radio"
        class="form-check-input"
        id="notAvailable"
        value="notAvailable"
        v-model="seleccionat"
        @input="changeAv(seleccionat)"
      />
      <label class="form-check-label" for="notAvailable">No disponible</label>
      <br />
      <input
        type="radio"
        class="form-check-input"
        id="all"
        value="all"
        v-model="seleccionat"
        @input="changeAv(seleccionat)"
      />
      <label class="form-check-label" for="all">Totes les pel·lícules</label>
      </div>
    </HeartBeat>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
import HeartBeat from './Animations/heartBeat.vue';
import RotateInDownLeft from './Animations/RotateInDownLeft.vue';

export default {
  name: "Search",
  methods: { ...mapMutations(["checkInput", "changeAv"]) },
  computed: {
    input: {
      get() {
        return this.$store.state.input;
      },
      set(value) {
        this.$store.commit("checkInput", value);
      },
    },
    seleccionat: {
      get() {
        return this.$store.state.disp;
      },
      set(value) {
        this.$store.commit("changeAv", value);
      },
    },
  },
  components: {
    HeartBeat,
    RotateInDownLeft
  }
};
</script>