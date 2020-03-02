<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <!-- First Name -->
    <v-text-field v-model="user.firstName" :counter="10" :rules="nameRules" label="First Name" required />
    <!-- Last Name -->
    <v-text-field v-model="user.lastName" :counter="10" :rules="nameRules" label="Last Name" required />
    <!-- Address -->
    <v-text-field v-model="user.address" label="Address" required />
    <!-- Address CP -->
    <v-text-field v-model="user.addressCP" label="Postal Code" required />
    <!-- Mail -->
    <v-text-field v-model="user.mail" :rules="emailRules" label="E-mail" required />
    <!-- Mobile -->
    <v-text-field v-model="user.mobileNumber" label="Mobile" :counter="12" required />
    <!-- Pole Emploi Number -->
    <v-text-field v-model="user.poleEmploiNumber" label="Pole emploi Id" required />
    <!-- Promos -->
    <v-select v-model="user.namePromo" :rules="getPromotionsNames(promos)" :items="promotions" label="Promo" required />
    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required />
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="createMember(user)">Validate</v-btn>
    <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
    <v-btn color="warning" @click="test()">Reset Validation</v-btn>
  </v-form>
</template>

<script>
  const moment = require('moment')
  import {
    addMember
  } from "../../services/api/member";
  export default {
    props: ["users", "promos"],
    data: () => ({
      valid: true,
      user: {
        firstName: "",
        lastName: "",
        address: "",
        addressCP: "",
        mail: "",
        mobileNumber: "",
        poleEmploiNumber: "",
        namePromo: "",
        presence: []
      },
      promotions: [],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      checkbox: false
    }),
    methods: {
      test() {
        for (const promo of this.promos) {
          if (this.user.namePromo.includes(promo.name)) {
            const start = moment(promo.start);
            const end = moment(promo.end);
            const total = end.diff(start, 'days');
            for (let i = 0; i < total; i++) {
              this.user.presence.push({"date":null, "check":-1, "hour":null});
            }
            break;
          }
        }
        console.log(this.user.presence)
        console.log(moment())
      },
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true;
        }
      },
      reset() {
        this.$refs.form.reset();
      },
      resetValidation() {
        this.$refs.form.resetValidation();
      },
      fillPresence() {
        console.log('dedans')
        
      },
      createMember(user) {
        for (const promo of this.promos) {
          if (this.user.namePromo.includes(promo.name)) {
            const start = moment(promo.start);
            const end = moment(promo.end);
            const total = end.diff(start, 'days');
            for (let i = 0; i < total; i++) {
              this.user.presence.push({"date":null, "check":-1, "hour":null});
            }
            break;
          }
        }
        addMember(
            user.firstName,
            user.lastName,
            user.mail,
            user.address,
            user.addressCP,
            user.mobileNumber,
            user.poleEmploiNumber,
            user.namePromo,
            this.user.presence
          )
          .then(() => {
            this.validate();
            user.firstName = "";
            user.lastName = "";
            user.mail = "";
            user.address = "";
            user.addressCP = "";
            user.mobileNumber = "";
            user.poleEmploiNumber = "";
            user.namePromo = "";
            user.presence = [];
          })
          .catch(error => {
            this.error = error;
          });
      },
      getPromotionsNames(promos) {
        for (const promo of promos) {
          if (this.promotions.includes(promo.name))
            break;
          else
            this.promotions.push(promo.name);
        }
      }
    }
  };
</script>

<style scoped>
  form {
    width: 50%;
    margin-left: 20%;
  }
</style>