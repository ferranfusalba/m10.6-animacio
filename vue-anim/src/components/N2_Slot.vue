<template>
  <div class="container-fluid">
    <div class="card m-3 text-center">
      <br />
      <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#modalCurrency"
            @click="message = ''"
          >
            Obrir modal
          </button>
      </div>
      
      <N2slotSon :euros="euro">
        <template v-slot:header>
          <h3 class="modal-title">Canvi de moneda</h3>
        </template>

        <template v-slot:body>
          <input type="number" v-model.number="euro" />
        </template>

        <template v-slot:footer>
          <button
            type="button"
            class="btn btn-primary"
            data-dismiss="modal"
            @click="message = 'Heu tancat el modal'"
          >
            Tancar
          </button>
        </template>
      </N2slotSon>
    
      <h3>
        <br />
        <div class="alert alert-light">
          {{ message }}
        </div>
      </h3>
    </div>
  </div>
</template>

<script>
import N2slotSon from "./N2slotSon.vue";

export default {
  name: "N2_Slot",
  data() {
    return {
      euro: "",
      message: "",
    };
  },
  components: {
    N2slotSon,
  },
};
</script>