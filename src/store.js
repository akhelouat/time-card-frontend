import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const defaultState = {
    user: {
        logged: false
    },
};

const mutations = {
    logUser(state, member) {
        state.user = {
            logged: true,
            _id: member._id,
            username: member.username,
            firstName: member.firstName,
            lastName: member.lastName,
            isAdmin: member.isAdmin,
            mail: member.mail,
            namePromo: member.namePromo,
            isSigned: member.isSigned
        }
    }
};


const store = new Vuex.Store({
    state: defaultState,
    mutations
})
export default store;