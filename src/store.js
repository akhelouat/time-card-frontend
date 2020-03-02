import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); 

const defaultState = {
};

const store = new Vuex.Store({ 
  state: defaultState
});

export default store;