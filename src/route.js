import Vue from 'vue'
import Router from 'vue-router'
import Check from './components/CheckIn.vue'
import Login from './components/Login.vue'
import Pre from './components/Present.vue'
import NewPass from './components/NewPass.vue'
import PSheet from './components/PSheet.vue'
import AdminHomePage from './components/AdminHomePage'
import StatPromo from './components/StatPromo'
import Manager from './components/Manager'
import store from './store';

Vue.use(Router)

const router =  new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },
        //student path
        {
            path: '/check',
            name: 'check',
            component: Check
        },
        {
            path: '/present',
            name: 'present',
            component: Pre
        },
        {
            path: '/newpass',
            name: 'newpass',
            component: NewPass
        },
        {
            path: '/PSheet',
            name: 'psheet',
            component: PSheet
        },
        //admin path

        //redirect path
        {
            path: '/admin/home',
            name: 'adminhome',
            component: AdminHomePage
        },
        {
            path: '/admin/stat/promo',
            name: 'statpromo',
            component: StatPromo
        },
        {
            path: '/admin/manage',
            name: 'manager',
            component: Manager
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})


router.beforeEach((to, from, next) => {
    if(to.name === 'login') {
      return next()
        
    }
    if (store.state.user.logged) {
        next();
    }
    else
    next({
        name: 'login'
    });
  })

export default router