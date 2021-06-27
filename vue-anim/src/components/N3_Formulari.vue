<template>
  <div class="container-fluid">
    <div class="card m-3 text-center">
      <div class="container">
        <div class="row">
          <div class="col-4"></div>
          <div class="col-4">
            <br />
            <form @submit.prevent>
              <Base
                :labelProp="'Nom'"
                :typeProp="'text'"
                :idProp="'idName'"
                @enviaDades="validaCamps"
                :descriptionProp="'Camp obligatori'"
                :descriptionProp2="'Estat validació (boolean)'"
              ></Base>
              <br />
              <Base
                :labelProp="'Telèfon mòbil'"
                :typeProp="'number'"
                :idProp="'idTlf'"
                @enviaDades="validaCamps"
                :descriptionProp="'Camp obligatori'"
                :descriptionProp2="'Estat validació (boolean)'"
              ></Base>
              <br />
              <Base
                :labelProp="'Codi Postal'"
                :typeProp="'number'"
                :idProp="'idZip'"
                @enviaDades="validaCamps"
                :descriptionProp="'Camp obligatori'"
                :descriptionProp2="'Estat validació (boolean)'"
              ></Base>
              <br />
              <Base
                :labelProp="'Correu electrònic'"
                :typeProp="'email'"
                :idProp="'idEmail'"
                @enviaDades="validaCamps"
                :descriptionProp="'Camp obligatori'"
                :descriptionProp2="'Estat validació (boolean)'"
              ></Base>
              <br />
              <Password
                :label2="'Contrasenya'"
                :label3="'Repeteix la contrasenya'"
                :idProp="'idPass'"
                :nameType="'Cont2'"
                @enviaDades2="validaCamps2"
                :descriptionProp3="'Camp obligatori'"
                :descriptionProp4="'Estat validació (boolean)'"
                :descriptionProp5="'Camp obligatori'"
                :descriptionProp6="'Estat validació (boolean)'"
              ></Password>
              <br />
              <div>
                <button
                  type="submit"
                  class="btn btn-success btn-lg mt-2 mb-4"
                  @click="mostraValors"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from "./Base.vue";
import Password from "./Password.vue";

export default {
  name: "Formulari",
  components: {
    Base,
    Password,
  },
  data() {
    return {
      user: {
        name: "",
        tlf: "",
        zip: "",
        email: "",
      },
      userPw: {
        password: "",
        cont2: "",
      },
      userReg: "",
    };
  },
  methods: {
    validaCamps(value) {
      switch (value.id) {
        case "idName":
          this.user.name = value.value;
          break;
        case "idTlf":
          this.user.tlf = value.value;
          break;
        case "idZip":
          this.user.zip = value.value;
          break;
        case "idEmail":
          this.user.email = value.value;
          break;
        default:
          break;
      }
    },
    validaCamps2(value) {
      switch (value.id) {
        case "idPass":
          this.userPw.password = value.value;
          break;
      }
      switch (value.name) {
        case "Cont2":
          this.userPw.cont2 = value.valState;
          break;
      }
    },
    mostraValors() {
      this.userReg = "";

      if (
        this.user.name &&
        this.user.tlf &&
        this.user.zip &&
        this.user.email &&
        this.userPw.password &&
        this.userPw.cont2 == true
      ) {
        alert(`Dades enviades correctament:
        Nom: ${this.user.name}
        Telèfon: ${this.user.tlf}
        Codi Postal: ${this.user.zip}
        Correu electrònic: ${this.user.email}
        Contrasenya: ${this.userPw.password}
        Estat repetició contrasenya: ${this.userPw.cont2}
        En acceptar, la pàgina tornarà a l'inici.
        `);
        location.reload();
      } else {
        alert("No tots els camps han estat omplerts. Si us plau, revisa'ls.");
      }
    },
  },
};
</script>