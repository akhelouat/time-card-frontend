import Vue from 'vue'
import App from './App.vue'
import router from './route'
import VCalendar from 'v-calendar';
import vuetify from './plugins/vuetify';
import store from "./store";

Vue.config.productionTip = false

Vue.use(VCalendar);

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')