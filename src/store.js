import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); 



const store = new Vuex.Store({ 
  state: {
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  },
})
export default store;