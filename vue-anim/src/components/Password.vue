<template>
  <div>
    <div class="form-group">
      <div>
        <label>{{ label2 }}</label>
        <input
          type="password"
          :id="idProp"
          class="form-control"
          v-model="valorModel1"
          @blur="validacioPassword()"
        />
        <Opacity01>
        <small>{{ descriptionProp3 }}</small>
        <br />
        <small id="whiteTransparent">{{ descriptionProp4 }}</small>
        </Opacity01>
      </div>

      <br />
      <div>
        <label>{{ label3 }}</label>
        <input
          type="password"
          :name="nameType"
          class="form-control"
          v-model="valorModel2"
          @blur="validacioPassword()"
        />
        <Opacity01>
        <small>{{ descriptionProp5 }}</small>
        <br />
        <small id="whiteTransparent">{{ descriptionProp6 }}</small>
        </Opacity01>
      </div>
    </div>
  </div>
</template>

<script>
import Opacity01 from './Animations/Opacity01.vue';

export default {
  name: "PasswordComponent",
  components: {
    Opacity01
  },
  props: [
    "label2",
    "label3",
    "idProp",
    "nameType",
    "descriptionProp3",
    "descriptionProp4",
    "descriptionProp5",
    "descriptionProp6",
  ],
  data() {
    return {
      valorModel1: "",
      valorModel2: "",
      validation: Boolean,
      objP: {
        id: this.idProp,
        name: this.nameType,
        value: "",
        valState: "",
      },
    };
  },
  watch: {
    valorModel1() {
      switch (this.label2) {
        case "Contrasenya":
          if (this.valorModel1.match(/^(?=.*?[A-Z])(?=.*?[a-z]).{6,13}$/)) {
            this.descriptionProp3 = "Vàlid!";
          } else if (this.valorModel1.match("")) {
            this.descriptionProp3 =
              "Ha de ser de 6-13 caràcters amb 1 majúscula i 1 minúscula.";
          } else {
            this.descriptionProp3 =
              "Ha de ser de 6-13 caràcters amb 1 majúscula i 1 minúscula.";
          }
          break;
        default:
          break;
      }
    },
    valorModel2() {
      switch (this.label3) {
        case "Repeteix la contrasenya":
          if (
            this.valorModel2 == this.valorModel1 &&
            this.valorModel2.match(/^(?=.*?[A-Z])(?=.*?[a-z]).{6,13}$/)
          ) {
            this.descriptionProp5 = "Vàlid!";
          } else if (this.valorModel2.match("")) {
            this.descriptionProp5 = "Les contrasenyes no coincideixen.";
          }
          break;
        default:
          break;
      }
    },
  },
  methods: {
    validacioPassword() {
      this.validation = "";

      switch (this.label2) {
        case "Contrasenya":
          if (this.valorModel1.match(/^(?=.*?[A-Z])(?=.*?[a-z]).{6,13}$/)) {
            this.validation = true;
            this.descriptionProp4 = this.validation;
            this.objP.valState = this.descriptionProp4;
            this.objP.value = this.valorModel1;
            this.validaIntern();
          } else {
            this.validation = false;
            this.descriptionProp4 = this.validation;
            this.objP.valState = this.descriptionProp4;
            this.validaIntern();
          }
          break;
      }

      switch (this.label3) {
        case "Repeteix la contrasenya":
          if (
            this.valorModel1 === this.valorModel2 &&
            this.valorModel2.match(/^(?=.*?[A-Z])(?=.*?[a-z]).{6,13}$/)
          ) {
            this.validation = true;
            this.descriptionProp6 = this.validation;
            this.objP.valState = this.descriptionProp6;
            this.objP.value = this.valorModel2;
            this.validaIntern();
          } else {
            this.validation = false;
            this.descriptionProp6 = this.validation;
            this.objP.valState = this.descriptionProp6;
            this.validaIntern();
          }
          break;

        default:
          break;
      }
    },
    validaIntern() {
      this.$emit(`enviaDades2`, this.objP);
    },
  },
};
</script>

<style>
#whiteTransparent {
  color: white;
}
</style>