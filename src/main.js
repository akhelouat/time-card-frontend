import Vue from 'vue'
import App from './App.vue'
import router from './route'
import VCalendar from 'v-calendar';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VCalendar);

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')