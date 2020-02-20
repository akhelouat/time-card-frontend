import Vue from 'vue'
import Router from 'vue-router'
import Check from './components/CheckIn.vue'
import Login from './components/Login.vue'
import Pre from './components/Present.vue'
import NewPass from './components/NewPass.vue'
import PSheet from './components/PSheet.vue'
import AdminHomePage from './components/AdminHomePage'
import CreatePromoPage from './components/CreatePromoPage'
import ManagePromoPage from './components/ManagePromoPage'
import CreateUserPage from './components/CreateUserPage'
import ManageUserPage from './components/ManageUserPage'

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
        {
            path: '/admin/home',
            name: 'adminhome',
            component: AdminHomePage
        },
        {
            path: '/admin/create/promo',
            name: 'createpromo',
            component: CreatePromoPage
        },
        {
            path: '/admin/manage/promo',
            name: 'managepromo',
            component: ManagePromoPage
        },
        {
            path: '/admin/create/user',
            name: 'createuser',
            component: CreateUserPage
        },
        {
            path: '/admin/manage/user',
            name: 'manageuser',
            component: ManageUserPage
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})