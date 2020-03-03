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
import LoginValidate from './components/LoginValidate'

Vue.use(Router)



/*let adminRedirection = '/present';
if (this.$store.state.isAdmin === true){
    adminRedirection = '/admin/manage'
}*/
const router =  new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/LoginValidate',
            name: 'LoginValidate',
            component: LoginValidate,
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
const test = 10;
router.beforeEach((to, from, next) => {
    if (test > 0) next('/login')
    else next()
  });

export default router;