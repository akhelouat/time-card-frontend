import Vue from 'vue'
import Router from 'vue-router'
import Check from './components/CheckIn.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/check',
            name: 'check',
            component: Check
        }
    ]
})