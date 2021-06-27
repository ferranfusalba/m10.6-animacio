<template>
  <div>
    <div class="form-group">
      <label>{{ labelProp }}</label>
      <input
        :type="typeProp"
        :id="idProp"
        class="form-control"
        v-model="valorModel"
        @blur="validacioBase()"
      />
      <small>{{ descriptionProp }}</small>
      <br />
      <small>{{ descriptionProp2 }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "Base",
  props: [
    "labelProp",
    "typeProp",
    "idProp",
    "descriptionProp",
    "descriptionProp2",
  ],
  data() {
    return {
      valorModel: "",
      validation: Boolean,
      objB: {
        id: this.idProp,
        value: "",
      },
    };
  },
  watch: {
    valorModel() {
      switch (this.labelProp) {
        case "Nom":
          if (this.valorModel.match(/^[A-ZÇÑa-zçñ]{6,13}$/)) {
            this.descriptionProp = "Vàlid!";
          } else if (this.valorModel.match("")) {
            this.descriptionProp = "El nom ha de ser d'entre 6 i 13 lletres.";
          } else {
            this.descriptionProp = "El nom ha de ser d'entre 6 i 13 lletres.";
          }
          break;
        case "Telèfon mòbil":
          if (this.valorModel.length === 9) {
            this.descriptionProp = "Vàlid!";
          } else if (this.valorModel.length != 9) {
            this.descriptionProp = "El telèfon sols pot contenir 9 xifres.";
          } else {
            this.descriptionProp = "El telèfon sols pot contenir 9 xifres.";
          }
          break;
        case "Codi Postal":
          if (this.valorModel.length === 5) {
            this.descriptionProp = "Vàlid!";
          } else if (this.valorModel.length != 5) {
            this.descriptionProp = "El codi postal sols pot contenir 5 xifres.";
          } else {
            this.descriptionProp = "El codi postal sols pot contenir 5 xifres.";
          }
          break;
        case "Correu electrònic":
          if (
            this.valorModel.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
          ) {
            this.descriptionProp = "Vàlid!";
          } else if (this.valorModel.match("")) {
            this.descriptionProp =
              "El format de correu electrònic no és vàlid.";
          } else {
            this.descriptionProp =
              "El format de correu electrònic no és vàlid.";
          }
          break;
        case "Contrasenya":
          if (this.valorModel.match(/^(?=.*?[A-Z])(?=.*?[a-z]).{6,13}$/)) {
            this.descriptionProp = "Vàlid!";
          } else if (this.valorModel.match("")) {
            this.descriptionProp =
              "Ha de ser de 6-13 caràcters amb 1 majúscula i 1 minúscula.";
          } else {
            this.descriptionProp =
              "Ha de ser de 6-13 caràcters amb 1 majúscula i 1 minúscula.";
          }
          break;
        case "Repeteix la contrasenya":
          if (this.valorModel.match(/^(?=.*?[A-Z])(?=.*?[a-z]).{6,13}$/)) {
            this.descriptionProp = "Vàlid!";
          } else if (this.valorModel.match("")) {
            this.descriptionProp = "Les contrasenyes no coincideixen.";
          }
          break;
        default:
          break;
      }
    },
  },
  methods: {
    validacioBase() {
      this.validation = "";

      switch (this.labelProp) {
        case "Nom":
          if (this.valorModel.match(/^[A-ZÇÑa-zçñ]{6,13}$/)) {
            this.validation = true; //dato boolean
            this.descriptionProp2 = this.validation; //dato boolean en pantalla (oculto)
            this.objB.value = this.valorModel; //dato input en objeto
            this.validaIntern(); //enviar datos al padre
          } else {
            this.validation = false;
            this.descriptionProp2 = this.validation;
          }
          break;
        case "Telèfon mòbil":
          if (this.valorModel.length === 9) {
            this.validation = true;
            this.descriptionProp2 = this.validation;
            this.objB.value = this.valorModel;
            this.validaIntern();
          } else {
            this.validation = false;
            this.descriptionProp2 = this.validation;
          }
          break;
        case "Codi Postal":
          if (this.valorModel.length === 5) {
            this.validation = true;
            this.descriptionProp2 = this.validation;
            this.objB.value = this.valorModel;
            this.validaIntern();
          } else {
            this.validation = false;
            this.descriptionProp2 = this.validation;
          }
          break;
        case "Correu electrònic":
          if (
            this.valorModel.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
          ) {
            this.validation = true;
            this.descriptionProp2 = this.validation;
            this.objB.value = this.valorModel;
            this.validaIntern();
          } else if (this.valorModel.match("")) {
            this.validation = false;
            this.descriptionProp2 = this.validation;
          }

          break;
        default:
          break;
      }
    },
    validaIntern() {
      this.$emit(`enviaDades`, this.objB);
    },
  },
};
</script>

<style>
#whiteTransparent {
  color: white;
}
</style>