import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex); 

const defaultState = {
  user: {
    logged: false
  }
};

const mutations = {
  logUser(state, member) {
    state.defaultState.user = {
      logged: true,
      username: member.username,
      firstName: member.firstName,
      lastName: member.lastName,
      isAdmin: member.isAdmin,
      namePromo: member.namePromo
    }
  }
};


const store = new Vuex.Store({ 
  state: {
    defaultState,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  },
  mutations
})
export default store;